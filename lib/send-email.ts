export interface EmailPayload {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}

export async function sendEmail(payload: EmailPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || "Error al enviar el mensaje" };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Error de conexión. Por favor intentá de nuevo." };
  }
}
