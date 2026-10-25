export type UnitFamily = 'mass' | 'volume' | 'count'
export type UnitId = 'g' | 'kg' | 'oz' | 'lb' | 'ml' | 'l' | 'floz' | 'tsp' | 'tbsp' | 'cup' | 'pc'

export const UNITS: { id: UnitId; label: string; family: UnitFamily; factor: number }[] = [
  { id: 'g', label: 'g', family: 'mass', factor: 1 },
  { id: 'kg', label: 'kg', family: 'mass', factor: 1000 },
  { id: 'oz', label: 'oz (weight)', family: 'mass', factor: 28.3495 },
  { id: 'lb', label: 'lb', family: 'mass', factor: 453.592 },
  { id: 'ml', label: 'ml', family: 'volume', factor: 1 },
  { id: 'l', label: 'l', family: 'volume', factor: 1000 },
  { id: 'floz', label: 'fl oz', family: 'volume', factor: 29.5735 },
  { id: 'tsp', label: 'tsp', family: 'volume', factor: 4.92892 },
  { id: 'tbsp', label: 'tbsp', family: 'volume', factor: 14.7868 },
  { id: 'cup', label: 'cup (US)', family: 'volume', factor: 236.588 },
  { id: 'pc', label: 'piece', family: 'count', factor: 1 },
]

export { CURRENCY_CODES as CURRENCIES } from './currencies'

export type IngredientRow = {
  id: string
  name: string
  packPrice: string
  packSize: string
  packUnit: UnitId
  usedQty: string
  usedUnit: UnitId
}

export type CalcState = {
  menuName: string
  currency: string
  portions: string
  otherCost: string
  sellingPrice: string
  targetPct: string
  rows: IngredientRow[]
}

const unitOf = (id: UnitId) => UNITS.find((u) => u.id === id) ?? UNITS[0]
export const familyOf = (id: UnitId): UnitFamily => unitOf(id).family
export const unitLabel = (id: UnitId) => unitOf(id).label

export const newRow = (id: string): IngredientRow => ({
  id,
  name: '',
  packPrice: '',
  packSize: '',
  packUnit: 'g',
  usedQty: '',
  usedUnit: 'g',
})

export const DEFAULT_STATE: CalcState = {
  menuName: 'Chicken burger',
  currency: 'USD',
  portions: '10',
  otherCost: '0.35',
  sellingPrice: '9.50',
  targetPct: '30',
  rows: [
    { id: 'r1', name: 'Chicken breast', packPrice: '18', packSize: '5', packUnit: 'lb', usedQty: '1500', usedUnit: 'g' },
    { id: 'r2', name: 'Burger buns', packPrice: '6', packSize: '12', packUnit: 'pc', usedQty: '10', usedUnit: 'pc' },
    { id: 'r3', name: 'Cheddar cheese', packPrice: '4.5', packSize: '250', packUnit: 'g', usedQty: '150', usedUnit: 'g' },
    { id: 'r4', name: 'Lettuce', packPrice: '2', packSize: '500', packUnit: 'g', usedQty: '100', usedUnit: 'g' },
    { id: 'r5', name: 'Mayonnaise', packPrice: '3.8', packSize: '500', packUnit: 'ml', usedQty: '6', usedUnit: 'tbsp' },
  ],
}

export const blankState = (): CalcState => ({
  menuName: '',
  currency: 'USD',
  portions: '',
  otherCost: '',
  sellingPrice: '',
  targetPct: '30',
  rows: [newRow('r1')],
})

export function num(s: string): number {
  const n = parseFloat(s)
  return Number.isFinite(n) && n > 0 ? n : 0
}

export type RowResult = { cost: number; error: string | null }

export function rowResult(r: IngredientRow): RowResult {
  const hasContent = r.name.trim() !== '' || r.packPrice !== '' || r.packSize !== '' || r.usedQty !== ''
  if (!hasContent) return { cost: 0, error: null }
  const price = num(r.packPrice)
  const size = num(r.packSize)
  const used = num(r.usedQty)
  if (!price || !size || !used) return { cost: 0, error: 'Fill in pack price, pack size and amount used' }
  const pu = unitOf(r.packUnit)
  const uu = unitOf(r.usedUnit)
  if (pu.family !== uu.family) return { cost: 0, error: 'Units do not match (weight, volume and pieces cannot be mixed)' }
  return { cost: (price * used * uu.factor) / (size * pu.factor), error: null }
}

export function computeSummary(s: CalcState) {
  const results = s.rows.map(rowResult)
  const recipeCost = results.reduce((a, r) => a + r.cost, 0)
  const problems = results.filter((r) => r.error).length
  const portions = num(s.portions)
  const otherCost = num(s.otherCost)
  const price = num(s.sellingPrice)
  const targetPct = num(s.targetPct)
  const costPerPortion = portions > 0 ? recipeCost / portions : null
  const totalPerPortion = costPerPortion === null ? null : costPerPortion + otherCost
  const foodCostPct = totalPerPortion !== null && price > 0 ? (totalPerPortion / price) * 100 : null
  const marginAmount = totalPerPortion !== null && price > 0 ? price - totalPerPortion : null
  const marginPct = marginAmount !== null && price > 0 ? (marginAmount / price) * 100 : null
  const suggestedPrice = totalPerPortion !== null && targetPct > 0 ? totalPerPortion / (targetPct / 100) : null
  return {
    results,
    recipeCost,
    problems,
    portions,
    otherCost,
    price,
    targetPct,
    costPerPortion,
    totalPerPortion,
    foodCostPct,
    marginAmount,
    marginPct,
    suggestedPrice,
  }
}

export function formatMoney(v: number, currency: string, asCode = false): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    currencyDisplay: asCode ? 'code' : 'symbol',
  })
    .format(v)
    .replace(/\u00a0/g, ' ')
}

export const formatPct = (v: number) => `${v.toFixed(1)}%`