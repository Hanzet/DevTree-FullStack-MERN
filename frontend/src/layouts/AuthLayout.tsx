import { Outlet } from "react-router-dom"
import { Toaster } from "sonner"

export default function AuthLayout() {
  return (
      <>
        <div className="bg-slate-800 min-h-screen">
          <div className="max-w-lg mx-auto pt-10 px-5">
            <img src='/logo.svg' alt='Logotipo DevTree' />

            <div className="py-10">
              <h1 className="text-white">
                <Outlet />
              </h1>
            </div>
          </div>
        </div>
        <Toaster position="top-right" richColors/>
      </>
    )
}