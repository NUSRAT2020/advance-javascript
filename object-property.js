const students = [{ id:21, name: "Omor sanny"},
{ id : 31, name: "sanny"},
{ id :41, name: "Omor "},
{ id : 51, name: "moushumy"}]
// const output =[];

const names = students.map( s => s.name )
const ids =students.map( s=> s.id)
const bigger = students.filter( s=> s.id> 30 )
const biggerOne = students.find ( s=> s.id > 40)
console.log(names, ids, bigger,biggerOne);
