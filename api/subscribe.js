// Resend email subscription endpoint for Coogni
// Vercel Serverless Function (Node.js runtime)

export default async function handler(req, res) {
  console.log('[Coogni] Method:', req.method)

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // Health check
  if (req.method === 'GET') {
    res.status(200).json({
      ok: true,
      env: {
        RESEND_API_KEY: process.env.RESEND_API_KEY ? 'SET' : 'MISSING',
        RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID ? 'SET' : 'MISSING',
      },
      timestamp: new Date().toISOString(),
    })
    return
  }

  if (req.method !== 'POST') {
    res.status(405).end('Method not allowed')
    return
  }

  try {
    const body = req.body || {}
    const email = (body.email || '').toLowerCase()
    const name = body.name || ''

    if (!email || !email.includes('@')) {
      res.status(400).json({ error: 'Email requerido' })
      return
    }

    const apiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (!apiKey) {
      console.error('[Coogni] RESEND_API_KEY missing!')
      res.status(500).json({ error: 'Server config error' })
      return
    }

    const firstName = name.split(' ')[0] || ''
    const authHeader = 'Bearer ' + apiKey
    const headers = {
      'Authorization': authHeader,
      'Content-Type': 'application/json',
    }

    console.log('[Coogni] Email:', email, '| Audience:', audienceId || 'NOT SET')

    // 1. Create contact in Resend Audience
    if (audienceId) {
      try {
        const contactRes = await fetch(
          'https://api.resend.com/audiences/' + audienceId + '/contacts',
          {
            method: 'POST',
            headers,
            body: JSON.stringify({
              email: email,
              first_name: firstName,
              unsubscribed: false,
            }),
          }
        )
        const contactData = await contactRes.json().catch(function() { return {} })
        console.log('[Coogni] Contact:', contactRes.status, JSON.stringify(contactData))
      } catch (err) {
        console.error('[Coogni] Contact error:', err.message || String(err))
      }
    }

    // 2. Send welcome email
    const subject = 'Confirmación de registro — Beta privada Coogni'

    const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header with logo -->
          <tr>
            <td style="background-color: #ffffff; border-radius: 16px 16px 0 0; padding: 32px 40px; text-align: center; border-bottom: 1px solid #e2e8f0;">
              <img src="https://www.coogni.es/assets/logo-coogni-CrQiJy3D.png" alt="Coogni" height="40" style="height: 40px; margin-bottom: 8px;">
              <p style="margin: 0; font-size: 13px; color: #64748b;">Neurociencia clínica con IA predictiva</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px;">
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #475569;">
                Estimado/a ${firstName || 'profesional'},
              </p>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #475569;">
                Le confirmamos que su registro en la lista de espera de la beta privada de <strong>Coogni</strong> ha sido recibido correctamente.
              </p>
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #475569;">
                Nos complace tenerle entre los primeros profesionales que formarán parte de esta fase. Su interés en mejorar la detección temprana del deterioro cognitivo en sus pacientes es exactamente el perfil para el que hemos diseñado esta plataforma.
              </p>

              <!-- Documentation -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 12px; font-size: 14px; font-weight: 700; color: #0d9488; text-transform: uppercase; letter-spacing: 0.05em;">
                      Documentación adjunta
                    </p>
                    <p style="margin: 0 0 16px; font-size: 14px; color: #475569;">
                      Le facilitamos la siguiente guía práctica:
                    </p>
                    <a href="https://raw.githubusercontent.com/kiwi-alpa-digital/coogni-landing/main/src/assets/GUIA_USO_COOGNI_EN_LA_PRACTICA_CLINICA.pdf" style="display: inline-block; background-color: #0d9488; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600; margin-bottom: 16px;">
                      → Descargar: Coogni en la práctica clínica neurológica
                    </a>
                    <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #64748b;">
                      El documento recoge cómo Coogni se integra en el flujo de trabajo diario de equipos de neurología y neuro-rehabilitación: seguimiento longitudinal de pacientes, interpretación de alertas predictivas, y cómo los ejercicios cognitivos complementan el tratamiento sin incrementar la carga asistencial.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Discount -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 12px; font-size: 14px; font-weight: 700; color: #166534;">
                      Su descuento reservado
                    </p>
                    <p style="margin: 0 0 12px; font-size: 14px; color: #475569;">
                      Por haberse registrado durante la fase de beta privada, tiene reservado el siguiente descuento sobre el precio de lanzamiento:
                    </p>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #166534; font-size: 16px;">✓</span>
                        </td>
                        <td style="padding: 6px 0 6px 8px; font-size: 14px; color: #475569;">
                          <strong>20% de descuento</strong> sobre el precio de lanzamiento.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #166534; font-size: 16px;">✓</span>
                        </td>
                        <td style="padding: 6px 0 6px 8px; font-size: 14px; color: #475569;">
                          <strong>25% de descuento total</strong> si completó el formulario de perfil clínico en el paso siguiente.
                        </td>
                      </tr>
                    </table>
                    <p style="margin: 16px 0 0; font-size: 13px; color: #64748b;">
                      Cuando le demos acceso a la plataforma, le facilitaremos el código de descuento correspondiente junto con las instrucciones para activarlo. No es necesario que guarde ningún justificante — tenemos constancia de su registro y nos encargamos de hacérselo llegar en el momento oportuno.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Next steps -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-left: 3px solid #0d9488; padding-left: 16px; margin-bottom: 24px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px; font-size: 14px; font-weight: 700; color: #1e293b;">Próximos pasos</p>
                    <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #475569;">
                      Actualmente nos encontramos en fase de beta privada cerrada. Cuando la plataforma esté disponible, le haremos llegar un vídeo de 30 minutos con un recorrido completo por todas las funcionalidades y posibilidades de Coogni, para que pueda valorar con detalle cómo encaja en su práctica clínica antes de activar su cuenta.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 16px; font-size: 14px; line-height: 1.6; color: #475569;">
                Si desea ponerse en contacto con nosotros antes de esa fecha, puede hacerlo respondiendo directamente a este email o escribiéndonos a <a href="mailto:hola@coogni.es" style="color: #0d9488;">hola@coogni.es</a>.
              </p>

              <p style="margin: 0; font-size: 14px; color: #475569;">
                Attentamente,<br>
                <strong>Equipo Coogni</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-radius: 0 0 16px 16px; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                <a href="https://coogni.com" style="color: #0d9488; text-decoration: none;">coogni.com</a> · hola@coogni.es
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        from: 'Coogni <hola@coogni.es>',
        to: [email],
        subject: subject,
        html: htmlContent,
      }),
    })

    const emailData = await emailRes.json().catch(function() { return {} })
    console.log('[Coogni] Email:', emailRes.status, JSON.stringify(emailData))

    if (!emailRes.ok) {
      res.status(500).json({ error: 'Failed to send email', details: emailData })
      return
    }

    console.log('[Coogni] Success for:', email)
    res.status(200).json({ success: true })
  } catch (err) {
    console.error('[Coogni] Error:', err.message || String(err))
    res.status(500).json({ error: 'Internal error', details: String(err) })
  }
}
