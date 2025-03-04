export type GradesDe = 1 | 2 | 3 | 4 | 5 | 6;
export type GradesUs = "A" | "B" | "C" | "D" | "E" | "F";

export type Student = {
    firstName:string,
    lastName:string
    age: number,
    grades: (GradesDe | GradesUs | undefined)[]
};
