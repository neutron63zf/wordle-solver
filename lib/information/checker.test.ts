import { checker } from "./checker";
import { Status, word2FiveString } from "./enums";
describe("checker", () => {
	it("checker", () => {
		const word = word2FiveString("acefg");
		const correct = word2FiveString("abcde");
		const result = checker(word, correct);
		expect(result).toEqual([
			{ char: "a", status: Status.Correct },
			{ char: "c", status: Status.WrongPosition },
			{ char: "e", status: Status.WrongPosition },
			{ char: "f", status: Status.NotIn },
			{ char: "g", status: Status.NotIn },
		]);
	});

	it("checker doubled", () => {
		const correct = word2FiveString("aabcd");
		const word = word2FiveString("ababa");
		const result = checker(word, correct);
		expect(result).toEqual([
			{ char: "a", status: Status.Correct },
			{ char: "b", status: Status.WrongPosition },
			{ char: "a", status: Status.WrongPosition },
			{ char: "b", status: Status.NotIn },
			{ char: "a", status: Status.NotIn },
		]);
	});
});
