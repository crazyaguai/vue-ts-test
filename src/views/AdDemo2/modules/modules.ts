import MyCom1 from '../components/MyCom1.vue';

import firlds from './fields';

const modulesDefault = [
  MyCom1,
];

const getCreativeModules = (): any => {
  const modules: any = {};
  modulesDefault.forEach((module: any) => {
    const config: any = {
      ref: module.name,
      data: firlds[module.name].data(),
      module,
    };
    modules[module.name] = Object.assign(config);
  });

  return modules;
};

export default getCreativeModules;
