(() => {
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => {
      const scrolled = window.scrollY > 10;
      nav.classList.toggle("nav--scrolled", scrolled);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const viewCount = document.querySelector("[data-view-count]");
  if (viewCount) {
    const namespace = "bibvnewspaper.github.io";
    const key = "home";
    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
      .then((response) => response.json())
      .then((data) => {
        if (typeof data?.value === "number") {
          viewCount.textContent = data.value.toLocaleString();
        } else {
          viewCount.textContent = "—";
        }
      })
      .catch(() => {
        viewCount.textContent = "—";
      });
  }

  const markdownBlocks = document.querySelectorAll("[data-markdown-src]");
  if (markdownBlocks.length === 0) return;

  const stripIndent = (text) => {
    const lines = text.replace(/^\n/, "").split("\n");
    const indents = lines
      .filter((line) => line.trim().length > 0)
      .map((line) => line.match(/^\s*/)?.[0]?.length ?? 0);
    const minIndent = indents.length ? Math.min(...indents) : 0;
    return lines.map((line) => line.slice(minIndent)).join("\n").trim();
  };

  const renderMarkdown = async (block) => {
    const src = block.getAttribute("data-markdown-src");
    const fallback =
      block.querySelector("template[data-markdown-fallback]") ||
      block.querySelector("script[data-markdown-fallback]");

    const renderText = (text) => {
      if (window.marked && typeof window.marked.parse === "function") {
        block.innerHTML = window.marked.parse(text);
      } else {
        block.textContent = text;
      }
    };

    if (!src && fallback) {
      renderText(stripIndent(fallback.textContent));
      return;
    }

    if (!src) return;

    if (fallback) {
      renderText(stripIndent(fallback.textContent));
    }

    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`Failed to load ${src}`);
      const text = await response.text();
      renderText(text);
    } catch (error) {
      if (fallback) {
        renderText(stripIndent(fallback.textContent));
      } else {
        block.textContent =
          "Unable to load article content. If you opened this file directly, start a local server.";
      }
    }
  };

  markdownBlocks.forEach((block) => {
    renderMarkdown(block);
  });
})();
