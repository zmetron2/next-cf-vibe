# 🤖 Cloudflare Vibe Management (AGENTS.md)

이 파일은 이 프로젝트의 Cloudflare 인프라 연결 상태와 관리 규칙을 정의합니다.

## ☁️ Cloudflare Resources
- **Project Name**: `next-cf-vibe`
- **Domain**: `https://next-cf-vibe.pages.dev`
- **D1 Database**: `vibe-db` (`7198806d-f710-44d2-866e-d5cbcc5a5619`)
- **R2 Bucket**: `vibe-storage` (현재 대시보드 활성화 대기 중)

## 🛠 Management Rules
1. **Edge Runtime First**: 모든 API와 서버 로직은 `export const runtime = 'edge';`를 포함해야 합니다.
2. **Binding Usage**: `getRequestContext()`를 통해 `env.DB`와 `env.BUCKET`에 접근합니다.
3. **Local Dev**: Windows 환경에서는 `npm run dev`(포트 3000)와 `npm run pages:dev`(포트 8788 프록시)를 동시에 실행하여 개발합니다.
4. **Deploy**: `npm run pages:deploy`로 빌드 후 즉시 배포합니다.

## 📏 Coding Rules (Prevent Recurring Issues)
1. **Type Safety**: `any` 타입 사용을 절대 금지합니다. 컴포넌트 Props나 아이콘 전달 시 `React.ElementType`, `Record<string, string>` 등 구체적인 타입을 명시해야 합니다.
2. **Import Hygiene**: 사용하지 않는 임포트는 코드 수정 즉시 제거합니다. ESLint 경고(`defined but never used`)는 빌드 실패의 원인이 되므로 방치하지 않습니다.
3. **Icon Reliability**: `Github`, `Moon`, `Hash` 등 `lucide-react`에서 버전별로 export 명칭이 다르거나 누락될 가능성이 있는 아이콘은 안전을 위해 **커스텀 SVG 컴포넌트**로 구현하여 사용합니다.
4. **Tag Integrity**: `replace_file_content`로 코드 수정 시, `<Link>`나 `<div>` 등 열린 태그와 닫힌 태그의 짝이 맞는지 반드시 재검토합니다.
5. **SEO & Accessibility**: 모든 페이지에는 적절한 `Title`, `Meta Description`, `Semantic HTML`을 적용하고 인터랙티브 요소에는 유니크한 `id`를 부여합니다.

## 🚀 CI/CD Flow
- 빌드 결과물: `.next` 디렉토리를 `next-on-pages`로 변환하여 배포.
- 브랜치: `master` 브랜치가 프로덕션 배포 기준입니다.
