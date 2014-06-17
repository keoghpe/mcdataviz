function draw (data) {
/*	
	d3.select("body")
	.append("ul")
	.selectAll("li")
	.data(data)
	.enter()
	.append("li")
	.text(function(d) {
		return d.skill + ": " + d.grade;
	});

	d3.selectAll("li")
	.style("font-weight", function(d) {
		if (d.grade > 20) {
			return "normal";
		} else{
			return "bold";
		};
	});*/

	
	/*d3.select("body")
	.append("div")
	.attr("class","chart")
	.selectAll(".bar")
	.data(data)
	.enter()
	.append("div")
	.attr("class","bar")
	.style("width", function(d) {
		//console.log(d.grade);
		return d.grade * 10 + "px";
	})
	.style("outline", "1px solid black")
	.style("background-color", function(d) {
		if(d.date == "2013-04-07T16:00:00.000Z")
			return "BurlyWood";
	})
	.text(function(d) {
		return d.skill + ": " + d.grade;
	});*/
/*
	d3.select("body")
	.append("div")
	.attr("class","chart")
	.selectAll("div.line")
	.data(data)
	.enter()
	.append("div")
	.attr("class","line");

	d3.selectAll("div.line")
	.append("div")
	.attr("class", "label")
	.text(function (d) {
		return d.skill;
	});

	d3.selectAll("div.line")
	.append("div")
	.attr("class","bar")
	.style("width", function(d) {
		return d.grade*0.9 + "%";
	})
	.style("background-color", function(d) {
		if(d.date == "2013-04-07T16:00:00.000Z")
			return "BurlyWood";
	})
	.text(function(d) {
		return d.grade;
	});*/

	var margin = 50;
	var width = 1000;
	var height = 700;

	d3.select('body')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.selectAll('circle')
	.data(data)
	.enter()
	.append('circle');

	var x_extent = d3.extent(data,
		function(d) {return d.date});

	var x_scale = d3.scale.linear().domain(x_extent).range([margin, width-margin]);


	var y_extent = d3.extent(data,
		function(d) {return d.grade});

	var y_scale = d3.scale.linear()
	.range([height-margin, margin])
	.domain(y_extent);

	d3.selectAll('circle')
	.attr('cx', function(d){
		return x_scale(d.date)})
	.attr('cy', function(d) {
		return y_scale(d.grade)
	});

	d3.selectAll('circle')
	.attr('r', function(d){
		return d.grade;
	})
	.style('fill', function(d) {
		if(d.skill == 'Angular')
			return 'red';
		if(d.skill == 'Node')
			return 'blue';
		if(d.skill == 'Express')
			return 'green';
		if(d.skill == 'D3')
			return 'purple';
		if(d.skill == 'JQuery')
			return 'grey';
	});

}