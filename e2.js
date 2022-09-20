/*Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.*/





let Pizzas = [
  {
        Id:1,
        Nombre: "Albahaca",
        Ingredientes: ["Tomate", "Queso", "Albahaca"],
        Precio: "$1220"
    },
     {
        Id:2,
        Nombre: "Muzzarella",
        Ingredientes: ["Tomate", " Doble ueso"],
        Precio: "500"
    },
    {
        Id:3,
        Nombre: "especial",
        Ingredientes: ["Jamón", "Queso", "morrón"],
        Precio: "$1800"
    },
     {
        Id:4,
        Nombre: "Albahaca",
        Ingredientes: ["Tomate", "Queso", "champiognes"],
        Precio: "$1540"
    },
    {
        Id:5,
        Nombre: "Fugazzetta",
        Ingredientes: ["Tomate", "Queso", "cebolla"],
        Precio: "$1220"
    },
    {
        Id:6,
        Nombre: "Roquefort",
        Ingredientes: [ "Queso", "Queso azul"],
        Precio: "$1220"
    },
]

//a) Las pizzas que tengan un id impar.
let PizzasImpares = Pizzas.filter((pizza) => pizza.Id % 2 !== 0);
console.log(`Las pizzas que tengan un id impar son: ${PizzasImpares[0].Nombre}, ${PizzasImpares[1].Nombre}, ${PizzasImpares[2].Nombre}`);

//b) ¿Hay alguna pizza que valga menos de $600?
let pizzasMenosDe600 = Pizzas.filter((pizza) => pizza.Precio < 600);
console.log(`Hay ${pizzasMenosDe600.length} pizza que vale menos de $600 : ${pizzasMenosDe600[0].Nombre}`);

//c) Los nombres de todos las pizzas.
let nombresPizzas = Pizzas.map((pizza) => pizza.Nombre);
console.log(`Los nombres de todas las pizzas son: ${nombresPizzas}.`);

//d) Los precios de las pizzas.
let preciosPizzas = Pizzas.map((pizza) => pizza.Precio);
console.log(`Los precios de las pizzas son: ${preciosPizzas}.`);

//e) El nombre de cada pizza con su respectivo precio.
let nombreYPrecio = Pizzas.map((pizza) => `${pizza.Nombre} $${pizza.Precio}`);
console.log(`El nombre de cada pizza con su respectivo precio es: ${nombreYPrecio}.`);
 



