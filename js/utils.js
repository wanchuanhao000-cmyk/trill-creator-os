// Small formatting + rendering utilities shared across the demo.

function fmtNum(n) {
  if (n === null || n === undefined) return "—";
  const abs = Math.abs(n);
  if (abs >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (abs >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(n);
}

function fmtPct(x, digits = 0) {
  return (x * 100).toFixed(digits) + "%";
}

function fmtScore(x) {
  return x.toFixed(2);
}

function fmtDelta(d, opts = {}) {
  if (d === 0 || d === null || d === undefined) return `<span class="text-slate-500">—</span>`;
  const sign = d > 0 ? "+" : "";
  const color = d > 0 ? "text-emerald-400" : "text-rose-400";
  const arrow = d > 0 ? "↑" : "↓";
  const value = opts.pct ? fmtPct(Math.abs(d), 1) : Math.abs(d).toFixed(2);
  return `<span class="${color} font-medium tabular-nums">${arrow} ${sign}${d > 0 ? value : "-" + value}</span>`;
}

function renderStars(n, size = "text-base") {
  let html = `<span class="${size} text-amber-400 tracking-tight">`;
  for (let i = 0; i < 5; i++) {
    if (i < n) html += "★";
    else html += `<span class="text-slate-700">★</span>`;
  }
  html += "</span>";
  return html;
}

function dimColorClasses(color, variant = "bg") {
  // Map dimension color → Tailwind class fragments
  const map = {
    indigo:  { bg: "bg-indigo-500/10",  border: "border-indigo-400/30",  text: "text-indigo-300",  fill: "bg-indigo-400" },
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-400/30", text: "text-emerald-300", fill: "bg-emerald-400" },
    sky:     { bg: "bg-sky-500/10",     border: "border-sky-400/30",     text: "text-sky-300",     fill: "bg-sky-400" },
    rose:    { bg: "bg-rose-500/10",    border: "border-rose-400/30",    text: "text-rose-300",    fill: "bg-rose-400" },
    amber:   { bg: "bg-amber-500/10",   border: "border-amber-400/30",   text: "text-amber-300",   fill: "bg-amber-400" },
    fuchsia: { bg: "bg-fuchsia-500/10", border: "border-fuchsia-400/30", text: "text-fuchsia-300", fill: "bg-fuchsia-400" },
    orange:  { bg: "bg-orange-500/10",  border: "border-orange-400/30",  text: "text-orange-300",  fill: "bg-orange-400" },
  };
  return (map[color] || map.indigo)[variant];
}

function dimensionChip(dim, opts = {}) {
  const bg = dimColorClasses(dim.color, "bg");
  const border = dimColorClasses(dim.color, "border");
  const text = dimColorClasses(dim.color, "text");
  const flagBadge = dim.flagged
    ? `<span class="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-orange-500/20 text-orange-300 border border-orange-400/40">LOW</span>`
    : "";
  return `
    <div class="rounded-lg ${bg} ${border} border px-3 py-2 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono ${text} font-semibold">${dim.short}</span>
        <span class="text-sm text-slate-200">${dim.name}</span>
        ${flagBadge}
      </div>
      <div class="flex items-center gap-3 text-xs">
        <span class="text-slate-400">${dim.band}</span>
        <span class="font-mono tabular-nums text-slate-100 font-semibold">${fmtScore(dim.score)}</span>
        <span>${fmtDelta(dim.delta)}</span>
      </div>
    </div>
  `;
}

function progressBar(value, max = 1, color = "indigo") {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const fill = dimColorClasses(color, "fill");
  return `
    <div class="w-full bg-slate-700/40 rounded-full h-1.5 overflow-hidden">
      <div class="${fill} h-full rounded-full transition-all" style="width: ${pct}%"></div>
    </div>
  `;
}

function subVerticalBadge(badge) {
  const tones = {
    strong: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
    mixed: "bg-amber-500/15 text-amber-300 border-amber-400/40",
    weak: "bg-rose-500/15 text-rose-300 border-rose-400/40",
  };
  return `<span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${tones[badge.tone] || tones.mixed}">${badge.label}</span>`;
}
