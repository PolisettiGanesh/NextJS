import Navigation from "../components/navigation";

const RootLayout = ({children})=>{
  return(
    <html>
      <body>
          <div className="min-">
          {children}
          </div>
      </body>
    </html>
  )
}
export default RootLayout;
