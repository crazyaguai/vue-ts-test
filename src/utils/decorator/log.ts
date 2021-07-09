import { createDecorator } from 'vue-class-component';

const Log = createDecorator((options, key) => {
  console.log('decorator', options);
  const methods = options?.methods || {};
  const originalMethod = methods[key];
  methods[key] = function wrapperMethod(...args) {
    console.log(`Invoked: ${key}(`, ...args, ')');
    originalMethod.apply(this, args);
  };
});
export default Log;
