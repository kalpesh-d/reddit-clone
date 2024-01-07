function removeT3FromUrl(inputString) {
  if (inputString.includes("t3_")) {
    return inputString.replace("t3_", "");
  } else {
    return inputString;
  }
}

export default removeT3FromUrl;
