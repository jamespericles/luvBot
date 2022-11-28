export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_ID: string
      CLIENT_SECRET: string
      REDDIT_USER: string
      REDDIT_PASS: string
      TARGET_USER: string
    }
  }
}
