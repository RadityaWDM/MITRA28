const JOBS = [
  { id: "SLS-MKS", t: "Sales Crewstore", loc: "Makassar", edu: "SMA/SMK", type: "Penuh waktu", days: 3, req: ["Minimal SMA/SMK sederajat", "Pengalaman sales, diutamakan furnitur atau produk rumah tangga", "Target-oriented dan siap kunjungan ke klien", "Memiliki kendaraan pribadi dan SIM C"], q: { type: "radio", label: "Apakah Anda memiliki kendaraan pribadi?", opts: ["Ya", "Tidak"], must: "Ya" } },
  { id: "MKN-MKS", t: "Mekanik", loc: "Makassar", edu: "SMK Teknik", type: "Penuh waktu", days: 3, req: ["Minimal SMK Teknik/Otomotif", "Pengalaman sebagai mekanik", "Jujur dan bertanggung jawab", "Mampu bekerja individu maupun tim"], q: { type: "select", label: "Berapa lama pengalaman Anda sebagai mekanik?", opts: ["Belum ada", "Kurang dari 1 tahun", "1–3 tahun", "Lebih dari 3 tahun"], bad: "Belum ada" } },
  { id: "CCR-CMH", t: "Content Creator", loc: "Cimahi", edu: "SMA/SMK/D3", type: "Penuh waktu", days: 5, req: ["Berpengalaman sebagai content creator", "Menguasai Canva, CapCut, dan Adobe Creative Suite", "Paham tren dan algoritma media sosial", "Melampirkan portofolio"], q: { type: "url", label: "Link portofolio Anda (Instagram, TikTok, atau Google Drive)" } },
  { id: "BKR-CMH", t: "Baker Staff", loc: "Cimahi", edu: "SMA/SMK Tata Boga", type: "Penuh waktu", days: 5, req: ["Minimal SMA/SMK, diutamakan Tata Boga", "Pengalaman minimal 1 tahun di bakery/pastry", "Menguasai mixing, proofing, shaping, dan baking", "Disiplin waktu dan menjaga kebersihan"], q: { type: "radio", label: "Apakah Anda punya pengalaman minimal 1 tahun di bakery?", opts: ["Ya", "Tidak"], must: "Ya" } },
  { id: "CSP-CMH", t: "Creative Supervisor", loc: "Cimahi", edu: "S1 DKV", type: "Penuh waktu", days: 6, req: ["Minimal S1 Desain Komunikasi Visual", "Pengalaman minimal 3 tahun di bidang kreatif", "Wajib melampirkan portofolio", "Mampu memimpin dan mengarahkan tim"], q: { type: "url", label: "Link portofolio Anda" } },
  { id: "MCM-CMH", t: "Marketing Communication", loc: "Cimahi", edu: "D3/S1", type: "Penuh waktu", days: 6, req: ["Minimal 2 tahun di marketing communication", "Memahami digital marketing dan marketplace", "Komunikatif dan kolaboratif", "Menguasai MS Office / Google Workspace"], q: { type: "select", label: "Berapa lama pengalaman Anda di marketing communication?", opts: ["Kurang dari 1 tahun", "1–2 tahun", "2–4 tahun", "Lebih dari 4 tahun"], bad: "Kurang dari 1 tahun" } },
  { id: "PSV-CMH", t: "Production Supervisor", loc: "Cimahi", edu: "D3/S1", type: "Penuh waktu", days: 7, req: ["Minimal 2 tahun sebagai supervisor produksi", "Memahami GMP, HACCP, dan standar keamanan pangan", "Mampu mengelola data dan laporan produksi", "Pengalaman di industri makanan diutamakan"], q: { type: "radio", label: "Apakah Anda memahami standar GMP/HACCP?", opts: ["Ya", "Tidak"], must: "Ya" } },
  { id: "SEC-BDG", t: "Security", loc: "Bandung", edu: "SMA/SMK", type: "Shift", days: 1, req: ["Wajib memiliki KTA Satpam yang aktif", "Menguasai prosedur dan SOP keamanan", "Kondisi fisik prima", "Ramah, sopan, tegas, dan jujur"], q: { type: "radio", label: "Apakah Anda memiliki KTA Satpam yang masih aktif?", opts: ["Ya", "Tidak"], must: "Ya" } },
  { id: "CLS-BDG", t: "Cleaning Service", loc: "Bandung", edu: "SMP/SMA", type: "Shift", days: 2, req: ["Minimal SMP/SMA sederajat", "Sehat jasmani dan rohani", "Memahami standar kebersihan", "Jujur, disiplin, dan pekerja keras"], q: { type: "radio", label: "Apakah Anda bersedia bekerja dengan sistem shift?", opts: ["Ya", "Tidak"], must: "Ya" } },
  { id: "DPA-BDG", t: "Driver Personal Assistant", loc: "Bandung", edu: "SMA/SMK", type: "Penuh waktu", days: 2, req: ["Memiliki SIM A yang masih berlaku", "Terbiasa mengemudikan mobil matic", "Memahami perawatan dasar kendaraan", "Komunikatif dan berpenampilan rapi"], q: { type: "select", label: "SIM apa yang Anda miliki?", opts: ["SIM A", "SIM A Umum", "Hanya SIM C", "Belum punya SIM"], bad: ["Hanya SIM C", "Belum punya SIM"] } },
  { id: "ADG-BDG", t: "Admin Gudang", loc: "Bandung", edu: "SMA/SMK", type: "Penuh waktu", days: 4, req: ["Minimal SMA/SMK, diutamakan jurusan perkantoran", "Pengalaman 1–2 tahun sebagai admin gudang", "Mampu mengoperasikan Excel dan sistem POS", "Teliti dan tahan tekanan kerja"], q: { type: "radio", label: "Apakah Anda mahir Microsoft Excel?", opts: ["Ya", "Tidak"], must: "Ya" } },
  { id: "HLP-BDG", t: "Helper", loc: "Bandung", edu: "SMA/SMK", type: "Penuh waktu", days: 4, req: ["Minimal SMA/SMK, diutamakan Tata Boga", "Pengalaman helper di toko roti atau restoran", "Fresh graduate dipersilakan", "Mampu bekerja di bawah tekanan"], q: { type: "radio", label: "Apakah Anda bersedia ditempatkan di outlet mana saja di Bandung?", opts: ["Ya", "Tidak"], must: "Ya" } },
];
const STAGES = [
  { k: "baru", l: "Baru" }, { k: "screening", l: "Screening" }, { k: "interview", l: "Interview" }, { k: "diterima", l: "Diterima" }, { k: "ditolak", l: "Ditolak" },
];
const FLOW = ["baru", "screening", "interview", "diterima"];
const jobById = id => JOBS.find(j => j.id === id);
const stageL = k => STAGES.find(s => s.k === k).l;
const svg = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const CATS = [
  { id: "sosmed", l: "Media Sosial & Kreatif", d: "Konten, desain, dan pemasaran digital", fg: "var(--primary)", bg: "var(--primary-soft)", jobs: ["CCR-CMH", "MCM-CMH", "CSP-CMH"],
    ic: svg('<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>') },
  { id: "dapur", l: "Dapur & Produksi", d: "Bakery, dapur, dan produksi makanan", fg: "var(--warn)", bg: "var(--warn-bg)", jobs: ["BKR-CMH", "HLP-BDG", "PSV-CMH"],
    ic: svg('<path d="M6 14h12v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/><path d="M6 14a4 4 0 0 1 1-7.9A5 5 0 0 1 17 6.1 4 4 0 0 1 18 14"/>') },
  { id: "aman", l: "Keamanan & Kebersihan", d: "Security dan cleaning service", fg: "var(--ok)", bg: "var(--ok-bg)", jobs: ["SEC-BDG", "CLS-BDG"],
    ic: svg('<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>') },
  { id: "ops", l: "Operasional & Logistik", d: "Gudang, pengiriman, dan pengemudi", fg: "var(--violet)", bg: "var(--violet-bg)", jobs: ["ADG-BDG", "DPA-BDG"],
    ic: svg('<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>') },
  { id: "sales", l: "Sales & Penjualan", d: "Penjualan langsung dan kunjungan klien", fg: "var(--bad)", bg: "var(--bad-bg)", jobs: ["SLS-MKS"],
    ic: svg('<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/>') },
  { id: "teknik", l: "Teknik & Mesin", d: "Mekanik dan perawatan mesin", fg: "var(--heading)", bg: "var(--surface-2)", jobs: ["MKN-MKS"],
    ic: svg('<path d="M14.7 6.3a4 4 0 0 0 5 5L12 18.8a2.1 2.1 0 0 1-3-3z"/><path d="m14.7 6.3 2.3-2.3"/>') },
];
CATS.forEach(c => c.jobs.forEach(id => { jobById(id).cat = c.id; }));
const catById = id => CATS.find(c => c.id === id);
const catOf = j => catById(j.cat);
const catIcon = (c, s) => `<span class="ci" style="width:${s}px;height:${s}px;color:${c.fg};background:${c.bg}">${c.ic}</span>`;
const ALLICON = svg('<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>');
const AVC = ["#0d5aa7", "#057642", "#915907", "#6a42c2", "#b24020", "#1b7a8c", "#7a3e8f", "#3b6e22"];
const avColor = s => AVC[[...s].reduce((h, c) => h + c.charCodeAt(0), 0) % AVC.length];
const initials = n => n.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
const ico = {
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  bag: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  cap: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/></svg>',
  people: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  xx: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  close: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  link: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
  back: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>',
  up: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 16V4M7 9l5-5 5 5M4 20h16"/></svg>',
};

// Seed applicants (contoh)
const NAMES = ["Rizky Pratama","Dewi Lestari","Andi Saputra","Siti Nurhaliza","Fajar Nugroho","Ayu Wulandari","Muhammad Ilham","Nur Aisyah","Bayu Setiawan","Rina Marlina","Dedi Kurniawan","Putri Anggraini","Agus Salim","Lina Herlina","Yoga Firmansyah","Intan Permata","Hendra Gunawan","Wulan Sari","Rendi Hidayat","Fitri Handayani","Asep Sunandar","Nadia Rahma","Taufik Hidayat","Eka Puspita","Gilang Ramadhan","Sari Indah","Arif Rahman","Mega Utami","Dimas Ardiansyah","Yuni Kartika","Ujang Supriatna","Rahmawati","Irfan Maulana","Novi Susanti","Ridwan Saputra","Tika Amelia"];
const EDU = ["SMA", "SMK", "D3", "S1", "SMK", "SMA"];
const PREV = ["Staf toko ritel", "Lulusan baru", "Freelancer", "Staf operasional", "Karyawan kontrak", "Staf gudang"];
function answerFor(job, i) {
  const q = job.q;
  if (q.type === "url") return i % 4 === 0 ? "" : "instagram.com/karya." + (i + 7);
  if (q.type === "radio") return i % 5 === 0 ? q.opts[1] : q.opts[0];
  return q.opts[(i * 3) % q.opts.length];
}
function seed() {
  const out = []; let n = 1; const now = Date.now();
  const plan = { "SEC-BDG": 6, "CLS-BDG": 5, "DPA-BDG": 3, "ADG-BDG": 4, "HLP-BDG": 3, "CCR-CMH": 4, "BKR-CMH": 2, "MCM-CMH": 3, "SLS-MKS": 3, "MKN-MKS": 2, "PSV-CMH": 1, "CSP-CMH": 0 };
  const cyc = ["baru","baru","screening","interview","baru","ditolak","screening","diterima","baru","screening"];
  let i = 0;
  for (const [jid, cnt] of Object.entries(plan)) {
    for (let k = 0; k < cnt; k++, i++) {
      const job = jobById(jid), nm = NAMES[i % NAMES.length];
      const at = new Date(now - (i * 7 + k * 3 + 1) * 3600e3).toISOString();
      const st = cyc[(i + k) % cyc.length];
      out.push({
        no: "M28-" + String(1000 + n++), job: jid, name: nm,
        phone: "08" + (12 + (i % 8)) + "-" + String(3000 + i * 37).slice(0, 4) + "-" + String(5000 + i * 91).slice(0, 4),
        email: nm.toLowerCase().replace(/[^a-z]+/g, ".").replace(/\.$/, "") + "@gmail.com",
        city: job.loc, edu: EDU[i % EDU.length], age: 20 + (i * 3) % 15, prev: PREV[i % PREV.length],
        ans: answerFor(job, i), cv: "CV_" + nm.split(" ")[0] + ".pdf", at, status: st, seen: st !== "baru" || i % 3 === 0,
        note: st === "interview" ? "Jadwal interview Senin 09.00 di kantor Bandung." : "",
        log: [{ at, t: "Melamar lewat form " + job.t }].concat(st !== "baru" ? [{ at: new Date(Date.parse(at) + 20 * 3600e3).toISOString(), t: "Dipindah ke " + stageL(st) }] : []),
      });
    }
  }
  return out;
}

// State (prototype: per-browser storage)
const KEY = "m28-proto-v2";
let apps;
try { apps = JSON.parse(localStorage.getItem(KEY)) || seed(); } catch { apps = seed(); }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(apps)); } catch {} };
let ui = { view: "portal", loc: "Semua", cat: "ALL", sel: JOBS[7].id, mDetail: false, hrPage: "home", job: "ALL", hrLoc: "ALL", scr: "ALL", unseen: false, hrCat: "ALL", picked: [], stage: "ALL", q: "", gq: "", open: null };
if (location.hash === "#hr") ui.view = "hr";

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmt = iso => { const d = new Date(iso); return d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }) + ", " + d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }); };
function ago(iso) {
  const m = Math.max(0, (Date.now() - Date.parse(iso)) / 60000);
  if (m < 1) return "baru saja"; if (m < 60) return Math.floor(m) + " menit lalu";
  if (m < 1440) return Math.floor(m / 60) + " jam lalu"; return Math.floor(m / 1440) + " hari lalu";
}
function screenOf(a) {
  const q = jobById(a.job).q;
  if (q.type === "radio" && q.must) return a.ans === q.must;
  if (q.type === "select" && q.bad) return ![].concat(q.bad).includes(a.ans);
  if (q.type === "url") return !!a.ans;
  return true;
}
const isWide = () => window.matchMedia("(min-width: 1181px)").matches;
function toast(t) { document.querySelectorAll(".toast").forEach(x => x.remove()); const el = document.createElement("div"); el.className = "toast"; el.innerHTML = `<span style="color:var(--ok)">${ico.check}</span>${esc(t)}`; document.body.appendChild(el); setTimeout(() => el.remove(), 2600); }

/* ---------- Portal ---------- */
const nApp = id => apps.filter(a => a.job === id).length;
function portalJobs(anyCat, anyLoc) {
  const q = ui.gq.trim().toLowerCase();
  return JOBS.filter(j => (anyLoc || ui.loc === "Semua" || j.loc === ui.loc)
    && (anyCat || ui.cat === "ALL" || j.cat === ui.cat)
    && (!ui.few || nApp(j.id) < 10)
    && (!q || (j.t + " " + j.loc + " " + catOf(j).l).toLowerCase().includes(q)));
}
function renderPortal() {
  const locs = ["Semua", ...new Set(JOBS.map(j => j.loc))];
  const pool = portalJobs(true), list = portalJobs(false);
  if (list.length && !list.some(j => j.id === ui.sel)) ui.sel = list[0].id;
  const j = list.length ? jobById(ui.sel) : null;
  const region = l => l === "Makassar" ? "Sulawesi Selatan" : "Jawa Barat";
  const cur = ui.cat === "ALL" ? null : catById(ui.cat);
  const groups = CATS.map(c => ({ c, jobs: list.filter(x => x.cat === c.id) })).filter(g => g.jobs.length);
  const row = x => `<button class="jobrow" data-sel="${x.id}" aria-current="${x.id === ui.sel}">
          <span class="co">M28</span>
          <span style="min-width:0"><span class="jt">${esc(x.t)}</span><br><span class="jc">PT Mitra Dua Delapan</span><br><span class="meta">${x.loc} (Di lokasi) · ${x.type}</span>
            <span class="jm"><span class="meta">${x.days} hari lalu</span>${nApp(x.id) < 3 ? `<span class="meta">·</span><span class="green">Jadilah pelamar awal</span>` : `<span class="meta">· ${nApp(x.id)} pelamar</span>`}</span></span>
        </button>`;
  const head = cur
    ? `<div class="plist-h"><div class="phrow">${catIcon(cur, 40)}<div><h2>${esc(cur.l)}</h2><p>${esc(cur.d)}</p></div></div><p style="margin-top:6px">${list.length} lowongan · <button class="linkbtn" data-cat="ALL">Lihat semua kategori</button></p></div>`
    : `<div class="plist-h"><h2>Lowongan di PT Mitra Dua Delapan</h2><p>${list.length} lowongan dalam ${groups.length} kategori</p></div>`;
  const body = !list.length
    ? `<div class="empty"><b style="color:var(--fg)">Belum ada lowongan di sini</b><span>Coba lokasi lain atau <button class="linkbtn" data-reset-f>hapus semua filter</button>.</span></div>`
    : cur ? list.map(row).join("")
    : groups.map(g => `<div class="cathead">${catIcon(g.c, 22)}<b>${esc(g.c.l)}</b><span class="cn">${g.jobs.length}</span><button class="linkbtn" data-cat="${g.c.id}">Lihat kategori</button></div>${g.jobs.map(row).join("")}`).join("");
  const locPool = portalJobs(false, true);
  // Dropdown filter: options are [value, label, count]; the choice applies on "Tampilkan hasil"
  const dd = (key, title, label, active, def, items) => `<div class="dd">
        <button class="fpill ddbtn" data-dd="${key}" aria-haspopup="dialog" aria-expanded="${ui.dd === key}" aria-pressed="${active}">${esc(label)}<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 9h12l-6 7z"/></svg></button>
        ${ui.dd === key ? `<div class="ddpop" role="dialog" aria-label="${title}">
          <div class="ddlist" role="radiogroup">${items.map(([v, l, n]) => `<label class="ddopt ${n ? "" : "zero"}"><input type="radio" name="dd-${key}" value="${esc(v)}" ${ui.pend === v ? "checked" : ""}><span>${esc(l)}</span><span class="cn">${n}</span></label>`).join("")}</div>
          <div class="ddfoot"><button class="btn sm soft" data-dd-reset="${def}" ${ui.pend === def ? "disabled" : ""}>Reset</button><button class="btn sm primary" data-dd-apply="${key}">Tampilkan hasil</button></div>
        </div>` : ""}
      </div>`;
  return `<div class="fbar"><div class="wrap" role="group" aria-label="Filter lowongan">
      ${dd("cat", "Pilih kategori lowongan", cur ? cur.l : "Kategori", ui.cat !== "ALL", "ALL",
        [["ALL", "Semua kategori", pool.length], ...CATS.map(c => [c.id, c.l, pool.filter(x => x.cat === c.id).length])])}
      ${dd("loc", "Pilih lokasi penempatan", ui.loc === "Semua" ? "Lokasi" : ui.loc, ui.loc !== "Semua", "Semua",
        [["Semua", "Semua lokasi", locPool.length], ...locs.slice(1).map(l => [l, l + ", " + region(l), locPool.filter(x => x.loc === l).length])])}
      <span class="fsep" aria-hidden="true"></span>
      <button class="fpill" data-few aria-pressed="${!!ui.few}">Pelamar &lt; 10</button>
    </div></div>
    <div class="portal ${ui.mDetail ? "show-detail" : ""}">
    <section class="plist" aria-label="Daftar lowongan">${head}${body}</section>
    <section class="pdetail" aria-label="Detail lowongan">${j ? jobDetail(j, nApp(j.id), region(j.loc)) : ""}</section>
  </div>`;
}
function jobDetail(j, n, region) {
  const saved = (ui.saved || []).includes(j.id);
  return `<button class="btn quiet sm back" data-back>${ico.back} Semua lowongan</button>
    <div class="dhead">
      <div class="dco"><span class="co">M28</span>PT Mitra Dua Delapan</div>
      <h2>${esc(j.t)}</h2>
      <p class="meta">${j.loc}, ${region}, Indonesia · ${j.days} hari lalu · ${n} pelamar</p>
      <p class="meta">Dipasang oleh tim HR · <span class="green">Aktif meninjau pelamar</span></p>
    </div>
    <div class="pills"><button class="tag" data-cat="${j.cat}" title="Lihat semua lowongan di kategori ini">${catOf(j).l}</button><span class="tag">${ico.check} Di lokasi</span><span class="tag">${j.type}</span><span class="tag">Min. ${esc(j.edu)}</span></div>
    <div class="actions"><button class="btn primary" data-apply="${j.id}">Lamar Mudah</button><button class="btn outline" data-save="${j.id}" aria-pressed="${saved}">${saved ? "Tersimpan" : "Simpan"}</button><button class="btn quiet" data-copy="${j.id}">${ico.link} Salin link</button></div>
    <div class="sec"><h3>Tentang lowongan</h3>
      <p><b style="color:var(--fg)">Deskripsi perusahaan</b> PT Mitra Dua Delapan adalah perusahaan penyedia tenaga kerja dan jasa SDM yang membantu perusahaan klien fokus pada pengembangan usahanya.</p>
      <p style="margin-top:12px"><b style="color:var(--fg)">Deskripsi posisi</b> Posisi ${esc(j.t)} ini penuh waktu dan bekerja di lokasi penempatan ${j.loc}. Lamaran untuk posisi ini masuk langsung ke tim HR yang merekrut ${esc(j.t)}, tidak bercampur dengan posisi lain.</p></div>
    <div class="sec"><h3>Kualifikasi</h3><ul>${j.req.map(r => `<li>${esc(r)}</li>`).join("")}</ul></div>
    <div class="sec"><h3>Pertanyaan saat melamar</h3><div class="screen-box">${ico.shield}<div><b style="color:var(--fg)">${esc(j.q.label)}</b><p class="meta">Pertanyaan ini khusus untuk posisi ${esc(j.t)}, supaya tim HR bisa menyaring lamaran lebih cepat.</p></div></div></div>
    <div class="sec"><h3>Proses rekrutmen</h3><div class="steps">
      <div class="step"><b>Lamar</b>Isi form, sekitar 3 menit</div>
      <div class="step"><b>Screening</b>CV dan jawaban dicek HR</div>
      <div class="step"><b>Interview</b>Dihubungi lewat WhatsApp</div>
      <div class="step"><b>Keputusan</b>Hasil dikabarkan</div></div></div>
    ${(() => { const sib = JOBS.filter(x => x.cat === j.cat && x.id !== j.id); return sib.length ? `<div class="sec"><h3>Lowongan lain di ${esc(catOf(j).l)}</h3><div class="rel">${sib.map(x => `<button class="relrow" data-sel="${x.id}"><span class="co">M28</span><span style="min-width:0"><span class="jt">${esc(x.t)}</span><br><span class="meta">${x.loc} · ${x.type} · ${nApp(x.id)} pelamar</span></span></button>`).join("")}</div></div>` : ""; })()}`;
}

/* Multi-step apply: every field of mitra28.id/form-lamaran-kerja, regrouped into 7 short steps */
const FSTEPS = [
  { t: "Data pribadi", d: "Isi sesuai KTP atau identitas resmi lainnya." },
  { t: "Alamat & kontak", d: "Alamat tinggal tetap dan nomor yang bisa dihubungi tim HR." },
  { t: "Pendidikan", d: "Pendidikan terakhir yang sudah Anda tempuh." },
  { t: "Keahlian & pengalaman", d: "Maksimal 3 keahlian dan 3 pengalaman kerja di bidang yang sama." },
  { t: "Referensi", d: "HRD, atasan, atau rekan kerja di perusahaan sebelumnya. Boleh dilewati." },
  { t: "Pertanyaan tambahan", d: "Sebagian besar cukup dipilih, tidak perlu diketik." },
  { t: "Tinjau & kirim", d: "Periksa kembali data Anda sebelum dikirim." },
];
const REQ = [["nama", "jk", "nikah", "tempat", "tgl", "idjenis", "idno"], ["alamat", "hp"], ["pend", "sekolah", "lulus", "lulusStatus"], [], [], ["ans"], ["setuju"]];
const PEND = ["SD / Sederajat", "SMP / Sederajat", "SMA / Sederajat", "D1 / D2 / D3 / S1", "S2 atau lebih"];
const PEND_SHORT = { "SD / Sederajat": "SD", "SMP / Sederajat": "SMP", "SMA / Sederajat": "SMA/SMK", "D1 / D2 / D3 / S1": "D3/S1", "S2 atau lebih": "S2" };
const newSkill = () => ({ n: "", lv: "Baik" });
const newExp = () => ({ pt: "", pos: "", bidang: "", kota: "", dari: "", sampai: "", gaji: "", alasan: "" });
const newRef = () => ({ nama: "", pt: "", jab: "", hp: "" });
const NEW = { skills: newSkill, exps: newExp, refs: newRef };
const blankForm = () => ({
  nama: "", jk: "", nikah: "", tempat: "", tgl: "", idjenis: "KTP", idno: "", tinggi: "", berat: "",
  alamat: "", desa: "", kec: "", kabtipe: "Kota", kabnama: "", hp: "", telp: "", email: "",
  pend: "", sekolah: "", jurusan: "", lulus: "", lulusStatus: "Lulus",
  skills: [newSkill()], expNone: false, exps: [newExp()], refs: [newRef()],
  ans: "", q1: "", q1x: "", q2: "", q2x: "", q8: "", kend: [], sim: [], q4: "", q7: "", q5: "", q5x: "", q6: "", gaji: "", mulai: "", benefit: "",
  cv: "", setuju: false,
});
function sampleForm(j) {
  const q = j.q;
  const ans = q.type === "url" ? "instagram.com/budi.karya" : q.type === "radio" ? (q.must || q.opts[0]) : q.opts.find(o => ![].concat(q.bad || []).includes(o));
  return Object.assign(blankForm(), {
    nama: "Budi Santoso", jk: "Pria", nikah: "Belum / Tidak Menikah", tempat: "Bandung", tgl: "2000-05-14", idjenis: "KTP", idno: "3273011405000003", tinggi: "170", berat: "65",
    alamat: "Jl. Cibaduyut Raya No. 12, RT 03 / RW 05", desa: "Cibaduyut", kec: "Bojongloa Kidul", kabtipe: "Kota", kabnama: "Bandung", hp: "0812-3456-7890", email: "budi.santoso@gmail.com",
    pend: "SMA / Sederajat", sekolah: "SMK Negeri 2 Bandung", jurusan: "Teknik Kendaraan Ringan", lulus: "2018", lulusStatus: "Lulus",
    skills: [{ n: "Mengemudi mobil manual dan matic", lv: "Baik" }, { n: "Microsoft Excel", lv: "Cukup" }],
    exps: [{ pt: "PT Sinar Logistik", pos: "Staf Operasional", bidang: "Logistik", kota: "Bandung", dari: "2019-03", sampai: "2024-12", gaji: "4.200.000", alasan: "Kontrak selesai" }],
    refs: [{ nama: "Hendra Wijaya", pt: "PT Sinar Logistik", jab: "Supervisor Operasional", hp: "0813-2222-1111" }],
    ans, q1: "Tidak", q2: "Belum pernah", q8: "Tidak ada", kend: ["Motor"], sim: ["SIM C"], q4: "Bersedia", q7: "Bersedia", q5: "Tidak pernah", q6: "Bersedia",
    gaji: "4.500.000", mulai: "Dalam 1 minggu", benefit: "BPJS Kesehatan dan Ketenagakerjaan",
  });
}

const getP = (o, p) => p.split(".").reduce((a, k) => a == null ? a : a[k], o);
function setP(o, p, v) { const ks = p.split("."), last = ks.pop(); ks.reduce((a, k) => a[k], o)[last] = v; }
function ageOf(tgl) {
  if (!tgl) return "";
  const b = new Date(tgl + "T00:00"), n = new Date();
  let a = n.getFullYear() - b.getFullYear();
  if (n < new Date(n.getFullYear(), b.getMonth(), b.getDate())) a--;
  return a > 0 && a < 100 ? a : "";
}
const fmtD = d => d ? new Date(d + "T00:00").toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) : "";
const fmtM = m => m ? new Date(m + "-01T00:00").toLocaleDateString("id-ID", { month: "short", year: "numeric" }) : "";
const usiaText = () => { const a = ageOf(draft.f.tgl); return a ? `Usia ${a} tahun, terhitung otomatis` : "Usia akan terhitung otomatis"; };

let draft = null;
const DKEY = id => "m28-draft-" + id;
function saveDraft() { try { localStorage.setItem(DKEY(draft.job), JSON.stringify({ step: draft.step, f: draft.f })); } catch {} }
function clearDraft(id) { try { localStorage.removeItem(DKEY(id)); } catch {} }
function openApply(id) {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(DKEY(id))); } catch {}
  draft = { job: id, step: saved ? saved.step : 0, f: saved ? Object.assign(blankForm(), saved.f) : blankForm(), err: {}, restored: !!saved };
  drawApply();
}

/* Field builders: data-p binds an input to a path in draft.f */
const fid = p => "f-" + p.replace(/\./g, "-");
const reqMark = o => o.req ? ' <span class="req" aria-hidden="true">*</span>' : "";
const errOf = p => draft.err[p] ? `<span class="ferr" id="${fid(p)}-err">${ico.xx} ${esc(draft.err[p])}</span>` : "";
const inv = p => draft.err[p] ? `aria-invalid="true" aria-describedby="${fid(p)}-err"` : "";
function tx(p, label, o = {}) {
  const v = getP(draft.f, p) ?? "";
  const input = `<input id="${fid(p)}" data-p="${p}" type="${o.type || "text"}" value="${esc(v)}" ${o.ph ? `placeholder="${esc(o.ph)}"` : ""} ${o.im ? `inputmode="${o.im}"` : ""} ${o.max ? `maxlength="${o.max}"` : ""} ${o.req ? 'aria-required="true"' : ""} ${inv(p)}>`;
  const box = o.pre || o.suf ? `<div class="affix">${o.pre ? `<span>${o.pre}</span>` : ""}${input}${o.suf ? `<span>${o.suf}</span>` : ""}</div>` : input;
  return `<div class="field ${o.span ? "span2" : ""}"><label for="${fid(p)}">${esc(label)}${reqMark(o)}</label>${box}${o.hint ? `<span class="hint" ${o.hintId ? `id="${o.hintId}"` : ""}>${esc(o.hint)}</span>` : ""}${errOf(p)}</div>`;
}
function seg(p, label, opts, o = {}) {
  const v = getP(draft.f, p);
  return `<fieldset class="field ${o.span ? "span2" : ""}"><legend>${esc(label)}${reqMark(o)}</legend><div class="seg">${opts.map(x => `<label><input type="radio" name="${fid(p)}" data-p="${p}" value="${esc(x)}" ${v === x ? "checked" : ""} ${o.re ? "data-re" : ""}><span>${esc(x)}</span></label>`).join("")}</div>${errOf(p)}</fieldset>`;
}
function sel(p, label, opts, o = {}) {
  const v = getP(draft.f, p);
  return `<div class="field ${o.span ? "span2" : ""}"><label for="${fid(p)}">${esc(label)}${reqMark(o)}</label><select id="${fid(p)}" data-p="${p}" ${o.req ? 'aria-required="true"' : ""} ${inv(p)}><option value="">Pilih</option>${opts.map(x => `<option ${v === x ? "selected" : ""}>${esc(x)}</option>`).join("")}</select>${errOf(p)}</div>`;
}
function chk(p, label, opts) {
  const v = getP(draft.f, p) || [];
  return `<fieldset class="field"><legend>${esc(label)}</legend><div class="seg">${opts.map(x => `<label><input type="checkbox" data-m="${p}" value="${esc(x)}" ${v.includes(x) ? "checked" : ""}><span>${esc(x)}</span></label>`).join("")}</div></fieldset>`;
}
const grp = (title, inner, cls = "fgrid") => `<section class="fsec"><h4>${title}</h4><div class="${cls}">${inner}</div></section>`;
const entry = (k, i, title, inner) => `<div class="entry"><div class="entry-h"><b>${title}</b>${draft.f[k].length > 1 ? `<button class="linkbtn" data-del="${k}.${i}">Hapus</button>` : ""}</div><div class="fgrid">${inner}</div></div>`;
const addBtn = (k, label) => draft.f[k].length < 3 ? `<button class="btn outline sm addbtn" data-add="${k}">+ ${label}</button>` : `<p class="meta">Maksimal 3, sesuai formulir resmi.</p>`;

function stepBody(j) {
  const f = draft.f, s = draft.step;
  if (s === 0) return grp("Posisi yang dilamar", `<div class="lockpos"><span class="co">M28</span><div style="min-width:0"><b>${esc(j.t)}</b><p class="meta">${esc(catOf(j).l)} · Penempatan ${j.loc}</p></div><span class="locked">${ico.check} Terisi otomatis</span></div>`, "")
    + grp("Identitas diri",
      tx("nama", "Nama lengkap", { req: 1, span: 1, hint: "Sesuai KTP atau identitas lain yang sah secara hukum" })
      + seg("jk", "Jenis kelamin", ["Pria", "Wanita"], { req: 1 })
      + sel("nikah", "Status pernikahan", ["Menikah", "Belum / Tidak Menikah", "Duda / Janda"], { req: 1 })
      + tx("tempat", "Tempat lahir", { req: 1, ph: "Contoh: Bandung" })
      + tx("tgl", "Tanggal lahir", { req: 1, type: "date", hint: usiaText(), hintId: "f-usia" }))
    + grp("Dokumen identitas",
      seg("idjenis", "Jenis identitas", ["KTP", "SIM", "Pasport"], { req: 1 })
      + tx("idno", "Nomor identitas", { req: 1, im: "numeric", ph: f.idjenis === "KTP" ? "16 digit NIK" : "" }))
    + grp("Data fisik",
      tx("tinggi", "Tinggi badan", { im: "numeric", suf: "cm", max: 3 })
      + tx("berat", "Berat badan", { im: "numeric", suf: "kg", max: 3 }));
  if (s === 1) return grp("Alamat tinggal tetap",
      tx("alamat", "Alamat", { req: 1, span: 1, hint: "Lengkapi dengan nomor rumah dan RT / RW", ph: "Contoh: Jl. Merdeka No. 10, RT 02 / RW 04" })
      + tx("desa", "Desa / kelurahan")
      + tx("kec", "Kecamatan")
      + seg("kabtipe", "Kabupaten / kota", ["Kota", "Kabupaten"])
      + tx("kabnama", "Nama " + (f.kabtipe || "kota").toLowerCase(), { ph: "Contoh: Bandung" }))
    + grp("Kontak",
      tx("hp", "No. ponsel / WhatsApp", { req: 1, type: "tel", im: "tel", ph: "0812-3456-7890", hint: "Tim HR akan menghubungi lewat nomor ini" })
      + tx("telp", "No. telepon rumah", { type: "tel", im: "tel" })
      + tx("email", "Email", { type: "email", span: 1, ph: "nama@email.com" }));
  if (s === 2) return grp("Pendidikan terakhir",
      sel("pend", "Jenjang", PEND, { req: 1 })
      + seg("lulusStatus", "Status kelulusan", ["Lulus", "Tidak Lulus"], { req: 1 })
      + tx("sekolah", "Nama sekolah / universitas", { req: 1, span: 1 })
      + tx("jurusan", "Jurusan", { ph: "Contoh: Akuntansi" })
      + tx("lulus", "Tahun lulus", { req: 1, im: "numeric", max: 4, ph: "Contoh: 2018" }));
  if (s === 3) {
    const PH = ["Contoh: Mengemudi mobil matic", "Contoh: Microsoft Excel", "Contoh: Melayani pelanggan"];
    const skills = f.skills.map((x, i) => `<div class="skrow">${tx(`skills.${i}.n`, `Keahlian ${i + 1}`, { ph: PH[i] })}${seg(`skills.${i}.lv`, "Tingkat", ["Baik", "Cukup", "Kurang"])}${f.skills.length > 1 ? `<button class="x sm" data-del="skills.${i}" aria-label="Hapus keahlian ${i + 1}">${ico.close}</button>` : ""}</div>`).join("");
    const exps = f.exps.map((x, i) => entry("exps", i, `Pengalaman ${i + 1}`,
      tx(`exps.${i}.pt`, "Nama perusahaan") + tx(`exps.${i}.pos`, "Posisi / jabatan")
      + tx(`exps.${i}.bidang`, "Bidang usaha", { ph: "Contoh: Retail, logistik" }) + tx(`exps.${i}.kota`, "Kota")
      + tx(`exps.${i}.dari`, "Mulai bekerja", { type: "month" }) + tx(`exps.${i}.sampai`, "Selesai bekerja", { type: "month" })
      + tx(`exps.${i}.gaji`, "Total gaji / THP", { pre: "Rp", im: "numeric" }) + tx(`exps.${i}.alasan`, "Alasan berhenti"))).join("");
    return grp("Keterampilan / keahlian", skills + addBtn("skills", "Tambah keahlian"), "stack")
      + grp("Pengalaman di bidang yang sama", `<label class="toggle"><input type="checkbox" id="f-expNone" data-p="expNone" data-re ${f.expNone ? "checked" : ""}> Saya belum punya pengalaman kerja di bidang yang sama</label>`
        + (f.expNone ? "" : exps + addBtn("exps", "Tambah pengalaman")), "stack");
  }
  if (s === 4) return grp("Referensi kerja", f.refs.map((r, i) => entry("refs", i, `Referensi ${i + 1}`,
      tx(`refs.${i}.nama`, "Nama") + tx(`refs.${i}.jab`, "Jabatan") + tx(`refs.${i}.pt`, "Perusahaan") + tx(`refs.${i}.hp`, "No. HP / telepon", { type: "tel", im: "tel" }))).join("")
      + addBtn("refs", "Tambah referensi"), "stack");
  if (s === 5) {
    const q = j.q;
    const jq = q.type === "radio" ? seg("ans", q.label, q.opts, { req: 1, span: 1 }) : q.type === "select" ? sel("ans", q.label, q.opts, { req: 1, span: 1 }) : tx("ans", q.label, { span: 1, ph: "instagram.com/namaanda" });
    return grp("Khusus posisi " + esc(j.t), jq)
      + grp("Status saat ini",
        seg("q1", "Apakah saat ini Anda masih bekerja atau terikat kontrak dengan perusahaan lain?", ["Ya", "Tidak"], { span: 1, re: 1 })
        + (f.q1 === "Ya" ? tx("q1x", "Sampai kapan kontrak atau masa kerja Anda?", { span: 1 }) : "")
        + seg("q2", "Apakah Anda pernah mengikuti seleksi karyawan di perusahaan ini?", ["Belum pernah", "Pernah"], { span: 1, re: 1 })
        + (f.q2 === "Pernah" ? tx("q2x", "Kapan?", { span: 1, ph: "Contoh: Maret 2025" }) : "")
        + seg("q8", "Apakah Anda memiliki pekerjaan tambahan / sampingan?", ["Ada", "Tidak ada"], { span: 1 }))
      + grp("Kendaraan & kesiapan kerja",
        chk("kend", "Kendaraan yang dimiliki", ["Mobil", "Motor", "Tidak punya"])
        + chk("sim", "SIM yang dimiliki", ["SIM A", "SIM B", "SIM C", "Tidak punya"])
        + seg("q4", "Bersedia melakukan perjalanan dinas ke luar kota / pulau?", ["Bersedia", "Tidak bersedia"], { span: 1 })
        + seg("q7", "Bersedia bekerja dengan sistem shift?", ["Bersedia", "Tidak bersedia"], { span: 1 }))
      + grp("Kesehatan",
        seg("q5", "Pernah menderita sakit keras, kronis, kecelakaan berat, atau operasi?", ["Tidak pernah", "Pernah"], { span: 1, re: 1 })
        + (f.q5 === "Pernah" ? tx("q5x", "Kapan, dan sakit atau operasi apa?", { span: 1 }) : "")
        + seg("q6", "Jika diperlukan, bersedia melakukan tes kesehatan apa pun?", ["Bersedia", "Tidak bersedia"], { span: 1 }))
      + grp("Harapan bila diterima",
        tx("gaji", "Gaji yang diharapkan", { pre: "Rp", im: "numeric", ph: "4.500.000" })
        + sel("mulai", "Bisa mulai bekerja", ["Secepatnya", "Dalam 1 minggu", "Dalam 2 minggu", "Dalam 1 bulan", "Lebih dari 1 bulan"])
        + tx("benefit", "Benefit lain yang diharapkan", { span: 1, ph: "Contoh: BPJS, uang makan, transport" }));
  }
  return grp("Lampiran", `<div class="upload">${ico.up}<div style="min-width:0;flex:1"><b>CV / resume</b><p class="meta">${f.cv ? esc(f.cv) : "PDF atau DOC, maks. 2 MB. Boleh dilewati."}</p></div><label class="btn outline sm" for="f-cv">${f.cv ? "Ganti file" : "Pilih file"}</label><input id="f-cv" type="file" accept=".pdf,.doc,.docx" hidden></div>`, "stack")
    + `<section class="fsec"><h4>Ringkasan lamaran</h4>${reviewHTML(f, j, true)}</section>`
    + `<section class="fsec"><h4>Pernyataan</h4><div class="decl"><label><input type="checkbox" id="f-setuju" data-p="setuju" ${f.setuju ? "checked" : ""} ${inv("setuju")}><span>Saya menyatakan bahwa seluruh isi formulir ini adalah benar sesuai data diri saya yang sesungguhnya. Jika terbukti data yang saya tulis tidak benar, saya bersedia tidak diterima bekerja atau dibatalkan sebagai karyawan.</span></label><p class="meta">Tanggal pengisian: ${fmtD(new Date().toISOString().slice(0, 10))}</p>${errOf("setuju")}</div></section>`;
}

function summarize(f, j) {
  const kab = f.kabnama ? `${f.kabtipe} ${f.kabnama}` : "";
  const exps = f.expNone ? [["Pengalaman", "Belum ada pengalaman di bidang yang sama"]]
    : f.exps.filter(x => x.pt || x.pos).map((x, i) => [`Pengalaman ${i + 1}`, [[x.pos, x.pt].filter(Boolean).join(" di "), x.bidang, x.kota, [fmtM(x.dari), fmtM(x.sampai)].filter(Boolean).join(" – "), x.gaji && "Rp " + x.gaji, x.alasan && "Berhenti: " + x.alasan].filter(Boolean).join(" · ")]);
  const refs = f.refs.filter(r => r.nama).map((r, i) => [`Referensi ${i + 1}`, [r.nama, r.jab, r.pt, r.hp].filter(Boolean).join(" · ")]);
  return [
    { s: 0, t: "Data pribadi", rows: [["Posisi", `${j.t} · ${j.loc}`], ["Nama lengkap", f.nama], ["Jenis kelamin", f.jk], ["Tempat, tanggal lahir", [f.tempat, fmtD(f.tgl)].filter(Boolean).join(", ")], ["Usia", ageOf(f.tgl) ? ageOf(f.tgl) + " tahun" : ""], ["Status pernikahan", f.nikah], ["Identitas", f.idno ? `${f.idjenis} · ${f.idno}` : ""], ["Tinggi / berat badan", [f.tinggi && f.tinggi + " cm", f.berat && f.berat + " kg"].filter(Boolean).join(" · ")]] },
    { s: 1, t: "Alamat & kontak", rows: [["Alamat", [f.alamat, f.desa, f.kec && "Kec. " + f.kec, kab].filter(Boolean).join(", ")], ["No. ponsel / WA", f.hp], ["No. telepon rumah", f.telp], ["Email", f.email]] },
    { s: 2, t: "Pendidikan", rows: [["Pendidikan terakhir", f.pend], ["Sekolah / universitas", f.sekolah], ["Jurusan", f.jurusan], ["Tahun lulus", [f.lulus, f.lulusStatus].filter(Boolean).join(" · ")]] },
    { s: 3, t: "Keahlian & pengalaman", rows: [["Keahlian", f.skills.filter(x => x.n).map(x => `${x.n} (${x.lv})`).join(", ")], ...(exps.length ? exps : [["Pengalaman", ""]])] },
    { s: 4, t: "Referensi", rows: refs.length ? refs : [["Referensi", ""]] },
    { s: 5, t: "Pertanyaan tambahan", rows: [[j.q.label, f.ans], ["Masih bekerja / terikat kontrak", [f.q1, f.q1x].filter(Boolean).join(", ")], ["Pernah ikut seleksi di sini", [f.q2, f.q2x].filter(Boolean).join(", ")], ["Pekerjaan sampingan", f.q8], ["Kendaraan", f.kend.join(", ")], ["SIM", f.sim.join(", ")], ["Dinas luar kota / pulau", f.q4], ["Sistem shift", f.q7], ["Riwayat sakit keras / operasi", [f.q5, f.q5x].filter(Boolean).join(", ")], ["Tes kesehatan", f.q6], ["Gaji yang diharapkan", f.gaji && "Rp " + f.gaji], ["Bisa mulai bekerja", f.mulai], ["Benefit lain", f.benefit]] },
  ];
}
const reviewHTML = (f, j, edit) => summarize(f, j).map(g => `<div class="rsec"><div class="rsec-h"><b>${g.t}</b>${edit ? `<button class="linkbtn" data-goto="${g.s}">Ubah</button>` : ""}</div><dl class="review">${g.rows.map(([k, x]) => `<div><dt>${esc(k)}</dt><dd>${x ? esc(x) : '<span class="meta">Tidak diisi</span>'}</dd></div>`).join("")}</dl></div>`).join("");

function drawApply(focusSel) {
  const j = jobById(draft.job), s = draft.step, n = FSTEPS.length, pct = Math.round((s + 1) / n * 100);
  const old = lay.querySelector(".dialog.apply"), keepScroll = focusSel && old && +old.dataset.step === s ? old.querySelector(".dlg-b").scrollTop : 0;
  lay.innerHTML = `<div class="overlay" data-close><div class="dialog apply ${old ? "" : "anim"}" data-step="${s}" role="dialog" aria-modal="true" aria-labelledby="dlg-t">
    <div class="dlg-h"><div style="min-width:0"><h2 id="dlg-t">Melamar sebagai ${esc(j.t)}</h2><p class="meta">PT Mitra Dua Delapan · ${j.loc}</p></div><button class="x" data-x aria-label="Tutup">${ico.close}</button></div>
    <div class="prog"><div class="prog-bar"><span style="width:${pct}%"></span></div><div class="prog-l"><span>Langkah ${s + 1} dari ${n} · <b>${FSTEPS[s].t}</b></span><span>${pct}%</span></div></div>
    <div class="dlg-b">
      ${draft.restored ? `<div class="resume"><span>Melanjutkan draf yang tersimpan di perangkat ini.</span><button class="linkbtn" data-restart>Mulai dari awal</button></div>` : ""}
      <div class="step-h"><h3>${FSTEPS[s].t}</h3><p class="meta">${FSTEPS[s].d}</p></div>
      ${stepBody(j)}
    </div>
    <div class="dlg-f"><button class="linkbtn demo" data-demo>Isi data contoh</button><span class="saved meta">Draf tersimpan otomatis</span>${s > 0 ? `<button class="btn outline" data-prev>Kembali</button>` : ""}<button class="btn primary" data-next>${s < n - 1 ? "Berikutnya" : "Kirim lamaran"}</button></div>
  </div></div>`;
  const body = lay.querySelector(".dlg-b");
  body.scrollTop = keepScroll;
  const target = focusSel ? lay.querySelector(focusSel) : body.querySelector("input:not([type=hidden]):not([type=radio]):not([type=checkbox]), select") || lay.querySelector("[data-next]");
  if (target) target.focus({ preventScroll: !!focusSel });
}
function validate(j) {
  const f = draft.f, err = {};
  REQ[draft.step].forEach(k => {
    if (k === "ans" && j.q.type === "url") return;
    if (f[k] === "" || f[k] === false || f[k] == null) err[k] = k === "setuju" ? "Centang pernyataan ini untuk mengirim lamaran." : "Wajib diisi";
  });
  if (draft.step === 0 && !err.idno && f.idjenis === "KTP" && f.idno.replace(/\D/g, "").length !== 16) err.idno = "NIK pada KTP terdiri dari 16 digit";
  if (draft.step === 1 && !err.hp && f.hp.replace(/\D/g, "").length < 9) err.hp = "Nomor terlalu pendek. Contoh: 0812-3456-7890";
  if (draft.step === 2 && !err.lulus && !/^(19|20)\d{2}$/.test(f.lulus.trim())) err.lulus = "Tulis 4 digit tahun, contoh 2018";
  return err;
}
function applyInput(e) {
  if (!draft || !lay.querySelector(".dialog.apply")) return;
  const el = e.target, d = el.dataset;
  if (d.p) {
    if (el.type === "radio" && e.type === "input") return;
    setP(draft.f, d.p, el.type === "checkbox" ? el.checked : el.value);
    if (draft.err[d.p]) { delete draft.err[d.p]; const fe = lay.querySelector(`#${fid(d.p)}-err`); fe && fe.remove(); lay.querySelectorAll(`[data-p="${d.p}"]`).forEach(x => x.removeAttribute("aria-invalid")); }
    if (d.p === "tgl") { const h = lay.querySelector("#f-usia"); if (h) h.textContent = usiaText(); }
    saveDraft();
    if ((d.p === "kabtipe" || d.p === "idjenis") && e.type === "change") { const lbl = lay.querySelector('label[for="f-kabnama"]'); if (lbl) lbl.textContent = "Nama " + draft.f.kabtipe.toLowerCase(); }
    if ("re" in d && e.type === "change") drawApply(el.id ? "#" + el.id : `input[name="${el.name}"][value="${el.value}"]`);
  } else if (d.m && e.type === "change") {
    const arr = getP(draft.f, d.m), i = arr.indexOf(el.value);
    if (el.checked && i < 0) arr.push(el.value);
    if (!el.checked && i >= 0) arr.splice(i, 1);
    saveDraft();
  } else if (el.id === "f-cv" && e.type === "change") {
    draft.f.cv = el.files[0] ? el.files[0].name : ""; saveDraft(); drawApply("#f-cv + label, label[for=f-cv]");
  }
}
function applyClick(e) {
  if (!draft || !lay.querySelector(".dialog.apply")) return;
  const t = e.target.closest("[data-goto],[data-add],[data-del],[data-demo],[data-restart],[data-next],[data-prev]"); if (!t) return;
  const d = t.dataset, f = draft.f;
  if (d.goto) { draft.step = +d.goto; draft.err = {}; saveDraft(); drawApply(); }
  else if (d.add) { f[d.add].push(NEW[d.add]()); saveDraft(); const i = f[d.add].length - 1; drawApply(`[data-p="${d.add}.${i}.${{ skills: "n", exps: "pt", refs: "nama" }[d.add]}"]`); }
  else if (d.del) { const [k, i] = d.del.split("."); f[k].splice(+i, 1); if (!f[k].length) f[k].push(NEW[k]()); saveDraft(); drawApply(`[data-add="${k}"], .dlg-b input`); }
  else if ("demo" in d) { draft.f = sampleForm(jobById(draft.job)); draft.err = {}; saveDraft(); drawApply(); toast("Data contoh diisi di semua langkah"); }
  else if ("restart" in d) { clearDraft(draft.job); draft = { job: draft.job, step: 0, f: blankForm(), err: {}, restored: false }; drawApply(); }
  else if ("prev" in d) { draft.step--; draft.err = {}; draft.restored = false; saveDraft(); drawApply(); }
  else if ("next" in d) {
    const j = jobById(draft.job);
    draft.err = validate(j);
    if (Object.keys(draft.err).length) {
      drawApply();
      const fe = lay.querySelector(".ferr"), inp = fe && fe.closest(".field, .decl").querySelector("input, select");
      if (fe) fe.scrollIntoView({ block: "center" });
      if (inp) inp.focus({ preventScroll: true });
      return;
    }
    draft.restored = false;
    if (draft.step < FSTEPS.length - 1) { draft.step++; saveDraft(); drawApply(); } else submitApply(j);
  }
}
function submitApply(j) {
  const f = draft.f, no = "M28-" + String(1001 + apps.length), now = new Date().toISOString();
  const e0 = !f.expNone && f.exps.find(x => x.pos || x.pt);
  apps.unshift({ no, job: j.id, name: f.nama, phone: f.hp, email: f.email, city: j.loc, edu: PEND_SHORT[f.pend] || f.pend, age: ageOf(f.tgl) || "", prev: e0 ? [e0.pos, e0.pt].filter(Boolean).join(" di ") : "Belum ada pengalaman",
    ans: f.ans, cv: f.cv || "CV_" + f.nama.split(" ")[0] + ".pdf", at: now, status: "baru", seen: false, note: "", log: [{ at: now, t: "Melamar lewat form " + j.t }], form: JSON.parse(JSON.stringify(f)) });
  save(); setBadge(); clearDraft(j.id);
  lay.querySelector(".dialog").innerHTML = `<div class="done"><span class="tick">${ico.check.replace('width="16" height="16"', 'width="28" height="28"')}</span><h2>Lamaran Anda terkirim</h2>
    <p class="meta" style="max-width:40ch">Lamaran untuk <b style="color:var(--fg)">${esc(j.t)}</b> sudah masuk langsung ke daftar pelamar posisi ini. Nomor lamaran Anda:</p><span class="mono" style="font-size:16px;background:var(--surface-2);padding:6px 12px;border-radius:6px">${no}</span>
    <div class="actions" style="justify-content:center;margin-top:6px"><button class="btn outline" data-x>Selesai</button><button class="btn primary" id="see-hr">Lihat di Dashboard HR</button></div></div>`;
  draft = null;
  lay.querySelector("#see-hr").onclick = () => { closeLayer(); ui.view = "hr"; goPelamar({ job: j.id, open: no }); render(); openDrawer(no); };
}

/* ---------- HR ---------- */
/* Seller-center style: side menu with separate pages (Beranda, Kelola pelamar, Interview, Kelola lowongan) */
const HRNAV = [
  { k: "home", l: "Beranda", ic: svg('<path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/>') },
  { g: "Rekrutmen" },
  { k: "pelamar", l: "Kelola pelamar", ic: svg('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/>'), badge: () => apps.filter(a => !a.seen).length },
  { k: "interview", l: "Interview", ic: svg('<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'), count: () => apps.filter(a => a.status === "interview").length },
  { g: "Lowongan" },
  { k: "lowongan", l: "Kelola lowongan", ic: svg('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>'), count: () => JOBS.length },
];
const EXT = svg('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>');
const CHEV = svg('<path d="m9 6 6 6-6 6"/>');
const WARN = svg('<path d="M12 4 2.5 20h19z"/><path d="M12 10v4M12 17v.5"/>');
// Shortcuts from Beranda into Kelola pelamar with a preset filter
const KPI_FILTER = { total: {}, unseen: { unseen: true }, lolos: { scr: "ok" }, tidak: { scr: "no" }, baru: { stage: "baru" }, screening: { stage: "screening" }, interview: { stage: "interview" }, diterima: { stage: "diterima" } };
function goPelamar(preset) {
  Object.assign(ui, { hrPage: "pelamar", stage: "ALL", job: "ALL", hrLoc: "ALL", scr: "ALL", unseen: false, q: "", picked: [] }, preset);
}
const pct = (a, b) => b ? Math.round(a / b * 100) + "%" : "0%";
const byNew = (a, b) => b.at.localeCompare(a.at);

function renderHR() {
  const page = ui.hrPage || "home";
  const nav = HRNAV.map(n => n.g ? `<div class="snav-g">${n.g}</div>`
    : `<button class="snav" data-hrpage="${n.k}" aria-current="${page === n.k}">${n.ic}<span>${n.l}</span>${n.badge && n.badge() ? `<span class="dot" title="Belum dilihat">${n.badge()}</span>` : n.count ? `<span class="scnt">${n.count()}</span>` : ""}</button>`).join("");
  const body = { home: hrHome, pelamar: hrPelamar, interview: hrInterview, lowongan: hrLowongan }[page]();
  return `<div class="hrshell">
    <aside class="side" aria-label="Menu dashboard HR"><nav class="side-in">${nav}<div class="snav-sep"></div><button class="snav" data-view-portal>${EXT}<span>Lihat halaman lowongan</span></button></nav></aside>
    <section class="hrmain">${body}</section>
  </div>`;
}

function hrHome() {
  const unseen = apps.filter(a => !a.seen).length, ok = apps.filter(screenOf).length;
  const byS = k => apps.filter(a => a.status === k).length;
  const empty = JOBS.filter(j => !apps.some(a => a.job === j.id));
  const notOkOpen = apps.filter(a => !screenOf(a) && (a.status === "baru" || a.status === "screening")).length;
  const today = new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const kpi = (k, label, n, sub, cls = "") => `<button class="kpi ${cls}" ${k === "lowongan" ? 'data-hrpage="lowongan"' : `data-kpi="${k}"`}><span>${label}</span><b>${n}</b>${sub ? `<small>${sub}</small>` : ""}</button>`;
  const todo = (k, label, n, fg, bg, ic) => `<button ${k === "lowongan" ? 'data-hrpage="lowongan"' : `data-kpi="${k}"`}><span class="ic" style="color:${fg};background:${bg}">${ic}</span><span>${label}</span><b>${n}</b>${CHEV}</button>`;
  const stats = JOBS.map(j => { const l = apps.filter(a => a.job === j.id); return { j, n: l.length, unseen: l.filter(a => !a.seen).length, ok: l.filter(screenOf).length, iv: l.filter(a => a.status === "interview").length }; }).sort((a, b) => b.n - a.n);
  const latest = apps.slice().sort(byNew).slice(0, 5);
  return `<div class="phead"><div><h1>Beranda</h1><p>Ringkasan rekrutmen PT Mitra Dua Delapan · ${today}</p></div></div>
    ${unseen ? `<div class="notice">${WARN}<span>Ada <b>${unseen} pelamar</b> yang belum dilihat.</span><button class="linkbtn" data-kpi="unseen">Lihat sekarang</button></div>` : ""}
    <div class="panel">
      <div class="kpis">
        ${kpi("lowongan", "Lowongan aktif", JOBS.length, "Bandung, Cimahi, Makassar")}
        ${kpi("total", "Total pelamar", apps.length, "Semua lowongan")}
        ${kpi("unseen", "Belum dilihat", unseen, "Perlu dibuka", unseen ? "warn" : "")}
        ${kpi("lolos", "Lolos syarat awal", ok, pct(ok, apps.length) + " dari total")}
        ${kpi("interview", "Tahap interview", byS("interview"), "")}
        ${kpi("diterima", "Diterima", byS("diterima"), "")}
      </div>
      <div class="kpi-f"><span>Rata-rata <b>${(apps.length / JOBS.length).toFixed(1)}</b> pelamar per lowongan</span><span>Ditolak <b>${byS("ditolak")}</b></span><span>Lowongan tanpa pelamar <b>${empty.length}</b></span></div>
    </div>
    <div class="cols2">
      <div class="panel"><div class="panel-h"><h2>Perlu ditindaklanjuti</h2></div><div class="todo">
        ${todo("baru", "Pelamar baru menunggu screening", byS("baru"), "var(--primary)", "var(--primary-soft)", svg('<circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/>'))}
        ${todo("screening", "Pelamar di tahap screening", byS("screening"), "var(--warn)", "var(--warn-bg)", svg('<path d="M4 5h16l-6 7v6l-4 2v-8z"/>'))}
        ${todo("interview", "Interview yang perlu diputuskan", byS("interview"), "var(--violet)", "var(--violet-bg)", svg('<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'))}
        ${todo("tidak", "Tidak lolos syarat awal, belum diputuskan", notOkOpen, "var(--bad)", "var(--bad-bg)", ico.xx)}
        ${todo("lowongan", "Lowongan yang belum punya pelamar", empty.length, "var(--muted)", "var(--surface-2)", svg('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'))}
      </div></div>
      <div class="panel"><div class="panel-h"><h2>Pelamar terbaru</h2><button class="linkbtn" data-kpi="total">Lihat semua</button></div><div class="mini">
        ${latest.map(a => `<button data-open="${a.no}"><span class="av sm" style="background:${avColor(a.name)}">${initials(a.name)}</span><span style="min-width:0"><span class="nm">${esc(a.name)}</span><br><span class="meta">${esc(jobById(a.job).t)} · ${ago(a.at)}</span></span><span class="status s-${a.status}">${stageL(a.status)}</span></button>`).join("")}
      </div></div>
    </div>
    <div class="panel">
      <div class="panel-h"><h2>Pelamar per lowongan</h2><button class="linkbtn" data-hrpage="lowongan">Kelola lowongan</button></div>
      <div class="tbl-wrap" style="margin-top:12px"><table class="tbl"><thead><tr><th>Lowongan</th><th>Lokasi</th><th class="num">Pelamar</th><th class="num">Belum dilihat</th><th class="num">Lolos syarat</th><th class="num">Interview</th></tr></thead><tbody>
        ${stats.slice(0, 6).map(s => `<tr class="click" data-jobp="${s.j.id}"><td class="t1">${esc(s.j.t)}</td><td>${s.j.loc}</td><td class="num">${s.n}</td><td class="num">${s.unseen ? `<span class="dot">${s.unseen}</span>` : "0"}</td><td class="num">${s.ok}</td><td class="num">${s.iv}</td></tr>`).join("")}
      </tbody></table></div>
      <div class="pfoot">Menampilkan 6 lowongan dengan pelamar terbanyak dari ${JOBS.length} lowongan aktif.</div>
    </div>`;
}

function hrPelamar() {
  const q = ui.q.trim().toLowerCase(), picked = ui.picked || [];
  const base = apps.filter(a => (ui.job === "ALL" || a.job === ui.job)
    && (ui.hrLoc === "ALL" || jobById(a.job).loc === ui.hrLoc)
    && (ui.scr === "ALL" || (ui.scr === "ok") === screenOf(a))
    && (!ui.unseen || !a.seen)
    && (!q || (a.name + " " + a.no + " " + a.phone).toLowerCase().includes(q)));
  const cnt = k => base.filter(a => k === "ALL" || a.status === k).length;
  const rows = base.filter(a => ui.stage === "ALL" || a.status === ui.stage).sort(byNew);
  const filtered = ui.job !== "ALL" || ui.hrLoc !== "ALL" || ui.scr !== "ALL" || ui.unseen || q;
  const allPicked = rows.length && rows.every(a => picked.includes(a.no));
  const locs = [...new Set(JOBS.map(j => j.loc))];
  const next = a => { const i = FLOW.indexOf(a.status); return i >= 0 && i < 3 ? FLOW[i + 1] : null; };
  return `<div class="phead"><div><h1>Kelola pelamar</h1><p>Semua lamaran yang masuk, dipisah per tahap rekrutmen.</p></div>
      <label class="nsearch hsearch" for="search">${svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>')}<input id="search" type="search" placeholder="Cari nama, no. lamaran, no. HP" value="${esc(ui.q)}"></label></div>
    <div class="panel">
      <div class="ptabs" role="tablist" aria-label="Tahap rekrutmen">
        ${[["ALL", "Semua"], ...STAGES.map(s => [s.k, s.l])].map(([k, l]) => `<button class="ptab" role="tab" data-stage="${k}" aria-selected="${ui.stage === k}">${l}${cnt(k) && k !== "ALL" ? `<span class="n">${cnt(k)}</span>` : ""}</button>`).join("")}
      </div>
      <div class="pfilters">
        <label for="f-hrjob">Lowongan <select id="f-hrjob"><option value="ALL">Semua lowongan</option>${CATS.map(c => `<optgroup label="${esc(c.l)}">${JOBS.filter(j => j.cat === c.id).map(j => `<option value="${j.id}" ${ui.job === j.id ? "selected" : ""}>${esc(j.t)} · ${j.loc}</option>`).join("")}</optgroup>`).join("")}</select></label>
        <label for="f-hrloc">Lokasi <select id="f-hrloc"><option value="ALL">Semua</option>${locs.map(l => `<option ${ui.hrLoc === l ? "selected" : ""}>${l}</option>`).join("")}</select></label>
        <label for="f-hrscr">Syarat awal <select id="f-hrscr"><option value="ALL">Semua</option><option value="ok" ${ui.scr === "ok" ? "selected" : ""}>Lolos</option><option value="no" ${ui.scr === "no" ? "selected" : ""}>Tidak lolos</option></select></label>
        <button class="fpill" data-unseen aria-pressed="${!!ui.unseen}">Belum dilihat</button>
        <span class="found">Ditemukan ${rows.length} pelamar</span>
        ${filtered ? `<button class="linkbtn" data-clearf style="font-size:13px">Hapus filter</button>` : ""}
      </div>
      ${picked.length ? `<div class="bulk"><b>${picked.length} dipilih</b>${["screening", "interview", "diterima"].map(k => `<button class="btn sm outline" data-bulk="${k}">Pindah ke ${stageL(k)}</button>`).join("")}<button class="btn sm quiet" data-bulk="ditolak">Tolak</button><button class="linkbtn" data-bulk="none" style="margin-left:auto;font-size:13px">Batal pilih</button></div>` : ""}
      ${rows.length ? `<div class="tbl-wrap"><table class="tbl"><thead><tr><th style="width:34px"><input type="checkbox" data-pickall aria-label="Pilih semua" ${allPicked ? "checked" : ""}></th><th>Pelamar</th><th>Lowongan</th><th>Pendidikan</th><th>Syarat awal</th><th>Status</th><th>Melamar</th><th>Aksi</th></tr></thead><tbody>
        ${rows.map(a => { const j = jobById(a.job), ok = screenOf(a), nx = next(a); return `<tr class="click" data-open="${a.no}">
          <td><input type="checkbox" data-pick="${a.no}" aria-label="Pilih ${esc(a.name)}" ${picked.includes(a.no) ? "checked" : ""}></td>
          <td><div class="who">${a.seen ? "" : '<span class="udot" title="Belum dilihat"></span>'}<span class="t1">${esc(a.name)}</span></div><div class="meta mono">${a.no}</div></td>
          <td>${esc(j.t)}<div class="meta">${j.loc}</div></td>
          <td>${esc(a.edu)}<div class="meta">${a.age ? a.age + " tahun" : ""}</div></td>
          <td><span class="chk ${ok ? "ok" : "no"}">${ok ? ico.check : ico.xx} ${ok ? "Lolos" : "Tidak lolos"}</span></td>
          <td><span class="status s-${a.status}">${stageL(a.status)}</span></td>
          <td>${ago(a.at)}</td>
          <td><div class="rowact">${nx ? `<button class="btn sm outline" data-mv="${a.no}:${nx}">${stageL(nx)}</button>` : ""}<button class="btn sm quiet" data-open="${a.no}">Lihat</button></div></td>
        </tr>`; }).join("")}
      </tbody></table></div>` : `<div class="empty"><b style="color:var(--fg)">Tidak ada pelamar di sini</b><span>${filtered ? "Coba ubah atau hapus filter." : "Lamaran yang masuk akan muncul di tab ini."}</span></div>`}
      <div class="pfoot">Klik baris untuk membuka profil pelamar. Centang beberapa pelamar untuk memindahkan tahapnya sekaligus.</div>
    </div>`;
}

function hrInterview() {
  const rows = apps.filter(a => a.status === "interview").sort(byNew);
  return `<div class="phead"><div><h1>Interview</h1><p>Pelamar di tahap interview. Tulis jadwal dan hasil interview di catatan pelamar.</p></div></div>
    <div class="panel">
      ${rows.length ? `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Pelamar</th><th>Lowongan</th><th>Jadwal & catatan</th><th>No. WhatsApp</th><th>Keputusan</th></tr></thead><tbody>
        ${rows.map(a => { const j = jobById(a.job); return `<tr class="click" data-open="${a.no}">
          <td><span class="t1">${esc(a.name)}</span><div class="meta mono">${a.no}</div></td>
          <td>${esc(j.t)}<div class="meta">${j.loc}</div></td>
          <td>${a.note ? esc(a.note) : '<span class="meta">Belum ada catatan</span>'}</td>
          <td class="mono">${esc(a.phone)}</td>
          <td><div class="rowact"><button class="btn sm primary" data-mv="${a.no}:diterima">Terima</button><button class="btn sm quiet" data-mv="${a.no}:ditolak">Tolak</button></div></td>
        </tr>`; }).join("")}
      </tbody></table></div>` : `<div class="empty"><b style="color:var(--fg)">Belum ada pelamar di tahap interview</b><span>Pindahkan pelamar dari tahap Screening di halaman Kelola pelamar.</span></div>`}
    </div>`;
}

function hrLowongan() {
  const list = JOBS.filter(j => !ui.hrCat || ui.hrCat === "ALL" || j.cat === ui.hrCat).slice().sort((a, b) => CATS.findIndex(c => c.id === a.cat) - CATS.findIndex(c => c.id === b.cat));
  return `<div class="phead"><div><h1>Kelola lowongan</h1><p>${JOBS.length} lowongan aktif. Setiap lowongan punya form lamaran dan daftar pelamar sendiri.</p></div></div>
    <div class="panel">
      <div class="pfilters"><label for="f-hrcat">Kategori <select id="f-hrcat"><option value="ALL">Semua kategori</option>${CATS.map(c => `<option value="${c.id}" ${ui.hrCat === c.id ? "selected" : ""}>${esc(c.l)}</option>`).join("")}</select></label><span class="found">${list.length} lowongan</span></div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Lowongan</th><th>Kategori</th><th>Lokasi</th><th>Diposting</th><th class="num">Pelamar</th><th class="num">Belum dilihat</th><th class="num">Lolos syarat</th><th>Status</th><th>Aksi</th></tr></thead><tbody>
        ${list.map(j => { const l = apps.filter(a => a.job === j.id), un = l.filter(a => !a.seen).length; return `<tr>
          <td><span class="t1">${esc(j.t)}</span><div class="meta mono">${j.id}</div></td>
          <td>${catIcon(catOf(j), 22)} <span style="vertical-align:middle">${esc(catOf(j).l)}</span></td>
          <td>${j.loc}</td>
          <td>${j.days} hari lalu</td>
          <td class="num">${l.length}</td>
          <td class="num">${un ? `<span class="dot">${un}</span>` : "0"}</td>
          <td class="num">${l.filter(screenOf).length}</td>
          <td><span class="status okpill">Aktif</span></td>
          <td><div class="rowact"><button class="btn sm outline" data-jobp="${j.id}">Lihat pelamar</button><button class="btn sm quiet" data-portal-job="${j.id}">Lihat lowongan</button></div></td>
        </tr>`; }).join("")}
      </tbody></table></div>
    </div>`;
}

function profile(a) {
  const j = jobById(a.job), ok = screenOf(a), idx = FLOW.indexOf(a.status), rej = a.status === "ditolak";
  const nextK = idx >= 0 && idx < 3 ? FLOW[idx + 1] : null;
  return `<div class="pbanner"></div>
    <div class="ptop"><span class="av lg" style="background:${avColor(a.name)}">${initials(a.name)}</span>
      <h2 id="pf-t">${esc(a.name)}</h2>
      <p class="hl">Pelamar ${esc(j.t)} · ${j.loc}</p>
      <p class="meta">${esc(a.prev)} · ${esc(a.edu)}, ${a.age} tahun · melamar ${ago(a.at)}</p>
      <div class="pact">${nextK ? `<button class="btn primary" data-move="${nextK}">Pindah ke ${stageL(nextK)}</button>` : ""}${rej ? `<button class="btn outline" data-move="screening">Pulihkan ke Screening</button>` : a.status !== "diterima" ? `<button class="btn quiet" data-move="ditolak">Tolak</button>` : ""}</div>
    </div>
    <div class="psec"><h3>Tahap rekrutmen</h3>
      <div class="stageline ${rej ? "rejected" : ""}">${FLOW.map((k, i) => `<button data-move="${k}" class="${(rej ? i === 0 : i <= idx) ? "on" : ""}"><span></span>${stageL(k)}</button>`).join("")}</div>
      <p class="meta">${rej ? "Pelamar ini ditolak." : "Klik tahap untuk memindahkan pelamar."} Nomor lamaran <span class="mono">${a.no}</span></p></div>
    <div class="psec"><h3>Jawaban skrining</h3>
      <div class="qa"><span class="q">${esc(j.q.label)}</span><span class="a"><span class="chk ${ok ? "ok" : "no"}">${ok ? ico.check : ico.xx}</span>${esc(a.ans || "Tidak diisi")}</span></div></div>
    <div class="psec"><h3>Kontak</h3><div class="contact"><div>${ico.phone}<span class="mono">${esc(a.phone)}</span></div><div>${ico.mail}<span>${a.email ? esc(a.email) : '<span class="meta">Tidak diisi</span>'}</span></div></div></div>
    <div class="psec"><h3>Resume</h3><div class="cv"><span class="cv-ic">PDF</span><div style="min-width:0"><b style="overflow-wrap:anywhere">${esc(a.cv)}</b><p class="meta">Pratinjau CV tersedia di versi penuh</p></div></div></div>
    ${a.form ? `<div class="psec"><h3>Formulir lamaran</h3><div class="formview">${summarize(a.form, j).map((g, i) => `<details ${i === 0 ? "open" : ""}><summary>${g.t}</summary><dl class="review">${g.rows.map(([k, x]) => `<div><dt>${esc(k)}</dt><dd>${x ? esc(x) : '<span class="meta">Tidak diisi</span>'}</dd></div>`).join("")}</dl></details>`).join("")}</div></div>` : ""}
    <div class="psec notes"><h3><label for="note-${a.no}">Catatan internal</label></h3><textarea id="note-${a.no}" data-note="${a.no}" placeholder="Hanya terlihat oleh tim HR. Contoh: kandidat kuat, cek referensi kerja.">${esc(a.note)}</textarea></div>
    <div class="psec"><h3>Aktivitas</h3><div class="timeline">${a.log.slice().reverse().map(l => `<div class="tl"><div><div>${esc(l.t)}</div><div class="meta">${fmt(l.at)}</div></div></div>`).join("")}</div></div>`;
}
function selectApp(no) {
  const a = apps.find(x => x.no === no); if (!a) return;
  ui.open = no; if (!a.seen) { a.seen = true; save(); setBadge(); }
  render(); openDrawer(no);
}
function openDrawer(no) {
  const a = apps.find(x => x.no === no); if (!a) return;
  layer(`<div class="overlay" data-close style="background:rgba(0,0,0,.4)"></div><aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="pf-t"><button class="x close" data-x aria-label="Tutup">${ico.close}</button><div class="profile">${profile(a)}</div></aside>`);
}
function move(no, k) {
  const a = apps.find(x => x.no === no); if (!a || a.status === k) return;
  a.status = k; a.seen = true; a.log.push({ at: new Date().toISOString(), t: "Dipindah ke " + stageL(k) }); save();
  toast(a.name + " dipindah ke " + stageL(k));
  render(); if (lay.querySelector(".drawer")) openDrawer(no);
}

/* ---------- Shell ---------- */
const app = document.getElementById("app"), lay = document.getElementById("layer");
function layer(html) { lay.innerHTML = html; const f = lay.querySelector(".dlg-b input, .dlg-b select, .x"); f && f.focus(); }
function closeLayer() { lay.innerHTML = ""; }
function fitPortal() { const p = app.querySelector(".portal"); if (p) document.documentElement.style.setProperty("--top", Math.round(p.getBoundingClientRect().top + window.scrollY) + "px"); }
function setBadge() { const n = apps.filter(a => !a.seen).length, b = document.getElementById("hrbadge"); b.hidden = !n; b.textContent = n; }
function render() {
  document.getElementById("v-portal").setAttribute("aria-current", ui.view === "portal");
  document.getElementById("v-hr").setAttribute("aria-current", ui.view === "hr");
  document.getElementById("gsearch").closest(".nsearch").style.visibility = ui.view === "portal" ? "" : "hidden";
  app.innerHTML = ui.view === "portal" ? renderPortal() : renderHR();
  fitPortal();
  const s = document.getElementById("search");
  if (s) s.addEventListener("input", e => { ui.q = e.target.value; const p = e.target.selectionStart; render(); const n = document.getElementById("search"); n.focus(); n.setSelectionRange(p, p); });
}
document.getElementById("v-portal").onclick = () => { ui.view = "portal"; closeLayer(); render(); };
document.getElementById("v-hr").onclick = () => { ui.view = "hr"; closeLayer(); render(); };
document.getElementById("gsearch").addEventListener("input", e => { ui.gq = e.target.value; ui.mDetail = false; render(); });
document.getElementById("reset").onclick = () => { apps = seed(); save(); setBadge(); closeLayer(); ui.open = null; render(); toast("Data contoh dikembalikan"); };
document.addEventListener("click", e => {
  if (ui.dd && !e.target.closest(".dd")) { ui.dd = false; render(); }
  const t = e.target.closest("[data-hrpage],[data-kpi],[data-jobp],[data-portal-job],[data-view-portal],[data-mv],[data-pick],[data-pickall],[data-bulk],[data-unseen],[data-clearf],[data-dd],[data-dd-reset],[data-dd-apply],[data-cat],[data-reset-f],[data-loc],[data-few],[data-save],[data-sel],[data-back],[data-apply],[data-copy],[data-stage],[data-open],[data-move]"); if (!t) return;
  const d = t.dataset;
  const top = () => window.scrollTo(0, 0);
  if (d.hrpage) { if (d.hrpage === "pelamar") goPelamar({}); else ui.hrPage = d.hrpage; render(); top(); }
  else if (d.kpi) { goPelamar(KPI_FILTER[d.kpi]); render(); top(); }
  else if (d.jobp) { goPelamar({ job: d.jobp }); render(); top(); }
  else if (d.portalJob) { Object.assign(ui, { view: "portal", sel: d.portalJob, cat: "ALL", loc: "Semua", few: false, gq: "", mDetail: true }); render(); top(); }
  else if ("viewPortal" in d) { ui.view = "portal"; render(); top(); }
  else if (d.mv) { const [no, k] = d.mv.split(":"); move(no, k); }
  else if (d.pick) { const p = ui.picked, i = p.indexOf(d.pick); if (i < 0) p.push(d.pick); else p.splice(i, 1); render(); }
  else if ("pickall" in d) { const vis = [...app.querySelectorAll("[data-pick]")].map(x => x.dataset.pick); ui.picked = t.checked ? vis : []; render(); }
  else if (d.bulk) { const list = ui.picked.slice(); ui.picked = []; if (d.bulk !== "none") { list.forEach(no => { const a = apps.find(x => x.no === no); if (a && a.status !== d.bulk) { a.status = d.bulk; a.seen = true; a.log.push({ at: new Date().toISOString(), t: "Dipindah ke " + stageL(d.bulk) }); } }); save(); setBadge(); toast(`${list.length} pelamar dipindah ke ${stageL(d.bulk)}`); } render(); }
  else if ("unseen" in d) { ui.unseen = !ui.unseen; ui.picked = []; render(); }
  else if ("clearf" in d) { goPelamar({ stage: ui.stage }); render(); }
  else if (d.dd) { ui.dd = ui.dd === d.dd ? false : d.dd; ui.pend = d.dd === "cat" ? ui.cat : ui.loc; render(); if (ui.dd) { const r = app.querySelector(".ddopt input:checked"); r && r.focus(); } }
  else if (d.ddReset) { ui.pend = d.ddReset; render(); }
  else if (d.ddApply) { ui[d.ddApply] = ui.pend; ui.dd = false; ui.mDetail = false; render(); const p = app.querySelector(".plist"); if (p) p.scrollTop = 0; }
  else if (d.cat) { ui.cat = d.cat; ui.dd = false; ui.mDetail = false; render(); const p = app.querySelector(".plist"); if (p) p.scrollTop = 0; }
  else if ("resetF" in d) { Object.assign(ui, { cat: "ALL", loc: "Semua", few: false, gq: "" }); document.getElementById("gsearch").value = ""; render(); }
  else if (d.sel && !portalJobs(false).some(x => x.id === d.sel)) { Object.assign(ui, { cat: jobById(d.sel).cat, loc: "Semua", few: false, gq: "" }); document.getElementById("gsearch").value = ""; ui.sel = d.sel; ui.mDetail = true; render(); }
  else if (d.loc) { ui.loc = d.loc; ui.mDetail = false; render(); }
  else if ("few" in d) { ui.few = !ui.few; ui.mDetail = false; render(); }
  else if (d.save) { ui.saved = ui.saved || []; const i = ui.saved.indexOf(d.save); if (i < 0) { ui.saved.push(d.save); toast("Lowongan disimpan"); } else ui.saved.splice(i, 1); render(); }
  else if (d.sel) { ui.sel = d.sel; ui.mDetail = true; render(); if (!window.matchMedia("(min-width: 861px)").matches) window.scrollTo(0, 0); }
  else if ("back" in d) { ui.mDetail = false; render(); }
  else if (d.apply) openApply(d.apply);
  else if (d.copy) { const u = "mitra28.id/lamar/" + d.copy.toLowerCase(); (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(() => toast("Link disalin: " + u), () => toast("Link: " + u)); }
  else if (d.stage) { ui.stage = d.stage; ui.picked = []; render(); }
  else if (d.open) selectApp(d.open);
  else if (d.move) move(ui.open, d.move);
});
document.addEventListener("input", e => { if (e.target.dataset && e.target.dataset.note) { const a = apps.find(x => x.no === e.target.dataset.note); if (a) { a.note = e.target.value; save(); } } });
lay.addEventListener("click", e => { if (e.target.closest("[data-x]") || e.target.hasAttribute("data-close")) closeLayer(); });
lay.addEventListener("click", applyClick);
lay.addEventListener("input", applyInput);
lay.addEventListener("change", applyInput);
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (lay.innerHTML) closeLayer();
  else if (ui.dd) { ui.dd = false; render(); const b = app.querySelector(".ddbtn"); b && b.focus(); }
});
document.addEventListener("change", e => {
  const hrSel = { "f-hrjob": "job", "f-hrloc": "hrLoc", "f-hrscr": "scr", "f-hrcat": "hrCat" }[e.target.id];
  if (hrSel) { ui[hrSel] = e.target.value; ui.picked = []; render(); const n = document.getElementById(e.target.id); n && n.focus(); return; }
  if (!String(e.target.name).startsWith("dd-")) return;
  ui.pend = e.target.value;
  const r = app.querySelector("[data-dd-reset]"); if (r) r.disabled = ui.pend === r.dataset.ddReset;
});
let rz; window.addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(fitPortal, 150); });
setBadge(); render();
