class Usuario {
	constructor(nombre, apellido, libros, mascotas) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = libros;
		this.mascotas = mascotas;
	}
	getFullName() {
		return `${this.nombre} ${this.apellido}`;
	}
	addMascota(mascota) {
		this.mascotas.push(mascota);
	}
	countMascota() {
		return this.mascotas.length;
	}
	addBook(nombre1, autor1) {
		const libro = {
			nombre: nombre1,
			autor: autor1,
		};
		this.libros.push(libro);
	}
	getBookNames() {
		if (this.libros.length == 0) {
			return `El Usuario ${this.name} ${this.apellido} no tiene libros`;
		} else {
			return this.libros.map((x) => x.nombre);
		}
	}
}

const usuario = new Usuario(
	"German",
	"Siliprandi",
	[
		{
			nombre: `Dune`,
			autor: `Frank Herbert`,
		},
	],
	[`Perro`, `Gato`]
);

console.log(usuario.getFullName());
console.log(usuario.getBookNames());
console.log(usuario.countMascota());
usuario.addMascota(`Tortuga`);
usuario.addBook(`El Señor de los Anillos`, "J.R.R Tolkien");
console.log(usuario.getBookNames());
console.log(usuario.countMascota());
