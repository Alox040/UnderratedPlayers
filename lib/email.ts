/**
 * Zentrale E-Mail-Abstraktion — für späteren Anschluss z. B. an Resend.
 * Kein Versand im MVP; Aufrufer bleiben schlank testbar.
 */

export type SendEmailInput = {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
};

export async function sendEmail(input: SendEmailInput): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    return;
  }

  // TODO: Resend (oder anderer Provider) anbinden, z. B.:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: process.env.EMAIL_FROM!, ... });
  void input;
}
