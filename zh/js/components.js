// Trill CreatorOS · shared luxury sidebar + topbar (ZH)
// Each page has empty <div id="sidebar"></div> + <div id="topbar"></div>
// Pages set window.PAGE_KEY (e.g. "home", "tool-ai-writer") + PAGE_TITLE.

const NAV_TREE = [
  { type: "item", key: "home", label: "首页", href: "index.html", icon: "◆" },
  { type: "item", key: "score", label: "评分", href: "score.html", icon: "★", emphasis: true },
  { type: "item", key: "calls", label: "Calls", href: "calls.html", icon: "❘", tag: "新" },
  {
    type: "section", key: "tools", label: "工具", icon: "✦", defaultOpen: true,
    items: [
      { key: "tool-growth",      label: "Growth",      href: "tool-growth.html",      tag: "首推" },
      { key: "tool-ai-writer",   label: "AI Writer",   href: "tool-ai-writer.html",   tag: "旗舰" },
      { key: "tool-topic-pulse", label: "Topic Pulse", href: "tool-topic-pulse.html" },
      { key: "tool-network",     label: "Network",     href: "tool-network.html" },
      { key: "tool-monetise",    label: "Monetise",    href: "tool-monetise.html" },
    ],
  },
  {
    type: "section", key: "insights", label: "洞察", icon: "◯",
    items: [
      { key: "audience", label: "受众", href: "audience.html" },
      { key: "content",  label: "内容", href: "content.html" },
    ],
  },
  { type: "item", key: "profile", label: "档案", href: "profile.html", icon: "◐" },
];

function renderSidebar(activeKey) {
  const isActive = (k) => k === activeKey;

  const renderItem = (item, indent = false) => {
    const active = isActive(item.key);
    const indentCls = indent ? "pl-9" : "pl-4";
    const activeCls = active
      ? "bg-[#9c2516]/10 text-[#9c2516] font-semibold border-l-2 border-[#9c2516]"
      : "text-[#6b5e52] hover:text-[#1a1611] hover:bg-[#ebe3d4]/60 border-l-2 border-transparent";
    const tag = item.tag
      ? `<span class="ml-auto text-[9px] uppercase tracking-widest text-[#9c2516] font-semibold">${item.tag}</span>`
      : "";
    const icon = item.icon
      ? `<span class="text-base w-5 text-center font-serif text-[#9c2516]">${item.icon}</span>`
      : "";
    return `
      <a href="${item.href}" class="${activeCls} ${indentCls} flex items-center gap-3 pr-3 py-2 text-sm transition-colors">
        ${icon}<span>${item.label}</span>${tag}
      </a>
    `;
  };

  const renderSection = (section) => {
    const childActive = section.items.some((c) => isActive(c.key));
    const open = childActive || section.defaultOpen;
    const childrenHTML = section.items.map((c) => renderItem(c, true)).join("");
    return `
      <div class="mt-3" data-section="${section.key}">
        <button type="button" data-section-toggle="${section.key}" class="w-full px-4 py-2 flex items-center gap-3 text-sm font-serif tracking-tight text-[#1a1611] hover:bg-[#ebe3d4] transition-colors">
          <span class="text-base w-5 text-center text-[#9c2516]">${section.icon}</span>
          <span class="font-semibold flex-1 text-left tracking-wide">${section.label}</span>
          <span class="text-[9px] text-[#6b5e52] section-chevron transition-transform inline-block" data-rotate="${open ? "180" : "0"}">▼</span>
        </button>
        <div class="section-children ${open ? "" : "hidden"} mt-0.5" data-section-children="${section.key}">
          ${childrenHTML}
        </div>
      </div>
    `;
  };

  const navHTML = NAV_TREE.map((n) => (n.type === "section" ? renderSection(n) : renderItem(n))).join("");

  return `
    <div class="h-full flex flex-col bg-[#ebe3d4]/40 border-r border-[#d6cfc4]">
      <a href="index.html" class="px-5 py-5 border-b border-[#d6cfc4] block hover:bg-[#ebe3d4]/40 transition-colors">
        <div class="flex items-baseline gap-2">
          <span class="font-serif text-2xl text-[#9c2516] tracking-tight" style="font-family:'Cormorant Garamond',serif;">Trill</span>
          <span class="text-[10px] uppercase tracking-widest text-[#6b5e52]">创作者操作系统</span>
        </div>
      </a>

      <nav class="flex-1 py-3 overflow-y-auto">
        ${navHTML}
      </nav>

      <div class="px-4 py-3 border-t border-[#d6cfc4] text-[10px] text-[#6b5e52] italic">
        <div class="flex items-center justify-between">
          <span>一个机构,不是排行榜。</span>
        </div>
      </div>
    </div>
  `;
}

function renderTopbar(kol, opts = {}) {
  const pageTitle = opts.title || "";
  const subtitle = opts.subtitle || "";
  return `
    <div class="h-16 bg-[#f5efe7]/95 backdrop-blur border-b border-[#d6cfc4] flex items-center px-7 gap-4">
      <div class="flex-1 min-w-0">
        ${pageTitle ? `<div class="font-serif text-xl text-[#1a1611] tracking-tight" style="font-family:'Cormorant Garamond',serif;">${pageTitle}</div>` : ""}
        ${subtitle ? `<div class="text-xs text-[#6b5e52] italic mt-0.5">${subtitle}</div>` : ""}
      </div>

      <div class="hidden md:flex items-center bg-[#ebe3d4] rounded-md px-3 py-1.5 w-72">
        <svg class="w-4 h-4 text-[#6b5e52] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <input type="text" placeholder="搜索 post、话题、同行…" class="flex-1 bg-transparent text-xs text-[#1a1611] focus:outline-none placeholder-[#6b5e52]">
      </div>

      <div class="flex items-center gap-3 px-3 py-1.5 rounded-md border border-[#d6cfc4] bg-[#f5efe7]">
        <div class="w-8 h-8 rounded-full bg-[#9c2516] flex items-center justify-center text-sm font-serif font-bold text-[#f5efe7]" style="font-family:'Cormorant Garamond',serif;">${kol.avatar}</div>
        <div class="min-w-0 leading-tight">
          <div class="text-sm font-semibold text-[#1a1611] flex items-center gap-1.5">
            ${kol.displayName}
            <span class="font-mono text-[#9c2516] text-xs">${"★".repeat(Math.min(kol.starTier, 3))}</span>
          </div>
          <div class="text-[11px] text-[#6b5e52]">${kol.handle}</div>
        </div>
        <span class="text-[#6b5e52] ml-1 text-xs">▾</span>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const sidebarEl = document.getElementById("sidebar");
  const topbarEl = document.getElementById("topbar");
  if (sidebarEl) {
    sidebarEl.innerHTML = renderSidebar(window.PAGE_KEY || "");
    sidebarEl.querySelectorAll("[data-section-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-section-toggle");
        const children = sidebarEl.querySelector(`[data-section-children="${key}"]`);
        const chevron = btn.querySelector(".section-chevron");
        if (!children) return;
        const isOpen = !children.classList.contains("hidden");
        children.classList.toggle("hidden");
        if (chevron) chevron.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
      });
    });
    sidebarEl.querySelectorAll(".section-chevron").forEach((c) => {
      const rot = c.getAttribute("data-rotate") || "0";
      c.style.transform = `rotate(${rot}deg)`;
    });
  }
  if (topbarEl) topbarEl.innerHTML = renderTopbar(DEMO_KOL, {
    title: window.PAGE_TITLE || "",
    subtitle: window.PAGE_SUBTITLE || "",
  });
});
