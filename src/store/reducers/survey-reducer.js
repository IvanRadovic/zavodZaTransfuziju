import { createSlice } from '@reduxjs/toolkit';

const surveySlice = createSlice({
  name: 'survey',
  initialState: {
    answers: {},
    currentStep: 1,
  },
  reducers: {
    setAnswer: (state, action) => {
      state.answers[action.payload.questionId] = action.payload.answer;
    },
    incrementStep: (state) => {
      state.currentStep += 1;
    },
    decrementStep: (state) => {
      state.currentStep -= 1;
    },
    resetSurvey: (state) => {
      state.answers = {};
      state.currentStep = 1;
    },
  },
});

export const { setAnswer, incrementStep, decrementStep, resetSurvey } =
  surveySlice.actions;
export const selectAnswers = (state) => state.survey.answers;
export const selectCurrentStep = (state) => state.survey.currentStep;

export const surveyReducer = surveySlice.reducer;
