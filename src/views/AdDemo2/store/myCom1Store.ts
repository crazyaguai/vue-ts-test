import Vue from 'vue';

const myCom1Store = new Vue({
  data() {
    return {
      my_test_data: {
        type: '',
        info: '',
      },
    };
  },
  created() {
    this.$on('my_test_data.validate', (val: string) => {
      this.my_test_data.type = '';
      this.my_test_data.info = '';
      if (!val) {
        this.my_test_data.type = 'error';
        this.my_test_data.info = '必填的';
      }
    });
  },

});

export default myCom1Store;
