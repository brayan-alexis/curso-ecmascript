const hi = '   Hi people!   '; 
console.log(hi);                       // '   Hi people!   '
console.log(hi.trimStart());           // 'Hi people!   '
console.log(hi.trimEnd());             // '   Hi people!'
console.log(hi.trimStart().trimEnd()); // 'Hi people!'