import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, whatsapp, message } = await request.json();

    if (!name || !email || !whatsapp || !message) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 });
    }

    // If no API key configured, still return success (form UI demo)
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_placeholder") {
      console.log("Contact form submission (no RESEND_API_KEY configured):", { name, email, whatsapp, message });
      return NextResponse.json({ success: true, message: "Mensaje registrado (modo demo)" });
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, sans-serif; background: #0a0a0a; color: #fff; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
          .header { background: linear-gradient(135deg, #111827, #000); border: 1px solid rgba(200,240,0,0.2); border-radius: 16px; padding: 32px; margin-bottom: 24px; text-align: center; }
          .logo { font-size: 28px; font-weight: 900; color: #fff; letter-spacing: -1px; }
          .logo span { font-weight: 300; color: #c8f000; }
          .tagline { color: #a1a1aa; font-size: 13px; margin-top: 6px; }
          .card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px; margin-bottom: 16px; }
          .label { color: #a1a1aa; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
          .value { color: #fff; font-size: 15px; line-height: 1.6; }
          .badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(200,240,0,0.1); border: 1px solid rgba(200,240,0,0.2); border-radius: 99px; padding: 4px 12px; font-size: 11px; font-weight: 700; color: #c8f000; text-transform: uppercase; letter-spacing: 0.1em; }
          .dot { width: 6px; height: 6px; border-radius: 50%; background: #c8f000; }
          .footer { text-align: center; color: #a1a1aa; font-size: 12px; margin-top: 32px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">atrae<span>Lab</span></div>
            <div class="tagline">Encendé tu Demanda</div>
            <div style="margin-top:16px">
              <span class="badge"><span class="dot"></span>Nuevo lead de auditoría</span>
            </div>
          </div>

          <div class="card">
            <div class="label">Nombre</div>
            <div class="value">${name}</div>
          </div>

          <div class="card">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${email}" style="color:#c8f000">${email}</a></div>
          </div>

          <div class="card">
            <div class="label">WhatsApp</div>
            <div class="value"><a href="https://wa.me/${whatsapp.replace(/\D/g, '')}" style="color:#c8f000">${whatsapp}</a></div>
          </div>

          <div class="card">
            <div class="label">Mensaje</div>
            <div class="value">${message}</div>
          </div>

          <div class="footer">
            <p>© ${new Date().getFullYear()} AtraeLab · <a href="https://atraelab.com" style="color:#c8f000">atraelab.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "AtraeLab <noreply@atraelab.com>",
      to: [process.env.CONTACT_EMAIL || "hola@atraelab.com"],
      replyTo: email,
      subject: `🚀 Nuevo lead: ${name} — Auditoría AtraeLab`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 });
    }

    // Send confirmation to user
    await resend.emails.send({
      from: "AtraeLab <noreply@atraelab.com>",
      to: [email],
      subject: "✅ Recibimos tu solicitud — AtraeLab",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, sans-serif; background: #0a0a0a; color: #fff; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { background: linear-gradient(135deg, #111827, #000); border: 1px solid rgba(200,240,0,0.2); border-radius: 16px; padding: 40px; text-align: center; margin-bottom: 24px; }
            .logo { font-size: 32px; font-weight: 900; color: #fff; letter-spacing: -1px; }
            .logo span { font-weight: 300; color: #c8f000; }
            h2 { color: #fff; font-size: 22px; margin: 0 0 12px; }
            p { color: #a1a1aa; font-size: 15px; line-height: 1.6; }
            .btn { display: inline-block; background: #c8f000; color: #000; font-weight: 900; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; padding: 14px 32px; border-radius: 99px; text-decoration: none; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">atrae<span>Lab</span></div>
            </div>
            <h2>¡Hola ${name}!</h2>
            <p>Recibimos tu solicitud de auditoría gratuita. Un especialista de nuestro equipo se va a poner en contacto con vos en las próximas 24 horas hábiles.</p>
            <p>Mientras tanto, podés explorar nuestro CRM LeadShield para ver cómo organizamos tus futuros leads.</p>
            <a href="https://leads.atraelab.com" class="btn">Ver LeadShield CRM →</a>
            <p style="margin-top: 32px; font-size: 12px; color: #666">© ${new Date().getFullYear()} AtraeLab · atraelab.com</p>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
