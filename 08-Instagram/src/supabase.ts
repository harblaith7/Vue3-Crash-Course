import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dizucfoazxmpvsthwwps.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpenVjZm9henhtcHZzdGh3d3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU0ODI5NTYsImV4cCI6MTk4MTA1ODk1Nn0.uldkm5jbEGf2qBG4uffpLrA7irJOwdAs0HzihQ4gl_A"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)