// Establish a WebSocket connection
const socket = new WebSocket("ws://localhost:3000", "echo-protocol");

// defining varibles
let isSocketOpen = false;
let isStartButtonClicked = false;

// ----------------------------- Get All html Elements -------------------------------------------

// Get all indecartors
const statusIndicator = document.getElementById(`startStatusIndicator`);
const driveIndicator = document.getElementById(`gearDStatusIndicator`);
const reverseIndicator = document.getElementById(`gearRStatusIndicator`);
const nutralIndicator = document.getElementById(`gearNStatusIndicator`);
const handBrakeIndicator = document.getElementById(`handBrakeStatusIndicator`);
const brakeIndicator = document.getElementById(`BrakeStatusIndicator`);
const statusIndicatorForD = document.getElementById(
  `indicatorDStatusIndicator`
);
const statusIndicatorForR = document.getElementById(
  `indicatorRStatusIndicator`
);
const statusIndicatorForN = document.getElementById(
  `indicatorNStatusIndicator`
);

// Side bar navigation
const formDiv = document.getElementById("formSection");
const dashbaordDiv = document.getElementById("liveParametersContainer");
const deviceSetupDiv = document.getElementById("deviceSetupSection");
const batteryDebugSection = document.getElementById("batteryDebugSection");

// Conatiner that include all details
const contentContainer = document.getElementById("contentContainer");

// start button
const startButton = document.getElementById("startButton");
const rebootButton = document.getElementById("rebootButton");

// Form page feilds
const dodValue = document.getElementById("DodValue");
const vinValue = document.getElementById("VinValue");

// ------------------Making Socket COnnecting and Handling Errors ------------------------------------

// Creating and handling socket connection
socket.onopen = function () {
  console.log("Connected to WebSocket server");
  isSocketOpen = true;
};

socket.onclose = function (event) {
  console.log("WebSocket connection closed: ", event);
  isSocketOpen = false;
};

socket.onerror = function (error) {
  console.log("WebSocket error: ", error);
  isSocketOpen = false;
};

// Send a message through WebSocket
function sendWebSocketCommand(command) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(command);
    console.log(`${command} command sent`);
  } else {
    console.log("WebSocket is not open.");
  }
}

// chage the content container visibility to block
function handleStart() {
  rebootButton.classList.remove("d-none");
  sendCommand("START_TOTAL_SYSTEM", "");
}

function handleStop() {
  rebootButton.classList.add("d-none");
  sendCommand("STOP_TOTAL_SYSTEM", "");
}

function handleReboot() {
  // Reset all indicators
  statusIndicator.classList.remove("text-success");
  statusIndicator.classList.add("text-danger");
  driveIndicator.classList.remove("text-success");
  driveIndicator.classList.add("text-danger");
  reverseIndicator.classList.remove("text-success");
  reverseIndicator.classList.add("text-danger");
  nutralIndicator.classList.remove("text-success");
  nutralIndicator.classList.add("text-danger");
  handBrakeIndicator.classList.remove("text-success");
  handBrakeIndicator.classList.add("text-danger");
  brakeIndicator.classList.remove("text-success");
  brakeIndicator.classList.add("text-danger");
  statusIndicatorForD.classList.remove("text-success");
  statusIndicatorForD.classList.add("text-danger");
  statusIndicatorForR.classList.remove("text-success");
  statusIndicatorForR.classList.add("text-danger");
  statusIndicatorForN.classList.remove("text-success");
  statusIndicatorForN.classList.add("text-danger");
  sendCommand("REBOOT_TOTAL_SYSTEM", "");
}

function changeDisplayToForm() {
  dashbaordDiv.classList.add("d-none");
  formDiv.classList.remove("d-none");
  deviceSetupDiv.classList.add("d-none");
  batteryDebugSection.classList.add("d-none");
  sendCommand("GET_DOD_VALUE", "");
  sendCommand("GET_VIN_VALUE", "");
}

function changeDisplayToDashboard() {
  dashbaordDiv.classList.remove("d-none");
  formDiv.classList.add("d-none");
  deviceSetupDiv.classList.add("d-none");
  batteryDebugSection.classList.add("d-none");
}

function changeDisplayToDeviceSetup() {
  dashbaordDiv.classList.add("d-none");
  formDiv.classList.add("d-none");
  deviceSetupDiv.classList.remove("d-none");
  batteryDebugSection.classList.add("d-none");
}

function changeDisplayToBattryDebug() {
  dashbaordDiv.classList.add("d-none");
  formDiv.classList.add("d-none");
  deviceSetupDiv.classList.add("d-none");
  batteryDebugSection.classList.remove("d-none");
}

function handleEEPROMButtonClick() {
  // Have to uncomment this
  // sendCommand("RESET_EEPROM", "");
}

// handle the DOD form submit
document.getElementById("DodForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const dodvalue = document.getElementById("dodValueInput").value;

  alert(`New DOD Value is : ${dodvalue}`);
  // sendCommand("CHANGE_DODO_VALUE") // Need to add the dod value to the command
});

// handle the VIN form submit
document.getElementById("VinForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const vinValue = document.getElementById("vinValueInput").value;

  alert(`New Vin Value is : ${vinValue}`);
  // sendCommand("CHANGE_DODO_VALUE") // Need to add the dod value to the command
});

// handle the chill toggle
document.getElementById("switchChill").addEventListener("change", function () {
  if (isSocketOpen) {
    if (this.checked) {
      sendWebSocketCommand("TURN_ON_CHILLER");
    } else {
      sendWebSocketCommand("TURN_OFF_CHILLER");
    }
  } else {
    alert("Socket connection Error");
    this.checked = !this.checked;
  }
});

// handle the IGN toggle
document.getElementById("switchIGN").addEventListener("change", function () {
  if (this.checked) {
    sendWebSocketCommand("TURN_ON_IGN");
  } else {
    sendWebSocketCommand("TURN_OFF_IGN");
  }
});

// handle the Rev toggle
document.getElementById("switchRev").addEventListener("change", function () {
  if (this.checked) {
    sendWebSocketCommand("TURN_ON_REV");
  } else {
    sendWebSocketCommand("TURN_OFF_REV");
  }
});

// handle the Emg toggle
document.getElementById("switchEmg").addEventListener("change", function () {
  if (this.checked) {
    sendWebSocketCommand("TURN_ON_EMG");
  } else {
    sendWebSocketCommand("TURN_OFF_EMG");
  }
});

// handle the BMS toggle
document.getElementById("switchBMS").addEventListener("change", function () {
  if (this.checked) {
    sendWebSocketCommand("TURN_ON_BMS");
  } else {
    sendWebSocketCommand("TURN_OFF_BMS");
  }
});

// handle the ACC toggle
document.getElementById("switchAcc").addEventListener("change", function () {
  if (this.checked) {
    sendWebSocketCommand("TURN_ON_ACC");
  } else {
    sendWebSocketCommand("TURN_OFF_ACC");
  }
});

// handle the MC toggle
document.getElementById("switchMC").addEventListener("change", function () {
  if (this.checked) {
    sendWebSocketCommand("TURN_ON_MC");
  } else {
    sendWebSocketCommand("TURN_OFF_MC");
  }
});

// Device Setup Screen
// handle the Chiller toggle
document
  .getElementById("ChillerToggleInDeviceSetup")
  .addEventListener("change", function () {
    if (this.checked) {
      sendWebSocketCommand("TURN_ON_CHILLER_DEVICE_SETUP");
    } else {
      sendWebSocketCommand("TURN_OFF_CHILLER_DEVICE_SETUP");
    }
  });

// handle the Chiller toggle
document
  .getElementById("debugViewerToggleInDeviceSetup")
  .addEventListener("change", function () {
    if (this.checked) {
      sendWebSocketCommand("TURN_ON_DEBUG_VIEWER_DEVICE_SETUP");
    } else {
      sendWebSocketCommand("TURN_OFF_DEBUG_VIEWER_DEVICE_SETUP");
    }
  });

// Handle the button clicks for testing functionalities
// FORMAT : "START" @string
async function sendCommand(command, elementId) {
  if (elementId != "") {
    const button = document.getElementById(elementId);
    button.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Testing...`;
    button.disabled = true;

    // Simulate a 5-second loading time
    setTimeout(() => {
      button.innerHTML = "Test";
      button.disabled = false;
    }, 5000);
  }

  if (isSocketOpen) {
    sendWebSocketCommand(command);
  } else {
    alert("Socket connection Error");
  }
}

// Handles the socket message come from socket server
// FORMAT : {"command":"STARTED","status":"SUCCESS"} @object
socket.onmessage = function (event) {
  console.log("Server response: ", event.data);
  switch (JSON.parse(event.data).command) {
    case "STARTED":
      if (JSON.parse(event.data).status === "SUCCESS") {
        statusIndicator.classList.remove("text-danger");
        statusIndicator.classList.add("text-success");
      } else {
        statusIndicator.classList.remove("text-success");
        statusIndicator.classList.add("text-danger");
      }
      break;

    case "DRIVE_STARTED":
      if (JSON.parse(event.data).status === "SUCCESS") {
        driveIndicator.classList.remove("text-danger");
        driveIndicator.classList.add("text-success");
      } else {
        driveIndicator.classList.remove("text-success");
        driveIndicator.classList.add("text-danger");
      }
      break;

    case "REVERSE_STARTED":
      if (JSON.parse(event.data).status === "SUCCESS") {
        reverseIndicator.classList.remove("text-danger");
        reverseIndicator.classList.add("text-success");
      } else {
        reverseIndicator.classList.remove("text-success");
        reverseIndicator.classList.add("text-danger");
      }
      break;

    case "NUTRAL_STARTED":
      if (JSON.parse(event.data).status === "SUCCESS") {
        nutralIndicator.classList.remove("text-danger");
        nutralIndicator.classList.add("text-success");
      } else {
        nutralIndicator.classList.remove("text-success");
        nutralIndicator.classList.add("text-danger");
      }
      break;

    case "HANDBRAKE_STARTED":
      if (JSON.parse(event.data).status === "SUCCESS") {
        handBrakeIndicator.classList.remove("text-danger");
        handBrakeIndicator.classList.add("text-success");
      } else {
        handBrakeIndicator.classList.remove("text-success");
        handBrakeIndicator.classList.add("text-danger");
      }
      break;

    case "BRAKE_STARTED":
      if (JSON.parse(event.data).status === "SUCCESS") {
        brakeIndicator.classList.remove("text-danger");
        brakeIndicator.classList.add("text-success");
      } else {
        brakeIndicator.classList.remove("text-success");
        brakeIndicator.classList.add("text-danger");
      }
      break;

    case "INDICATOR_D_STATUS":
      if (JSON.parse(event.data).status === "SUCCESS") {
        statusIndicatorForD.classList.remove("text-danger");
        statusIndicatorForD.classList.add("text-success");
      } else {
        statusIndicatorForD.classList.remove("text-success");
        statusIndicatorForD.classList.add("text-danger");
      }
      break;

    case "INDICATOR_R_STATUS":
      if (JSON.parse(event.data).status === "SUCCESS") {
        statusIndicatorForR.classList.remove("text-danger");
        statusIndicatorForR.classList.add("text-success");
      } else {
        statusIndicatorForR.classList.remove("text-success");
        statusIndicatorForR.classList.add("text-danger");
      }
      break;

    case "INDICATOR_N_STATUS":
      if (JSON.parse(event.data).status === "SUCCESS") {
        statusIndicatorForN.classList.remove("text-danger");
        statusIndicatorForN.classList.add("text-success");
      } else {
        statusIndicatorForN.classList.remove("text-success");
        statusIndicatorForN.classList.add("text-danger");
      }
      break;

    case "RESPONSE_TO_START_TOTAL_SYSTEM":
      if (JSON.parse(event.data).status === "SUCCESS") {
        contentContainer.classList.remove("d-none");
        startButton.classList.add("d-none");
      } else {
        alert("Filed to start the system");
      }
      break;
    case "RESPONSE_TO_STOP_TOTAL_SYSTEM":
      if (JSON.parse(event.data).status === "SUCCESS") {
        contentContainer.classList.add("d-none");
        startButton.classList.remove("d-none");
      } else {
        alert("Filed to stop the system");
      }
      break;
    case "RESPONSE_TOGET_DOD_VALUE":
      if (JSON.parse(event.data).status === "SUCCESS") {
        dodValue.innerText = JSON.parse(event.data).value;
      } else {
        alert("Filed to get dod value from backend");
      }
      break;
    case "RESPONSE_TOGET_VIN_VALUE":
      if (JSON.parse(event.data).status === "SUCCESS") {
        vinValue.innerText = JSON.parse(event.data).value;
      } else {
        alert("Filed to get dod value from backend");
      }
      break;
    default:
      break;
  }
};

// Handle start stop button

// -------------------------- CSS properties ---------------------------
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    document
      .querySelectorAll(".nav-link")
      .forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});

// This is for
function showLoading() {
  const button = document.getElementById("myButtonForTest");
  button.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`;
  button.disabled = true;

  // Simulate a 5-second loading time
  setTimeout(() => {
    button.innerHTML = "Reset";
    button.disabled = false;
  }, 5000);
}
