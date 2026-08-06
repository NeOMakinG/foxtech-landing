"use client";

import { useEffect, useState } from "react";

const content = {
  ca: {
    nav: ["Serveis", "Experiència", "Mètode"], contact: "Parlem del teu projecte",
    eyebrow: "Tecnologia creada a Andorra",
    titleA: "Construïm productes", titleB: "digitals que avancen.",
    intro: "Dissenyem i desenvolupem webs, aplicacions mòbils i solucions amb agents d’IA — per als nostres productes i per a clients amb ambició.",
    cta: "Iniciar un projecte", explore: "Descobrir FOXTECH", badge: "13+ anys d’experiència",
    servicesKicker: "QUÈ FEM", servicesTitle: "De la idea a un producte que funciona.",
    servicesIntro: "Un equip tecnològic, una visió de producte completa i el nivell d’exigència que apliquem a les nostres pròpies plataformes.",
    services: [
      ["01", "Webs d’alt rendiment", "Experiències web ràpides, accessibles i preparades per convertir visites en oportunitats."],
      ["02", "Aplicacions mòbils", "Aplicacions iOS i Android intuïtives, robustes i pensades per créixer amb el teu negoci."],
      ["03", "Agents d’intel·ligència artificial", "Agents d’IA que automatitzen processos, connecten coneixement i amplifiquen el teu equip."],
      ["04", "Productes propis", "Creem, llancem i fem evolucionar les nostres plataformes. Pensem com a partners, no només com a proveïdors."],
    ],
    proofKicker: "EXPERIÈNCIA REAL", proofTitle: "Més de tretze anys convertint complexitat en productes simples.",
    proofText: "Combinem enginyeria, producte i IA per prendre bones decisions des del primer dia. Menys soroll. Més impacte.",
    stats: [["13+", "anys construint"], ["360°", "visió de producte"], ["AI", "expertesa aplicada"]],
    aiKicker: "AI NATIVE", aiTitle: "La IA no és un afegit. És una nova manera de construir.",
    aiText: "Dissenyem agents que entenen el context, executen tasques i s’integren amb les eines del teu negoci. Solucions útils, controlables i orientades a resultats.",
    aiPoints: ["Automatització de processos", "Assistents de coneixement", "Integracions i fluxos intel·ligents"],
    processKicker: "COM TREBALLEM", processTitle: "Claredat a cada etapa.",
    steps: [["01", "Entendre", "Objectius, usuaris i oportunitat."], ["02", "Dissenyar", "Experiència, arquitectura i prototip."], ["03", "Construir", "Desenvolupament iteratiu i exigent."], ["04", "Evolucionar", "Mesura, aprenentatge i creixement."]],
    ctaKicker: "TENS UNA IDEA?", ctaTitle: "Fem que passi.", ctaText: "Explica’ns el teu repte. Nosaltres aportem la tecnologia, l’experiència i l’impuls per convertir-lo en realitat.", ctaButton: "Escriu-nos",
    footer: "Tecnologia, producte i intel·ligència artificial des d’Andorra.", rights: "Tots els drets reservats.",
  },
  fr: {
    nav: ["Services", "Expertise", "Méthode"], contact: "Parlons de votre projet",
    eyebrow: "Technologie créée en Andorre", titleA: "Nous construisons des produits", titleB: "digitaux qui avancent.",
    intro: "Nous concevons et développons des sites web, des applications mobiles et des solutions d’agents IA — pour nos produits et pour des clients ambitieux.",
    cta: "Lancer un projet", explore: "Découvrir FOXTECH", badge: "13+ ans d’expertise",
    servicesKicker: "CE QUE NOUS FAISONS", servicesTitle: "De l’idée à un produit qui fonctionne.", servicesIntro: "Une équipe technologique, une vision produit complète et le même niveau d’exigence que pour nos propres plateformes.",
    services: [["01", "Sites web performants", "Des expériences web rapides, accessibles et conçues pour transformer les visites en opportunités."], ["02", "Applications mobiles", "Des applications iOS et Android intuitives, robustes et prêtes à évoluer avec votre activité."], ["03", "Agents d’intelligence artificielle", "Des agents IA qui automatisent les processus, relient les connaissances et décuplent votre équipe."], ["04", "Produits propriétaires", "Nous créons, lançons et faisons évoluer nos plateformes. Nous pensons en partenaires, pas seulement en prestataires."]],
    proofKicker: "EXPÉRIENCE CONCRÈTE", proofTitle: "Plus de treize ans à transformer la complexité en produits simples.", proofText: "Nous réunissons ingénierie, produit et IA pour prendre les bonnes décisions dès le premier jour. Moins de bruit. Plus d’impact.",
    stats: [["13+", "ans de création"], ["360°", "vision produit"], ["AI", "expertise appliquée"]],
    aiKicker: "AI NATIVE", aiTitle: "L’IA n’est pas un ajout. C’est une nouvelle façon de construire.", aiText: "Nous concevons des agents qui comprennent le contexte, exécutent des tâches et s’intègrent aux outils de votre entreprise. Des solutions utiles, maîtrisables et orientées résultats.", aiPoints: ["Automatisation des processus", "Assistants de connaissance", "Intégrations et flux intelligents"],
    processKicker: "NOTRE MÉTHODE", processTitle: "De la clarté à chaque étape.", steps: [["01", "Comprendre", "Objectifs, utilisateurs et opportunité."], ["02", "Concevoir", "Expérience, architecture et prototype."], ["03", "Construire", "Développement itératif et exigeant."], ["04", "Faire évoluer", "Mesure, apprentissage et croissance."]],
    ctaKicker: "UNE IDÉE ?", ctaTitle: "Faisons-la avancer.", ctaText: "Parlez-nous de votre défi. Nous apportons la technologie, l’expérience et l’élan pour le transformer en réalité.", ctaButton: "Nous écrire",
    footer: "Technologie, produit et intelligence artificielle depuis l’Andorre.", rights: "Tous droits réservés.",
  },
  es: {
    nav: ["Servicios", "Experiencia", "Método"], contact: "Hablemos de tu proyecto", eyebrow: "Tecnología creada en Andorra", titleA: "Construimos productos", titleB: "digitales que avanzan.", intro: "Diseñamos y desarrollamos webs, aplicaciones móviles y soluciones con agentes de IA — para nuestros productos y para clientes ambiciosos.", cta: "Iniciar un proyecto", explore: "Descubrir FOXTECH", badge: "13+ años de experiencia",
    servicesKicker: "QUÉ HACEMOS", servicesTitle: "De la idea a un producto que funciona.", servicesIntro: "Un equipo tecnológico, una visión de producto completa y la misma exigencia que aplicamos a nuestras propias plataformas.", services: [["01", "Webs de alto rendimiento", "Experiencias web rápidas, accesibles y preparadas para convertir visitas en oportunidades."], ["02", "Aplicaciones móviles", "Aplicaciones iOS y Android intuitivas, robustas y pensadas para crecer con tu negocio."], ["03", "Agentes de inteligencia artificial", "Agentes IA que automatizan procesos, conectan conocimiento y multiplican tu equipo."], ["04", "Productos propios", "Creamos, lanzamos y evolucionamos nuestras plataformas. Pensamos como partners, no solo como proveedores."]],
    proofKicker: "EXPERIENCIA REAL", proofTitle: "Más de trece años convirtiendo complejidad en productos simples.", proofText: "Unimos ingeniería, producto e IA para tomar buenas decisiones desde el primer día. Menos ruido. Más impacto.", stats: [["13+", "años construyendo"], ["360°", "visión de producto"], ["AI", "experiencia aplicada"]],
    aiKicker: "AI NATIVE", aiTitle: "La IA no es un añadido. Es una nueva forma de construir.", aiText: "Diseñamos agentes que entienden el contexto, ejecutan tareas y se integran con las herramientas de tu negocio. Soluciones útiles, controlables y orientadas a resultados.", aiPoints: ["Automatización de procesos", "Asistentes de conocimiento", "Integraciones y flujos inteligentes"],
    processKicker: "CÓMO TRABAJAMOS", processTitle: "Claridad en cada etapa.", steps: [["01", "Entender", "Objetivos, usuarios y oportunidad."], ["02", "Diseñar", "Experiencia, arquitectura y prototipo."], ["03", "Construir", "Desarrollo iterativo y exigente."], ["04", "Evolucionar", "Medición, aprendizaje y crecimiento."]],
    ctaKicker: "¿TIENES UNA IDEA?", ctaTitle: "Hagamos que avance.", ctaText: "Cuéntanos tu reto. Nosotros aportamos la tecnología, la experiencia y el impulso para convertirlo en realidad.", ctaButton: "Escríbenos", footer: "Tecnología, producto e inteligencia artificial desde Andorra.", rights: "Todos los derechos reservados.",
  },
  en: {
    nav: ["Services", "Expertise", "Method"], contact: "Let’s talk about your project", eyebrow: "Technology crafted in Andorra", titleA: "We build digital products", titleB: "that move forward.", intro: "We design and develop websites, mobile apps and AI agent solutions — for our own products and for ambitious clients.", cta: "Start a project", explore: "Discover FOXTECH", badge: "13+ years of expertise",
    servicesKicker: "WHAT WE DO", servicesTitle: "From idea to a product that works.", servicesIntro: "One technology team, complete product vision and the same high standards we apply to our own platforms.", services: [["01", "High-performance websites", "Fast, accessible web experiences built to turn visits into opportunities."], ["02", "Mobile applications", "Intuitive, robust iOS and Android apps designed to grow with your business."], ["03", "Artificial intelligence agents", "AI agents that automate processes, connect knowledge and amplify your team."], ["04", "Our own products", "We create, launch and evolve our platforms. We think like partners, not just providers."]],
    proofKicker: "REAL EXPERIENCE", proofTitle: "Over thirteen years turning complexity into simple products.", proofText: "We bring engineering, product and AI together to make good decisions from day one. Less noise. More impact.", stats: [["13+", "years building"], ["360°", "product vision"], ["AI", "applied expertise"]],
    aiKicker: "AI NATIVE", aiTitle: "AI isn’t an add-on. It’s a new way to build.", aiText: "We design agents that understand context, execute tasks and integrate with your business tools. Useful, controllable solutions built for results.", aiPoints: ["Process automation", "Knowledge assistants", "Smart integrations and workflows"],
    processKicker: "HOW WE WORK", processTitle: "Clarity at every stage.", steps: [["01", "Understand", "Goals, users and opportunity."], ["02", "Design", "Experience, architecture and prototype."], ["03", "Build", "Rigorous, iterative development."], ["04", "Evolve", "Measurement, learning and growth."]],
    ctaKicker: "GOT AN IDEA?", ctaTitle: "Let’s move it forward.", ctaText: "Tell us about your challenge. We bring the technology, experience and momentum to make it real.", ctaButton: "Write to us", footer: "Technology, product and artificial intelligence from Andorra.", rights: "All rights reserved.",
  },
};

type Lang = keyof typeof content;

function detectBrowserLang(): Lang {
  const supportedLanguages = Object.keys(content) as Lang[];
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const browserLanguage of browserLanguages) {
    const language = browserLanguage.toLowerCase().split("-")[0] as Lang;
    if (supportedLanguages.includes(language)) return language;
  }

  return "fr";
}

function Logo() {
  return <a href="#top" className="logo" aria-label="FOXTECH home"><span>FOXTECH<small>SLU</small></span></a>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  useEffect(() => {
    const saved = localStorage.getItem("foxtech-lang") as Lang | null;
    const initialLang = saved && content[saved] ? saved : detectBrowserLang();
    document.documentElement.lang = initialLang;
    const updateLanguage = window.setTimeout(() => setLang(initialLang), 0);
    return () => window.clearTimeout(updateLanguage);
  }, []);
  const changeLang = (next: Lang) => { setLang(next); localStorage.setItem("foxtech-lang", next); document.documentElement.lang = next; };
  const t = content[lang];
  return <main id="top">
    <nav><Logo /><div className="navlinks"><a href="#services">{t.nav[0]}</a><a href="#expertise">{t.nav[1]}</a><a href="#method">{t.nav[2]}</a></div><div className="navend"><label className="lang"><span className="sr-only">Language</span><select value={lang} onChange={e => changeLang(e.target.value as Lang)} aria-label="Choose language"><option value="ca">CA</option><option value="fr">FR</option><option value="es">ES</option><option value="en">EN</option></select></label><a className="navcta" href="mailto:contact@foxtechslu.com">{t.contact} <span>↗</span></a></div></nav>

    <section className="hero"><div className="gridfx" /><div className="orb orb1"/><div className="orb orb2"/><div className="hero-copy"><p className="kicker"><span />{t.eyebrow}</p><h1>{t.titleA}<br/><em>{t.titleB}</em></h1><p className="lede">{t.intro}</p><div className="hero-actions"><a className="button primary" href="mailto:contact@foxtechslu.com?subject=Projet%20avec%20FOXTECH">{t.cta}<span>↗</span></a><a className="textlink" href="#services">{t.explore}<span>↓</span></a></div></div><div className="hero-mark" aria-hidden="true"><div className="core">FX</div><div className="ring r1"/><div className="ring r2"/><div className="ring r3"/><span className="sat s1"/><span className="sat s2"/><span className="sat s3"/><p>{t.badge}</p></div></section>

    <div className="ticker" aria-hidden="true"><div>WEB DEVELOPMENT <b>◆</b> MOBILE APPS <b>◆</b> AI AGENTS <b>◆</b> PRODUCT STRATEGY <b>◆</b> WEB DEVELOPMENT <b>◆</b> MOBILE APPS <b>◆</b> AI AGENTS</div></div>

    <section id="services" className="section services"><header className="section-head"><div><p className="kicker orange">{t.servicesKicker}</p><h2>{t.servicesTitle}</h2></div><p>{t.servicesIntro}</p></header><div className="service-grid">{t.services.map(([num,title,desc], index) => <article key={num}><div className="service-top"><span>{num}</span><b>↗</b></div><img className="service-illustration" src={["/service-web.png","/service-mobile.png","/service-ai.png","/service-products.png"][index]} alt="" loading="lazy" /><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section id="expertise" className="proof"><div className="proof-copy"><p className="kicker"><span />{t.proofKicker}</p><h2>{t.proofTitle}</h2><p>{t.proofText}</p></div><div className="stats">{t.stats.map(([n,l])=><div key={n}><strong>{n}</strong><span>{l}</span></div>)}</div></section>

    <section className="section ai"><div className="ai-visual" aria-hidden="true"><img className="ai-illustration" src="/ai-expertise.png" alt="" loading="lazy" /><div className="glow"/></div><div className="ai-copy"><p className="kicker orange">{t.aiKicker}</p><h2>{t.aiTitle}</h2><p>{t.aiText}</p><ul>{t.aiPoints.map(x=><li key={x}><span>✓</span>{x}</li>)}</ul></div></section>

    <section id="method" className="section method"><p className="kicker orange">{t.processKicker}</p><h2>{t.processTitle}</h2><div className="steps">{t.steps.map(([n,title,desc], index)=><article key={n}><span>{n}</span><div className={`method-icon icon-${index + 1}`} aria-hidden="true"><i/><i/><i/><b/></div><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="cta-section"><div className="cta-noise"/><div><p className="kicker"><span />{t.ctaKicker}</p><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div><a className="button light" href="mailto:contact@foxtechslu.com"><span>{t.ctaButton}</span><b>↗</b></a></section>
    <footer><div><Logo /><p>{t.footer}</p></div><div className="footer-contact"><span>CONTACT</span><a href="mailto:contact@foxtechslu.com">contact@foxtechslu.com ↗</a></div><div className="copyright">© {new Date().getFullYear()} FOXTECH SLU · ANDORRA<br/>{t.rights}</div></footer>
  </main>;
}
