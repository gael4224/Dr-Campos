// Número de WhatsApp (con código de país, sin +). Ejemplo: 5215512345678
export const WHATSAPP_NUMBER = "5215512345678";

export function whatsappUrl(mensaje: string): string {
  const text = encodeURIComponent(mensaje);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// Ubicación (hospital y consultorio en un solo lugar) y horarios
// Para el mapa: Google Maps → busca el lugar → Compartir → Insertar un mapa → copia la URL del iframe (src="...")
export const UBICACION = {
  nombre: "Hospital / Consultorio",
  direccion: "Av. Ejemplo 123, Col. Centro, Ciudad, CP 00000",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Ejemplo+123+Ciudad",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.381801724!2d-99.134722!3d19.432608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDgnMDQuMCJX!5e0!3m2!1ses!2smx!4v1234567890",
};

export const HORARIO_ATENCION = [
  "Lunes a Viernes: 9:00 - 14:00 y 16:00 - 19:00",
  "Sábados: 9:00 - 13:00",
  "Domingos y festivos: Cerrado",
];
