import {createClient} from "@supabase/supabase-js"

const supabaseUrl = "https://khjqwdvruapghddwzaju.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoanF3ZHZydWFwZ2hkZHd6YWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU4MzUwNTMsImV4cCI6MTk4MTQxMTA1M30.nI2n5ujpLmFt0LCe7i812rJ1NwjYodp-vm-hAkeBuKg"

export const supabase = createClient(supabaseUrl, supabaseKey)