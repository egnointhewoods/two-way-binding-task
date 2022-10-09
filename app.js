const app = Vue.createApp({
  data() {
    return {
      output: "",
      outputEnter: "",
    };
  },
  methods: {
    alertFunction(text) {
      alert(text);
    },
    registerInput(event) {
      this.output = event.target.value;
    },
    registerInputEnter(event) {
      this.outputEnter = event.target.value;
    },
  },
});

app.mount("#assignment");
