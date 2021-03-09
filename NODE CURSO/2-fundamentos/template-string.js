const nombre = 'Deadpoll';
const real = "wade winston";

const normal = nombre +' '+ real;
console.log(normal);
//templates

const template = `${nombre} ${real}`;
console.log(template)

console.log(normal == template);

const html =
`
//esto me coje todos los saltos de lineas y todo
<h1>Hola</h1>
<h2>Mundo<h2>
` ;

console.log(html)