import {Aluno} from "./Aluno";
import {Livro} from "./Livro";
import { Usuario } from "./Usuario";
import {Carro} from "./Carro";

const harry_potter: Livro = new Livro("Harry Potter: E o Cálice de Fogo", "J.K Rowling", 2001, "Rocco");
harry_potter.exibirDados();

const senhor_d_aneis: Livro = new Livro("O Senhor dos Anéis: A Sociedade do Anel", " J.R.R. Tolkien", 2019, "HarperCollins");
senhor_d_aneis.exibirDados();

const Raul: Aluno = new Aluno("Raul", 19, "ADS", "BT3059634");
Raul.imprimir();

const user1: Usuario = new Usuario("User", "user@gmail.com");
user1.boasVindas();