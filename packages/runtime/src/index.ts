import { ModuleSystem } from './module-system';
// Injected during build
declare const __farm_global_this__: any;

__farm_global_this__.__farm_module_system__ = (function () {
  const moduleSystem = new ModuleSystem();

  return function () {
    return moduleSystem;
  };
})()();
