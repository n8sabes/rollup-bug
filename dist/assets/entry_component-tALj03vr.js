import { _ as _jsxC, a as _jsxQ, q as qrl, b as __vitePreload, F as Fragment } from "./core.prod-DgySyvsF.js";
const s_0WQh6CmOu1E = () => {
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: [
      /* @__PURE__ */ _jsxQ("br", null, null, null, 3, null),
      /* @__PURE__ */ _jsxQ("br", null, null, null, 3, null),
      /* @__PURE__ */ _jsxQ("br", null, null, null, 3, null),
      /* @__PURE__ */ _jsxQ("br", null, null, null, 3, null),
      /* @__PURE__ */ _jsxQ("br", null, null, null, 3, null),
      /* @__PURE__ */ _jsxQ("button", null, {
        onClick$: /* @__PURE__ */ qrl(() => __vitePreload(() => import("./s_itzelffebmi-BBbRbRI_.js").then((n) => n.s), true ? __vite__mapDeps([]) : void 0), "s_ITZElfFEBMI")
      }, "Click Me To Crash", 3, null),
      "This crashes on calling the click handler because the `Geolocation` plugin and the handler are together in the same file, and the export of the handler is hidden behind what seems to be an ESM proxy, instead of the export itself."
    ]
  }, 3, "Ga_0");
};
export {
  s_0WQh6CmOu1E
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
