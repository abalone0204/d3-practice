var data = [20, 40, 50, 60 ,80];


var canvas = d3.select(".demo")
                .append("svg").attr({
                  width: 600,
                  height: 600
                });
canvas.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
        .attr({
          x: function(d,i){ return i*102; },
          y: function(d){ return (600-d*5);},
          height: function(d){ return d*5; },
          width: 100,
          fill: "tomato"
        });