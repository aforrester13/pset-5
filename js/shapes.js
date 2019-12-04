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
 };

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    let width = prompt("Width: ");
    let height = prompt("Height: ");
    let x = prompt("X: ");
    let y = prompt("Y: ");
    while (width < 1 || width > theCanvas.width)  {
      alert("Your width must be between 1 and 1024. ")
      width = prompt("Width: ");
    }

    while (height < 1 || height > theCanvas.height)  {
      alert("Your height must be between 1 and 1024. ")
      height = prompt("Height: ");
    }

    while (x < 1 || x > theCanvas.width)  {
      alert("Your x-coordinate must be between 1 and 1024. ")
      x = prompt("X: ");
    }

    while (y < 1 || y > theCanvas.height)  {
      alert("Your y-coordinate must be between 1 and 1024. ")
      y = prompt("Y: ");
    }

    const theCanvas = document.getElementById('student-canvas-2');
    const styling = theCanvas.getContext('2d');
    styling.clearRect(0, 0, theCanvas.width, theCanvas.height);
    styling.strokeText(x, y, width, height);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
