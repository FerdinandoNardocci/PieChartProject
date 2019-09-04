<template>
  <div id="app">
    <widget-time-span-clock :timeStart="timeStart" :timeEnd="timeEnd"></widget-time-span-clock>
  </div>
</template>

<script>
import WidgetTimeSpanClock from "./WidgetTimeSpanClock.vue";
export default {
  name: "App",
  components: {
    WidgetTimeSpanClock
  },
  data: function() {
    return {
      timeStart: "23:00",
      timeEnd: "12:00"
    };
  },

  methods: {}
  // data() {
  //   return {
  //     chartData: {
  //       labels: ["Green", "Red", "Blue"],
  //       datasets: [
  //         {
  //           label: "Data One",
  //           backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
  //           data: [1, 10, 5]
  //         }
  //       ]
  //     }
  //   };
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
