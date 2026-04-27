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

## 🚀 CI/CD Flow
- 빌드 결과물: `.next` 디렉토리를 `next-on-pages`로 변환하여 배포.
- 브랜치: `master` 브랜치가 프로덕션 배포 기준입니다.
