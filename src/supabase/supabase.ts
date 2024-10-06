import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eixdxojufypwhenvxdmz.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseKey) throw new Error("supabaseKey가 없습니다.");

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
