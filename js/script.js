const projects = {
  cloud: {
    label: "Cloud e automação",
    title: "Cloud Api Integrations",
    description:
      "Microserviço em Java e Spring Boot que automatiza relatórios: lê linhas pendentes no Google Sheets, consulta imagens no Google Maps, gera PDFs em memória e salva o resultado no Google Cloud Storage.",
    repo: "https://github.com/igordevnet/Cloud-Api-Integrations",
    decisions: [
      "Separação em camadas de domínio, aplicação e infraestrutura.",
      "Uso de gateways/ports para desacoplar regras de negócio das APIs externas.",
      "Geração de PDF em memória para evitar escrita temporária em disco.",
      "Processamento idempotente para preservar cotas e impedir retrabalho."
    ],
    learning: [
      "Orquestração de APIs cloud com menor acoplamento.",
      "Modelagem de fluxo batch com rastreabilidade.",
      "Importância de tratamento de falhas em integrações externas."
    ]
  },
  pos: {
    label: "Atualização de PDV",
    title: "POS Updater Server + Client",
    description:
      "Solução client/server para manter executáveis de PDV atualizados com autenticação, validação de dispositivo, download seguro, backup, rollback e auditoria em Google Sheets.",
    repo: "https://github.com/igordevnet/pos-updater-server",
    decisions: [
      "Backend NestJS com módulos de autenticação, usuários e atualização.",
      "JWT e refresh token por dispositivo para controlar sessões.",
      "BullMQ e Redis para exportações assíncronas sem bloquear a API.",
      "Cliente Windows em C# usando DPAPI para proteger credenciais locais."
    ],
    learning: [
      "Integração entre backend web e software desktop.",
      "Estratégias de atualização segura, backup e rollback.",
      "Uso de filas para desacoplar tarefas secundárias."
    ]
  },
  microchat: {
    label: "Microsserviços em tempo real",
    title: "Micro Chat Ecosystem",
    description:
      "Ecossistema distribuído para chat em tempo real com Spring Boot, API Gateway, autenticação, mensagens via WebSocket/STOMP, notificações, RabbitMQ e persistência poliglota.",
    repo: "https://github.com/igordevnet/micro-chat-ecosystem",
    decisions: [
      "Separação de responsabilidades entre gateway, usuários, mensagens e notificações.",
      "RabbitMQ para eventos assíncronos entre serviços.",
      "PostgreSQL, MongoDB e Redis usados conforme o tipo de dado e acesso.",
      "Manifestos Kubernetes para organizar infraestrutura e implantação."
    ],
    learning: [
      "Desenho de fronteiras entre serviços.",
      "Trade-offs de consistência, cache e comunicação em tempo real.",
      "Operação de infraestrutura com múltiplos componentes."
    ]
  }
};

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector("[data-theme-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-project-card]");
const resultCount = document.querySelector("[data-result-count]");
const modal = document.querySelector("[data-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalLabel = document.querySelector("[data-modal-label]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalDecisions = document.querySelector("[data-modal-decisions]");
const modalLearning = document.querySelector("[data-modal-learning]");
const modalLink = document.querySelector("[data-modal-link]");
const closeModalButton = document.querySelector("[data-close-modal]");
const copyButton = document.querySelector("[data-copy-contact]");
const copyStatus = document.querySelector("[data-copy-status]");
const contactEmail = "igorsouzaalmeida2404@gmail.com";

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  document.body.dataset.theme = savedTheme;
}

function setExpandedState(isExpanded) {
  navToggle.setAttribute("aria-expanded", String(isExpanded));
  navLinks.classList.toggle("is-open", isExpanded);
}

navToggle.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  setExpandedState(!isExpanded);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    setExpandedState(false);
  }
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  document.body.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
});

function updateProjectFilter(filter) {
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const tags = card.dataset.tags.split(" ");
    const shouldShow = filter === "all" || tags.includes(filter);
    card.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  resultCount.textContent =
    visibleCount === 1 ? "1 estudo exibido" : `${visibleCount} estudos exibidos`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    updateProjectFilter(button.dataset.filter);
  });
});

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function openProjectModal(projectId) {
  const project = projects[projectId];

  if (!project) {
    return;
  }

  modalLabel.textContent = project.label;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalLink.href = project.repo;
  renderList(modalDecisions, project.decisions);
  renderList(modalLearning, project.learning);

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  closeModalButton.focus();
}

function closeProjectModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-open-project]").forEach((button) => {
  button.addEventListener("click", () => openProjectModal(button.dataset.openProject));
});

closeModalButton.addEventListener("click", closeProjectModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeProjectModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeProjectModal();
  }
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(contactEmail);
    copyStatus.textContent = "E-mail copiado.";
  } catch {
    copyStatus.textContent = contactEmail;
  }
});

const sectionLinks = [...document.querySelectorAll(".nav-links a")];
const observedSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      sectionLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

observedSections.forEach((section) => observer.observe(section));
