import { redirect } from 'next/navigation'
import { cookies } from "next/headers";

import { createClient } from '@/utils/supabase/server'

import TodoList from '@/components/todo-list'

export default async function DashboardPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-4">
          Todo <span className='text-primary'>List</span>
        </h1>
        <TodoList />
      </div>
    </section>
  )
}