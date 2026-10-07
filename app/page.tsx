import { redirect } from "next/navigation";
import {supabaseBrowser} from "../../lib/supabase";

export default function Home() {
  redirect("/admin");
}
