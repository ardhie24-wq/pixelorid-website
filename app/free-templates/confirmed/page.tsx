import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email confirmed | Pixelorid',
  robots: { index: false, follow: false },
}

const DRIVE_FOLDER_URL =
  'https://drive.google.com/drive/folders/1cq6j-cRKY2z7wzEmUyt0iUitGVS6OU7f?usp=sharing'

const GREEN = '#16a34a'

export default function FreeTemplatesConfirmed() {
  return (
    <main style={{ maxWidth: 480, margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Email confirmed</h1>
      <p style={{ color: '#4b5563', marginTop: 12 }}>
        Thank you! Your email is confirmed and your free templates are ready.
      </p>
      <a
        href={DRIVE_FOLDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: 16,
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
    </main>
  )
}