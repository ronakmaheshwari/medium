import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
// import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate'
// import { decode, sign, verify } from 'hono/jwt'
// import zod  from 'zod'
// import { zValidator } from '@hono/zod-validator'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    	jwtSecret:string
	}
}>()


app.use('/*',cors());
app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);

export default app
