interface CloudflareEnv {
  DB: D1Database;
  BUCKET: R2Bucket;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends CloudflareEnv {}
  }
}
