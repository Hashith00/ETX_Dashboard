const WebSocketServer = require("websocket").server;
const express = require("express");
const http = require("http");

const app = express();

// Create an HTTP server and pass it to both Express and WebSocket server
const server = http.createServer(app);

// Set up WebSocket server
const wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false, // For more control over connections
});

// Function to allow only certain origins (you can add more logic here)
function originIsAllowed(origin) {
  return true; // Allow all origins for now
}

// WebSocket request handling
wsServer.on("request", function (request) {
  if (!originIsAllowed(request.origin)) {
    request.reject();
    console.log(
      new Date() + " Connection from origin " + request.origin + " rejected."
    );
    return;
  }

  // Accept the connection and specify the protocol (echo-protocol in this case)
  const connection = request.accept("echo-protocol", request.origin);
  console.log(new Date() + " Connection accepted.");

  // Handle incoming messages from clients
  connection.on("message", function (message) {
    if (message.type === "utf8") {
      // Handle text (UTF-8) messages
      console.log("Received Text Message: " + message.utf8Data);

      // Send response to the messages
      connection.sendUTF(handleMessage(message.utf8Data));
    } else if (message.type === "binary") {
      // Handle binary messages
      console.log(
        "Received Binary Message of " + message.binaryData.length + " bytes"
      );

      // Echo the binary message back to the client
      connection.sendBytes(message.binaryData);
    }
  });

  // Handle connection closure
  connection.on("close", function (reasonCode, description) {
    console.log(
      new Date() + " Peer " + connection.remoteAddress + " disconnected."
    );
  });
});

const handleMessage = (message) => {
  switch (message) {
    case "START":
      return JSON.stringify({ command: "STARTED", status: "SUCCESS" });
    case "DRIVE":
      return JSON.stringify({ command: "DRIVE_STARTED", status: "SUCCESS" });
    case "REVERSE":
      return JSON.stringify({ command: "REVERSE_STARTED", status: "SUCCESS" });
    case "NUTRAL":
      return JSON.stringify({ command: "NUTRAL_STARTED", status: "SUCCESS" });
    case "HANDBRAKE":
      return JSON.stringify({
        command: "HANDBRAKE_STARTED",
        status: "SUCCESS",
      });
    case "BRAKE":
      return JSON.stringify({ command: "BRAKE_STARTED", status: "SUCCESS" });
    case "CHECK_INDICATOR_D":
      return JSON.stringify({
        command: "INDICATOR_D_STATUS",
        status: "SUCCESS",
      });
    case "CHECK_INDICATOR_R":
      return JSON.stringify({
        command: "INDICATOR_R_STATUS",
        status: "SUCCESS",
      });
    case "CHECK_INDICATOR_N":
      return JSON.stringify({
        command: "INDICATOR_N_STATUS",
        status: "SUCCESS",
      });
    case "TURN_ON_CHILLER":
      return JSON.stringify({
        command: "TURN_ON_CHILLER_STATUS",
        status: "SUCCESS",
      });
    case "TURN_OFF_CHILLER":
      return JSON.stringify({
        command: "TURN_OFF_CHILLER_STATUS",
        status: "SUCCESS",
      });
    case "TURN_ON_IGN":
      return JSON.stringify({
        command: "TURN_ON_IGNs_STATUS",
        status: "SUCCESS",
      });
    case "TURN_OFF_IGN":
      return JSON.stringify({
        command: "TURN_OFF_IGN_STATUS",
        status: "SUCCESS",
      });
    case "TURN_ON_REV":
      return JSON.stringify({
        command: "TURN_ON_REV_STATUS",
        status: "SUCCESS",
      });
    case "TURN_OFF_REV":
      return JSON.stringify({
        command: "TURN_OFF_REV_STATUS",
        status: "SUCCESS",
      });
    case "TURN_ON_EMG":
      return JSON.stringify({
        command: "TURN_ON_EMG_STATUS",
        status: "SUCCESS",
      });
    case "TURN_OFF_EMG":
      return JSON.stringify({
        command: "TURN_OFF_EMG_STATUS",
        status: "SUCCESS",
      });
    case "TURN_ON_BMS":
      return JSON.stringify({
        command: "TURN_ON_BMS_STATUS",
        status: "SUCCESS",
      });
    case "TURN_OFF_BMS":
      return JSON.stringify({
        command: "TURN_OFF_BMS_STATUS",
        status: "SUCCESS",
      });
    case "TURN_ON_ACC":
      return JSON.stringify({
        command: "TURN_ON_ACC_STATUS",
        status: "SUCCESS",
      });
    case "TURN_OFF_ACC":
      return JSON.stringify({
        command: "TURN_OFF_ACC_STATUS",
        status: "SUCCESS",
      });
    case "TURN_ON_MC":
      return JSON.stringify({
        command: "TURN_ON_MC_STATUS",
        status: "SUCCESS",
      });
    case "TURN_OFF_MC":
      return JSON.stringify({
        command: "TURN_OFF_MC_STATUS",
        status: "SUCCESS",
      });
    case "START_TOTAL_SYSTEM":
      return JSON.stringify({
        command: "RESPONSE_TO_START_TOTAL_SYSTEM",
        status: "SUCCESS",
      });
    case "STOP_TOTAL_SYSTEM":
      return JSON.stringify({
        command: "RESPONSE_TO_STOP_TOTAL_SYSTEM",
        status: "SUCCESS",
      });
    case "GET_DOD_VALUE":
      return JSON.stringify({
        command: "RESPONSE_TOGET_DOD_VALUE",
        status: "SUCCESS",
        value: 108289289,
      });
    case "GET_VIN_VALUE":
      return JSON.stringify({
        command: "RESPONSE_TOGET_VIN_VALUE",
        status: "SUCCESS",
        value: 1029302222,
      });
    default:
      return JSON.stringify({
        command: "NO Commad",
        status: "False",
      });
  }
};

// Start the HTTP server
server.listen(3000, () => {
  console.log("Listening on port 3000");
});
