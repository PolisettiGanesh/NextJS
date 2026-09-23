import Navigation from "@/components

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
