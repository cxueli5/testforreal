

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/internship/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.df194d72.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/index.ad37b216.js","_app/immutable/chunks/paths.97e8e8a8.js","_app/immutable/chunks/Step.b8234421.js","_app/immutable/chunks/PDFViewer.5bf604eb.js"];
export const stylesheets = ["_app/immutable/assets/4.24ee5d24.css","_app/immutable/assets/Step.eb9a94c3.css","_app/immutable/assets/PDFViewer.39c264e1.css"];
export const fonts = [];
