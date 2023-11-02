const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  // Use the "in" operator to check if the key exists in the sampleObject
  return key in sampleObject;
}

const inputKey = prompt("Enter Key.");
alert(hasKey(inputKey));
