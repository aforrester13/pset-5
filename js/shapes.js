window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1. hello
 */

const sayHello = function() {
  const canvas = document.getElementById('student-canvas-1');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);


  do {
    var message = prompt("Message: ")
    if (message == null) {
      break;
    }
    if (message.length > 50) {
      alert("Your message is too long. Keep it under 50 characters")
    }
  } while(message.length > 50)

  if (message != null) {
    context.font = "48px sans-serif";
    context.strokeText(message, 30, 70, 994);
  }
};

/*
 * Exercise 2. rectangle
 */

 const drawRectangle = function() {
   const canvas = document.getElementById('student-canvas-2');
   const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var width = prompt("Width: ")
    var height = prompt("Height: ")
    var x = prompt("X: ")
    var y = prompt("Y: ")
    if (width == null || height == null || x == null || y == null) {
      break;
    }
    if (width > 1024 || width < 1) {
      alert("Your width must be between 1 and 1024.")
    }
    else if (height > 512 || height < 1) {
      alert("Your height must be between 1 and 512.")
    }
    else if (x < 1 || x > 1024) {
      alert("Your x-coordinate must be between 1 and 1024.")
    }
    else if (y < 1 || y > 512) {
      alert("Your y-coordinate must be between 1 and 512.")
    }
    else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
      alert("One of your values is not a number.")
    }
    else if (Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512) {
      alert("Your rectangle won't fit on the canvas.")
    }
  } while (width > 1024 || width < 1 || height > 512 || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y) || Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512)

  if (!(width === null) && !(height === null) && !(x === null) && !(y === null)) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.stroke()
    context.closePath()
  }
};

/*
 * Exercise 3. colored rectangle
 */

const drawColoredRectangle = function() {
  const canvas = document.getElementById('student-canvas-3');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var color = (prompt("Color: "))
    if (color == null) {
      break;
    }
    color = String(color)
    var color_formatted = color.toUpperCase()
    if (color_formatted != "GREEN" && color_formatted != "BLACK" && color_formatted != "BLUE" && color_formatted != "ORANGE" && color_formatted != "PURPLE" && color_formatted != "RED" && color_formatted != "YELLOW") {
      alert(color + " is not a supported color.")
    }
  } while (color_formatted != "GREEN" && color_formatted != "BLACK" && color_formatted != "BLUE" && color_formatted != "ORANGE" && color_formatted != "PURPLE" && color_formatted != "RED" && color_formatted != "YELLOW")

  if (color != null) {
    context.fillStyle = color_formatted;
    context.fillRect(10, 10, 100, 50);
  }
};

/*
 * Exercise 4. triangle
 */

const drawTriangle = function() {
  const canvas = document.getElementById("student-canvas-4")
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, canvas.width, canvas.height)

  do {
    var side1 = prompt("Side 1: ")
    if (side1 == null) {
      break;
    }

    var side2 = prompt("Side 2: ")
    if (side2 == null) {
      break;
    }

    var side3 = prompt("Side 3: ")
    if (side3 == null) {
      break;
    }

    var height = Math.min(side1, side2, side3)
    var hypotenuse = Math.max(side2, side2, side3)
    var base = Math.sqrt(hypotenuse*hypotenuse - height*height)

    if ((height*height) + (base*base) != (hypotenuse*hypotenuse)) {
      alert("This is not a valid right triangle.")
    }
  } while ((height*height) + (base*base) != (hypotenuse*hypotenuse))

if ((height*height) + (base*base) == (hypotenuse*hypotenuse)) {
    height = height + 25
    base = base + 25
    context.beginPath();
    context.moveTo(25, 25);
    context.lineTo(25, height);
    context.lineTo(base, height);
    context.lineTo(25, 25);
    context.stroke();
  }
};

/*
 * Exercise 5. face
 */

const drawFace = function() {
  const canvas = document.getElementById("student-canvas-5")
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, canvas.width, canvas.height)

  do {
    var faceRadius = prompt("Radius: ")
    if (faceRadius == null) {
      break;
    }

    if (faceRadius < 32) {
      alert("Your radius must be at least 32.")
    }

    if (isNaN(faceRadius)) {
      alert("Your radius is not a number.")
    }

    if (faceRadius > 250) {
      alert("Your smiley face won't fit on the canvas.")
    }
  } while (faceRadius < 32 || isNaN(faceRadius) || faceRadius > 250)

  var eyeRadius = faceRadius * .15
  var mouthRadius = faceRadius * .7



  context.beginPath();
  context.arc(512, 256, faceRadius, 0, 2 * Math.PI)
  context.stroke();
  context.closePath();
  context.beginPath();
  context.arc(512, 256, mouthRadius, 0, Math.PI);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.arc(512 - 0.4 * faceRadius, 256 - 0.4 * faceRadius, eyeRadius, 0, 2 * Math.PI);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.arc(512 + 0.4 * faceRadius, 256 - 0.4* faceRadius, eyeRadius, 0, 2 * Math.PI);
  context.stroke();
  context.closePath();
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
  const canvas = document.getElementById("student-canvas-6");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var distance = 0;
    var height = 0;
    var changeDistance = 0;
    var adjustingHeight = 0;
    var verify = 5;
    var side;



    do {
        var side = prompt("Side: ")

        if (side == null) {
          break;
        }

        if (side < 1) {
         alert("Your block size must be at least 1.")
        }

        else if (side > 100) {
         alert("Your pyramid won't fit on the canvas")
        }

        else if (isNaN(side)) {
         alert("Your block size is not a number.")
        }

      } while (isNaN(side) || side > 100 || side < 1)

      distance = Number(distance);
      height = Number(height);
      side = Number(side);

      for (x = 5; x > 0; x--) {
      verify = x

      while(verify >= 1) {
       context.beginPath();
       context.rect(10 + distance, (502 - side) - height, side,  side);
       context.stroke();
       context.closePath();
       distance = distance + side
       verify--
      }

       changeDistance++
       distance = changeDistance * (1/2 * side)
       adjustingHeight++
       height = adjustingHeight * side
      }
};
