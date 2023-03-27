// criar pessoa pessoa, pessoa fisica e pessoa juridica
const p1 = new Pessoa('Walter', 30, new Date());
const pFisica = new PessoaFisica('Will', 30, new Date(), '123.456.789-00');
const pJuridica = new PessoaJuridica('Bonner', 30, new Date(), '123.456.789/0001-00');

console.log(p1);
console.log(pFisica);
console.log(pJuridica);

//chamando cada atributo por vez

console.log(p1.nome);
console.log(p1.idade);
console.log(p1.dataNascimento);

console.log(pFisica.nome);
console.log(pFisica.idade);
console.log(pFisica.dataNascimento);
console.log(pFisica.cpf);

console.log(pJuridica.nome);
console.log(pJuridica.idade);
console.log(pJuridica.dataNascimento);
console.log(pJuridica.cnpj); 





/* const c1 = new Conta('1', 100);
const c2 = new Conta('2');

const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.saldo); */
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
