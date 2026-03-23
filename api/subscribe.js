// Minimal serverless function - no dependencies
module.exports = async function handler(req, res) {
  console.log('[Coogni] subscribe called, method:', req.method)

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method === 'GET') {
    res.status(200).json({
      ok: true,
      env: {
        RESEND_API_KEY: process.env.RESEND_API_KEY ? 'SET' : 'MISSING',
        RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID || 'MISSING',
      },
      timestamp: new Date().toISOString(),
      nodeVersion: process.version,
    })
    return
  }

  if (req.method !== 'POST') {
    res.status(405).end('Method not allowed')
    return
  }

  try {
    const body = req.body
    console.log('[Coogni] body:', JSON.stringify(body))

    if (!body || !body.email) {
      res.status(400).json({ error: 'Email requerido' })
      return
    }

    const email = (body.email || '').toLowerCase()
    if (!email.includes('@')) {
      res.status(400).json({ error: 'Email inválido' })
      return
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[Coogni] RESEND_API_KEY missing!')
      res.status(500).json({ error: 'Server config error: missing API key' })
      return
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID

    // Step 1: Create contact
    if (audienceId) {
      console.log('[Coogni] Creating contact in audience:', audienceId)
      const contactResponse = await fetch(
        'https://api.resend.com/audiences/' + audienceId + '/contacts',
        {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + apiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            unsubscribed: false,
          }),
        }
      )
      const contactData = await contactResponse.json().catch(function() { return {} })
      console.log('[Coogni] Contact status:', contactResponse.status, JSON.stringify(contactData))
    }

    // Step 2: Send welcome email
    console.log('[Coogni] Sending welcome email to:', email)
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Coogni <hola@coogni.es>',
        to: [email],
        subject: 'Bienvenido/a a Coogni — tu guía te espera',
        html: '<p>¡Gracias por unirte a Coogni!</p><p>Te avisaremos cuando la beta esté lista.</p>',
      }),
    })

    const emailData = await emailResponse.json().catch(function() { return {} })
    console.log('[Coogni] Email status:', emailResponse.status, JSON.stringify(emailData))

    if (!emailResponse.ok) {
      res.status(500).json({ error: 'Failed to send email', details: emailData })
      return
    }

    console.log('[Coogni] Success!')
    res.status(200).json({ success: true })
  } catch (err) {
    console.error('[Coogni] Error:', err.message || String(err))
    res.status(500).json({ error: 'Internal error', details: err.message || String(err) })
  }
}
