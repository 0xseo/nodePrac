import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/database.types";
import dotenv from "dotenv";

dotenv.config();

const Config = process.env;

if (!Config.DB_HOST || !Config.API_KEY) {
  throw new Error("환경 변수가 설정되지 않았습니다.");
}
const supabase = createClient<Database>(Config.DB_HOST, Config.API_KEY);

export default supabase;
