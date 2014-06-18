function draw (data) {

	var margin = 50;
	var width = 1000;
	var height = 2000;

	d3.select('body')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
	.attr('class', 'chart');

	drawCircles(data.Angular, 'Angular');
	drawCircles(data.NodeJS, 'NodeJS');

	var x_extent = [0,100];
	
	var x_scale = d3.scale.linear()
	.range([margin, width])
	.domain(x_extent);

	var y_extent = [110, 0];
	var y_scale = d3.scale.linear().domain(y_extent).range([10, height-margin]);
	
	d3.selectAll('circle')
	.attr('cy', function(d){
		return y_scale(d.date)})
	.attr('cx', function(d) {
		return x_scale(d.grade)
	})
	.attr('r', 5);

	var x_axis = d3.svg.axis().scale(x_scale);

	d3.select('svg').append('g')
	.attr('class','x axis')
	.attr('transform', 'translate(0,0l)')
	.call(x_axis);

	var y_axis = d3.svg.axis().scale(y_scale).orient('left');

	d3.select('svg').append('g')
	.attr('class', 'y axis')
	.attr('transform', 'translate('+margin+', 0 )')
	.call(y_axis);

	d3.select('.x.axis')
	.append('text')
	.text('A scale I made up')
	.attr('x', (width / 2) )
	.attr('y', margin / 1.5);

	d3.select('.y.axis')
	.append('text')
	.text('Time of my life')
	.attr('transform', 'rotate (-90, -43, 0) translate(-280)');

	var line = d3.svg.line()
	.x(function(d) {return x_scale(d.grade)})
	.y(function(d) {return y_scale(d.date)});

	drawLines(data.Angular, 'Angular');
	drawLines(data.NodeJS, 'NodeJS');
	

	function drawCircles (thedata, className) {
		d3.select('svg')
		.selectAll('circle.'+className)
		.data(thedata)
		.enter()
		.append('circle')
		.attr('class', className);
	}

	function drawLines (thedata, className) {

		d3.select('svg').append('path')
		.attr('d', line(thedata))
		.attr('class', className);
	}
}