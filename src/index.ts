import dotenv from 'dotenv'
import Snoowrap from 'snoowrap'
import cron from 'node-cron'

dotenv.config()

const r: Snoowrap = new Snoowrap({
  userAgent: 'luvvvbot',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS,
})

const client = new Snoowrap(r)

if (process.env.TARGET_USER) {
  // Perform the following every 12 hours on the hour
  // cron.schedule('0 */12 * * *', () => {
  client
    .getUser(process.env.TARGET_USER as string)
    .getComments()
    .then((comments) =>
      // CHECK DB FOR EXISTING COMMENT
      // IF comment.id MATCHES STORED COMMENT ID, SKIP JOB
      // ELSE...
      // STORE ID IN DB
      // UPVOTE COMMENT
      // REPLY TO COMMENT
      console.log(comments)
    )
  // })
}
