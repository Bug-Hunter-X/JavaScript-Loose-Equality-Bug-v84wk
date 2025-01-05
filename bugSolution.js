function foo(x) {
  if (x === 1) {
    return true;
  } else if (x === 2) {
    return false;
  } else {
    return undefined; // Handle cases not explicitly defined
  }
}
//Additional handling for unexpected input
//This prevents potential errors in cases where x is neither 1 nor 2.