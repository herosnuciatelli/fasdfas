'use client'

import { PlusCircleIcon } from "lucide-react"
import { z } from "zod"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { createClient } from "@/utils/supabase/client"

const formSchema = z.object({
  email: z.string().min(1, 'It cannot be empty').email('invalid email'),
  name: z.string().min(3, 'It cannot be too short').max(50, 'it cannot be too long'),
  comment: z.string().min(1, 'It cannot be empty').max(1000, 'it cannot be too long')
})

export const CommentForm = () => {
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [comment, setComment] = useState<string>('')

  const [error, setError] = useState<string | undefined>(undefined)
  const [success, setSuccess] = useState<string | undefined>(undefined)

  const supabase = createClient()

  const handleSubmit = async () => {
    const { error } = formSchema.safeParse({ email, name, comment })

    if (error?.message) {
      setSuccess(undefined)
      return setError('Please fill up right!')
    }

    try {
      const { error } = await supabase.from('comments').insert([{
        name,
        email,
        comment
      }])

      console.log(error)

      setSuccess('Your comment was created with success!')
      setError(undefined)

      setTimeout(() => {
        window.location.href = '/'
      }, 700)
    } catch (err) {
      return setError('Sorry!, we have an error!')
    }
  }

  return (
    <div className="flex flex-col gap-3 max-w-sm mx-auto">

      <div className={cn("border border-purple-500 border-dashed rounded text-center py-3", 
        { 'border-red-500' : error },
        { 'border-teal-500': success}
      )}>
        {!error && !success && (
          <span className="text-xs text-purple-500">Will be an honnor have your comment here!</span>
        )}
        {error && (
          <span className="text-xs text-red-500">{error}</span>
        )}
        {success && (
          <span className="text-xs text-teal-500">{success}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs opacity-90">Email</label>
        <input type="text"  className="bg-zinc-800 border border-zinc-700 rounded text-xs px-3 py-1.5" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs opacity-90">Name</label>
        <input type="text"  className="bg-zinc-800 border border-zinc-700 rounded text-xs px-3 py-1.5"  value={name} onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs opacity-90">Your comment</label>
        <textarea  className="bg-zinc-800 border border-zinc-700 rounded min-h-24 max-h-40 text-xs px-3 py-1.5"  value={comment} onChange={(e) => setComment(e.target.value)}/>
      </div>
     
      <button disabled={!!success} onClick={handleSubmit} className="bg-purple-900 rounded-md border border-purple-500 text-xs font-semibold px-3 py-1.5 w-max flex items-center gap-1">
        <PlusCircleIcon className="size-3"/>
        Create Comment
      </button>
    </div>
  )
}