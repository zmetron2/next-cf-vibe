export const runtime = 'edge';

import React from 'react';

export default function HomePage() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>엘쯔의 바이브코딩</h1>
      <p>서버가 정상적으로 작동 중입니다! (진단 모드)</p>
      <hr style={{ margin: '20px 0' }} />
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <a href="/curriculum">커리큘럼</a>
        <a href="/practice">기능실습</a>
        <a href="/api/vibe">API 테스트</a>
      </div>
    </div>
  );
}
