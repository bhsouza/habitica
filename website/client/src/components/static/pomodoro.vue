<template>
  <div>
    <div class="pomodoro-timer">
      <h1>{{ minutes }}:{{ seconds }}</h1>
    </div>
    <div class="pomodoro-controls">
      <button @click="startTimer">
        Start
      </button>
      <button @click="stopTimer">
        Stop
      </button>
      <button @click="resetTimer">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      minutes: 25,
      seconds: 0,
      timer: null,
    };
  },
  methods: {
    startTimer () {
      this.timer = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds -= 1;
        } else if (this.seconds === 0) {
          if (this.minutes === 0) {
            clearInterval(this.timer);
            return;
          }
          this.minutes -= 1;
          this.seconds = 59;
        }
      }, 1000);
    },
    stopTimer () {
      clearInterval(this.timer);
    },
    resetTimer () {
      this.minutes = 25;
      this.seconds = 0;
    },
  },
};
</script>

<style scoped>
  .pomodoro-timer {
    margin-top: 20rem;
    text-align: center;
    font-size: 10rem;
  }

  .pomodoro-controls {
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 10rem;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
</style>
