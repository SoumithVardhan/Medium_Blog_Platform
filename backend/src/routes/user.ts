import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import { signupInput , signinInput } from "@soumithvardhan/medium-commonresource";

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;

    }
}>();


userRouter.post('/signup', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if(!success){
      return c.json({
        status: 401,
        message:"zod_validation_error"
      })
    }
    try{
      const user = await prisma.user.create({
        data: {
          email: body.username,
          password: body.password,
          name: body.name || ''
        }
      });
      const jwt = await sign({
        id:user.id
      },c.env.JWT_SECRET)

      
      
      return c.json({ status: 200, jwt } );
  
    }catch(e){
      c.status(411);
      return c.text("user already exist")
  
    }
  
    
  });
  
  userRouter.post('/signin',async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if(!success){
      return c.json({
        status: 401,
        message:"zod_validation_signin_error"
      })
    }
    try{
      const user = await prisma.user.findUnique({
        where: {
          email: body.username,
          password: body.password,
        }
      });
      if(!user){
        c.status(403);
        return c.json({ error: "user not found" });
      }
      const jwt = await sign({
        id:user.id
      },c.env.JWT_SECRET)
      
      return c.json({ status: 200, jwt });
  
    }catch(e){
      c.status(411);
      return c.text("user already exist")
  
    }
  });

  userRouter.post('/signoff', async(c) => {
    return c.json({ status: 200, message: "Signed off successfully" });
  });
  