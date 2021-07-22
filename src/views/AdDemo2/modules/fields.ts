import keys from './keys';

function makeDataFields(fields: string[]) {
  return () => {
    const form: any = {};
    fields.forEach((key = '') => {
      form[key] = keys[key].default;
    });
    return form;
  };
}

const MyCom1Fields = ['my_test_data'];

const fields: any = {
  MyCom1: {
    name: 'MyCom1',
    data: makeDataFields(MyCom1Fields),
  },
};

export default fields;
