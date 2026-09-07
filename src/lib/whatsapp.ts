// Cambia este número por el WhatsApp de la marca, incluyendo el prefijo del país.
export const WHATSAPP_NUMBER = "34600000000";
export function getWhatsAppLink(message = "Hola, quiero consultar disponibilidad.") { return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }
