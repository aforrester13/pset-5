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
 *  Exercise 1 code
 */


 const sayHello = function() {
   let message = prompt("Message:");
   while (message.length >= 50){
     alert("Your message is too long. Please keep your message under 50 characters.");
     message = prompt("Message:")
   }


     const theCanvas = document.getElementById('student-canvas-1');
     const styling = theCanvas.getContext('2d');
     styling.font = '48px sans-serif';
     styling.clearRect(0, 0, theCanvas.width, theCanvas.height);
     styling.strokeText(message, 30, 70, 994);
 }

/*
 * Exercise 2.
 */

 const drawRectangle = function() {
   const canvas = document.getElementById('student-canvas-2');
   const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  do {
    var width = prompt("Width: ")
    if (width == null) {
      break;
    }
    var height = prompt("Height: ")
    if (height == null) {
      break;
    }
    var x = prompt("X: ")
    if (x == null) {
      break;
   }
    var y = prompt("Y: ")
    if (y == null) {
      break;
   }
    if (width > canvas.width || width < 1) {
      alert("Your width must be between 1 and 1024.")
    }
    if (height > canvas.height || height < 1) {
      alert("Your height must be between 1 and 512.")
    }
    if (x < 1 || x > 1024) {
      alert("Your x-coordinate must be between 1 and 1024.")
    }
    if (y < 1 || y > 512) {
      alert("Your y-coordinate must be between 1 and 512.")
    }
    if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
      alert("One of your values is not a number.")
    }
  } while (width > canvas.width || width < 1 || height > canvas.height || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y))

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeRect(x, y, width, height);
};

/*
 * Exercise 3.
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
     var color_case = color.toLowerCase()
     if (color_case != "green" && color_case != "black" && color_case != "blue" && color_case != "orange" && color_case != "purple" && color_case != "red" && color_case != "yellow") {
       alert(color + " is not a supported color.")
     }
   } while (color_case != "green" && color_case != "black" && color_case != "blue" && color_case != "orange" && color_case != "purple" && color_case != "red" && color_case != "yellow")

   if (color != null) {
     context.fillStyle = color_case;
     context.fillRect(10, 10, 100, 50);
   }

 };

/*
 * Exercise 4.
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
 * Exercise 5.
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
    // write your exercise 5 code here
};
