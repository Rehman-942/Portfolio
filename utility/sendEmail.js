import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_mm5j6sq";
const TEMPLATE_ID = "template_m5guv9i";
const PUBLIC_KEY  = "v_cio44FtDNs83qLs";

/**
 * Sends a contact form via EmailJS.
 * @param {React.RefObject} formRef - ref attached to the <form> element
 * @returns {Promise<"success"|"error">}
 */
export async function sendContactEmail(formRef) {
  try {
    const result = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    );
    console.log("Email sent:", result.text);
    return "success";
  } catch (error) {
    console.error("EmailJS error:", error);
    return "error";
  }
}
