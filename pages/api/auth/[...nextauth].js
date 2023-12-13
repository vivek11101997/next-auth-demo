import NextAuth from "next-auth";
// import Providers from "next-auth/providers"
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";


export default NextAuth({
  session: {
    jwt:true
  },
  providers: [
    

    CredentialsProvider({
  
      async authorize(credentials) {
        const client = connectToDatabase();
        const userCollection = await client.db().collection("users");
        const user=await userCollection.findOne({ email: credentials.email })
        
        if (!user)
        {
          throw new Error("No User found");
        }

        const isvalid = await verifyPassword(credentials.password, user.password)
        i
        if (!isvalid)
        {
          throw new Error("Could not log you in !");
        }

        client.close();
        return {
          email:user.email
        }

        
      }
    })
  ]
});