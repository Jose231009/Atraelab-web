/**
 * Meta Conversions API (CAPI) — server-side event sending
 * Docs: https://developers.facebook.com/docs/marketing-api/conversions-api
 *
 * Complementa el pixel del browser para mejorar el matching y el tracking
 * en entornos con bloqueadores de ads o iOS 14+ restrictions.
 */

import crypto from "crypto";

const PIXEL_ID = "1661949861742181";
const API_VERSION = "v21.0";
const CAPI_URL = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`;

/** SHA-256 hash de un string, normalizado a minúsculas y sin espacios */
function sha256(value: string): string {
  return crypto
    .createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
}

/** SHA-256 hash de un teléfono — solo dígitos */
function sha256Phone(phone: string): string {
  return crypto
    .createHash("sha256")
    .update(phone.replace(/\D/g, ""))
    .digest("hex");
}

export interface MetaLeadEventData {
  email?: string;
  phone?: string;
  /** IP del cliente (x-forwarded-for header) */
  clientIp?: string;
  /** User-Agent del cliente */
  userAgent?: string;
  /** Datos de negocio opcionales */
  customData?: Record<string, unknown>;
}

/**
 * Envía un evento `Lead` a la Meta Conversions API.
 * Se llama desde el servidor (API Route) — nunca expone el token al cliente.
 * No lanza error si falta el token o si la llamada falla (no rompe el flujo principal).
 */
export async function sendMetaLeadEvent(data: MetaLeadEventData): Promise<void> {
  const token = process.env.META_ACCESS_TOKEN;

  if (!token) {
    console.warn("[Meta CAPI] META_ACCESS_TOKEN no configurado — evento omitido");
    return;
  }

  // Construir user_data con datos hasheados
  const user_data: Record<string, unknown> = {};
  if (data.email) user_data.em = [sha256(data.email)];
  if (data.phone) user_data.ph = [sha256Phone(data.phone)];
  if (data.clientIp) user_data.client_ip_address = data.clientIp;
  if (data.userAgent) user_data.client_user_agent = data.userAgent;

  const event = {
    event_name: "Lead",
    event_time: Math.floor(Date.now() / 1000),
    action_source: "website",
    event_source_url: "https://atraelab.com",
    user_data,
    custom_data: {
      content_name: "Diagnóstico gratuito",
      content_category: "network_marketing",
      ...(data.customData ?? {}),
    },
  };

  try {
    const res = await fetch(CAPI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        data: JSON.stringify([event]),
        access_token: token,
      }),
    });

    const json = await res.json();

    if (!res.ok) {
      console.error("[Meta CAPI] Error al enviar evento:", json);
    } else {
      console.log(`[Meta CAPI] Lead enviado — events_received: ${json.events_received}`);
    }
  } catch (err) {
    console.error("[Meta CAPI] Fetch error:", err);
  }
}
