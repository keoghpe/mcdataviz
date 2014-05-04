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
		return d.grade * 10 + "px";
	})
	.style("background-color", function(d) {
		if(d.date == "2013-04-07T16:00:00.000Z")
			return "BurlyWood";
	})
	.text(function(d) {
		return d.grade;
	});
}