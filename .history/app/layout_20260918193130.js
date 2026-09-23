import Navigation from "../components/navigation";

const RootLayout = ({children})=>{
  return(
    <html>
      <body>
          <div className="min-h-screen bg-ba">
          {children}
          </div>
      </body>
    </html>
  )
}
export default RootLayout;
