for (var i = 0; i < 5; i++) {
setTimeout(() => {
console.log(i);
});
}


let a = "Java";
a[0] = "R";
console.log(a);



Design pattern

Stategy discount


Memory leak and how to catch them


Bubling vs capturing
Delegation

prmoise.all


sum(a)(b)(c)












function Counter() {
const [count, setCount] = useState(0);
useEffect(() => {
const id = setInterval(() => {
setCount(count + 1);
}, 1000);
return () => clearInterval(id);
}, []);
return <h1>{count}</h1>;
}



