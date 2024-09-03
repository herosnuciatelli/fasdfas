import { ReactNode } from "react"

export const CardComment = ({name, email, comment}: {
  name: string
  email: string
  comment: string
}) => (
  <div className="border border-zinc-800 bg-zinc-950 rounded p-3 divide-y divide-zinc-800">
    <div className="pb-1 flex flex-col">
      <h3 className="text-xs font-semibold">{name}</h3>
      <span className="text-xs opacity-80">{email}</span>
    </div>
    <div className="py-3">
      <p className="text-xs">{comment}</p>
    </div>
  </div>
)

export const CardCommentSkeleton = () => (
  <div className="border border-zinc-800 bg-zinc-950 rounded p-3 divide-y divide-zinc-800 h-full min-h-24 animate-pulse"></div>
)