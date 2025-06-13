
import { CartProvider } from "@/context/CartContext"; // adjust path if needed
import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";


export default async function RootLayout({ children }: { children: React.ReactNode; userId: string }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
        <CartProvider userId={session.user.email}>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
