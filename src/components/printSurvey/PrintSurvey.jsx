import * as Print from 'expo-print';

const PrintSurvey = async (questions, answers) => {
  const letters = ['a', 'b', 'c', 'd', 'e'];

  const htmlContent = `
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: darkred; text-align: center; }
          .question { margin-bottom: 16px; }
          .answer { font-weight: bold; color: #333; }
        </style>
      </head>
      <body>
        <h1>Upitnik za davaoce krvi</h1>
        ${questions
          .map(
            (q) => `
          <div class="question">
            <p><strong>${q.question}</strong></p>
            <p class="answer">Odgovor: ${letters.includes(answers[q.id]) ? answers[q.id] + ') ' + q.options[letters.indexOf(answers[q.id])] : 'Nije odgovoreno'}</p>
          </div>
        `
          )
          .join('')}
      </body>
    </html>
  `;

  await Print.printAsync({
    html: htmlContent,
  });
};

export default PrintSurvey;
