/**
 * @name getFlatQuestions
 * @description This function takes an array of questions and returns a flat array of questions.
 * @returns {*[]}
 */
export function getFlatQuestions(questions) {
  return questions.flatMap((q) => {
    if (q.subQuestions?.length) {
      return q.subQuestions.map((subQ, index) => ({
        id: subQ.id,
        question: subQ.label + ' ' + subQ.text,
        options: q.options,
        meta: {
          parentQuestionId: q.id,
          isFirstInGroup: index === 0,
        },
      }));
    } else {
      return {
        id: q.id,
        question: q.question,
        options: q.options,
      };
    }
  });
}
