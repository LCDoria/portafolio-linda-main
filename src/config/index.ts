import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Linda Doria — Psicóloga",
  author: "Linda Doria Ramirez",
  description:
    "Psicóloga en el area clínica con experiencia de un año en el Hospital Universidad del Norte.",
  lang: "en",
  siteLogo: "/linda-big.jpg",
  navLinks: [
    {text: "Experiencia", href: "#experience"},
    { text: "Proyectos", href: "#projects" },
    { text: "Certificados", href: "#certificates" },
    { text: "Acerca de mi", href: "#about" },
  ],
  socialLinks: [
        { text: "LinkedIn", href: "https://www.linkedin.com/in/linda-doria/" },
    { text: "Instagram", href: "https://www.instagram.com/psi.linda.doria?igsh=amFpbWdvbTRqcjRw" },
    { text: "Correo", href: "mailto:lindadoria013@gmail.com" },
    { text: "WhatsApp", href: "https://wa.me/qr/HG3AW6FGAAWCA1" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Linda Doria",
    specialty: "Psicóloga",
    summary:
      "Psicóloga con enfoque clínico, un año de experiencia en el Hospital Universidad del Norte y habilidades en evaluación, diagnóstico e intervención psicológica en población infantil, adolescente y adulta.",
    email: "lindadoria013@gmail.com",
  },
  experience: [
    {
      company: "Hospital Universidad del Norte",
      position: "Psicóloga pasante",
      startDate: "Enero 2025",
      endDate: "Diciebmre 2025",
      summary: [
        "Realicé entrevistas de admisión y procesos de evaluación psicológica clínica, contribuyendo a la identificación de necesidades, formulación de hipótesis clínicas y orientación de planes de intervención.",
        "Apliqué técnicas e instrumentos de evaluación psicológica y gestioné historias clínicas e informes, garantizando la confidencialidad de la información, el cumplimiento ético y la calidad de los registros clínicos.",
        "Participé en equipos interdisciplinarios para el análisis y seguimiento de casos clínicos, apoyando la construcción de planes de atención integral, el acompañamiento terapéutico y la toma de decisiones clínicas.",
      ],
    },
    {
      company: "English4Kids",
      position: "Profesora de Inglés",
      startDate: "Enero 2025",
      endDate: "Octubre 2025",
      summary: [
        "Diseñé e implementé actividades psicoeducativas orientadas al fortalecimiento de habilidades cognitivas, emocionales y sociales en población infantil, promoviendo el desarrollo integral y la adaptación a diferentes contextos de aprendizaje.",
        "Fomenté competencias socioemocionales, habilidades comunicativas y conductas adaptativas mediante actividades estructuradas que contribuyeron al aprendizaje significativo y al fortalecimiento de factores protectores.",
      ],
    },
    {
      company: "Independiente",
      position: "Profesora de inglés",
      startDate: "Enero de 2023",
      endDate: "Actual",
      summary:
        "Planifiqué e impartí clases de inglés personalizadas, adaptando estrategias pedagógicas a las necesidades de cada estudiante y promoviendo el desarrollo de habilidades comunicativas, cognitivas y socioemocionales en un ambiente de aprendizaje positivo.",
    },
  ],
  projects: [
    {
      name: "Hogar Infantil La Playa",
      summary: "Intervención con el objetivo de de promover el seguimiento de instrucciones en el grupo de Prejardín a través de actividades dinámicas que estimulen la atención y el respeto por las normas del aula.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/educativa.png",
    },
    {
      name: "Sonríe sin miedo",
      summary: "Campaña de la salud para conmemorar el día del odontólogo desde una mirada innovadora y reflexiva, uniendo la temática lúdica de Halloween con la promoción de la autoaceptación y la autoestima.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/sonrie-sin-miedo.png",
    },
    {
      name: "Jornada de salud mental",
      summary: "Evento educativo sobre la importancia de la salud mental en la población infantil y adolescente, se proporciocó información sobre la promoción de la salud mental y lineas de ayuda.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/salud-mental.png",
    },
  ],
  certificates: [
    {
      name: "Curso de Atención Integral a Víctimas de Violencia Sexual",
      image: "/violencia-sexual.png",
      
    },
    {
      name: "Curso Atención Integral a Víctimas de Violencia Intrafamiliar y de Género",
      image: "/violencia-intrafamiliar.png",
     }, 
     {
      name: "Protocolos de Atención Integral a Víctimas de Quemadura con Agentes Químicos",
      image: "/victimas-quimicos.png",
     }, 
     {
      name: "Curso Primeros Auxilios Psicológicos",
      image: "/pap.png",
      },  
     {
      name: "Curso de Acompañamiento en Proceso de Duelo con Énfasis en Terapia Emocional",
      image: "/duelo.png",
     },
  ],
  about: {
    description: `
      Hola, soy Linda Doria Ramirez, psicóloga con enfoque clínico y experiencia en evaluación, diagnóstico e intervención psicológica en población infantil, adolescente y adulta. Con experiencia en la aplicación, corrección e interpretación de pruebas psicométricas y cognitivas, incluyendo 16PF-5, WISC, WAIS y escalas de depresión y ansiedad de Beck, como apoyo a los procesos de valoración integral y formulación clínica. Cuento con tarjeta profesional, inscripción en RETHUS y conocimientos en normatividad vigente aplicable al ejercicio profesional.
    `,
    image: "/linda-big.jpg",
  },
};

// #44c874
