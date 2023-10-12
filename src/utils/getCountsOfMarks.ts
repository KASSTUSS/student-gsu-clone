import { IMarkData, IStudentsMarksData } from "@api/StudentService";

const getCountsOfMarks = (sessionData: IStudentsMarksData[] | undefined): number[] => {
    const countsOfMarks = new Array(10).fill(0);

    if(!sessionData) return countsOfMarks;

    sessionData.forEach(session => {

        session.marks.forEach((mark: IMarkData) => {
            if (typeof mark.result === 'number') {
                countsOfMarks[mark.result - 1] += 1;
            }
        });
    });

    return countsOfMarks;
}

export default getCountsOfMarks;