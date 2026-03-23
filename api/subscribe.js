module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email } = req.body || {}

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Email inválido' })
    }

    const firstName = (name || '').split(' ')[0] || ''
    const lastName = (name || '').split(' ').slice(1).join(' ') || ''
    const apiKey = process.env.VITE_RESEND_API_KEY
    const audienceId = process.env.VITE_RESEND_AUDIENCE_ID

    if (!apiKey) {
      return res.status(500).json({ error: 'Resend API key not configured' })
    }

    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    }

    // 1. Create contact in Resend Audience
    if (audienceId && audienceId !== 'YOUR_RESEND_AUDIENCE_ID') {
      const contactRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email: email.toLowerCase(),
          first_name: firstName,
          last_name: lastName,
          unsubscribed: false,
        }),
      })
      if (!contactRes.ok) {
        const err = await contactRes.json().catch(() => ({}))
        console.error('[Coogni] Contact create error:', err)
      }
    }

    // 2. Send welcome email
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        from: 'Coogni <hola@coogni.es>',
        to: [email.toLowerCase()],
        subject: firstName
          ? `Bienvenido/a a Coogni, ${firstName} — tu guía te espera`
          : 'Bienvenido/a a Coogni — tu guía te espera',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1e293b;">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="color: #0d9488; font-size: 28px; margin: 0;">Coogni</h1>
              <p style="color: #64748b; font-size: 14px;">Neurociencia clínica con IA predictiva</p>
            </div>
            <div style="background: #f8fafc; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
              <h2 style="color: #1e293b; font-size: 24px; margin: 0 0 16px;">
                ${firstName ? `¡Bienvenido/a, ${firstName}!` : '¡Bienvenido/a a Coogni!'}
              </h2>
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                Te has unido a más de <strong>200 profesionales</strong> que ya están anticipándose al deterioro cognitivo.
              </p>
              <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
                <p style="color: #0d9488; font-size: 13px; font-weight: 700; margin: 0 0 12px;">🎁 Tu primer recurso gratuito</p>
                <p style="color: #1e293b; font-size: 15px; line-height: 1.5; margin: 0 0 16px;">
                  Descarga la <strong>Guía: 7 Señales de Deterioro Cognitivo que los Tests Clínicos No Detectan</strong>.
                </p>
                <a href="https://coogni.com/guia-deterioro-cognitivo.pdf"
                   style="display: inline-block; background: #0d9488; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                  Descargar guía gratis →
                </a>
              </div>
              <p style="color: #475569; font-size: 15px; line-height: 1.6;">
                <strong>¿Qué viene ahora?</strong><br/>
                Te avisaremos cuando la beta privada esté lista con un <strong>20% de descuento exclusivo</strong>.
              </p>
            </div>
            <div style="text-align: center; padding: 20px;">
              <p style="color: #94a3b8; font-size: 13px; margin: 0;">
                <a href="https://coogni.com" style="color: #0d9488;">coogni.com</a> · hello@coogni.com
              </p>
            </div>
          </div>
        `,
      }),
    })

    if (!emailRes.ok) {
      const err = await emailRes.json().catch(() => ({}))
      console.error('[Coogni] Email send error:', err)
      return res.status(500).json({ error: 'Error enviando email' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('[Coogni] Subscribe error:', err?.message || err)
    return res.status(500).json({ error: 'Error interno' })
  }
}
