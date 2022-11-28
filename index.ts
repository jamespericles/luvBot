import dotenv from 'dotenv'
import Snoowrap from 'snoowrap'

dotenv.config()

const r: Snoowrap = new Snoowrap({
  userAgent: 'luvvvbot',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS,
})

const client = new Snoowrap(r)
