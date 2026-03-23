import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)


interface SubscribeBody {
  name?: string
  email: string
  profile?: string
  clinic?: string
  patients?: string
  interests?: string[]
  other?: string
}

export async function POST(req: NextRequest) {
  try {
    const body: SubscribeBody = await req.json()
    const { name, email, profile, clinic, patients, interests, other } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // Subscribe to Resend Audiences (if you have an audience set up)
    // For now, we send a welcome email directly
    const firstName = name?.split(' ')[0] || ''

    // Send welcome email
    await resend.emails.send({
      from: 'Coogni <hola@coogni.es>',
      to: email,
      subject: firstName ? `Bienvenido/a a Coogni, ${firstName}` : 'Bienvenido/a a Coogni',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #0d9488; font-size: 28px; margin: 0;">Coogni</h1>
            <p style="color: #64748b; font-size: 14px; margin: 4px 0;">Neurociencia clínica con IA predictiva</p>
          </div>

          <div style="background: #f8fafc; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
            <h2 style="color: #1e293b; font-size: 24px; margin: 0 0 16px;">
              ${firstName ? `¡Bienvenido/a, ${firstName}!` : '¡Bienvenido/a a Coogni!'}
            </h2>
            <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
              Te has unido a más de 200 profesionales que ya están anticipándose al deterioro cognitivo con Coogni.
            </p>

            <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
              <p style="color: #0d9488; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">
                🎁 Tu primer recurso gratuito
              </p>
              <p style="color: #1e293b; font-size: 15px; line-height: 1.5; margin: 0 0 16px;">
                Descarga la <strong>Guía: 7 Señales de Deterioro Cognitivo que los Tests Clínicos No Detectan</strong> — 12 páginas con señales clínicas concretas y protocolo de evaluación.
              </p>
              <a href="https://coogni.com/guia-deterioro-cognitivo.pdf"
                 style="display: inline-block; background: #0d9488; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Descargar guía gratis →
              </a>
            </div>

            <p style="color: #475569; font-size: 15px; line-height: 1.6;">
              <strong>¿Qué viene ahora?</strong><br/>
              Te avisaremos cuando la beta privada esté lista. Recibirás acceso prioritario con un <strong>20% de descuento exclusivo</strong> para usuarios de la lista de espera.
            </p>
          </div>

          <div style="text-align: center; padding: 20px;">
            <p style="color: #94a3b8; font-size: 13px; margin: 0;">
              📧 Este email lo has recibido porque te uniste a la lista de espera de Coogni.<br/>
              <a href="https://coogni.com" style="color: #0d9488;">coogni.com</a> · hello@coogni.com
            </p>
          </div>
        </div>
      `,
    })

    // Log subscriber for reference (in production you'd save to a database)
    console.log(`[Coogni Waitlist] New subscriber: ${email} | Name: ${name || 'N/A'} | Profile: ${profile || 'N/A'}`)

    return NextResponse.json({
      success: true,
      message: 'Te has unido correctamente a la lista de espera. Revisa tu email.',
    })
  } catch (error) {
    console.error('[Coogni Waitlist] Error:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud. Inténtalo de nuevo.' },
      { status: 500 }
    )
  }
}
