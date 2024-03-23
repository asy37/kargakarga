import { API_URL } from "@/constants/API_URL";
import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await axios.post(`${API_URL}/auth/login`,{
          email: credentials?.email,
          password: credentials?.password,
        });
        const data = await res.data;
        if (data.status === true) {
      
          return {
            id: data.data.token,
            name: data.data.fullName,
            email: data.data.email,
          };
        } else {
          // Login Failed
          return null; 
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  }
});
