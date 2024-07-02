import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const res = await fetch('http://localhost:5235/api/Usuario/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          })
        })

        const user = await res.json()

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      // console.log(session)
      // session.user = token as any
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return baseUrl + url
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  }
}
