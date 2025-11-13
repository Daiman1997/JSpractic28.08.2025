const tsPath = "./src/index.ts"; // путь к файлу
const tsCodeEl = document.getElementById("ts-code");
const out = document.getElementById("console-output");
const info = document.getElementById("info");
const netInfo = document.getElementById("net-info");

function showError(msg) {
  out.innerHTML += "❌ " + msg + "\n";
}

async function loadAndRun() {
  out.textContent = ""; // очистить консоль
  info.textContent = "";
  netInfo.textContent = "";

  // 1) Загружаем TS-файл
  let res;
  try {
    res = await fetch(tsPath);
  } catch (err) {
    tsCodeEl.textContent = "";
    showError(
      "Fetch failed — проверь, запущен ли локальный сервер и правильный ли путь."
    );
    netInfo.textContent = String(err);
    return;
  }

  netInfo.textContent = `HTTP ${res.status} ${res.statusText}`;

  if (!res.ok) {
    tsCodeEl.textContent = "";
    showError(
      `Не удалось загрузить ${tsPath}: ${res.status} ${res.statusText}`
    );
    return;
  }

  const tsText = await res.text();

  // 2) Проверка: не HTML ли вернул сервер (частая причина Unexpected '<')
  if (tsText.trim().startsWith("<")) {
    tsCodeEl.textContent =
      tsText.slice(0, 400) + "\n\n... (получено HTML вместо TS)";
    showError(
      'Файл выглядит как HTML — проверь путь и сервер (Unexpected token "<").'
    );
    return;
  }

  // 3) Показываем код с подсветкой
  tsCodeEl.textContent = tsText;
  Prism.highlightAll();

  // 4) Проверяем, что TS-compiler доступен (window.ts / ts)
  if (typeof window.ts === "undefined" && typeof ts === "undefined") {
    showError(
      "TypeScript compiler не найден в window.ts или ts — проверь подключение typescript.js."
    );
    info.textContent = "В window.ts: " + String(window.ts);
    return;
  }

  // some CDNs expose `ts` or `window.ts`; normalize:
  const tsLib = window.ts || ts;
  info.textContent = `TypeScript ${
    tsLib.version?.full || "(версия неизвестна)"
  } загружен`;

  // 5) Транспилируем TS -> JS
  let js;
  try {
    js = tsLib.transpile(tsText, {
      module: tsLib.ModuleKind.ES2015,
      target: tsLib.ScriptTarget.ES2017,
    });
  } catch (err) {
    showError(
      "Ошибка транспиляции: " + (err && err.message ? err.message : String(err))
    );
    return;
  }

  // 6) Перехватываем console.log и выполняем код в безопасной функции
  const originalLog = console.log;
  console.log = (...args) => {
    out.textContent +=
      args
        .map((a) => {
          try {
            return typeof a === "string" ? a : JSON.stringify(a);
          } catch {
            return String(a);
          }
        })
        .join(" ") + "\n";
    originalLog.apply(console, args);
  };

  try {
    // Выполнение в новой функции, чтобы локальные переменные не попадали в глобал
    new Function(js)();
  } catch (err) {
    showError(
      "Ошибка выполнения: " + (err && err.message ? err.message : String(err))
    );
  } finally {
    console.log = originalLog;
  }
}

// стартовый запуск и кнопка
loadAndRun();
