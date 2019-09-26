// add solution here
function theBeatlesPlay(musicians, instruments) {
  let newArray = [];

  for(let i = 0; i < musicians.length; i++) {
    let name = musicians[i];
    let instrument = instruments[i];
    let string = `${name} plays ${instrument}`;

    newArray.push(string);
  }

  return newArray;
}
