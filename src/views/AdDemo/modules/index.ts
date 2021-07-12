import AppTest from '../components/appTest.vue';
import AppTestChild from '../components/appTestChild.vue';

export default {
  appModuler: {
    name: 'appTest',
    moduleId: 'appTest',
    component: AppTest,
    props: {
      p1: 'props p1',
      p2: (state: any): void => state?.s1,
      p3: (state: any): any => ({ a: { b: state?.s1 } }),
    },
    children: {
      appTestChild: {
        name: 'appTestChild',
        moduleId: 'appTestChild',
        component: AppTestChild,
      },
    },
  },
};
