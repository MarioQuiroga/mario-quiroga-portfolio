(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
  }

  /* ───────────── i18n (EN is in the HTML, ES lives here) ───────────── */
  var ES = {
    "skip": "Saltar al contenido",
    "nav.work": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.stack": "Stack",
    "nav.contact": "Contacto",

    "hero.status": "Disponible para remoto · Argentina (UTC-3)",
    "hero.role": "Full Stack Engineer",
    "hero.lead":
      "Construyo y escalo sistemas en producción: <strong>backends event-driven</strong>, frontends en " +
      "<strong>React + TypeScript</strong> y <strong>agentes LLM</strong> que la gente realmente usa. " +
      "Fui Technical Leader del equipo de integraciones de Boti, el chatbot oficial de WhatsApp del Gobierno de la Ciudad de Buenos Aires.",
    "cta.contact": "Contactame",
    "cta.cv": "Descargar CV",

    "stats.years": "años llevando código a producción",
    "stats.convos": "conversaciones mensuales en Boti",
    "stats.partners": "partners de apuestas en un solo pipeline",
    "stats.team": "ingenieros liderados y mentoreados",

    "work.eyebrow": "Proyectos destacados",
    "work.title": "Problemas que resolví",
    "w1.meta": "Arquitectura",
    "w1.title": "Un pipeline en lugar de 100+ deploys",
    "w1.text":
      "Rediseñé el flujo de validación de apuestas: de un proceso síncrono por partner (un deploy por partner, " +
      "más de 100 corriendo en paralelo) a un único pipeline asíncrono y event-driven que atiende a más de 100 partners " +
      "en 4 plataformas de apuestas. Hoy los partners nuevos se suman por configuración, sin un deploy dedicado.",
    "w1.before": "Antes",
    "w1.after": "Después",
    "w1.beforeNote": "100+ deploys",
    "w1.afterNote": "1 pipeline async",
    "w2.figure": "conversaciones en 2022",
    "w2.title": "Trámites de gobierno, de punta a punta en WhatsApp",
    "w2.text":
      "Lideré el equipo de integraciones de Boti, el chatbot oficial del Gobierno de la Ciudad de Buenos Aires. " +
      "Diseñé integraciones REST y SOAP con sistemas de gobierno (certificados, turnos, reclamos) " +
      "sosteniendo 24/7 un servicio público crítico.",
    "w3.figure": "agentes en producción",
    "w3.title": "Agentes de IA que automatizan operaciones reales",
    "w3.text":
      "Diseño y pongo en producción agentes internos con LangGraph y pipelines RAG sobre PostgreSQL + pgvector. " +
      "Antes, en el equipo de AI Research de Botmaker, entrené modelos con conversaciones históricas e integré " +
      "la API de OpenAI al core del bot para mejorar el reconocimiento de intenciones.",

    "exp.eyebrow": "Experiencia",
    "exp.title": "Dónde trabajé",
    "exp.present": "Actualidad",
    "lp.1": "Lidero la migración de una plataforma de gestión de apuestas deportivas de Vanilla JavaScript a React + TypeScript.",
    "lp.2": "Rediseñé la validación de apuestas como un único pipeline event-driven (NestJS + RabbitMQ) para más de 100 partners en 4 plataformas.",
    "lp.3": "Diseño agentes de IA internos con LangGraph y pipelines RAG (PostgreSQL + pgvector).",
    "lp.4": "Desarrollé servicios PHP con queries MySQL y stored procedures optimizados; introduje tests de componentes con React Testing Library.",
    "lp.5": "Punto de escalamiento técnico para Customer Service: diagnóstico y corrección de incidencias reportadas por partners.",
    "bm.role1": "Technical Leader · Equipo de Integraciones de Boti",
    "bm.1": "Lideré el equipo de integraciones de Boti (~5M de conversaciones por mes): decisiones técnicas, estimaciones y entregas.",
    "bm.2": "Entregué integraciones REST y SOAP con sistemas de gobierno para que los ciudadanos completen trámites dentro de WhatsApp.",
    "bm.3": "Traduje requerimientos de gobierno a especificaciones y planes de release; mentoreé a 4 ingenieros con code review y pairing.",
    "bm.4": "Desarrollé features para una plataforma conversacional multi-tenant con React y Java 21.",
    "bm.5": "Desplegué y escalé servicios en Google Cloud (Kubernetes, Cloud Run, Cloud Functions) con BigQuery y Firestore.",
    "bm.6": "Equipo de AI Research: entrené y evalué modelos con datos de conversaciones e integré la API de OpenAI al core del bot.",
    "un.name": "Universidad Nacional de Luján",
    "un.role1": "Desarrollador de Software",
    "un.1": "Analicé, diseñé y desarrollé el Sistema de Gestión de Personal Docente del Departamento de Tecnología, reemplazando planillas manuales.",
    "un.role2": "Ayudante docente",
    "un.2": "Docente en Introducción a la Programación, Programación 1 y Minería de Grafos y Redes; automaticé entregas y correcciones con GitHub Classroom.",

    "stack.title": "Herramientas con las que trabajo",
    "stack.data": "Datos",
    "stack.arch": "Arquitectura",
    "edu.title": "Formación",
    "edu.1t": "Licenciatura en Sistemas de Información",
    "edu.1d": "Universidad Nacional de Luján · 2009–2022 · 41 de 42 materias aprobadas, tesis pendiente de defensa",
    "edu.2t": "Analista Programador Universitario",
    "edu.2d": "Universidad Nacional de Luján · 2019 · título intermedio",
    "edu.3t": "Cursos complementarios",
    "edu.3d": "Aplicaciones empresariales con Spring &amp; Hibernate aplicando TDD (2019) · Programación de redes sobre TCP/IP (2018)",
    "how.title": "Cómo trabajo",
    "lang.title": "Idiomas",
    "lang.text": "Español (nativo) · Inglés (avanzado)",

    "contact.eyebrow": "Contacto",
    "contact.title": "Construyamos algo sólido.",
    "contact.lead": "Estoy abierto a posiciones remotas full stack y backend. La forma más rápida de contactarme es por email.",
    "contact.copy": "Copiar",
    "footer.built": "HTML y CSS puros · servido con Cloudflare Workers"
  };

  var UI = {
    en: { title: "Mario Quiroga — Full Stack Engineer", copied: "Email copied", langBtn: "ES", langLabel: "Cambiar a español" },
    es: { title: "Mario Quiroga — Full Stack Engineer", copied: "Email copiado", langBtn: "EN", langLabel: "Switch to English" }
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  nodes.forEach(function (el) { el.dataset.en = el.innerHTML; });

  var lang = "en";
  var langBtn = document.getElementById("lang-toggle");

  function setLang(next) {
    lang = next;
    root.lang = next;
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = next === "es" && ES[key] ? ES[key] : el.dataset.en;
    });
    document.title = UI[next].title;
    langBtn.querySelector(".tool__lang").textContent = UI[next].langBtn;
    langBtn.setAttribute("aria-label", UI[next].langLabel);
    store("lang", next);
  }

  var savedLang = store("lang");
  var browserEs = (navigator.language || "").toLowerCase().indexOf("es") === 0;
  if (savedLang === "es" || (!savedLang && browserEs)) setLang("es");

  langBtn.addEventListener("click", function () {
    setLang(lang === "es" ? "en" : "es");
  });

  /* ───────────── Theme toggle ───────────── */
  var mq = window.matchMedia("(prefers-color-scheme: light)");
  function currentTheme() {
    return root.dataset.theme || (mq.matches ? "light" : "dark");
  }
  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    store("theme", next);
  });

  /* ───────────── Nav: border on scroll + active link ───────────── */
  var nav = document.querySelector(".nav");
  function onScroll() { nav.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var links = Array.prototype.slice.call(document.querySelectorAll(".nav__links a"));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  /* ───────────── Reveal on scroll ───────────── */
  if ("IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(function (el, i) {
      el.style.transitionDelay = Math.min((i % 4) * 70, 210) + "ms";
      revealObs.observe(el);
    });

    var activeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { activeObs.observe(s); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ───────────── Card spotlight follows the cursor ───────────── */
  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });

  /* ───────────── Copy email ───────────── */
  var toast = document.getElementById("toast");
  var toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 1800);
  }
  var copyBtn = document.getElementById("copy-email");
  copyBtn.addEventListener("click", function () {
    var email = copyBtn.dataset.email;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(function () { showToast(UI[lang].copied); }, function () {
        window.location.href = "mailto:" + email;
      });
    } else {
      window.location.href = "mailto:" + email;
    }
  });

  /* ───────────── Footer year ───────────── */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
