

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.ed54d820.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/index.ad37b216.js","_app/immutable/chunks/Step.b8234421.js","_app/immutable/chunks/PDFViewer.5bf604eb.js","_app/immutable/chunks/paths.9733edff.js"];
export const stylesheets = ["_app/immutable/assets/5.9f40dd82.css","_app/immutable/assets/Step.eb9a94c3.css","_app/immutable/assets/PDFViewer.39c264e1.css"];
export const fonts = [];
