d3.select("h2").text("Interact with d3.js(Add event)");

var w = 800,
  h = 600,
  margin = {
    left: 40,
    right: 20,
    bottom: 20,
    top: 40
  },
  radius = 20,
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
  .domain([0, 100])
  .range([margin.left, w - margin.left]);
var yScale = d3.scale.linear()
  .domain([0, 100])
  .range([margin.top, h - margin.top]);
// Axis

var xAxis = d3.svg.axis().scale(xScale).orient("top");
// orient("top") 代表數字將會出現在axis的上方
var yAxis = d3.svg.axis().scale(yScale).orient("left");
// 目前axis只被造出來，還沒放到頁面上
// g => group element，可以把它看成一個container，用來放我們造出來的axis
canvas.append("g")
  .attr({
    "class": "axis",
    transform: "translate(" + [0, margin.top] + ")"
  }).call(xAxis);
canvas.append("g")
  .attr({
    "class": "axis",
    transform: "translate(" + [margin.left, 0] + ")"
  }).call(yAxis);

// Create circles
var circleAttr = {
  cx: function(d) {
    return xScale(d.x);
  },
  cy: function(d) {
    return yScale(d.y);
  },
  r: radius,
  fill: "tomato"
};


canvas.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr(circleAttr)
  .on("mouseover", mouseoverHandler)
  .on("mouseout", mouseoutHandler);

// Add event listeners
canvas.on("click", function() {
  var coords = d3.mouse(this);
  console.log(coords);
  data.push({
    x: parseInt(xScale.invert(coords[0])),
    y: parseInt(yScale.invert(coords[1]))
  });
  canvas.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr(circleAttr)
    .on("mouseover", mouseoverHandler)
    .on("mouseout", mouseoutHandler);
});


function mouseoverHandler(d, i) {
  d3.select(this).attr({
    r: radius * 2
  });
  canvas.append("text").attr({
    x: xScale(d.x),
    y: yScale(d.y),
    "text-anchor": "middle",
    id: "label-text"
  }).text([d.x, d.y]);
}

function mouseoutHandler(d, i) {
  d3.select(this).attr({
    r: radius
  });
  d3.select("#label-text").remove();
}