import zod from "zod"

const SignupSchema = zod.object({
    email:zod.string().email(),
    password:zod.string().min(6)
  })
  
const SigninSchema = zod.object({
    email:zod.string().email()
})

const blogSchema = zod.object({
    title:zod.string(),
    content:zod.string()
})

const updateSchema = zod.object({
    title:zod.string(),
    content:zod.string(),
    id:zod.string()
})

type SigninType=zod.infer<typeof SigninSchema>;
type SignupType = zod.infer<typeof SignupSchema>;
type BlogSchemaType = zod.infer<typeof blogSchema>;
type UpdateSchemaType = zod.infer<typeof updateSchema>;

export {SignupSchema,SigninSchema,blogSchema,updateSchema,SigninType,SignupType,BlogSchemaType,UpdateSchemaType};
