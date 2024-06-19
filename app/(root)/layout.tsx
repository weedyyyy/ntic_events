import Footer from "@/components/sahred/Footer"
import Header from "@/components/sahred/Header"

  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      // <ClerkProvider>
        <div className="flex h-screen flex-col">
            <Header></Header>
            <main className="flex-1">{children}</main>
            <Footer></Footer>
        </div>
          
      // </ClerkProvider>
    )
  }