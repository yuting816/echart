function loadBaseMap(data) {
        // 注册地图，注意名称保持一致
        echarts.registerMap('Shanghai', data);
        // 配置地图组件
        let geo = {
            // 地图名称注意与注册的名称一样
            map: "Shanghai",
            roam: true,
            // 片区标识样式
            label: {
                normal: {
                    show: true,
                    fontSize: "14",
                    color: "rgba(255, 255, 240, 1)"
                }
            },
            // 地图片区自身样式
            itemStyle: {
                normal: {
                    //          	color: '#ddd',
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                    }, {
                    offset: 1,
                    color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                    }],
                      globalCoord: false // 缺省为 false
                },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowBlur: 8
                },
                // 鼠标经过时样式改变
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            } 
        }
        return geo
};

function loadBaseSeries() {
    // 配置基础质心点涟漪效果
    let mapData = [
        {
          name: "黄浦区",
          value: [121.479158, 31.217986],
          visualMap: false
        },
        {
          name: "徐汇区",
          value: [121.43218, 31.163616],
          visualMap: false
        },
        {
          name: "长宁区", 
          value: [121.378894, 31.211366],
          visualMap: false
        },
        {
          name: "静安区", 
          value: [121.446212, 31.271285],
          visualMap: false
        },
        {
          name: "普陀区", 
          value: [121.385519, 31.261103],
          visualMap: false
        },
        {
          name: "虹口区", 
          value: [121.482659, 31.279821],
          visualMap: false
        },
        {
          name: "杨浦区", 
          value:[121.523945, 31.299743],
          visualMap: false
        },
        {
          name: "闵行区", 
          value: [121.409071, 31.104616],
          visualMap: false
        },
        {
          name: "宝山区", 
          value: [121.424317, 31.412268],
          visualMap: false
        },
        {
          name: "嘉定区", 
          value: [121.239379, 31.362227],
          visualMap: false
        },
        {
          name: "浦东新区", 
          value: [121.73576, 31.082272],
          visualMap: false
        },
        {
          name: "金山区", 
          value: [121.268005, 30.810309],
          visualMap: false
        },
        {
          name: "浦东新区", 
          value: [121.73576, 31.082272],
          visualMap: false
        },
        {
          name: "松江区", 
          value: [121.204918, 31.022998],
          visualMap: false
        },
        {
          name: "浦东新区", 
          value: [121.73576, 31.082272],
          visualMap: false
        },
        {
          name: "青浦区", 
          value: [121.083006, 31.122401],
          visualMap: false
        },
        {
          name: "奉贤区", 
          value:[121.57371, 30.856083],
          visualMap: false
        },
        {
          name: "崇明区", 
          value:[121.641556, 31.503238],
          visualMap: false
        }
    ];
    let series = [
        // 涟漪效果
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        showEffectOn: 'render',
        rippleEffect: {
          period: 15,
          scale: 4,
          brushType: 'stroke'
        },
        // hoverAnimation: true,
        itemStyle: {
          normal: {
            color: "#EE82EE",
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: mapData
      },
    ]
    return series
}




