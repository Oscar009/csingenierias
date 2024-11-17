interface EmailData {
  email: string;
  subject: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendEmail = async ({ email, subject, message }: EmailData): Promise<EmailResponse> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, subject, message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, message: errorData.error };
    }

    const data = await response.json();
    return { success: true, message: data.message };
  } catch (error) {
    console.error("Error en la solicitud de envío de correo:", error);
    return { success: false, message: "Error en la comunicación con el servidor." };
  }
};
