import zod from "zod";
declare const SignupSchema: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
declare const SigninSchema: zod.ZodObject<{
    email: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
declare const blogSchema: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
declare const updateSchema: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
    id: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
    id: string;
}, {
    title: string;
    content: string;
    id: string;
}>;
type SigninType = zod.infer<typeof SigninSchema>;
type SignupType = zod.infer<typeof SignupSchema>;
type BlogSchemaType = zod.infer<typeof blogSchema>;
type UpdateSchemaType = zod.infer<typeof updateSchema>;
export { SignupSchema, SigninSchema, blogSchema, updateSchema, SigninType, SignupType, BlogSchemaType, UpdateSchemaType };
