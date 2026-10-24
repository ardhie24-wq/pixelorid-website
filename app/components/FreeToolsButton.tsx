import Link from 'next/link'

const GREEN = '#16a34a'

export default function FreeToolsButton() {
  return (
    <Link
      href="/tools"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        padding: '0 24px',
        borderRadius: 12,
        border: `1px solid ${GREEN}`,
        background: '#fff',
        color: GREEN,
        fontWeight: 600,
        fontSize: 15,
        textDecoration: 'none',
      }}
    >
      Free Tools
    </Link>
  )
}