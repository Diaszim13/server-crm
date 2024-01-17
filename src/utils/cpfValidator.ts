
export class cpfValidator {
	constructor() {
		this.router = express.Router();
		this.router.get('/', this.get);
	}
	get(req, res) {
		if(req.query.cpf) {
			let cpf = req.query.cpf;
			let cpfValid = this.validaCPF(cpf);
			res.send(cpfValid);
		} else {
			res.send('CPF não informado');
		}
	}
}


