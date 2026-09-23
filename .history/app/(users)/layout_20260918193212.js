import Navigation from "@/components/navigation

const RootLayout = ({children})=>{
  return(
    <html>
      <body>
        <Navigation />
          {children}
      </body>
    </html>
  )
}
export default RootLayout;
