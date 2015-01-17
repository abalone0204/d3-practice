var canvas = d3.select(".demo")
               .append("svg")
               .attr({
                height: 300,
                width: 300,
               });
data = d3.range(5);

canvas.selectAll("rect")
      .data(data)
      .enter()
        .append("rect")
          .attr({
            x: function(d,i){ return i*40},
            y: 150,
            width: 30,
            height: 30,
            fill: "#444"
          });
anotherData = d3.range(3);

canvas.selectAll("rect")
      .data(anotherData)
      .exit()
          .attr({
            x: function(d,i){ return i*40},
            y: 150,
            width: 30,
            height: 30,
            fill: "lightblue"
          });