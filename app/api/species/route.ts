import { supabase } from "@/lib/supabase"

export async function GET() {
  const { data, error } = await supabase
    .from("species")
    .select("*")

  if (error) return Response.json(error)

  return Response.json(data)
}

export async function POST(req: Request) {
  const body = await req.json()

  const { error } = await supabase
    .from("species")
    .insert([body])

  if (error) return Response.json(error)

  return Response.json({ message: "ok" })
}
