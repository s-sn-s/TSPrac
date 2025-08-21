let anyDatatype:any = 1;
console.log(typeof anyDatatype);
anyDatatype='1';
console.log(typeof anyDatatype);

let unknownDatatype:unknown=1;
console.log(typeof unknownDatatype);
unknownDatatype='1';
console.log(typeof unknownDatatype);

if(typeof unknownDatatype === 'string'){
  console.log(unknownDatatype.length);
}