import AppTest from '../components/appTest.vue';
import AppTestChild from '../components/appTestChild.vue';

export default {
  appModuler: {
    name: 'appTest',
    moduleId: 'appTest',
    component: AppTest,
    keys: ['appVal1', 'appVal2'],
    props: {
      p1: 'props p1',
      p2: (state: any): void => state?.s1,
      p3: (state: any): any => ({ a: { b: state?.s1 } }),
    },
    relation: {
      key: [
        {
          name: 'appVal1',
          mutations: [
            {
              type: 'changeAppVal1',
            },
          ],
          actions: [
            {
              type: 'asyncChangeAppVal1',
            },
          ],
        },
      ],
    },
    children: {
      appTestChild: {
        name: 'appTestChild',
        moduleId: 'appTestChild',
        component: AppTestChild,
        props: {
          formData: (state: any, getters: any): any => getters?.formData || {},
        },
      },
    },
  },
};
