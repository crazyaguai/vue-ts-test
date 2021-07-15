import formKeys from './formKeys';

export const initData = (modules: any = {}): any => {
  const keysData: any = {};
  const modulesKey: any = [];

  function init(modules: any = {}): void {
    Object.keys(modules).forEach((moduleKey) => {
      const module = modules[moduleKey];
      const keys: any = module.keys || [];
      keys.forEach((key: any = '') => {
        if (!modulesKey.includes(key)) {
          modulesKey.push(key);
        }
        keysData[key] = formKeys[key] && formKeys[key]?.value();
      });
    });

    if (modules.children) {
      init(modules.children);
    }
  }

  init(modules);

  return {
    keysData,
    modulesKey,
  };
};

export const getFormData = (state: any = {}): any => {
  const { keysData = {}, modulesKey = [] } = state;
  const data: any = {};
  modulesKey.forEach((k: any = ''): void => {
    data[k] = keysData[k];
  });
  return data;
};

export default { initData, getFormData };
