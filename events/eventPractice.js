// Event Listener for Click
document.addEventListener("click", (event) => {
  console.log("--- Click Event ---");
  console.log(`Event Type: ${event.type}`);
  console.log(`Timestamp: ${event.timeStamp}`);
  console.log(new Date(event.timeStamp).toLocaleString());
  console.log(`Target: ${event.target.tagName}`);
  console.log(`Current Target: ${event.currentTarget}`);
  console.log(`Client Coordinates: (${event.clientX}, ${event.clientY})`);
  console.log(`Screen Coordinates: (${event.screenX}, ${event.screenY})`);
  console.log(`Alt Key Pressed: ${event.altKey}`);
  console.log(`Ctrl Key Pressed: ${event.ctrlKey}`);
  console.log(`Shift Key Pressed: ${event.shiftKey}`);
  console.log("-------------------");
});

// Event Listener for Mouseover
document.addEventListener("mouseover", (event) => {
  console.log("--- Mouseover Event ---");
  console.log(`Event Type: ${event.type}`);
  console.log(`Target: ${event.target.tagName}`);
  console.log(`To Element: ${event.toElement?.tagName}`);
  console.log("------------------------");
});

// Event Listener for Keydown
document.addEventListener("keydown", (event) => {
  console.log("--- Keydown Event ---");
  console.log(`Event Type: ${event.type}`);
  console.log(`Key Code: ${event.keyCode}`);
  console.log(`Alt Key Pressed: ${event.altKey}`);
  console.log(`Ctrl Key Pressed: ${event.ctrlKey}`);
  console.log(`Shift Key Pressed: ${event.shiftKey}`);
  console.log("----------------------");
});

// Prevent Default Behavior Example
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(`Default prevented for link: ${event.target.href}`);
  });
});
