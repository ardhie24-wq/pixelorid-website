'use client'

import { useState } from 'react'

const DRIVE_FOLDER_URL =
  'https://drive.google.com/drive/folders/1cq6j-cRKY2z7wzEmUyt0iUitGVS6OU7f?usp=sharing'

const GREEN = '#16a34a'

export default function FreeTemplateButton() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('') // honeypot anti-spam
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
        body: JSON.stringify({ name, email, company }),
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
              ×
            </button>

            {status === 'done' ? (
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Thank you!</h3>
                <p style={{ color: '#4b5563', marginTop: 10 }}>
                  Your free templates are ready. Click the button below to open the download folder.
                </p>
                <a
                  href={DRIVE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: 12,
                    padding: '14px 24px',
                    borderRadius: 8,
                    background: GREEN,
                    color: '#fff',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  Open Free Templates
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Get Free Templates</h3>
                <p style={{ color: '#4b5563', marginTop: 10, marginBottom: 18 }}>
                  Enter your name and email to access the free download folder.
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