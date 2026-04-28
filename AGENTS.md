# 🤖 Cloudflare Vibe Management (AGENTS.md) - Updated at 2026-04-28

이 파일은 이 프로젝트의 Cloudflare 인프라 연결 상태와 관리 규칙을 정의합니다.

## ☁️ Cloudflare Resources
- **Project Name**: `zmetron-study`
- **Domain**: `https://zmetron-study.pages.dev` 및 `https://vibe.ljj.kr`
- **D1 Database**: `vibe-db` (`7198806d-f710-44d2-866e-d5cbcc5a5619`)
- **R2 Bucket**: `vibe-storage` (현재 대시보드 활성화 대기 중)

## 🛠 Management Rules
1. **Edge Runtime First**: 모든 API와 서버 로직은 `export const runtime = 'edge';`를 포함해야 합니다.
2. **Binding Usage**: `getRequestContext()`를 통해 `env.DB`와 `env.BUCKET`에 접근합니다.
3. **Local Dev**: Windows 환경에서는 `npm run dev`(포트 3000)와 `npm run pages:dev`(포트 8788 프록시)를 동시에 실행하며, 프록시 설정 시 호스트 해석 오류 방지를 위해 `http://127.0.0.1:3000` 전체 주소를 사용합니다.
4. **Deploy**: `npm run pages:deploy`로 빌드 후 즉시 배포합니다.

## 📏 Coding Rules (Prevent Recurring Issues)
1. **Type Safety**: `any` 타입 사용을 절대 금지합니다. 특히 `request.json()`이나 `response.json()` 등 외부 데이터 수신 시 TypeScript의 `unknown` 추론으로 인한 빌드 실패를 방지하기 위해 반드시 **명시적인 Interface 정의 및 타입 캐스팅**을 수행해야 합니다.
2. **Import Hygiene**: 사용하지 않는 임포트는 코드 수정 즉시 제거합니다. ESLint 경고(`defined but never used`)는 빌드 실패의 원인이 되므로 방치하지 않습니다.
3. **Icon Reliability**: `Github`, `Moon`, `Hash` 등 `lucide-react`에서 버전별로 export 명칭이 다르거나 누락될 가능성이 있는 아이콘은 안전을 위해 **커스텀 SVG 컴포넌트**로 구현하여 사용합니다. (단, 에지 런타임 문제가 해결된 경우 Lucide를 사용할 수 있으나 안정성을 우선함)
4. **Tag Integrity**: `replace_file_content`로 코드 수정 시, `<Link>`나 `<div>` 등 열린 태그와 닫힌 태그의 짝이 맞는지 반드시 재검토합니다.
5. **SEO & Accessibility**: 모든 페이지에는 적절한 `Title`, `Meta Description`, `Semantic HTML`을 적용하고 인터랙티브 요소에는 유니크한 `id`를 부여합니다.
6. **Image Optimization**: 모든 이미지는 표준 `<img>` 태그 대신 Next.js의 `<Image />` 컴포넌트를 사용하여 최적화합니다.
7. **CSS & Theme Management (Tailwind v3 Only)**:
   - **Version Lock**: Cloudflare 빌드 서버와의 원어민(Native) 라이브러리 충돌 방지를 위해 **Tailwind CSS v3**를 고수합니다. (v4는 실험적 환경에서만 사용)
   - **Semantic Classes**: 하드코딩된 색상 대신 테마 변수를 활용한 시맨틱 클래스(`bg-background`, `bg-card`, `border-border` 등)를 우선적으로 사용합니다.
8. **Cloudflare Edge & Runtime Stability (CRITICAL)**:
   - **Runtime Selective Use**: `export const runtime = 'edge';`는 API Route나 실시간 DB 접근이 필요한 페이지에만 제한적으로 사용합니다. 일반 정적/홍보 페이지에는 사용을 지양하여 500 Internal Server Error를 방지합니다.
   - **Build Output Dir**: `next-on-pages` 결과물 경로는 반드시 `.vercel/output`이어야 하며, 대시보드 설정에서 `.vercel/output/static`으로 고정되어 Worker가 누락되지 않는지 상시 확인합니다.
   - **Build Resilience**: 사소한 린트/타입 에러가 배포를 막지 않도록 `next.config.ts`의 `ignoreDuringBuilds` 설정을 활성화 상태로 유지합니다.

## 🚀 CI/CD Flow
- 빌드 결과물: `.next` 디렉토리를 `next-on-pages`로 변환하여 배포.
- 브랜치: `master` 브랜치가 프로덕션 배포 기준입니다.
