export type Grades = 1 | 2 | 3 | 4 | 5 | 6;

export type Student = {
    firstName:string,
    lastName:string
    age: number,
    grades: Grades[]
};
