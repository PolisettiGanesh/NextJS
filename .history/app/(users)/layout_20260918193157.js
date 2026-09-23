import Navigation from "..navigation/../components/navigation";

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
