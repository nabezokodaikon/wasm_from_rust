const js = import("../node_modules/wasm/wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
