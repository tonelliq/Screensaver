let x = 100
let x2 = 100
let y2 = 100
let direction = "upright"
let direction2 = "upleft2" 
let y = 100
let color = [0, 0, 0]
let speed = 1
let	circ1 = 100
let	circ2 = 100
let	circ3 = 500
let	circ4 = 300
let back = [200, 20, 20]


function setup() {

	createCanvas(600, 400)
	x = random(0, width)
	y = random(0, height)
	// x = 0
	// y = height
	x2 = (width - x - 70)
	y2 = (y)
	
	
	strokeWeight(15)
	
	let direction = random(["upright", "downright", "upleft", "downleft"])
	print(direction)

}

function draw() {


	// background(random(0, 255), random(0, 255), random(0, 255))
	



	
	push()
	if (direction == "upright") {
		x = x + speed
		y = y - speed

}

	if (direction == "upleft") {
		x = x - speed
		y = y - speed

	}

	if (direction == "downright") {
		x = x + speed
		y = y + speed
	
	}


	if (direction == "downleft"){
		x = x - speed
		y = y + speed

	}


	if (x >= width - 70 && direction == "upright") {
		direction = "upleft"
		color =[random(0, 255), random(0, 255), random(0, 255)]
		background[random(0, 255), random(0, 255), random(0, 255)]
		circ1 = (random(0, width))
		circ2 = (random(0, height))
		
	}

	if (x <= 0 && direction == "upleft") {
		direction = "upright"
		color = [random(0, 255), random(0, 255), random(0, 255)]
		background[random(0, 255), random(0, 255), random(0, 255)]
		circ1 = (random(0, width))
		circ2 = (random(0, height))
		
	}

	if (y <= 0 && direction == "upright") {
		direction = "downright"
		color = [random(0, 255), random(0, 255), random(0, 255)]
		background[random(0, 255), random(0, 255), random(0, 255)]
		circ1 = (random(0, width))
		circ2 = (random(0, height))
		
	}

	if (y >= height - 70 && direction == "downright") {
		direction = "upright"
		color = [random(0, 255), random(0, 255), random(0, 255)]
		background[random(0, 255), random(0, 255), random(0, 255)]
		circ1 = (random(0, width))
		circ2 = (random(0, height))
		
	}

	if (y <= 0 && direction == "upleft") {
		direction = "downleft"
		color = [random(0, 255), random(0, 255), random(0, 255)]
		background[random(0, 255), random(0, 255), random(0, 255)]
		circ1 = (random(0, width))
		circ2 = (random(0, height))
		
	}

	if (x <= 0 && direction == "downleft") {
		direction = "downright"
		color = [random(0, 255), random(0, 255), random(0, 255)]
		background[random(0, 255), random(0, 255), random(0, 255)]
		circ1 = (random(0, width))
		circ2 = (random(0, height))
		
	}

	if (y >= height - 70 && direction == "downleft") {
		direction = "upleft"
		color = [random(0, 255), random(0, 255), random(0, 255)]
		background[random(0, 255), random(0, 255), random(0, 255)]
		circ1 = (random(0, width))
		circ2 = (random(0, height))
		
	}

	if (x >= width - 70 && direction == "downright") {
		direction = "downleft"
		color = [random(0, 255), random(0, 255), random(0, 255)]
		background[random(0, 255), random(0, 255), random(0, 255)]
		circ1 = (random(0, width))
		circ2 = (random(0, height))
	
	}

	if (x >= width - 70 && y >= height - 70) {
		direction = "upleft"
	}

	if (direction2 == "upright2") {
		x2 = x2 + speed
		y2 = y2 - speed
}

	if (direction2 == "upleft2") {
		x2 = x2 - speed
		y2 = y2 - speed
	}

	if (direction2 == "downright2") {
		x2 = x2 + speed
		y2 = y2 + speed
	}


	if (direction2 == "downleft2"){
		x2 = x2 - speed
		y2 = y2 + speed
	}


	if (x2 >= width - 70 && direction2 == "upright2") {
		direction2 = "upleft2"
		color =[random(0, 255), random(0, 255), random(0, 255)]
		// background[random(0, 255), random(0, 255), random(0, 255)]
		circ3 = (random(0, width))
		circ4 = (random(0, height))
	}

	if (x2 <= 0 && direction2 == "upleft2") {
		direction2 = "upright2"
		color =[random(0, 255), random(0, 255), random(0, 255)]
		// background[random(0, 255), random(0, 255), random(0, 255)]
		circ3 = (random(0, width))
		circ4 = (random(0, height))
	}

	if (y2 <= 0 && direction2 == "upright2") {
		direction2 = "downright2"
		color =[random(0, 255), random(0, 255), random(0, 255)]
		// background[random(0, 255), random(0, 255), random(0, 255)]
		circ3 = (random(0, width))
		circ4 = (random(0, height))
	}

	if (y2 >= height - 70 && direction2 == "downright2") {
		direction2 = "upright2"
		color =[random(0, 255), random(0, 255), random(0, 255)]
		// background[random(0, 255), random(0, 255), random(0, 255)]
		circ3 = (random(0, width))
		circ4 = (random(0, height))
	}

	if (y2 <= 0 && direction2 == "upleft2") {
		direction2 = "downleft2"
		color =[random(0, 255), random(0, 255), random(0, 255)]
		// background[random(0, 255), random(0, 255), random(0, 255)]
		circ3 = (random(0, width))
		circ4 = (random(0, height))
	}

	if (x2 <= 0 && direction2 == "downleft2") {
		direction2 = "downright2"
		color =[random(0, 255), random(0, 255), random(0, 255)]
		// background[random(0, 255), random(0, 255), random(0, 255)]
		circ3 = (random(0, width))
		circ4 = (random(0, height))
	}

	if (y2 >= height - 70 && direction2 == "downleft2") {
		direction2 = "upleft2"
		color =[random(0, 255), random(0, 255), random(0, 255)]
		// background[random(0, 255), random(0, 255), random(0, 255)]
		circ3 = (random(0, width))
		circ4 = (random(0, height))
	}

	if (x2 >= width - 70 && direction2 == "downright2") {
		direction2 = "downleft2"
		color =[random(0, 255), random(0, 255), random(0, 255)]
		// background[random(0, 255), random(0, 255), random(0, 255)]
		circ3 = (random(0, width))
		circ4 = (random(0, height))
	}

	if (x2 >= width - 70 && y2 >= height - 70) {
		direction2 = "upleft2"
		color =[random(0, 255), random(0, 255), random(0, 255)]
		// background[random(0, 255), random(0, 255), random(0, 255)]
		circ3 = (random(0, width))
		circ4 = (random(0, height))
	}


	noStroke()
	fill(80)
	ellipse(circ1 - 3, circ2 - 3, 20, 120)
	ellipse(width - circ1 + 3, circ2 - 3, 20, 120)
	// fill(color)
	fill(0)
	ellipse(circ1, circ2, 20, 120)
	ellipse(width - circ1, circ2, 20, 120)
	



	strokeWeight(.5)
	// stroke(random(0, 255), random(0, 255), random(0, 255))
	stroke(0, 0, 0)
	// stroke(color)
	fill(color)
	// fill(random(0, 255), random(0, 255), random(0, 255))
	rect(x, y, 70, 70)
	rect(x2, y2, 70, 70)

	// stroke(random(0, 255), random(0, 255), random(0, 255))
	// fill(color)
	// rect(-(x), -(y), 70 , 70)

	


	pop()

	strokeWeight(4)
	stroke(0, 0, 0)
	noFill()
	rect(0, 0, width, height)


}