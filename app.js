// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
};
// ======================

function turnLeft() {
  console.log("Rover Direction: " + this.rover.direction);
  switch (this.rover.direction) {
    case 'N':
      this.rover.direction = 'W';
      break;
    case 'S':
      this.rover.direction = 'E';
      break;
    case 'E':
      this.rover.direction = 'N';
      break;
    case 'W':
      this.rover.direction = 'S';
      break;
  }
  console.log("Rover New Direction: " + this.rover.direction);
}

function turnRight() {
  console.log("Rover Direction: " + this.rover.direction);
  switch (this.rover.direction) {
    case 'N':
      this.rover.direction = 'E';
      break;
    case 'S':
      this.rover.direction = 'W';
      break;
    case 'E':
      this.rover.direction = 'S';
      break;
    case 'W':
      this.rover.direction = 'N';
      break;
  }
  console.log("Rover new direction: " + this.rover.direction);
}

function moveForward() {

  var travelLog = {
    logX: this.rover.x,
    logY: this.rover.y
  }

  this.rover.travelLog.push(travelLog);

  console.log("Rover current pos: [" + this.rover.x + "," + this.rover.y + "]");

  var currentX = this.rover.x;
  var currentY = this.rover.y;

  switch (this.rover.direction) {
    case 'N':
      this.rover.y = this.rover.y + 1;
      break;
    case 'S':
      this.rover.y = this.rover.y - 1;
      break;
    case 'E':
      this.rover.x = this.rover.x - 1;
      break;
    case 'W':
      this.rover.x = this.rover.x + 1;
      break;
  }

  console.log("Rover new pos: [" + this.rover.x + "," + this.rover.y + "]");
}

function commands(commandStr) {

  for (var i = 0; i < commandStr.length; i++) {
    switch (commandStr[i]) {
      case 'f':
        moveForward();
        break;
      case 'r':
        turnRight();
        break;
      case 'l':
        turnLeft();
        break;
      default:
        console.log("Command " + commandStr[i] + " not valid!");
        break;
    }
  }
  console.log(rover.travelLog);
}
