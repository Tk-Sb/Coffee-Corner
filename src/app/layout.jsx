import "./globals.css";
import { Inknut_Antiqua } from 'next/font/google'

const inknutAntiqua = Inknut_Antiqua({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Coffee Corner",
  description: "Your favorite place for a nice warm cup of coffee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inknutAntiqua.className} antialiased w-screen h-screen overflow-hidden `} >
        {children}
      </body>
    </html>
  );
}
