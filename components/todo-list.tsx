import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Badge } from "@/components/ui/badge";

export default async function TodoList() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data } = await supabase.auth.getUser();

  const { data: todos, error } = await supabase
    .from("todos")
    .select()
    .eq("user_id", data.user?.id)
    .order("inserted_at", { ascending: false });

  if (error) {
    console.error("Error fetching Todos");
  }

  return (
    <div className="form-widget flex flex-col md:flex-row gap-8 w-full">
      {todos?.map((todo) => (
        <div
          key={todo.id}
          className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4"
        >
          <p className="text-white mb-2">{todo.task}</p>
          <Badge>{data.user?.email}</Badge>
        </div>
      ))}
    </div>
  );
}
