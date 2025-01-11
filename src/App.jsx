import { RouterProvider } from "react-router-dom"
import router from "./routes/Router.route"
function App() {
  
  return (
    <>
    <div className="w-full h-[100dvh] overflow-y-auto overflow-x-hidden relative">
    <RouterProvider router={router}/>
    </div>
    </>
    
  )
}

export default App
