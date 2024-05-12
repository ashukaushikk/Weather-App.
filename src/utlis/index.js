export function capitalizeFirstCharacter(str = "") {
  // Check if the string is empty
  
  console.log(str);
  if (str === "") {
    return str; // Return empty string if input is empty
  }
  // Capitalize the first character and concatenate with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}