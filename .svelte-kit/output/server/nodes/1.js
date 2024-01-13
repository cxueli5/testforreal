

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7a6b254e.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/index.ad37b216.js","_app/immutable/chunks/singletons.49cdc27a.js","_app/immutable/chunks/paths.97e8e8a8.js"];
export const stylesheets = [];
export const fonts = [];
