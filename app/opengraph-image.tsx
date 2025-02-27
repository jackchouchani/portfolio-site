import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const revalidate = 3600 // 1 heure

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'white',
          background: 'linear-gradient(to bottom right, #3B82F6, #8B5CF6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <svg width="80" height="80" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="192" height="192" rx="24" fill="white" fillOpacity="0.1"/>
            <path d="M96 37.5L40 68.75V131.25L96 162.5L152 131.25V68.75L96 37.5Z" stroke="white" strokeWidth="8"/>
            <path d="M96 37.5V162.5" stroke="white" strokeWidth="8"/>
            <path d="M40 68.75L152 68.75" stroke="white" strokeWidth="8"/>
            <path d="M40 131.25L152 131.25" stroke="white" strokeWidth="8"/>
          </svg>
          <div style={{ fontSize: 50, fontWeight: 'bold', marginLeft: '15px' }}>Web Wizardry</div>
        </div>
        <div style={{ fontWeight: 'bold', fontSize: 50, marginBottom: '10px' }}>
          Développement Web Moderne & Abordable
        </div>
        <div style={{ fontSize: 30, opacity: 0.9 }}>
          Sites rapides, élégants et pas chers
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
} 