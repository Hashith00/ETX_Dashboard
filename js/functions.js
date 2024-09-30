// handle the chill toggle
document
  .getElementById("switchChill")
  .addEventListener("change", async function () {
    if (this.checked) {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_ON_CHILLER",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`Chiller ON command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_OFF_CHILLER",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`Chiller OFF command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }
  });

// handle the IGN toggle
document
  .getElementById("switchIGN")
  .addEventListener("change", async function () {
    if (this.checked) {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_ON_IGN",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`IGN ON command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_OFF_IGN",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`IGN OFF command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }
  });

// handle the Rev toggle
document
  .getElementById("switchRev")
  .addEventListener("change", async function () {
    if (this.checked) {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_ON_REV",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`Rev ON command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_OFF_REV",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`Rev OFF command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }
  });

// handle the Eng toggle
document
  .getElementById("switchEmg")
  .addEventListener("change", async function () {
    if (this.checked) {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_ON_EMG",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`Emg ON command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_OFF_EMG",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`Emg OFF command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }
  });

// handle the BMS toggle
document
  .getElementById("switchBMS")
  .addEventListener("change", async function () {
    if (this.checked) {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_ON_BMS",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`BMS ON command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_OFF_BMS",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`Bms OFF command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }
  });

// handle the ACC toggle
document
  .getElementById("switchAcc")
  .addEventListener("change", async function () {
    if (this.checked) {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_ON_ACC",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`Acc ON command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_OFF_ACC",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`Acc OFF command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }
  });

// handle the MC toggle
document
  .getElementById("switchMC")
  .addEventListener("change", async function () {
    if (this.checked) {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_ON_MC",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`Mc ON command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: "TURN_OFF_MC",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          console.log(`Mc OFF command sent`);
          // Checks the status code is 200
          if (response.ok) {
            // This thi the successfull response
          } else {
            this.checked = !this.checked;
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }
  });

// Handles the button clicks for testing functionalities
async function sendCommand(command, elementId) {
  const statusIndicator = document.getElementById(`${elementId}`);
  await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: command,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => {
      console.log(`${command} command sent`);
      // Checks the status code is 200
      if (response.ok) {
        if (statusIndicator.classList.contains("text-danger")) {
          statusIndicator.classList.remove("text-danger");
          statusIndicator.classList.add("text-success");
        }
      } else {
        if (statusIndicator.classList.contains("text-success")) {
          statusIndicator.classList.remove("text-success");
          statusIndicator.classList.add("text-danger");
        }
      }
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
}
