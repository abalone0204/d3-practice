d3.select("h2").text("Scale in d3.js");


data = [2, 3, 4, 5]
var svg = d3.select(".demo")
  .append("svg")
  .attr({
    height: 200,
    width: 200
  });
var heightScale = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 200]);

svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr({
    x: function(d, i) {
      return i * 53;
    },
    y: function(d, i) {
      return 200 - d;
    },
    width: 50,
    height: function(d) {
      return d;
    },
    fill: "tomato"
  });
d3.select(".demo").append("br");
var svg2 = d3.select(".demo")
  .append("svg")
  .attr({
    height: 200,
    width: 200
  });


svg2.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr({
    x: function(d, i) {
      return i * 53;
    },
    y: function(d, i) {
      return 200 - heightScale(d);
    },
    width: 50,
    height: function(d) {
      return heightScale(d);
    },
    fill: "lightblue"
  });