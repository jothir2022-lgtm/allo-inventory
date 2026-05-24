<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Allo — Inventory & Reservations</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<style>
  :root {
    --bg: #0a0a0f;
    --surface: #111118;
    --surface2: #1a1a24;
    --border: #2a2a3a;
    --accent: #6c63ff;
    --accent2: #ff6584;
    --green: #00e5a0;
    --yellow: #ffd166;
    --text: #e8e8f0;
    --muted: #6b6b80;
    --font: 'Syne', sans-serif;
    --mono: 'JetBrains Mono', monospace;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* NAV */
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2.5rem;
    border-bottom: 1px solid var(--border);
    position: sticky; top: 0;
    background: rgba(10,10,15,0.92);
    backdrop-filter: blur(12px);
    z-index: 100;
  }
  .nav-logo { font-size: 1.5rem; font-weight: 800; letter-spacing: -0.04em; }
  .nav-logo span { color: var(--accent); }
  .nav-tabs { display: flex; gap: 0.5rem; }
  .tab-btn {
    padding: 0.45rem 1.1rem;
    border-radius: 6px;
    border: 1px solid transparent;
    background: none;
    color: var(--muted);
    font-family: var(--font);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  .tab-btn.active, .tab-btn:hover {
    background: var(--surface2);
    border-color: var(--border);
    color: var(--text);
  }
  .tab-btn.active { color: var(--accent); border-color: var(--accent); }

  /* LAYOUT */
  .page { display: none; animation: fadeIn 0.3s ease; }
  .page.active { display: block; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

  .container { max-width: 1200px; margin: 0 auto; padding: 2.5rem 2rem; }
  .page-header { margin-bottom: 2rem; }
  .page-title { font-size: 2rem; font-weight: 800; letter-spacing: -0.03em; }
  .page-sub { color: var(--muted); margin-top: 0.3rem; font-size: 0.95rem; }

  /* GRID */
  .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.2rem; }

  /* PRODUCT CARD */
  .product-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 1.5rem;
    transition: border-color 0.2s, transform 0.2s;
    position: relative;
    overflow: hidden;
  }
  .product-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    opacity: 0; transition: opacity 0.2s;
  }
  .product-card:hover { border-color: var(--accent); transform: translateY(-2px); }
  .product-card:hover::before { opacity: 1; }

  .product-sku {
    font-family: var(--mono);
    font-size: 0.72rem;
    color: var(--accent);
    background: rgba(108,99,255,0.12);
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    display: inline-block;
    margin-bottom: 0.7rem;
    letter-spacing: 0.05em;
  }
  .product-name { font-size: 1.15rem; font-weight: 700; margin-bottom: 1rem; }

  .stock-table { width: 100%; border-collapse: collapse; margin-bottom: 1.2rem; }
  .stock-table th {
    text-align: left; font-size: 0.72rem; color: var(--muted);
    font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
    padding-bottom: 0.5rem; border-bottom: 1px solid var(--border);
  }
  .stock-table td { padding: 0.55rem 0; font-size: 0.88rem; border-bottom: 1px solid rgba(42,42,58,0.5); }
  .stock-table tr:last-child td { border-bottom: none; }
  .stock-pill {
    display: inline-flex; align-items: center; gap: 0.3rem;
    padding: 0.18rem 0.6rem; border-radius: 100px; font-size: 0.78rem;
    font-family: var(--mono); font-weight: 500;
  }
  .stock-pill.high { background: rgba(0,229,160,0.12); color: var(--green); }
  .stock-pill.mid  { background: rgba(255,209,102,0.12); color: var(--yellow); }
  .stock-pill.low  { background: rgba(255,101,132,0.12); color: var(--accent2); }
  .stock-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

  .reserve-btn {
    width: 100%; padding: 0.75rem;
    background: var(--accent); color: #fff;
    border: none; border-radius: 8px;
    font-family: var(--font); font-size: 0.95rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s; letter-spacing: 0.01em;
  }
  .reserve-btn:hover { background: #7b74ff; transform: scale(1.01); }
  .reserve-btn:active { transform: scale(0.99); }
  .reserve-btn:disabled { background: var(--surface2); color: var(--muted); cursor: not-allowed; transform: none; }

  /* MODAL */
  .modal-backdrop {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.7); backdrop-filter: blur(6px);
    z-index: 200; display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none; transition: opacity 0.2s;
  }
  .modal-backdrop.open { opacity: 1; pointer-events: auto; }
  .modal {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 16px; padding: 2rem; width: 100%; max-width: 440px;
    transform: scale(0.95); transition: transform 0.2s;
  }
  .modal-backdrop.open .modal { transform: scale(1); }
  .modal-title { font-size: 1.2rem; font-weight: 800; margin-bottom: 0.4rem; }
  .modal-sub { color: var(--muted); font-size: 0.88rem; margin-bottom: 1.5rem; }

  .field-group { margin-bottom: 1rem; }
  .field-label { font-size: 0.78rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 0.4rem; display: block; }
  .field-select, .field-input {
    width: 100%; padding: 0.65rem 0.9rem;
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: 8px; color: var(--text);
    font-family: var(--font); font-size: 0.95rem;
    outline: none; transition: border-color 0.2s;
  }
  .field-select:focus, .field-input:focus { border-color: var(--accent); }
  .field-select option { background: var(--surface2); }

  .modal-actions { display: flex; gap: 0.7rem; margin-top: 1.5rem; }
  .btn-secondary {
    flex: 1; padding: 0.7rem;
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: 8px; color: var(--text);
    font-family: var(--font); font-size: 0.9rem; font-weight: 600;
    cursor: pointer; transition: all 0.2s;
  }
  .btn-secondary:hover { border-color: var(--muted); }
  .btn-primary {
    flex: 2; padding: 0.7rem;
    background: var(--accent); border: none;
    border-radius: 8px; color: #fff;
    font-family: var(--font); font-size: 0.9rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s;
  }
  .btn-primary:hover { background: #7b74ff; }

  .error-box {
    background: rgba(255,101,132,0.1); border: 1px solid rgba(255,101,132,0.3);
    border-radius: 8px; padding: 0.75rem 1rem;
    color: var(--accent2); font-size: 0.88rem;
    margin-top: 1rem; display: none;
  }
  .error-box.show { display: block; }

  /* RESERVATION PAGE */
  .reservations-list { display: flex; flex-direction: column; gap: 1rem; }
  .reservation-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 14px; padding: 1.5rem;
    display: grid; grid-template-columns: 1fr auto;
    gap: 1.5rem; align-items: center;
    transition: border-color 0.2s;
  }
  .reservation-card.pending { border-left: 3px solid var(--yellow); }
  .reservation-card.confirmed { border-left: 3px solid var(--green); }
  .reservation-card.released { border-left: 3px solid var(--muted); opacity: 0.6; }
  .reservation-card.expired { border-left: 3px solid var(--accent2); opacity: 0.6; }

  .res-id { font-family: var(--mono); font-size: 0.75rem; color: var(--muted); margin-bottom: 0.4rem; }
  .res-product { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.3rem; }
  .res-meta { font-size: 0.85rem; color: var(--muted); }
  .res-meta span { color: var(--text); font-weight: 600; }

  .status-badge {
    display: inline-flex; align-items: center; gap: 0.35rem;
    padding: 0.25rem 0.75rem; border-radius: 100px;
    font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
    margin-bottom: 0.6rem;
  }
  .status-badge.pending  { background: rgba(255,209,102,0.12); color: var(--yellow); }
  .status-badge.confirmed { background: rgba(0,229,160,0.12); color: var(--green); }
  .status-badge.released  { background: rgba(107,107,128,0.12); color: var(--muted); }
  .status-badge.expired   { background: rgba(255,101,132,0.12); color: var(--accent2); }

  .countdown {
    font-family: var(--mono); font-size: 1.8rem; font-weight: 500;
    color: var(--yellow); letter-spacing: 0.02em;
    text-align: center; margin-bottom: 0.3rem;
  }
  .countdown.urgent { color: var(--accent2); animation: pulse 1s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
  .countdown-label { font-size: 0.72rem; color: var(--muted); text-align: center; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; }

  .res-actions { display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-end; }
  .btn-confirm {
    padding: 0.6rem 1.2rem;
    background: var(--green); border: none; border-radius: 8px;
    color: #0a0a0f; font-family: var(--font); font-size: 0.88rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s; white-space: nowrap;
  }
  .btn-confirm:hover { background: #00ffb3; }
  .btn-cancel {
    padding: 0.6rem 1.2rem;
    background: none; border: 1px solid var(--border); border-radius: 8px;
    color: var(--muted); font-family: var(--font); font-size: 0.88rem; font-weight: 600;
    cursor: pointer; transition: all 0.2s; white-space: nowrap;
  }
  .btn-cancel:hover { border-color: var(--accent2); color: var(--accent2); }

  /* API DOCS PAGE */
  .api-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1rem; }
  .api-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 12px; padding: 1.3rem; font-size: 0.88rem;
  }
  .api-method {
    display: inline-block; padding: 0.2rem 0.6rem; border-radius: 5px;
    font-family: var(--mono); font-size: 0.75rem; font-weight: 700;
    margin-right: 0.5rem; margin-bottom: 0.6rem;
  }
  .method-get  { background: rgba(0,229,160,0.15); color: var(--green); }
  .method-post { background: rgba(108,99,255,0.15); color: var(--accent); }
  .api-path { font-family: var(--mono); font-size: 0.88rem; color: var(--text); }
  .api-desc { color: var(--muted); margin-top: 0.5rem; line-height: 1.5; }
  .api-note {
    margin-top: 0.7rem; padding: 0.6rem 0.8rem;
    background: var(--surface2); border-radius: 6px;
    font-family: var(--mono); font-size: 0.75rem; color: var(--accent);
    border-left: 2px solid var(--accent);
  }

  .schema-block {
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: 10px; padding: 1.2rem; margin-top: 1.5rem;
  }
  .schema-title { font-size: 0.78rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.8rem; font-weight: 600; }
  pre {
    font-family: var(--mono); font-size: 0.8rem; line-height: 1.7;
    color: var(--text); overflow-x: auto;
  }
  pre .key { color: var(--accent2); }
  pre .val { color: var(--green); }
  pre .str { color: var(--yellow); }
  pre .com { color: var(--muted); }

  /* TOAST */
  .toast-container { position: fixed; bottom: 2rem; right: 2rem; z-index: 999; display: flex; flex-direction: column; gap: 0.5rem; }
  .toast {
    padding: 0.8rem 1.2rem; border-radius: 10px;
    font-size: 0.88rem; font-weight: 600;
    display: flex; align-items: center; gap: 0.6rem;
    animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
    max-width: 320px;
  }
  .toast.success { background: rgba(0,229,160,0.15); border: 1px solid var(--green); color: var(--green); }
  .toast.error   { background: rgba(255,101,132,0.15); border: 1px solid var(--accent2); color: var(--accent2); }
  .toast.info    { background: rgba(108,99,255,0.15); border: 1px solid var(--accent); color: var(--accent); }
  @keyframes slideIn { from { transform: translateX(100%); opacity:0; } to { transform: translateX(0); opacity:1; } }
  @keyframes fadeOut { from { opacity:1; } to { opacity:0; transform: translateX(100%); } }

  /* EMPTY STATE */
  .empty-state { text-align: center; padding: 4rem 2rem; color: var(--muted); }
  .empty-state .icon { font-size: 3rem; margin-bottom: 1rem; }
  .empty-state p { font-size: 1rem; }

  /* STATS BAR */
  .stats-bar {
    display: flex; gap: 1rem; margin-bottom: 2rem;
    padding: 1rem 1.5rem; background: var(--surface);
    border: 1px solid var(--border); border-radius: 12px;
    overflow-x: auto;
  }
  .stat-item { text-align: center; min-width: 80px; }
  .stat-value { font-size: 1.5rem; font-weight: 800; font-family: var(--mono); }
  .stat-label { font-size: 0.72rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.07em; margin-top: 0.1rem; }

  /* README */
  .readme-content {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 14px; padding: 2rem; max-width: 800px;
  }
  .readme-content h2 { font-size: 1.1rem; font-weight: 700; color: var(--accent); margin: 1.5rem 0 0.6rem; border-bottom: 1px solid var(--border); padding-bottom: 0.4rem; }
  .readme-content h2:first-child { margin-top: 0; }
  .readme-content p { color: var(--muted); line-height: 1.7; font-size: 0.92rem; margin-bottom: 0.8rem; }
  .readme-content code {
    font-family: var(--mono); font-size: 0.82rem;
    background: var(--surface2); padding: 0.15rem 0.45rem;
    border-radius: 4px; color: var(--accent2);
  }
  .readme-content pre {
    background: var(--surface2); padding: 1rem 1.2rem;
    border-radius: 8px; margin: 0.8rem 0; overflow-x: auto;
    border: 1px solid var(--border);
  }
  .readme-content ul { padding-left: 1.5rem; color: var(--muted); font-size: 0.92rem; line-height: 1.9; }
  .readme-content li strong { color: var(--text); }

  /* Progress bar for countdown */
  .countdown-bar-wrap { width: 100%; height: 4px; background: var(--surface2); border-radius: 2px; overflow: hidden; margin-bottom: 0.6rem; }
  .countdown-bar { height: 100%; border-radius: 2px; background: var(--yellow); transition: width 1s linear, background 0.5s; }

  /* Warehouse chips */
  .wh-chip {
    display: inline-flex; align-items: center; gap: 0.35rem;
    font-size: 0.78rem; color: var(--muted);
    background: var(--surface2); padding: 0.2rem 0.6rem;
    border-radius: 4px; font-family: var(--mono);
  }

  /* Divider */
  .divider { height: 1px; background: var(--border); margin: 2rem 0; }

  @media (max-width: 640px) {
    nav { padding: 1rem 1.2rem; }
    .container { padding: 1.5rem 1rem; }
    .reservation-card { grid-template-columns: 1fr; }
    .res-actions { flex-direction: row; flex-wrap: wrap; }
  }
</style>
</head>
<body>

<nav>
  <div class="nav-logo">allo<span>.</span></div>
  <div class="nav-tabs">
    <button class="tab-btn active" onclick="showPage('products')">Products</button>
    <button class="tab-btn" onclick="showPage('reservations')">Reservations</button>
    <button class="tab-btn" onclick="showPage('api')">API Docs</button>
    <button class="tab-btn" onclick="showPage('readme')">README</button>
  </div>
</nav>

<!-- TOAST CONTAINER -->
<div class="toast-container" id="toastContainer"></div>

<!-- RESERVE MODAL -->
<div class="modal-backdrop" id="reserveModal">
  <div class="modal">
    <div class="modal-title">Reserve Stock</div>
    <div class="modal-sub" id="modalProductName">Select warehouse and quantity</div>
    <div class="field-group">
      <label class="field-label">Warehouse</label>
      <select class="field-select" id="modalWarehouse">
        <option value="wh1">Mumbai Central Warehouse</option>
        <option value="wh2">Delhi Distribution Hub</option>
        <option value="wh3">Bangalore Fulfillment Center</option>
      </select>
    </div>
    <div class="field-group">
      <label class="field-label">Quantity</label>
      <input class="field-input" type="number" id="modalQty" min="1" max="10" value="1"/>
    </div>
    <div class="error-box" id="modalError"></div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="submitReservation()">Reserve Now</button>
    </div>
  </div>
</div>

<!-- PRODUCTS PAGE -->
<div class="page active" id="page-products">
  <div class="container">
    <div class="page-header">
      <div class="page-title">Product Inventory</div>
      <div class="page-sub">Live stock across all warehouses — click Reserve to hold units for 10 minutes</div>
    </div>
    <div class="stats-bar">
      <div class="stat-item">
        <div class="stat-value" style="color:var(--accent)">6</div>
        <div class="stat-label">Products</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" style="color:var(--green)">3</div>
        <div class="stat-label">Warehouses</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" style="color:var(--yellow)" id="pendingCount">0</div>
        <div class="stat-label">Pending</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" style="color:var(--green)" id="confirmedCount">0</div>
        <div class="stat-label">Confirmed</div>
      </div>
    </div>
    <div class="products-grid" id="productsGrid"></div>
  </div>
</div>

<!-- RESERVATIONS PAGE -->
<div class="page" id="page-reservations">
  <div class="container">
    <div class="page-header">
      <div class="page-title">My Reservations</div>
      <div class="page-sub">Manage active reservations — confirm payment or cancel before expiry</div>
    </div>
    <div class="reservations-list" id="reservationsList"></div>
  </div>
</div>

<!-- API DOCS PAGE -->
<div class="page" id="page-api">
  <div class="container">
    <div class="page-header">
      <div class="page-title">API Reference</div>
      <div class="page-sub">REST endpoints for the Allo inventory &amp; reservation system</div>
    </div>
    <div class="api-grid">
      <div class="api-card">
        <span class="api-method method-get">GET</span><span class="api-path">/api/products</span>
        <div class="api-desc">List all products with available stock per warehouse. Available stock = total − reserved.</div>
        <div class="api-note">Response: 200 OK — array of products with stockLevels[]</div>
      </div>
      <div class="api-card">
        <span class="api-method method-get">GET</span><span class="api-path">/api/warehouses</span>
        <div class="api-desc">List all warehouses with their metadata (name, location, region).</div>
        <div class="api-note">Response: 200 OK — array of warehouse objects</div>
      </div>
      <div class="api-card">
        <span class="api-method method-post">POST</span><span class="api-path">/api/reservations</span>
        <div class="api-desc">Reserve units for a product+warehouse. Uses <strong>SELECT FOR UPDATE</strong> inside a Postgres transaction to prevent race conditions.</div>
        <div class="api-note">409 Conflict — insufficient available stock</div>
      </div>
      <div class="api-card">
        <span class="api-method method-post">POST</span><span class="api-path">/api/reservations/:id/confirm</span>
        <div class="api-desc">Confirm reservation after successful payment. Permanently decrements total stock. Returns 410 if already expired.</div>
        <div class="api-note">410 Gone — reservation has expired</div>
      </div>
      <div class="api-card">
        <span class="api-method method-post">POST</span><span class="api-path">/api/reservations/:id/release</span>
        <div class="api-desc">Release reservation early (payment failed / user cancelled). Returns reserved units to available pool immediately.</div>
        <div class="api-note">Response: 200 OK — reservation marked RELEASED</div>
      </div>
      <div class="api-card">
        <span class="api-method method-get">GET</span><span class="api-path">/api/cron/release-expired</span>
        <div class="api-desc">Cron endpoint — called by Vercel Cron every minute. Finds all PENDING reservations past expiresAt and releases them.</div>
        <div class="api-note">Protected by CRON_SECRET header</div>
      </div>
    </div>

    <div class="divider"></div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;flex-wrap:wrap">
      <div class="schema-block">
        <div class="schema-title">POST /api/reservations — Request</div>
        <pre>{
  <span class="key">"productId"</span>:   <span class="str">"prod_abc123"</span>,
  <span class="key">"warehouseId"</span>: <span class="str">"wh_xyz456"</span>,
  <span class="key">"quantity"</span>:    <span class="val">2</span>
}</pre>
      </div>
      <div class="schema-block">
        <div class="schema-title">POST /api/reservations — Response 201</div>
        <pre>{
  <span class="key">"id"</span>:          <span class="str">"res_8f3k2"</span>,
  <span class="key">"status"</span>:      <span class="str">"PENDING"</span>,
  <span class="key">"quantity"</span>:    <span class="val">2</span>,
  <span class="key">"expiresAt"</span>:   <span class="str">"2026-05-23T14:30:00Z"</span>,
  <span class="key">"product"</span>:     { <span class="com">/* product obj */</span> },
  <span class="key">"warehouse"</span>:   { <span class="com">/* warehouse obj */</span> }
}</pre>
      </div>
      <div class="schema-block" style="grid-column:1/-1">
        <div class="schema-title">Prisma Schema (abbreviated)</div>
        <pre><span class="com">// StockLevel — core concurrency target</span>
model StockLevel {
  id          String    <span class="key">@id</span> <span class="key">@default</span>(cuid())
  productId   String
  warehouseId String
  total       Int       <span class="com">// physical units</span>
  reserved    Int       <span class="key">@default</span>(<span class="val">0</span>)  <span class="com">// held, not yet purchased</span>
  <span class="com">@@unique([productId, warehouseId])</span>
}

model Reservation {
  id          String            <span class="key">@id</span> <span class="key">@default</span>(cuid())
  status      ReservationStatus <span class="key">@default</span>(PENDING)
  quantity    Int
  expiresAt   DateTime          <span class="com">// now() + 10 minutes</span>
}

<span class="com">// Transaction pattern for race-condition safety:</span>
<span class="com">// SELECT * FROM StockLevel WHERE ... FOR UPDATE</span>
<span class="com">// → check available = total - reserved</span>
<span class="com">// → UPDATE reserved += quantity</span>
<span class="com">// → INSERT INTO Reservation ...</span></pre>
      </div>
    </div>
  </div>
</div>

<!-- README PAGE -->
<div class="page" id="page-readme">
  <div class="container">
    <div class="page-header">
      <div class="page-title">README</div>
      <div class="page-sub">Setup, architecture decisions, and trade-offs</div>
    </div>
    <div class="readme-content">
      <h2>🚀 Local Setup</h2>
      <p>Clone the repo and install dependencies:</p>
      <pre>git clone https://github.com/your-username/allo-inventory
cd allo-inventory
npm install</pre>
      <p>Create a <code>.env.local</code> file:</p>
      <pre>DATABASE_URL="postgresql://user:pass@host/allo?sslmode=require"
DIRECT_URL="postgresql://user:pass@host/allo?sslmode=require"
REDIS_URL="rediss://default:token@host:6380"
CRON_SECRET="your-random-secret"</pre>
      <p>Run migrations and seed:</p>
      <pre>npx prisma migrate dev
npx prisma db seed
npm run dev</pre>

      <h2>⏱ Expiry Mechanism</h2>
      <p>Reservations expire after <strong>10 minutes</strong>. In production, a <strong>Vercel Cron Job</strong> runs every minute hitting <code>GET /api/cron/release-expired</code>. This endpoint finds all PENDING reservations where <code>expiresAt &lt; now()</code> and batch-updates them to RELEASED, also decrementing <code>StockLevel.reserved</code> accordingly.</p>
      <p>The cron is defined in <code>vercel.json</code>:</p>
      <pre>{ "crons": [{ "path": "/api/cron/release-expired", "schedule": "* * * * *" }] }</pre>
      <p>The endpoint is protected by checking <code>Authorization: Bearer $CRON_SECRET</code> so only Vercel can trigger it.</p>

      <h2>🔒 Concurrency — Race Condition Fix</h2>
      <p>The reservation endpoint uses a <strong>Postgres row-level lock</strong> inside a transaction:</p>
      <pre>await prisma.$transaction(async (tx) => {
  // Lock the specific StockLevel row
  const [stock] = await tx.$queryRaw`
    SELECT * FROM "StockLevel"
    WHERE "productId" = ${productId}
    AND "warehouseId" = ${warehouseId}
    FOR UPDATE
  `;
  const available = stock.total - stock.reserved;
  if (available &lt; quantity) throw new Error('INSUFFICIENT_STOCK');
  await tx.stockLevel.update({ data: { reserved: { increment: quantity } } ... });
  return tx.reservation.create({ data: { ... expiresAt: +10min } });
})</pre>
      <p><code>FOR UPDATE</code> means: if two requests hit simultaneously, the second waits until the first transaction commits. After the first commits, the second re-reads the row and sees updated reserved count — so if stock is now 0, it throws 409. <strong>Exactly one succeeds.</strong></p>

      <h2>⭐ Bonus — Idempotency</h2>
      <p>If the client sends an <code>Idempotency-Key</code> header, we store the key + response in <strong>Redis</strong> with a 24-hour TTL. On retry with the same key, we return the cached response directly without repeating the DB transaction. This prevents double-reservations from network retries.</p>
      <pre>const cached = await redis.get(`idempotency:${key}`);
if (cached) return Response.json(JSON.parse(cached));
// ... run reservation logic ...
await redis.set(`idempotency:${key}`, JSON.stringify(result), { ex: 86400 });</pre>

      <h2>⚖️ Trade-offs & What I'd Do Differently</h2>
      <ul>
        <li><strong>Redis distributed lock:</strong> For multi-region deployments, a Redis Redlock would be safer than Postgres row locks. Didn't add it since Postgres locking is sufficient for single-region.</li>
        <li><strong>Lazy expiry:</strong> Instead of a cron, reads could lazily check <code>expiresAt</code> and mark expired on the fly. Simpler but means stale <code>reserved</code> counts until first read.</li>
        <li><strong>WebSockets:</strong> With more time, I'd add real-time stock updates via Supabase Realtime so product pages reflect reservations without polling.</li>
        <li><strong>Auth:</strong> No user authentication — reservations are session-based in this demo. Production would need JWT/session auth to tie reservations to users.</li>
        <li><strong>Tests:</strong> Would add Vitest unit tests for the reservation logic and Playwright E2E tests for the full checkout flow.</li>
      </ul>

      <h2>📦 Stack</h2>
      <ul>
        <li><strong>Next.js 14</strong> (App Router) + TypeScript</li>
        <li><strong>Prisma</strong> ORM + <strong>Neon</strong> (hosted Postgres)</li>
        <li><strong>Upstash Redis</strong> (idempotency + optional locking)</li>
        <li><strong>Zod</strong> — shared validation schemas</li>
        <li><strong>Tailwind CSS</strong> + <strong>shadcn/ui</strong></li>
        <li><strong>Vercel</strong> (hosting + cron jobs)</li>
      </ul>
    </div>
  </div>
</div>

<script>
// ===== DATA STORE =====
const warehouses = [
  { id: 'wh1', name: 'Mumbai Central', location: 'Mumbai, MH' },
  { id: 'wh2', name: 'Delhi Distribution Hub', location: 'Delhi, DL' },
  { id: 'wh3', name: 'Bangalore Fulfillment', location: 'Bangalore, KA' },
];

const products = [
  {
    id: 'prod1', name: 'Wireless Noise-Cancelling Headphones', sku: 'SKU-WNC-001',
    stock: { wh1: { total: 50, reserved: 5 }, wh2: { total: 30, reserved: 12 }, wh3: { total: 20, reserved: 18 } }
  },
  {
    id: 'prod2', name: 'Mechanical Keyboard TKL', sku: 'SKU-MKB-087',
    stock: { wh1: { total: 25, reserved: 20 }, wh2: { total: 15, reserved: 14 }, wh3: { total: 40, reserved: 3 } }
  },
  {
    id: 'prod3', name: '4K Webcam Pro', sku: 'SKU-4KW-200',
    stock: { wh1: { total: 60, reserved: 2 }, wh2: { total: 45, reserved: 8 }, wh3: { total: 10, reserved: 9 } }
  },
  {
    id: 'prod4', name: 'USB-C 100W GaN Charger', sku: 'SKU-GAN-100',
    stock: { wh1: { total: 100, reserved: 15 }, wh2: { total: 80, reserved: 30 }, wh3: { total: 50, reserved: 5 } }
  },
  {
    id: 'prod5', name: 'Ergonomic Mouse Vertical', sku: 'SKU-EMV-350',
    stock: { wh1: { total: 35, reserved: 33 }, wh2: { total: 20, reserved: 1 }, wh3: { total: 15, reserved: 0 } }
  },
  {
    id: 'prod6', name: 'Laptop Stand Aluminium', sku: 'SKU-LSA-006',
    stock: { wh1: { total: 70, reserved: 0 }, wh2: { total: 55, reserved: 20 }, wh3: { total: 30, reserved: 25 } }
  },
];

let reservations = [];
let reservationTimers = {};
let selectedProduct = null;

// ===== PAGE ROUTING =====
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  event.target.classList.add('active');
  if (name === 'reservations') renderReservations();
}

// ===== TOAST =====
function showToast(msg, type = 'info') {
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  document.getElementById('toastContainer').appendChild(toast);
  setTimeout(() => toast.remove(), 3100);
}

// ===== PRODUCTS =====
function getAvailable(product, whId) {
  const s = product.stock[whId];
  return s ? s.total - s.reserved : 0;
}

function stockClass(available, total) {
  const pct = available / total;
  if (pct > 0.4) return 'high';
  if (pct > 0.1) return 'mid';
  return 'low';
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = products.map(p => {
    const rows = warehouses.map(wh => {
      const avail = getAvailable(p, wh.id);
      const s = p.stock[wh.id] || { total: 0, reserved: 0 };
      const cls = stockClass(avail, s.total);
      return `<tr>
        <td>${wh.name}</td>
        <td><span class="stock-pill ${cls}"><span class="stock-dot"></span>${avail} avail</span></td>
        <td style="color:var(--muted);font-size:0.8rem">${s.reserved} held</td>
      </tr>`;
    }).join('');

    const totalAvail = warehouses.reduce((sum, wh) => sum + getAvailable(p, wh.id), 0);

    return `<div class="product-card">
      <div class="product-sku">${p.sku}</div>
      <div class="product-name">${p.name}</div>
      <table class="stock-table">
        <thead><tr><th>Warehouse</th><th>Available</th><th>Reserved</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <button class="reserve-btn" ${totalAvail === 0 ? 'disabled' : ''} onclick="openModal('${p.id}')">
        ${totalAvail === 0 ? 'Out of Stock' : 'Reserve Units'}
      </button>
    </div>`;
  }).join('');

  updateStats();
}

function updateStats() {
  document.getElementById('pendingCount').textContent = reservations.filter(r => r.status === 'PENDING').length;
  document.getElementById('confirmedCount').textContent = reservations.filter(r => r.status === 'CONFIRMED').length;
}

// ===== MODAL =====
function openModal(productId) {
  selectedProduct = products.find(p => p.id === productId);
  document.getElementById('modalProductName').textContent = selectedProduct.name;
  document.getElementById('modalError').classList.remove('show');
  document.getElementById('modalQty').value = 1;
  document.getElementById('reserveModal').classList.add('open');
}

function closeModal() {
  document.getElementById('reserveModal').classList.remove('open');
  selectedProduct = null;
}

function submitReservation() {
  const whId = document.getElementById('modalWarehouse').value;
  const qty = parseInt(document.getElementById('modalQty').value);
  const errBox = document.getElementById('modalError');

  if (!selectedProduct) return;
  const available = getAvailable(selectedProduct, whId);

  if (qty < 1) { errBox.textContent = 'Quantity must be at least 1.'; errBox.classList.add('show'); return; }
  if (qty > available) {
    errBox.textContent = `409 Conflict — Only ${available} unit(s) available in this warehouse.`;
    errBox.classList.add('show');
    showToast('Not enough stock — 409 Conflict', 'error');
    return;
  }

  // Simulate reservation
  selectedProduct.stock[whId].reserved += qty;
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
  const res = {
    id: 'res_' + Math.random().toString(36).slice(2, 7),
    productId: selectedProduct.id,
    productName: selectedProduct.name,
    warehouseId: whId,
    warehouseName: warehouses.find(w => w.id === whId).name,
    quantity: qty,
    status: 'PENDING',
    expiresAt: expiresAt,
    createdAt: new Date(),
  };
  reservations.unshift(res);

  closeModal();
  renderProducts();
  showToast(`Reserved ${qty} unit(s) — 10 min window started`, 'success');
}

// ===== RESERVATIONS =====
function confirmReservation(id) {
  const res = reservations.find(r => r.id === id);
  if (!res) return;
  if (new Date() > new Date(res.expiresAt)) {
    res.status = 'EXPIRED';
    showToast('410 Gone — Reservation has expired', 'error');
    renderReservations(); return;
  }
  // Decrement total (confirmed purchase)
  const prod = products.find(p => p.id === res.productId);
  if (prod) {
    prod.stock[res.warehouseId].total -= res.quantity;
    prod.stock[res.warehouseId].reserved -= res.quantity;
  }
  res.status = 'CONFIRMED';
  clearInterval(reservationTimers[id]);
  showToast('Payment confirmed! Stock permanently decremented ✓', 'success');
  renderReservations();
  updateStats();
}

function releaseReservation(id) {
  const res = reservations.find(r => r.id === id);
  if (!res) return;
  const prod = products.find(p => p.id === res.productId);
  if (prod) prod.stock[res.warehouseId].reserved -= res.quantity;
  res.status = 'RELEASED';
  clearInterval(reservationTimers[id]);
  showToast('Reservation cancelled — stock returned to pool', 'info');
  renderReservations();
  renderProducts();
  updateStats();
}

function renderReservations() {
  const list = document.getElementById('reservationsList');
  if (reservations.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="icon">📦</div><p>No reservations yet. Go to Products and click Reserve.</p></div>`;
    return;
  }

  list.innerHTML = reservations.map(res => {
    const isPending = res.status === 'PENDING';
    const now = new Date();
    const expired = now > new Date(res.expiresAt);
    const status = expired && isPending ? 'expired' : res.status.toLowerCase();

    let countdownHtml = '';
    if (isPending && !expired) {
      const secsLeft = Math.max(0, Math.floor((new Date(res.expiresAt) - now) / 1000));
      const totalSecs = 600;
      const pct = (secsLeft / totalSecs) * 100;
      const barColor = secsLeft < 60 ? 'var(--accent2)' : secsLeft < 180 ? 'var(--yellow)' : 'var(--green)';
      const mins = String(Math.floor(secsLeft / 60)).padStart(2, '0');
      const secs = String(secsLeft % 60).padStart(2, '0');
      countdownHtml = `
        <div class="countdown-bar-wrap"><div class="countdown-bar" id="bar-${res.id}" style="width:${pct}%;background:${barColor}"></div></div>
        <div class="countdown ${secsLeft < 60 ? 'urgent' : ''}" id="cd-${res.id}">${mins}:${secs}</div>
        <div class="countdown-label">time remaining</div>`;
    }

    const actions = isPending && !expired ? `
      <button class="btn-confirm" onclick="confirmReservation('${res.id}')">Confirm Purchase</button>
      <button class="btn-cancel" onclick="releaseReservation('${res.id}')">Cancel</button>` : '';

    return `<div class="reservation-card ${status}" id="card-${res.id}">
      <div>
        <div class="res-id"># ${res.id}</div>
        <div class="status-badge ${status}">${status.toUpperCase()}</div>
        <div class="res-product">${res.productName}</div>
        <div class="res-meta">
          Warehouse: <span>${res.warehouseName}</span> &nbsp;·&nbsp;
          Qty: <span>${res.quantity} unit${res.quantity > 1 ? 's' : ''}</span>
        </div>
        <div class="res-meta" style="margin-top:0.3rem">
          Expires: <span>${new Date(res.expiresAt).toLocaleTimeString()}</span>
        </div>
      </div>
      <div class="res-actions">
        ${countdownHtml}
        ${actions}
      </div>
    </div>`;
  }).join('');

  // Start/refresh timers for pending reservations
  reservations.forEach(res => {
    if (res.status !== 'PENDING') return;
    if (reservationTimers[res.id]) clearInterval(reservationTimers[res.id]);
    reservationTimers[res.id] = setInterval(() => {
      const now = new Date();
      const secsLeft = Math.max(0, Math.floor((new Date(res.expiresAt) - now) / 1000));
      const cd = document.getElementById('cd-' + res.id);
      const bar = document.getElementById('bar-' + res.id);
      if (!cd) { clearInterval(reservationTimers[res.id]); return; }

      const mins = String(Math.floor(secsLeft / 60)).padStart(2, '0');
      const secs = String(secsLeft % 60).padStart(2, '0');
      cd.textContent = `${mins}:${secs}`;
      cd.className = `countdown ${secsLeft < 60 ? 'urgent' : ''}`;

      if (bar) {
        const pct = (secsLeft / 600) * 100;
        const barColor = secsLeft < 60 ? 'var(--accent2)' : secsLeft < 180 ? 'var(--yellow)' : 'var(--green)';
        bar.style.width = pct + '%';
        bar.style.background = barColor;
      }

      if (secsLeft === 0) {
        clearInterval(reservationTimers[res.id]);
        res.status = 'EXPIRED';
        const prod = products.find(p => p.id === res.productId);
        if (prod) prod.stock[res.warehouseId].reserved -= res.quantity;
        renderReservations();
        renderProducts();
        showToast('Reservation expired — stock returned', 'error');
      }
    }, 1000);
  });
}

// ===== INIT =====
renderProducts();
document.getElementById('reserveModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
</script>
</body>
</html>
