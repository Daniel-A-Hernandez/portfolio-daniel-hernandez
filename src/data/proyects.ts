import taco_express from '@/assets/taco-express.jpg';
import frame_logic from '@/assets/F&L-banner.png'
import KEI from "@/assets/KEI.png"



export const proyects = [
    {
        img:KEI.src,
        name: "Rally Latinoamericano de Innovación 2025",
        description: "Proyecto ganador del primer lugar en impacto social en el Rally Latinoamericano de Innovación 2025 (sede UTEC).",
        link:"https://daniel-a-hernandez.github.io/codex-KEI/",
        tecnologies: ['HTML', 'CSS', 'JS']
    },
    {
        img:taco_express.src,
        name: "Restaurante Taco Express (Cliente Real)",
        description: "Sistema de pedidos que genera órdenes automáticas de WhatsApp desde un menú digital.",
        link:"https://taco-express-web-site.pages.dev/",
        tecnologies:['ASTRO','TAILWIND','TYPESCRIPT', 'SUPABASE','Preact']
    },
    {
        img:frame_logic.src,
        name: "Frame & Logic",
        description: "Proyecto independiente desarrollado de principio a fin, desde la conceptualización y el diseño hasta su implementación.",
        link:"https://framelogicsv.com",
        tecnologies: ['Astro', 'Tailwind', 'Typescript', 'Preact','Cloudflare']
    }
    
]