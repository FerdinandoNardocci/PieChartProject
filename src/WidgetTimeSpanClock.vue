<template>
    <v-container>
        <PieChart ref="graph" style="width: 100%; height: 100%;" :chartdata="chartData" :options="pieOptions"></PieChart>
    </v-container>
</template>

<script>

    import PieChart from './PieChart.vue'
    // import JsUtils from './jsutils'
   import dateTimeUtils from './datetimeutils.js'

    

    export default {
        name: "WidgetTimeSpanClock",
        components: {
            PieChart,
            dateTimeUtils,
        },
        data () {
            return {
                chartData: {
                    labels: [],
                    datasets: []
                },
                pieOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: false,
                    tension: 0.4,
                    propagate: false,
                    legend: {
                        display: true,
                        position: "top"
                    },
                     //rotation: (-0.5 * Math.PI)   + ((this.timeStart/24) * 2 * Math.PI)
                    
                },
                totalSecHours: 86400000,
            }
        },
        props: ['timeStart', 'timeEnd'],

        mounted () {
          setInterval(this.refreshData(),1000)
        },
        methods: {
            refreshData: function() { //Unwrap new data based on dataItems descriptor and print to view
                       var currentDate = new Date();
                       this.pieOptions.rotation=(-0.5 * Math.PI)   + ((Date.parseTimeString(this.timeStart)/this.totalSecHours) * 2 * Math.PI)
            //console.log(currentDate);
           // var currentDateWithFormat = new Date().toJSON().slice(0,10).replace(/-/g,'/');
           // console.log(currentDateWithFormat);
            var currentTime = currentDate.toLocaleTimeString('en-GB')
            console.log(currentTime)
            //let date = new Date()
                //let now = Date.parseTimeString(currentTime)
    let now = Date.parseTimeString("01:00")
          let  timeStartMs  = Date.parseTimeString(this.timeStart)
          let timeEndMs  = Date.parseTimeString(this.timeEnd)

         console.log('now: ' + now)
               console.log('timeStart: ' + Date.parseTimeString(this.timeStart))
              console.log('timeEnd: ' + Date.parseTimeString(this.timeEnd))
              //let workShift=null
              let freeTime= Date.parseTimeString("24:00")
              let deltaTime =0
              if (Date.parseTimeString(this.timeStart)>Date.parseTimeString(this.timeEnd)){
                deltaTime =Date.parseTimeString(this.timeEnd) + Date.parseTimeString(this.timeStart)
            //  freeTime= (Date.parseTimeString("24:00") - (Date.parseTimeString(this.timeEnd) + Date.parseTimeString(this.timeStart)))
             freeTime= (Date.parseTimeString("24:00") - (deltaTime))
             }else
              {
                deltaTime = Date.parseTimeString(this.timeEnd) - Date.parseTimeString(this.timeStart)
               // freeTime= Date.parseTimeString("24:00") - (Date.parseTimeString(this.timeEnd) - Date.parseTimeString(this.timeStart))
              freeTime= Date.parseTimeString("24:00") - deltaTime
              }
              // if ((Date.parseTimeString(this.timeStart) > now ) && Date.parseTimeString(this.timeEnd)===now) {
              //   workShift =Date.parseTimeString("24:00")   -  freeTime
              //   console.log('WorkShiftPlus: ' +workShift)
              //   //workShift  =  Date.parseTimeString(this.timeStart) - now
              // } else {
              //    workShift  = now - Date.parseTimeString(this.timeStart)
              // }
                 let workShift  = now - Date.parseTimeString(this.timeStart)
                 console.log('workShift: ' +workShift)
                 
                 let workShiftLeft = 0
                //  if (Date.parseTimeString(this.timeEnd) > now) {
                //      workShiftLeft = Date.parseTimeString(this.timeEnd) - now
                //  }
               

                if (Date.parseTimeString(this.timeEnd) < now){//|| ((now < Date.parseTimeString(this.timeEnd)) && (now < Date.parseTimeString(this.timeStart)))) {
                  workShift  = Date.parseTimeString(this.timeEnd) - Date.parseTimeString(this.timeStart)
                     workShiftLeft = 0
                 } else {
                   workShiftLeft = Date.parseTimeString(this.timeEnd) - now
                 }
                 // console.log('deltaTime: ' + deltaTime)
                  console.log('timeStarMS: ' +timeStartMs)
                  console.log('timeENdMS: ' +timeEndMs)
                  console.log('deltaTime: ' + timeStartMs > now)
                 if ((timeStartMs > now) &&  (timeStartMs < timeEndMs)) {
                  workShift=0
                  workShiftLeft = deltaTime
                  console.log('deltaTime: ' + deltaTime)
                   }
                 

                ////let workShiftLeft = Date.parseTimeString(this.timeEnd) - now
                console.log('workShiftLeft: '+ workShiftLeft)
                // let freeTime = this.totalSecHours - workShift - workShiftLeft
               //let workShift=Date.parseTimeString("21:00")
               //let workShiftLeft =Date.parseTimeString("22:00")
               var diff=(Date.parseTimeString(this.timeEnd) - Date.parseTimeString(this.timeStart))
               console.log(diff)
               console.log(Date.parseTimeString("24:00"))
               console.log('abs: ' + Math.abs((Date.parseTimeString(this.timeEnd) - Date.parseTimeString(this.timeStart))))
               
              //  let freeTime= Date.parseTimeString("24:00")

               ////if (Date.parseTimeString(this.timeStart)>Date.parseTimeString(this.timeEnd)){
                //// freeTime=  Math.abs((Date.parseTimeString(this.timeEnd) - Date.parseTimeString(this.timeStart)))
               ////} else {
              // //  freeTime= Date.parseTimeString("24:00") - (Date.parseTimeString(this.timeEnd) - Date.parseTimeString(this.timeStart))
              //// }
              
              // if (Date.parseTimeString(this.timeStart)>Date.parseTimeString(this.timeEnd)){
              // freeTime= Date.parseTimeString("24:00") - (Date.parseTimeString(this.timeEnd) + Date.parseTimeString(this.timeStart))
              // }else
              // {
              //   freeTime= Date.parseTimeString("24:00") - (Date.parseTimeString(this.timeEnd) - Date.parseTimeString(this.timeStart))
              //  }

              // //freeTime= Date.parseTimeString("24:00") - (Date.parseTimeString(this.timeEnd) - Date.parseTimeString(this.timeStart))
               console.log('freeTime: ' + freeTime)
               this.chartData= {
                    labels: ["Green", "Yellow", "Gray"],
                    datasets: [
                        {
                            label: "Data One",
                            backgroundColor: ["Green", "Yellow", "Gray"],
                            data: [workShift,workShiftLeft,freeTime],
                        }
                    ],
                }

      

                // let graphToBeRefreshed = false;

                // //Clear data collection
                // let newDataCollection = {
                //     chartData: {
                //         labels: [],
                //         datasets: []
                //     },
                //     pieData: {
                //         datasets: [{
                //             data: [],
                //             backgroundColor: [],
                //         }],
                //         // These labels appear in the legend and in the tooltips when hovering different arcs
                //         labels: []
                //     },
                //     value1: { label: "", data: ""},
                //     value2: { label: "", data: ""},
                //     value3: { label: "", data: ""},
                //     value4: { label: "", data: ""},
                // };

                // if(dataValues === null) {
                //     this.dataCollection = null;
                //     return;
                // }

                // //Unwrap graph targeted data
                // var self = this
                // dataValues.forEach(function (dataSet, index) {
                //     if(dataSet) {
                //        if(dataSet.target === self.visualizationTargetsIndexes.graph) {
                //            if(dataSet.data) {
                //                for(let i = 0 ; i < dataSet.data.length ; i++) {
                //                    if(dataSet.data[i].x < (Date.now() - (self.properties.timeWindowInSeconds * 1000))) {
                //                        dataSet.data.shift();
                //                        i = 0;
                //                    }
                //                }
                //            }
                //            newDataCollection.chartData.datasets.push({label: dataSet.label, data: dataSet.data});
                //            if (self.chartType === "Pie") {
                //                newDataCollection.pieData.datasets[0].data.push(dataSet.data[dataSet.data.length - 1].y);
                //                newDataCollection.pieData.labels.push(dataSet.label);
                //                newDataCollection.pieData.datasets[0].backgroundColor.push(JsUtils.ColorWithOpacity(JsUtils.NamedColorToHex(traceColors[index % traceColors.length]), 50));
                //            }
                //        }
                //     }
                // });

                // this.dataCollection = newDataCollection;   //Datasets don't match

                // if(graphToBeRefreshed && this.$refs.graph)
                //     this.$refs.graph.refreshGraph();


            }
        }
    }

</script>

<style scoped>


</style>