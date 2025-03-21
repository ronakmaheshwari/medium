import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate'
import { blogSchema, updateSchema } from "@ronak077/common-app";
//import {blogSchema,updateSchema} from '../../../common/src/index' //Worst Thing to have it like this Change It with Monorepos
// import zod  from 'zod'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        jwtSecret: string;
    },
    Variables : {
		userId: string
	}
}>();

// const blogSchema = zod.object({
//     title:zod.string(),
//     content:zod.string()
// })

// const updateSchema = zod.object({
//     title:zod.string(),
//     content:zod.string(),
//     id:zod.string()
// })

blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.jwtSecret);
        if (user) {
            //@ts-ignore    
            c.set("userId", user.id);
            await next();
        } else {
            c.status(403);
            return c.json({
                message: "You are not logged in"
            })
        }
    } catch(e) {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        })
    }
});


blogRouter.post('/',async(c)=>{
    try{
        const body = await c.req.json();    
        const {success} = blogSchema.safeParse(body);
        if(!success){
            c.status(411);
            return c.json({
                message: "Inputs not correct"
            })
        }
    
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())
    
        const authorId = await c.get('userId'); 
        console.log(authorId);// add middleware here 
        const ExistingUser = await prisma.user.findUnique({
            where:{
                id:authorId
            }
        })
        if(!ExistingUser){
            c.status(411);
            return c.json({
                message: `No User found With ${authorId}`
            })
        }
        const addPost = await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                published:true,
                authorId: authorId
            }
        })
        c.status(200)
        return c.json({message:"Post Successfully Added",id:addPost.id})
    }catch(error){
        c.status(500)
        return c.json({
            error:error,
            message:"Internal Error Occured"
        })
    }
})

blogRouter.put('/',async(c)=>{
    try{

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())
    
        const body = await c.req.json();
        const {success} = updateSchema.safeParse(body)
        if(!success){
            c.status(411);
            return c.json({
                message: "Inputs not correct"
            })
        }
        const authorId =await c.get('userId')
        console.log(authorId);

        const ExistingUser = await prisma.user.findUnique({
            where:{
                id:authorId
            }
        })

        if(!ExistingUser){
            c.status(411);
            return c.json({
                message: `No User found With ${authorId}`
            })
        }
        const updatePost = await prisma.post.update({
            where:{
                // authorId:authorId,
                id:body.id
            },
            data:{
                title:body.title,
                content:body.content,
            }
        })
        c.status(200)
        return c.json({message:"Post successfully Updated",id:updatePost.id})
    }catch(error){
        c.status(500)
        return c.json({
            error:error,
            message:"Internal Error Occured"
        })
    }
})

blogRouter.get('/bulk',async(c)=>{
    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const filter = c.req.query('filter')?.trim();
        
        const posts = await prisma.post.findMany({
            where: filter ? { 
                title: {
                    contains: filter,
                    mode: "insensitive"
                }
            } : {}, 
            select: {
                id: true,
                title: true,
                content: true,
                published:true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });

        c.status(200)
        // return c.json({ posts });
        return c.json({
            post: posts.map(x => {
                return {
                    id: x.id,
                    title: x.title,
                    content: x.content,
                    published:x.published,
                    author: x.author.name
                };
            })
        });
            
    }catch(error){
        return c.json({
            error:error,
            message:"Internal Error Occured"
        })
    }
})

blogRouter.get('/:id',async(c)=>{
    try{
        const id = c.req.param("id");

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const getAllpost = await prisma.post.findMany({
            where:{
                id:id
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })

        c.status(200)
        return c.json({
            getAllpost
        })

    }catch(error){
        c.status(500);
        return c.json({
            
            error:error,
            message:"Internal Error Occured"
        })
    }
})