import Navigation from "../components/navigation";
import 
const RootLayout = ({children})=>{
  return(
    <html>
      <body>
          <div className="min-h-screen bg-black">
          {children}
          </div>
      </body>
    </html>
  )
}
export default RootLayout;
