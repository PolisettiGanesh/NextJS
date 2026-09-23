import Navigation from "../components/navigation";

const RootLayout = ({children})=>{
  return(
    <html>
      <body>
          <div>
          {children}
          </div>
      </body>
    </html>
  )
}
export default RootLayout;
