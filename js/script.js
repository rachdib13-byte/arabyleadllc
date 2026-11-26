(() => {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const i18n = window.ARABYLEAD_I18N;
  const t = (key, fallback = "") => (i18n ? i18n.t(key) || fallback : fallback);

  const header = $(".site-header");
  const navToggle = $(".nav-toggle");
  const navMenu = $(".nav-menu");
  const topBtn = $(".back-to-top");
  const loader = $(".loader");

  window.addEventListener("load", () => {
    if (loader) {
      setTimeout(() => loader.classList.add("hidden"), 350);
    }
  });

  const syncMenuButtonLabel = (isOpen) => {
    if (!navToggle) return;
    navToggle.setAttribute(
      "aria-label",
      t(isOpen ? "common.closeMenu" : "common.openMenu", isOpen ? "Close menu" : "Open menu")
    );
  };

  const closeMenu = () => {
    navMenu?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
    syncMenuButtonLabel(false);
  };

  navToggle?.addEventListener("click", () => {
    const open = !navMenu.classList.contains("open");
    navMenu.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("no-scroll", open);
    syncMenuButtonLabel(open);
  });

  $$('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = $(id);
      if (target) {
        e.preventDefault();
        closeMenu();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    })
  );

  $$(".btn-ripple").forEach((el) =>
    el.addEventListener("click", (e) => {
      const r = document.createElement("span");
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      r.className = "ripple";
      r.style.width = r.style.height = `${size}px`;
      r.style.left = `${e.clientX - rect.left - size / 2}px`;
      r.style.top = `${e.clientY - rect.top - size / 2}px`;
      el.appendChild(r);
      setTimeout(() => r.remove(), 620);
    })
  );

  const runCounter = (el) => {
    if (el.dataset.done) return;
    el.dataset.done = "true";
    const target = Number(el.dataset.counter) || 0;
    const duration = 1300;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const v = Math.floor(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = String(v);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = String(target);
    };
    requestAnimationFrame(step);
  };

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.matches("[data-counter]")) runCounter(entry.target);
          entry.target.querySelectorAll?.("[data-counter]").forEach(runCounter);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -60px 0px" }
  );

  $$(".reveal,[data-counter]").forEach((el) => revealObserver.observe(el));

  const sections = $$("main section[id]");
  const navLinks = $$(".nav-menu a");
  const updateScrollState = () => {
    const y = window.scrollY;
    header?.classList.toggle("scrolled", y > 18);
    topBtn?.classList.toggle("visible", y > 650);
    let current = "home";
    sections.forEach((section) => {
      if (y >= section.offsetTop - 160) current = section.id;
    });
    navLinks.forEach((link) =>
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`)
    );
  };

  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();

  topBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  $$(".faq-item button").forEach((btn) =>
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = $(".faq-answer", item);
      const open = item.classList.contains("open");
      $$(".faq-item.open").forEach((other) => {
        if (other !== item) {
          other.classList.remove("open");
          $("button", other).setAttribute("aria-expanded", "false");
          $(".faq-answer", other).style.maxHeight = null;
        }
      });
      item.classList.toggle("open", !open);
      btn.setAttribute("aria-expanded", String(!open));
      answer.style.maxHeight = open ? null : `${answer.scrollHeight}px`;
    })
  );

  const yearEl = $("#year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Localized, accessible contact form validation and submission feedback
  const contactForm = $(".contact-form");
  if (contactForm) {
    contactForm.setAttribute("novalidate", "");
    const statusEl = $(".form-status", contactForm);
    const fields = $$("input, textarea", contactForm);

    const announcer = document.createElement("div");
    announcer.setAttribute("aria-live", "polite");
    announcer.className = "visually-hidden";
    document.body.append(announcer);

    let announceTimer;
    const dirtyFields = new WeakSet();
    const fieldErrorKeys = new WeakMap();
    let statusState = null; // { type: "error" | "success", key: string }

    const linkError = (el, shown) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const ids = (el.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter((id) => id && id !== errorId);
      if (shown) ids.push(errorId);
      if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
      else el.removeAttribute("aria-describedby");
    };

    const getFieldErrorKey = (el) => {
      const val = el.value.trim();
      if (!val) {
        if (el.id === "name") return "home.errRequiredName";
        if (el.id === "email") return "home.errRequiredEmail";
        if (el.id === "business") return "home.errRequiredBusiness";
        if (el.id === "message") return "home.errRequiredMessage";
      }
      if (el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        return "home.errInvalidEmail";
      }
      return "";
    };

    const showFieldError = (el, key, announce = false) => {
      const errorEl = el.dataset.error ? document.getElementById(el.dataset.error) : null;
      if (key) {
        const msg = t(key);
        fieldErrorKeys.set(el, key);
        el.setAttribute("aria-invalid", "true");
        linkError(el, true);
        if (errorEl) {
          errorEl.textContent = msg;
          errorEl.classList.add("visible");
        }
        if (announce) {
          const label = el.labels?.[0]?.textContent?.trim() || "";
          clearTimeout(announceTimer);
          announcer.textContent = "";
          announceTimer = setTimeout(() => {
            announcer.textContent = label ? `${label}: ${msg}` : msg;
          }, 300);
        }
        return false;
      }
      fieldErrorKeys.delete(el);
      el.setAttribute("aria-invalid", "false");
      linkError(el, false);
      if (errorEl) {
        errorEl.textContent = "";
        errorEl.classList.remove("visible");
      }
      return true;
    };

    const setStatus = (type, key) => {
      if (!statusEl) return;
      if (!type || !key) {
        statusState = null;
        statusEl.textContent = "";
        statusEl.className = "form-status";
        return;
      }
      statusState = { type, key };
      statusEl.textContent = t(key);
      statusEl.className = `form-status visible ${type === "success" ? "is-success" : "is-error"}`;
    };

    fields.forEach((el) => {
      el.setAttribute("aria-invalid", "false");
      el.addEventListener("blur", () => {
        dirtyFields.add(el);
        showFieldError(el, getFieldErrorKey(el), true);
      });
      el.addEventListener("input", () => {
        if (el.getAttribute("aria-invalid") === "true" || dirtyFields.has(el)) {
          const key = getFieldErrorKey(el);
          if (!key) showFieldError(el, "", false);
        }
        if (statusState?.type === "error") {
          setStatus(null, "");
        }
      });
    });

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let firstInvalid = null;

      fields.forEach((el) => {
        dirtyFields.add(el);
        const key = getFieldErrorKey(el);
        const valid = showFieldError(el, key, false);
        if (!valid && !firstInvalid) firstInvalid = el;
      });

      if (firstInvalid) {
        setStatus("error", "home.formErrorSummary");
        firstInvalid.focus();
        return;
      }

      const name = $("#name", contactForm).value.trim();
      const email = $("#email", contactForm).value.trim();
      const business = $("#business", contactForm).value.trim();
      const message = $("#message", contactForm).value.trim();

      const subject = t("home.formMailSubject", "Inquiry from {name}")
        .replace("{name}", name)
        .replace("{business}", business);
      const body = [
        `${t("home.formNameLabel", "Name")}: ${name}`,
        `${t("home.formEmailLabel", "Email")}: ${email}`,
        `${t("home.formBusinessLabel", "Business")}: ${business}`,
        "",
        message
      ].join("\n");

      setStatus("success", "home.formSuccess");
      const mailtoUrl = `mailto:contact@arabylead.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    });

    if (i18n) {
      i18n.onChange(() => {
        fields.forEach((el) => {
          const activeKey = fieldErrorKeys.get(el);
          if (activeKey) showFieldError(el, activeKey, false);
        });
        if (statusState) setStatus(statusState.type, statusState.key);
      });
    }
  }

  if (i18n) {
    i18n.onChange(() => {
      syncMenuButtonLabel(navMenu?.classList.contains("open"));
      $$(".faq-item.open .faq-answer").forEach((answer) => {
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      });
    });
  }
})();
