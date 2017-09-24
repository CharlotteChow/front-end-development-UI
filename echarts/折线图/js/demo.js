var myChart = echarts.init(document.getElementById('main'));

function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () {
  var location = '北京';
  var url = 'http://wthrcdn.etouch.cn/weather_mini?city=' + location + '&callback=foo';
  addScriptTag(url);
  //addScriptTag('http://wthrcdn.etouch.cn/weather_mini?city=北京&callback=foo');
}

function foo(data) {
  var whole = data.data
  console.log(whole);
  //这里console出来的data不是json数据中的data。而是一个变量包含了所有数据
  // refine all the infovar whole = data.data;
  var days = []; // 横坐标 日期
  for(var i=0; i < whole.forecast.length; i++){
    days[i] = whole.forecast[i].date;
  }
  //console.log(days);
  /*----------------------------------------------*/
  var max_t = [];
  for(var i=0; i < whole.forecast.length; i++){
    max_t[i] = whole.forecast[i].high;
  }
  for(var i=0; i < whole.forecast.length; i++){
    max_t[i] = max_t[i].replace(/[^0-9]/ig,"");
  }
  //console.log(max_t)
  /*----------------------------------------------*/
  var min_t = [];
  var len = whole.forecast.length;
  for(var i=0; i < len; i++){
    min_t[i] = whole.forecast[i].low;
  }
  for(var i=0; i < len; i++){
    min_t[i] = min_t[i].replace(/[^0-9]/ig,"");
  }   
  //console.log(min_t)
      // find the lowesttemperature for this week
      var min_t_w = [];
      for(var i=0; i < len; i++){
        min_t_w[i] = parseInt(min_t[i]);
      }
      var x = 0;
      var mininum = min_t_w[0];
      for(var i=0; i < len; i++){
        if(min_t_w[i] < mininum){
          mininum = min_t_w[i]
          x = i;
        }
      }
  // insert data
  myChart.setOption({
        xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: days
        },
        series: [
        {
            name:'最高气温',
            type:'line',
            data: max_t
        },
        {
            name:'最低气温',
            type:'line',
            markPoint: {
                data: [
                    {name: '周最低', xAxis: x , yAxis: mininum}
                ]
            },
            data: min_t
        }
    ]
  });
  /*------------------------------------------------------charts data*/
  var info = document.getElementsByClassName('info');
  for(var i=0; i < whole.forecast.length; i++){
    var em = document.createElement('em');
    info[0].appendChild(em)
    em.innerText = whole.forecast[i].type;
  }
  for(var i=0; i < whole.forecast.length; i++){
    var em = document.createElement('em');
    info[0].appendChild(em)
    em.innerText = whole.forecast[i].fengxiang;
  }
  for(var i=0; i < whole.forecast.length; i++){
    var em = document.createElement('em');
    info[0].appendChild(em)
    em.innerText = whole.forecast[i].fengli;
  }
};

var option = {
    title: {
        text: '未来5天的天气情况'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name:'最高气温',
            type:'line',
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
};
myChart.setOption(option);