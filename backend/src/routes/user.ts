import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from "hono/jwt";
import zod  from 'zod'
// import { zValidator } from '@hono/zod-validator'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        jwtSecret: string;
    }
}>();

const SignupSchema = zod.object({
  email:zod.string().email(),
  password:zod.string().min(6)
})

const SigninSchema = zod.object({
  email:zod.string().email()
})

userRouter.post('/signup',async(c)=>{
    const body =await c.req.json();
    const { success } = SignupSchema.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    try{
        const ExistingUser = await prisma.user.findUnique({
            where:{
                email:body.email
            }
        })
        if(ExistingUser){
            c.status(404)
            return c.json({message:"Email Already Registered"})
        }
        const response = await prisma.user.create({
            data:{
                email:body.email,
                password:body.password
            }
        })
        console.log('JWT_SECRET:', c.env.jwtSecret);
        const token =await sign({ id: response.id }, c.env.jwtSecret);
        
        return c.json({
            message:"Email Added Successfully",
            token:token
        })
    }catch(error){
        return c.json({
            error:error,
            message:"Internal Error Occured"
        })
    }
})

userRouter.post('/signin',async(c)=>{
    const body =await c.req.json();
    const { success } = SigninSchema.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }
    // const result = c.req.valid('json')
    // if(!result){
    //     c.status(404)
    //     return c.json({message:"Wrong Inputs Provided"})
    // }
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    try{
        const ExistingUser = await prisma.user.findUnique({
            where:{
                email:body.email
            }
        })
        if(!ExistingUser){
            c.status(404)
            return c.json({message:"User Doesn't Exist"})
        }
        const token = await sign({id:ExistingUser.id},c.env.jwtSecret);
        
        c.status(200)
        return c.json({
            message:"Email Present Successfully",
            token:token
        })
    }catch(error){
        return c.json({
            message:error
        })
    }
})