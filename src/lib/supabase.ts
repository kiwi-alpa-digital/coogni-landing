import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseServiceKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn('[Coogni] Supabase env vars missing — waitlist_extra writes will fail')
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey)
