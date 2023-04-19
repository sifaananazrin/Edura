export const config = {
    headers: {
      Authorization: `${localStorage.getItem("teachertoken")}`,
    },
  };