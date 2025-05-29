export const runtime = "nodejs";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import bcrypt from 'bcryptjs';
import Google from "next-auth/providers/google";


import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@/lib/generated/prisma"; // Adjust this import to match your project

const prisma = new PrismaClient();

async function findUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

async function verifyPassword(plain: string, hashed: string) {
  return bcrypt.compare(plain, hashed);
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
			
      async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null;
				
				
				// Example: fetch user from DB
				const user = await findUserByEmail(credentials.email);

				if (!user) return null;

				// Validate password (e.g., bcrypt.compare)
				const isValid = await verifyPassword(credentials.password, user.password);
				if (!isValid) return null;

				return {
					id: user.id,
					name: user.name,
					email: user.email,
				};
			}
    }),
		Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      const typedToken = token as {
				id: string;
				email: string;
				name?: string;
				image?: string;
			};
      session.user.id = typedToken.id;
      session.user.email = typedToken.email;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
