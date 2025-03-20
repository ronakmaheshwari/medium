// import { Hono } from "hono"
// import app from "."
// import { verify } from "hono/jwt"

// app.use('/api/v1/blog/*', async (c, next) => {
//     try{
//         const head:any = c.req.header("Authorization")
//         if (!head) {
//             c.status(401);
//             return c.json({ error: "unauthorized" });
//         }
//         const token = head.split(" ")[1]
//         const response =await verify(token,c.env.jwtSecret);
//         if(response.id){
            
//             next()
//         }else{
//             c.status(404)
//             return c.json({message:"Token not found"})
//         }    
//     }catch(error){
//         c.status(500)
//         return c.json({
//             message:"Internal Server Error"
//         })
//     }
// })