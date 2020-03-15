export const fetchStudents = async () => {
  try {
    const response = await fetch('/api/students');
    const students = await response.json();
    return students
  } catch (error) {
    console.log(error);
  }
}