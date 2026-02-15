// ===== i18n content =====
const i18n = {
    en: {
        nav: { impact: 'Impact', services: 'Services', process: 'Process', stack: 'Stack', contact: 'Contact' },
        hero: {
            badge: 'Available • Remote',
            title1: 'Cloud & infrastructure',
            title2: 'that scales without friction.',
            tagline: 'Scalable architecture, automated CI/CD and reliable operations. <strong>I adapt to your team\'s stack and workflow.</strong>',
            ctaEmail: 'Email',
            ctaCopy: 'Copy message',
        },
        metric: { instances: 'Instances', throughput: 'Throughput', uptime: 'Uptime', availability: 'Availability', immediate: 'Immediate', response: 'Response' },
        impact: {
            title: 'Production impact',
            desc: 'Measurable results in infrastructure and operations.',
            card1: { title: 'CI/CD & Automation', item1: '60% deployment time reduction', item2: 'Automated pipelines', item3: 'Infrastructure as code' },
            card2: { title: 'Reliability', item1: 'High availability in distributed environments', item2: 'Monitoring and alerting', item3: 'Postmortems and improvements' },
            card3: { title: 'Performance', item1: 'PostgreSQL optimization -35% latency', item2: 'Backend 20k+ req/5min', item3: 'Scaling without downtime' },
        },
        services: {
            title: 'Services',
            desc: 'Production-ready deliverables.',
            card1: { title: 'Cloud infrastructure', item1: 'AWS, GCP, Azure, multi-region', item2: 'Terraform, CloudFormation', item3: 'Networking and security' },
            card2: { title: 'CI/CD & DevOps', item1: 'Pipelines (GitHub Actions, Jenkins)', item2: 'Containers (Docker, K8s)', item3: 'Blue-green, canary' },
            card3: { title: 'Observability', item1: 'Logs, metrics, tracing', item2: 'Grafana, Prometheus, ELK', item3: 'Alerts and dashboards' },
            card4: { title: 'Migrations', item1: 'Legacy → containers', item2: 'On-prem → cloud', item3: 'Zero-downtime approach' },
        },
        teams: {
            title: 'For teams',
            desc: 'I adapt to your stack, style and deadlines.',
            feat1: { title: 'Flexible collaboration', desc: 'Per project, per sprint or ongoing support.' },
            feat2: { title: 'Frictionless delivery', desc: 'Clear documentation, versioned IaC, direct handoff.' },
            feat3: { title: 'I accelerate the flow', desc: 'I automate the repeatable and reduce time without lowering quality.' },
            diffs: { title: 'Differentiators', item1: 'Fast delivery without losing quality', item2: 'I adapt to the team\'s stack', item3: 'Focus on reliability and costs', item4: 'Clean, maintainable code' },
        },
        process: {
            title: 'Process',
            desc: 'Simple, fast and controlled.',
            step1: { title: 'Brief', desc: 'Objective, current architecture, requirements, deadline.' },
            step2: { title: 'First deliverable', desc: 'In 24–48h I send a proposal or usable PoC.' },
            step3: { title: 'Iteration', desc: 'Quick adjustments with clear feedback.' },
            step4: { title: 'Delivery', desc: 'Deploy + documentation + handoff.' },
        },
        faq: {
            title: 'FAQ',
            desc: 'Quick answers.',
            q1: 'Remote or on-site?',
            a1: 'Remote. I adapt to your schedule and tools (Slack, Jira, etc.).',
            q2: 'How do you work with teams?',
            a2: 'Per project or per sprint. I send clear updates, iterate quickly and deliver production-ready.',
            q3: 'Which cloud platforms do you manage?',
            a3: 'Mainly AWS and Azure, also GCP. Terraform for multi-cloud when applicable.',
        },
        stack: { title: 'Stack', desc: 'Technologies used in real projects. I adapt to the team\'s stack.', note: 'If the team uses a different stack, I adapt.' },
        contact: { title: 'Contact', desc: 'I respond quickly.', email: 'Email', open: 'Open', send: 'Send' },
        copied: 'Copied!',
    },
    es: {
        nav: { impact: 'Impacto', services: 'Servicios', process: 'Proceso', stack: 'Stack', contact: 'Contacto' },
        hero: {
            badge: 'Disponible • Remoto',
            title1: 'Cloud & infraestructura',
            title2: 'que escala sin fricción.',
            tagline: 'Arquitectura escalable, CI/CD automatizado y operaciones confiables. <strong>Me adapto al stack y flujo del equipo.</strong>',
            ctaEmail: 'Correo',
            ctaCopy: 'Copiar mensaje',
        },
        metric: { instances: 'Instancias', throughput: 'Throughput', uptime: 'Uptime', availability: 'Disponibilidad', immediate: 'Inmediata', response: 'Respuesta' },
        impact: {
            title: 'Impacto en producción',
            desc: 'Resultados medibles en infraestructura y operaciones.',
            card1: { title: 'CI/CD & Automatización', item1: 'Reducción 60% tiempo de deploy', item2: 'Pipelines automatizados', item3: 'Infraestructura como código' },
            card2: { title: 'Confiabilidad', item1: 'Alta disponibilidad en entornos distribuidos', item2: 'Monitoreo y alerting', item3: 'Postmortems y mejoras' },
            card3: { title: 'Performance', item1: 'Optimización PostgreSQL -35% latencia', item2: 'Backend 20k+ req/5min', item3: 'Scaling sin downtime' },
        },
        services: {
            title: 'Servicios',
            desc: 'Entregables listos para producción.',
            card1: { title: 'Infraestructura cloud', item1: 'AWS, GCP, Azure, multi-región', item2: 'Terraform, CloudFormation', item3: 'Networking y seguridad' },
            card2: { title: 'CI/CD & DevOps', item1: 'Pipelines (GitHub Actions, Jenkins)', item2: 'Contenedores (Docker, K8s)', item3: 'Blue-green, canary' },
            card3: { title: 'Observabilidad', item1: 'Logs, métricas, tracing', item2: 'Grafana, Prometheus, ELK', item3: 'Alertas y dashboards' },
            card4: { title: 'Migraciones', item1: 'Legacy → contenedores', item2: 'On-prem → cloud', item3: 'Método sin downtime' },
        },
        teams: {
            title: 'Para equipos',
            desc: 'Me adapto a tu stack, estilo y deadlines.',
            feat1: { title: 'Colaboración flexible', desc: 'Por proyecto, por sprint o apoyo continuo.' },
            feat2: { title: 'Entrega sin fricción', desc: 'Documentación clara, IaC versionado, handoff directo.' },
            feat3: { title: 'Acelero el flujo', desc: 'Automatizo lo repetible y reduzco tiempos sin bajar calidad.' },
            diffs: { title: 'Diferenciales', item1: 'Entrega rápida sin perder calidad', item2: 'Me adapto al stack del equipo', item3: 'Enfoque en confiabilidad y costos', item4: 'Código limpio + mantenible' },
        },
        process: {
            title: 'Proceso',
            desc: 'Simple, rápido y controlado.',
            step1: { title: 'Brief', desc: 'Objetivo, arquitectura actual, requisitos, deadline.' },
            step2: { title: 'Primer avance', desc: 'En 24–48h mando propuesta o PoC usable.' },
            step3: { title: 'Iteración', desc: 'Ajustes rápidos con feedback claro.' },
            step4: { title: 'Entrega', desc: 'Deploy + documentación + handoff.' },
        },
        faq: {
            title: 'FAQ',
            desc: 'Respuestas rápidas.',
            q1: '¿Remoto o presencial?',
            a1: 'Remoto. Me adapto a tu horario y herramientas (Slack, Jira, etc.).',
            q2: '¿Cómo trabajas con equipos?',
            a2: 'Por proyecto o por sprint. Envío avances claros, itero rápido y entrego listo para producción.',
            q3: '¿Qué cloud platforms manejas?',
            a3: 'AWS y Azure principalmente, también GCP. Terraform para multi-cloud cuando aplica.',
        },
        stack: { title: 'Stack', desc: 'Tecnologías usadas en proyectos reales. Me adapto al stack del equipo.', note: 'Si el equipo usa otro stack, me adapto.' },
        contact: { title: 'Contacto', desc: 'Respondo rápido.', email: 'Correo', open: 'Abrir', send: 'Enviar' },
        copied: '¡Copiado!',
    },
};

// Get nested value: "impact.card1.item1" -> i18n.en.impact.card1.item1
function getNested(obj, path) {
    return path.split('.').reduce((o, k) => o?.[k], obj);
}

// ===== Language switch =====
function setLang(lang) {
    const main = document.querySelector('main');
    const isInitial = !document.body.dataset.langInitialized;
    if (isInitial) document.body.dataset.langInitialized = '1';

    const applyLang = () => {
        const t = i18n[lang] || i18n.en;
        document.documentElement.lang = lang === 'es' ? 'es' : 'en';

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.textContent.trim() === (lang === 'es' ? 'ES' : 'EN'));
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = getNested(t, key);
            if (val != null) el.textContent = val;
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const val = getNested(t, key);
            if (val != null) el.innerHTML = val;
        });
    };

    if (isInitial) {
        applyLang();
        document.body.dataset.langInitialized = '1';
        return;
    }

    main?.classList.add('lang-switching');
    setTimeout(() => {
        applyLang();
        main?.classList.remove('lang-switching');
    }, 180);
}

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ===== Copy message =====
const MESSAGE = {
    es: 'Hola! Busco soporte en DevOps / Cloud. ¿Tienes disponibilidad para una breve llamada?',
    en: 'Hi! I\'m looking for DevOps / Cloud support. Do you have availability for a quick call?',
};

function copyMessage() {
    const lang = document.querySelector('.lang-btn.active')?.textContent?.trim()?.toLowerCase().includes('en') ? 'en' : 'es';
    const text = MESSAGE[lang];
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.btn-ghost');
        if (btn) {
            const original = btn.getAttribute('data-i18n') ? (i18n[lang]?.hero?.ctaCopy ?? btn.textContent) : btn.textContent;
            btn.textContent = i18n[lang]?.copied ?? (lang === 'es' ? '¡Copiado!' : 'Copied!');
            setTimeout(() => { btn.textContent = original; }, 1500);
        }
    }).catch(() => {});
}

// ===== FAQ accordion =====
function toggleFaq(button) {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

// ===== Scroll reveal =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.section').forEach(el => observer.observe(el));

// Init – English first
setLang('en');
