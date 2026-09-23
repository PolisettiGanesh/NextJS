import Navigation from "@/;

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
