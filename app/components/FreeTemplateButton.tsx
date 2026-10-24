'use client'

import { useState } from 'react'
import { CONSENT_TEXT } from '../lib/consent'

const GREEN = '#16a34a'

export default function FreeTemplateButton() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('') // honeypot anti-spam
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/free-template', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, consent }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setStatus('done')
    } catch (err) {
      setStatus('idle')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  function close() {
    setOpen(false)
    setStatus('idle')
    setError('')
  }

  const input: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #d1d5db',
    borderRadius: 8,
    fontSize: 15,
    boxSizing: 'border-box',
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          height: 48, padding: '0 24px', borderRadius: 12,
          border: `1px solid ${GREEN}`,
          background: '#fff',
          color: GREEN,
          fontWeight: 600,
          fontSize: 15,
          cursor: 'pointer',
        }}
      >
        Free Template Download
      </button>

      {open && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: 28,
              width: '92%',
              maxWidth: 420,
              position: 'relative',
            }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: 12,
                right: 16,
                border: 'none',
                background: 'none',
                fontSize: 24,
                cursor: 'pointer',
                color: '#6b7280',
              }}
            >
              &times;
            </button>

            {status === 'done' ? (
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Check your email</h3>
                <p style={{ color: '#4b5563', marginTop: 10 }}>
                  We sent a confirmation link to {email}. Click it to open your free templates.
                  If you do not see it within a few minutes, check your spam folder.
                </p>
                <button
                  type="button"
                  onClick={close}
                  style={{
                    marginTop: 12,
                    padding: '14px 24px',
                    borderRadius: 8,
                    border: 'none',
                    background: GREEN,
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: 'pointer',
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Get Free Templates</h3>
                <p style={{ color: '#4b5563', marginTop: 10, marginBottom: 18 }}>
                  Enter your name and email. We will send you a link to confirm your email and open the download folder.
                </p>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{ ...input, marginBottom: 12 }}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={input}
                />
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
                  aria-hidden="true"
                />
                <label
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    marginTop: 14,
                    fontSize: 13,
                    color: '#4b5563',
                    lineHeight: 1.4,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    style={{ marginTop: 2 }}
                  />
                  <span>
                    {CONSENT_TEXT}{' '}
                    <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: GREEN }}>
                      Privacy Policy
                    </a>
                  </span>
                </label>
                {error && (
                  <p style={{ color: '#dc2626', fontSize: 14, marginTop: 10 }}>{error}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    width: '100%',
                    marginTop: 16,
                    padding: '14px 24px',
                    borderRadius: 8,
                    border: 'none',
                    background: GREEN,
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: 'pointer',
                    opacity: status === 'loading' ? 0.7 : 1,
                  }}
                >
                  {status === 'loading' ? 'Sending...' : 'Get Free Templates'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}