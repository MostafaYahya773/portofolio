import { ImageResponse } from 'next/og';

export const alt = 'Mostafa Yahya — Frontend Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 90, background: '#0a0e1a', color: '#dae2fd' }}>
      <div style={{ fontSize: 26, color: '#44e2cd', letterSpacing: 6 }}>FRONTEND DEVELOPER</div>
      <div style={{ fontSize: 88, marginTop: 30, fontWeight: 700 }}>Mostafa Yahya</div>
      <div style={{ fontSize: 32, marginTop: 30, color: '#c0c1ff' }}>React · Next.js · TypeScript · Supabase</div>
      <div style={{ fontSize: 24, marginTop: 50 }}>Cairo, Egypt · Available for remote collaboration</div>
    </div>, size,
  );
}
