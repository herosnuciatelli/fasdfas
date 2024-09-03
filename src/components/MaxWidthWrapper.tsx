import { ReactNode } from "react"

export const MaxWidthWrapper = ({ children }: {
  children: ReactNode
}) => {
  return (
    <div className="mx-auto max-w-4xl flex flex-col px-3 lg:px-6">{children}</div>
  )
}