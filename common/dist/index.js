import zod from "zod";
const SignupSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
});
const SigninSchema = zod.object({
    email: zod.string().email()
});
const blogSchema = zod.object({
    title: zod.string(),
    content: zod.string()
});
const updateSchema = zod.object({
    title: zod.string(),
    content: zod.string(),
    id: zod.string()
});
export { SignupSchema, SigninSchema, blogSchema, updateSchema };
