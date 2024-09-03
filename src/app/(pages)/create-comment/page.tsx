import { CommentForm } from "./_components/form";

export default function Page() {
  return (
    <>
      <section className="py-3">
        <div>
          <h2 className="font-semibold">Create your comment</h2>
          <p className="text-xs">Just fill up this form &#128516;</p>
        </div>
        <div className="py-3">
          <CommentForm />
        </div>
      </section>
    </>
  )
}