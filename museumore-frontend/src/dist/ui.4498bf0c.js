var x = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function M(a) {
  var t = a.default;
  if (typeof t == "function") {
    var i = function() {
      return t.apply(this, arguments);
    };
    i.prototype = t.prototype;
  } else
    i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(a).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(a, n);
    Object.defineProperty(i, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return a[n];
      }
    });
  }), i;
}
const c = (a, t) => {
  const i = 2 * Math.PI * t * a;
  return i / (i + 1);
}, h = (a, t, i) => a * t + (1 - a) * i;
class w {
  constructor({ minCutOff: t, beta: i }) {
    this.minCutOff = t, this.beta = i, this.dCutOff = 1e-3, this.xPrev = null, this.dxPrev = null, this.tPrev = null, this.initialized = !1;
  }
  reset() {
    this.initialized = !1;
  }
  filter(t, i) {
    if (!this.initialized)
      return this.initialized = !0, this.xPrev = i, this.dxPrev = i.map(() => 0), this.tPrev = t, i;
    const { xPrev: n, tPrev: o, dxPrev: p } = this, s = t - o, m = c(s, this.dCutOff), l = [], r = [], d = [];
    for (let e = 0; e < i.length; e++) {
      l[e] = (i[e] - n[e]) / s, r[e] = h(m, l[e], p[e]);
      const g = this.minCutOff + this.beta * Math.abs(r[e]), u = c(s, g);
      d[e] = h(u, i[e], n[e]);
    }
    return this.xPrev = d, this.dxPrev = r, this.tPrev = t, d;
  }
}
const f = `<div class="mindar-ui-overlay mindar-ui-loading">
  <div class="loader"/>
</div>
`, v = `<div class="mindar-ui-overlay mindar-ui-compatibility">
  <div class="content">
    <h1>Failed to launch :(</h1>
    <p>
      Looks like your device/browser is not compatible.
    </p>

    <br/>
    <br/>
    <p>
      Please try the following recommended browsers:
    </p>
    <p>
      For Android device - Chrome
    </p>
    <p>
      For iOS device - Safari
    </p>
  </div>
</div>
`, y = `<div class="mindar-ui-overlay mindar-ui-scanning">
  <div class="scanning">
    <div class="inner">
      <div class="scanline"/>
    </div>
  </div>
</div>
`, b = ".mindar-ui-overlay{display:flex;align-items:center;justify-content:center;position:absolute;left:0;right:0;top:0;bottom:0;background:transparent;z-index:2}.mindar-ui-overlay.hidden{display:none}.mindar-ui-loading .loader{border:16px solid #222;border-top:16px solid white;opacity:.8;border-radius:50%;width:120px;height:120px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.mindar-ui-compatibility .content{background:black;color:#fff;opacity:.8;text-align:center;margin:20px;padding:20px;min-height:50vh}@media (min-aspect-ratio: 1/1){.mindar-ui-scanning .scanning{width:50vh;height:50vh}}@media (max-aspect-ratio: 1/1){.mindar-ui-scanning .scanning{width:80vw;height:80vw}}.mindar-ui-scanning .scanning .inner{position:relative;width:100%;height:100%;opacity:.8;background:linear-gradient(to right,white 10px,transparent 10px) 0 0,linear-gradient(to right,white 10px,transparent 10px) 0 100%,linear-gradient(to left,white 10px,transparent 10px) 100% 0,linear-gradient(to left,white 10px,transparent 10px) 100% 100%,linear-gradient(to bottom,white 10px,transparent 10px) 0 0,linear-gradient(to bottom,white 10px,transparent 10px) 100% 0,linear-gradient(to top,white 10px,transparent 10px) 0 100%,linear-gradient(to top,white 10px,transparent 10px) 100% 100%;background-repeat:no-repeat;background-size:40px 40px}.mindar-ui-scanning .scanning .inner .scanline{position:absolute;width:100%;height:10px;background:white;animation:move 2s linear infinite}@keyframes move{0%,to{top:0%}50%{top:calc(100% - 10px)}}";
class k {
  constructor({ uiLoading: t, uiScanning: i, uiError: n }) {
    const o = document.createElement("style");
    o.innerText = b, document.head.appendChild(o), t === "yes" ? this.loadingModal = this._loadHTML(f) : t !== "no" && (this.loadingModal = document.querySelector(t)), n === "yes" ? this.compatibilityModal = this._loadHTML(v) : n !== "no" && (this.compatibilityModal = document.querySelector(n)), i === "yes" ? this.scanningMask = this._loadHTML(y) : i !== "no" && (this.scanningMask = document.querySelector(i)), this.hideLoading(), this.hideCompatibility(), this.hideScanning();
  }
  showLoading() {
    !this.loadingModal || this.loadingModal.classList.remove("hidden");
  }
  hideLoading() {
    !this.loadingModal || this.loadingModal.classList.add("hidden");
  }
  showCompatibility() {
    !this.compatibilityModal || this.compatibilityModal.classList.remove("hidden");
  }
  hideCompatibility() {
    !this.compatibilityModal || this.compatibilityModal.classList.add("hidden");
  }
  showScanning() {
    !this.scanningMask || this.scanningMask.classList.remove("hidden");
  }
  hideScanning() {
    !this.scanningMask || this.scanningMask.classList.add("hidden");
  }
  _loadHTML(t) {
    const i = document.createElement("template");
    i.innerHTML = t.trim();
    const n = i.content.firstChild;
    return document.getElementsByTagName("body")[0].appendChild(n), n;
  }
}
export {
  w as O,
  k as U,
  x as c,
  M as g
};
