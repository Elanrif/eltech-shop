import React from 'react'

export default function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        Layout du dashboard
        <main>{children}</main>
    </div>
  )
}
