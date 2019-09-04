<script>
// import {Pie} from 'vue-chartjs'
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  watch: {
    chartdata() {
      this.renderChart(this.chartdata, this.options);
    },
    options: {
      handler: function() {
        this.renderChart(this.chartdata, this.options);
      },
      deep: true
    }
  },
  methods: {
    refreshGraph() {
      //this.renderChart(this.chartdata, this.options)
      this.$data._chart.update();
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>