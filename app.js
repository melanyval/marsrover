
var rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: []
  };
  // ======================
  
  console.log(rover.direction)
  
  function turnLeft() {
    console.log("Rover Direction: " + rover.direction);
    switch (rover.direction) {
      case 'N':
        rover.direction = 'W';
        break;
      case 'S':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'N';
        break;
      case 'W':
        rover.direction = 'S';
        break;
    }
    console.log("Rover New Direction: " + rover.direction);
  }
  
  // turnLeft()
  
  function turnRight() {
    console.log("Rover Direction: " + rover.direction);
    switch (rover.direction) {
      case 'N':
        rover.direction = 'E';
        break;
      case 'S':
        rover.direction = 'W';
        break;
      case 'E':
        rover.direction = 'S';
        break;
      case 'W':
        rover.direction = 'N';
        break;
    }
    console.log("Rover new direction: " + rover.direction);
  }
  
    // var travelLog = {
    //   logX: rover.x,
    //   logY: rover.y
  
  function moveForward() {
  
    // }
  
  
    // console.log("Rover current pos: [" + rover.x + "," + rover.y + "]");
  
  
    switch (rover.direction) {
      case 'N':
        rover.y = rover.y - 1;
        break;
      case 'S':
        rover.y = rover.y + 1;
        break;
      case 'E':
        rover.x = rover.x + 1;
        break;
      case 'W':
        rover.x = rover.x - 1;
        break;
    }
  
  
    // console.log("Rover new pos: [" + rover.x + "," + rover.y + "]");
    
    if (rover.x < 0 ){
      console.log("You are out of boundaries!!! Your X is too low.")
      rover.x ++
    }
   
    if (rover.x > 9){
      console.log("You are out of boundaries!!! Your X is too high")
      rover.x --
    }
  
    if (rover.y < 0){
      console.log("You are out of boundaries!!! Your Y is too low")
      rover.y ++
    }
  
    if (rover.y > 9){
      console.log("You are out of boundaries!!! Your Y is too high")
      rover.y --
    }
  
    rover.travelLog.push([rover.x, rover.y]);
  } // end of function
  
  // moveForward()
  
  
  
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
  
  
  commands('rffffffffffffff')