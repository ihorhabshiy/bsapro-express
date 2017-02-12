class TodoValidator {
	constructor () {
		this.illegalWords = ['zrada', 'зрада'];
		this.message = 'Но-но!'
	}

	validate (text) {
		for (let word of this.illegalWords)
			if (text.includes(word)) return false;

		return true;
	}

}

module.exports = new TodoValidator();