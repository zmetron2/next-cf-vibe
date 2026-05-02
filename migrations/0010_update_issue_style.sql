UPDATE vibe_resources
SET description = '## 이슈 요약

로컬 Windows 환경에서 `npm run pages:deploy` (next-on-pages) 배포 시 `npx ENOENT` 및 `bash ENOENT` 에러가 발생하며, 이로 인해 Cloudflare Pages에 `_worker.js`가 정상적으로 묶이지 않아 API 및 동적 라우트가 "404 Not Found"를 반환하는 치명적 현상.

---

## 원인 분석

### 원인 1: Vercel CLI의 Windows 경로 호환성
`@cloudflare/next-on-pages`는 내부적으로 Vercel CLI를 사용하여 빌드하는데, Windows 환경에서는 리눅스 명령어(`bash`)나 `npx`를 `child_process.spawn`으로 호출할 때 PATH 호환성 문제로 예외가 발생함.

### 원인 2: 워커 스크립트 빌드 누락
로컬에서 강제로 CLI 배포를 진행할 경우 워커 스크립트(`_worker.js`)가 생성되지 않고 정적 에셋(`.html`, `.css` 등)만 배포되어, 서버리스 기능(API 라우트, DB 통신 등)이 전부 작동하지 않는 404 상태가 됨.

---

## 대처법 (적용 완료)

1. 로컬 컴퓨터(Windows)에서 강제로 CLI 배포를 수행하는 방식을 중단합니다.
2. Cloudflare Pages의 GitHub 연동 자동 배포 (CI/CD) 를 활용합니다. 코드를 `master` 브랜치에 Push하면, Cloudflare의 자체 리눅스 빌드 서버가 자동으로 `next-on-pages` 빌드 및 배포를 수행하여 Windows 호환성 문제를 원천 차단합니다.
3. 로컬 배포가 반드시 필요한 경우 Windows Subsystem for Linux (WSL) 환경에서 배포 명령어를 실행해야 합니다.'
WHERE id = 4;
