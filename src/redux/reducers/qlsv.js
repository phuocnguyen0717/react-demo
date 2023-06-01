import { qlsvActions } from "../actions/qlsv";

const initalState = {
  studentArr: [],
  loading: false,
};

export const qlsvReducer = (state = initalState, action) => {
  switch (action.type) {
    case qlsvActions.ADD_ONE_SV:
      return { ...state, studentArr: [...state.studentArr, action.payload] };
    case qlsvActions.SET_ALL_SV:
      return { ...state, loading: false, studentArr: action.payload };
    case qlsvActions.UPDATE_ONE_SV:
      const newSvArr = [...state.studentArr];
      const findSvIdx = state.studentArr.findIndex((sv) => sv.id === action.payload.id);
      if (findSvIdx < 0) return { ...state };
      newSvArr.slice(findSvIdx, 1, action.payload);
      return { ...state, loading: false, studentArr: newSvArr };

    default:
      return state;
  }
};
