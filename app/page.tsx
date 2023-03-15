import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/dashboard')
  return <h1 className="text-3xl font-bold text-green-600 underline">Hello world!</h1>
}
