export const qlsvActions = {
  ADD_ONE_SV: "/qlsv/ADD_ONE_SV",
  SET_ALL_SV: "/qlsv/SET_ALL_SV",
  UPDATE_ONE_SV: "/qlsv/UPDATE_ONE_SV",

  addOneSv: (newStudent) => {
    return {
      type: qlsvActions.ADD_ALL_SV,
      payload: newStudent,
    };
  },
  setAllSv: (students) => {
    return {
      type: qlsvActions.SET_ALL_SV,
      payload: students,
    };
  },
  updateOneSv: (newStudent) => {
    return {
      type: qlsvActions.UPDATE_ONE_SV,
      payload: newStudent,
    };
  },
};
