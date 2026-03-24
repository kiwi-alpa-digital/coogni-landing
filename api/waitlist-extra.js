import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

export default async function handler(req, res) {
  console.log('[Coogni waitlist-extra] Method:', req.method)

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).end('Method not allowed')
    return
  }

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('[Coogni] SUPABASE_URL or SUPABASE_SERVICE_KEY missing!')
    res.status(500).json({ error: 'Server config error' })
    return
  }

  try {
    const body = req.body || {}
    const { name, email, profile_type, clinic_name, patients, interests, other_text } = body

    if (!email || !email.includes('@')) {
      res.status(400).json({ error: 'Email is required' })
      return
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const { error } = await supabase.from('waitlist_extra').insert({
      name: name || '',
      email: email.toLowerCase(),
      profile_type: profile_type || null,
      clinic_name: clinic_name || null,
      patients: patients || null,
      interests: interests || [],
      other_text: other_text || null,
    })

    if (error) {
      console.error('[Coogni] Supabase insert error:', error.message)
      res.status(500).json({ error: 'Failed to save data', details: error.message })
      return
    }

    console.log('[Coogni] waitlist_extra saved for:', email)
    res.status(200).json({ success: true })
  } catch (err) {
    console.error('[Coogni] Error:', err.message || String(err))
    res.status(500).json({ error: 'Internal error', details: String(err) })
  }
}
