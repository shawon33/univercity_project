import { useGetAllSemestersQuery } from "../../../redux/features/academic.Semester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>this is a academic semester</h1>
    </div>
  );
};

export default AcademicSemester;
