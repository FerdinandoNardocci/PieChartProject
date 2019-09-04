//Parses a time string in the form hh:mm:ss and returns a zero based Date object.
//Value 0 corresponds to midnight, 86399999 corresponds to 23:59:59.999
if (!Date.parseTimeString){
  Date.parseTimeString = function(time){
      let fullDate = new Date('1970-01-01T' + time + 'Z');
      return Date.parse(fullDate);
  };
}

//Adds opacity to an existing rgb hex format color
function ColorWithOpacity(hex,opacity) {
  hex = hex.replace('#','');
  let r = parseInt(hex.substring(0,2), 16);
  let g = parseInt(hex.substring(2,4), 16);
  let b = parseInt(hex.substring(4,6), 16);

  return 'rgba('+r+','+g+','+b+','+opacity/100+')';
}