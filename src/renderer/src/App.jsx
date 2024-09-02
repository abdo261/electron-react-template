import { NextUIProvider } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const api = import.meta.env.VITE_API_URI
  return (
    <NextUIProvider className="w-screen h-screen bg-gray-900 text-white">
      <h1>hello world {api}</h1>
      <Button onClick={() => toast('this is meessage success')}>Click at me </Button>
      <ToastContainer theme="colored" />
    </NextUIProvider>
  )
}

export default App
