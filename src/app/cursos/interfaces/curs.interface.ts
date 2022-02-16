export interface Curs {
	id: number,
	title: string,
	description: string,
	purchased: boolean,
	url: string,
	lessons: Lesson[]
}

export interface Lesson {
	lessonTitle: string,
	theory: TheoryStep[],
	practice: PracticeStep[],
	test: TestStep[]
}

export interface TheoryStep {
	theoryName: string,
	description: string,
	img: string
}
export interface PracticeStep {
	practiceName: string,
	description: string,
	timing: string
}
export interface TestStep {
	testName: string,
	description: string,
	timing: string
}