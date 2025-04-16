import React from 'react';

const QuestionnaireHTML = ({ allQuestions, answers }) => {
  return `
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body { font-family: Arial, sans-serif; padding: 1px; }
          h5 { color: darkred; text-align: center; margin-bottom: 0px; }
          .question { 
            font-size: 10px; 
            display: flex; 
            gap: 5px; 
            align-items: center;
            justify-content: space-between; 
            border: 0.5px solid #ccc; 
            padding: 1px 2px 1px 2px; 
            border-radius: 5px; 
          }
          .options { 
            display: flex; 
            gap: 10px; 
            font-size: 10px; 
            align-items: center; 
            padding: 1px 5px 1px 5px; 
            border-radius: 5px; 
            background-color: #f9f9f9; 
          }
          .option { font-weight: normal; color: #444; }
          .selected { font-weight: bold; color: red; }
        </style>
      </head>
      <body>
        <h6>Upitnik za davaoce krvi</h6>
        ${allQuestions
          .map((q) => {
            const selected = answers[q.id];
            return `
              <div class="question">
                <p><strong>${q.question}</strong></p>
                <div class="options">
                  <span class="option ${selected === 'DA' ? 'selected' : ''}">DA</span>
                  <span class="option ${selected === 'NE' ? 'selected' : ''}">NE</span>
                </div>
              </div>
            `;
          })
          .join('')}
      </body>
    </html>
  `;
};

export default QuestionnaireHTML;
