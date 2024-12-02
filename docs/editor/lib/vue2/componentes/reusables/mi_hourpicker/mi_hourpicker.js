Vue.component('mi-hourpicker', {
  template: `
    <div class="time-container">
      <input type="number" v-model="hours" min="0" max="23" @change="updateTime">
      <span>:</span>
      <input type="number" v-model="minutes" min="0" max="59" @change="updateTime">
      <span>:</span>
      <input type="number" v-model="seconds" min="0" max="59" @change="updateTime">
    </div>
  `,
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  methods: {
    updateTime() {
      this.$emit('time-selected', `${this.hours}:${this.minutes}:${this.seconds}`);
    }
  }
});