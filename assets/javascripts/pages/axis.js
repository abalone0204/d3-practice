d3.select("h2").text("Axis in D3.js");

var w = 500,
  h = 300,
  margin={
    left: 20,
    right: 20,
    bottom: 20,
    top:20
  },
  radius =6,
  data = [];

for (var i = 0; i < 50; i++) {
  var x = parseInt(Math.random() * 100),
    y = parseInt(Math.random() * 100);
  data.push({
    x: x,
    y: y
  });
}

var canvas = d3.select(".demo")
  .append("svg")
  .attr({
    width: w,
    height: h
  });
var xScale = d3.scale.linear()
               .domain([0, d3.max(data, function(d){ return d.x;})])
               .range([margin.left,w-margin.left]);
var yScale = d3.scale.linear()
               .domain([0, d3.max(data, function(d){ return d.y;})])
               .range([margin.top, h-margin.top]);

canvas.selectAll("circle")
      .data(data)
      .enter()
        .append("circle")
          .attr({
            cx: function(d) { return w-xScale(d.x); },
            cy: function(d) { return h-yScale(d.y); },
            r: radius,
            fill: "tomato"
          });