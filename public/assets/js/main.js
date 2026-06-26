const CV_URL =
  "https://drive.google.com/uc?export=download&id=1Z2u8AKoA3mhaO1e7DaPKeXwV2wayQbS_";

document.documentElement.style.overflow = "hidden";
document.body.style.overflow = "hidden";

function endIntro() {
  const intro = document.getElementById("intro");
  if (!intro || intro._ended) return;
  intro._ended = true;
  intro.classList.add("hidden");
  setTimeout(() => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    initReveal();
  }, 850);
}

let loadDone = false;
let timerDone = false;
function tryEnd() {
  if (loadDone && timerDone) endIntro();
}
window.addEventListener("load", () => { loadDone = true; tryEnd(); });
setTimeout(() => { timerDone = true; tryEnd(); }, 2800);
setTimeout(endIntro, 5000); // fallback

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const scrollTop = document.getElementById("scrollTop");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 20);
  if (scrollTop) scrollTop.classList.toggle("visible", window.scrollY > 400);

  let current = "";
  document.querySelectorAll("section[id]").forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

let revealObs, barObs, revealMutationObs;

function initReveal() {
  // --- Reveal-on-scroll observer (existing behaviour, unchanged) ---
  revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.1 }
  );

  const observeReveal = (el) => {
    // Avoid double-observing the same element
    if (el._revealObserved) return;
    el._revealObserved = true;
    revealObs.observe(el);
  };

  document
    .querySelectorAll(".reveal,.reveal-left,.reveal-right")
    .forEach(observeReveal);

  // --- Skill bar observer (existing behaviour, unchanged) ---
  barObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
            setTimeout(() => (bar.style.width = bar.dataset.width + "%"), 200);
          });
        }
      });
    },
    { threshold: 0.2 }
  );

  const observeBar = (el) => {
    if (el._barObserved) return;
    el._barObserved = true;
    barObs.observe(el);
  };

  document.querySelectorAll(".about-chart-card").forEach(observeBar);

  // --- NEW: MutationObserver to catch elements added/replaced AFTER this
  // point in time. This matters because React islands (client:load /
  // client:visible) can hydrate and re-render their subtree *after*
  // initReveal() has already run once — e.g. after a hydration mismatch
  // forces React to discard server HTML and re-render client-side, or
  // simply because a React island hydrates later than this timer fires.
  // Without this, any .reveal element created/replaced after this point
  // never gets observed, never gets the `visible` class, and stays
  // permanently invisible if your CSS hides .reveal by default.
  if (revealMutationObs) revealMutationObs.disconnect();

  revealMutationObs = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return; // only element nodes

        if (node.matches?.(".reveal,.reveal-left,.reveal-right")) {
          observeReveal(node);
        }
        node
          .querySelectorAll?.(".reveal,.reveal-left,.reveal-right")
          .forEach(observeReveal);

        if (node.matches?.(".about-chart-card")) {
          observeBar(node);
        }
        node.querySelectorAll?.(".about-chart-card").forEach(observeBar);
      });
    }
  });

  revealMutationObs.observe(document.body, { childList: true, subtree: true });

  window.revealObs = revealObs;
  window.barObs = barObs;
  window.revealMutationObs = revealMutationObs;
}

Chart.defaults.color = "#6a6a6a";
Chart.defaults.font = { family: "'DM Sans',sans-serif", size: 11 };

const _chartInited = {};
window._chartInited = _chartInited;

window.initChart = function(domain) {
  if (domain === "physics") {
    new Chart(document.getElementById("radarChart"), {
      type: "radar",
      data: {
        labels: ["Mathematical Physics","Scientific Computing","Data Analysis","Scientific Writing","Lab Skills","Python for Science"],
        datasets: [{
          label: "Proficiency",
          data: [60, 58, 55, 52, 50, 63],
          fill: true,
          backgroundColor: "rgba(201,169,110,0.1)",
          borderColor: "rgba(201,169,110,0.75)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(201,169,110,1)",
          pointRadius: 4,
        }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          r: {
            min: 0, max: 100,
            grid: { color: "rgba(255,255,255,0.06)" },
            pointLabels: { color: "#6a6a6a", font: { size: 11 } },
            ticks: { display: false },
            angleLines: { color: "rgba(255,255,255,0.06)" },
          },
        },
      },
    });
  }

  if (domain === "cyber") {
    new Chart(document.getElementById("platformChart"), {
      type: "bar",
      data: {
        labels: ["Web Exploitation","Digital Forensics","OSINT","Binary Pwn","Malware Analysis","Linux/Bash"],
        datasets: [{
          data: [65, 68, 70, 45, 50, 72],
          backgroundColor: "rgba(201,169,110,0.12)",
          borderColor: "rgba(201,169,110,0.7)",
          borderWidth: 1.5,
          borderRadius: 6,
        }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#525252", font: { size: 10 } } },
          y: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#525252" }, max: 100 },
        },
      },
    });
  }

  if (domain === "design") {
    new Chart(document.getElementById("donutChart"), {
      type: "doughnut",
      data: {
        labels: ["Graphic Design","Video Editing","UI/UX","Branding","Typography"],
        datasets: [{
          data: [32, 24, 20, 14, 10],
          backgroundColor: [
            "rgba(201,169,110,0.85)","rgba(232,232,232,0.6)",
            "rgba(160,130,80,0.8)","rgba(90,90,90,0.75)","rgba(50,50,50,0.85)",
          ],
          borderColor: "rgba(8,8,8,0.9)",
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        cutout: "70%",
        plugins: { legend: { position: "bottom", labels: { padding: 16, font: { size: 11 }, color: "#6a6a6a" } } },
      },
    });
  }

  if (domain === "web") {
    new Chart(document.getElementById("lineChart"), {
      type: "line",
      data: {
        labels: ["2023","2024","2025","2026"],
        datasets: [
          { label: "HTML/CSS/JS", data: [35,58,72,80], borderColor: "rgba(201,169,110,0.9)", backgroundColor: "rgba(201,169,110,0.07)", fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3 },
          { label: "Python", data: [15,38,60,70], borderColor: "rgba(232,232,232,0.7)", backgroundColor: "rgba(232,232,232,0.04)", fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3 },
          { label: "SEO & Performance", data: [0,15,55,72], borderColor: "rgba(160,130,80,0.9)", backgroundColor: "rgba(160,130,80,0.05)", fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3 },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "bottom", labels: { padding: 14, font: { size: 11 }, color: "#6a6a6a" } } },
        scales: {
          x: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "rgba(255,255,255,0.4)" } },
          y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "rgba(255,255,255,0.4)" }, min: 0, max: 100 },
        },
      },
    });
  }
}

setTimeout(() => {
  const group = document.getElementById("stampCardsGroup");
  if (!group) return;

  const photoWrap = group.closest(".hero-photo-wrap");
  let leaveTimer = null;
  let isActive = false;

  function activate() {
    clearTimeout(leaveTimer);
    if (!isActive) {
      isActive = true;
      group.classList.add("sc-hovered");
      if (photoWrap) photoWrap.style.animationPlayState = "paused";
    }
  }
  function deactivate() {
    isActive = false;
    group.classList.remove("sc-hovered");
    if (photoWrap) photoWrap.style.animationPlayState = "";
  }
  function inRect(rect, x, y, padding) {
    return x >= rect.left - padding && x <= rect.right + padding && y >= rect.top - padding && y <= rect.bottom + padding;
  }

  group.addEventListener("mouseenter", activate);
  document.addEventListener("mousemove", function (e) {
    const onAny = [group, ...group.querySelectorAll(".sc-card")].some((el) => inRect(el.getBoundingClientRect(), e.clientX, e.clientY, 12));
    if (onAny) { activate(); }
    else if (isActive) { clearTimeout(leaveTimer); leaveTimer = setTimeout(deactivate, 200); }
  });

  let swapping = false;
  group.querySelectorAll(".sc-card").forEach((card) => {
    card.addEventListener("click", function () {
      if (swapping || card.classList.contains("sc-center")) return;
      const centerCard = group.querySelector(".sc-card.sc-center");
      if (!centerCard) return;
      swapping = true;
      const clickedPos = card.classList.contains("sc-left") ? "sc-left" : "sc-right";
      card.classList.remove(clickedPos); card.classList.add("sc-center"); card.style.zIndex = 10;
      centerCard.classList.remove("sc-center"); centerCard.classList.add(clickedPos); centerCard.style.zIndex = 5;
      setTimeout(() => { swapping = false; }, 520);
    });
  });

  group.addEventListener("touchstart", function (e) {
    e.preventDefault();
    if (!isActive) activate();
  }, { passive: false });

  group.querySelectorAll(".sc-card").forEach((card) => {
    card.addEventListener("touchend", function (e) {
      e.preventDefault();
      if (swapping || card.classList.contains("sc-center")) return;
      const centerCard = group.querySelector(".sc-card.sc-center");
      if (!centerCard) return;
      swapping = true;
      const clickedPos = card.classList.contains("sc-left") ? "sc-left" : "sc-right";
      card.classList.remove(clickedPos); card.classList.add("sc-center"); card.style.zIndex = 10;
      centerCard.classList.remove("sc-center"); centerCard.classList.add(clickedPos); centerCard.style.zIndex = 5;
      setTimeout(() => { swapping = false; }, 520);
    }, { passive: false });
  });
}, 500);