
import { CartProvider } from "@/context/CartContext";
import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";



export default async function RootLayout({ children }: { children: React.ReactNode}) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email || "guest";

  return (
    <html lang="en">
      <body>
        <CartProvider userId={userId}>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
