const QuestionnaireHTML = ({ allQuestions, answers }) => {
  return `
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body { 
            font-family: Arial, sans-serif; 
            font-size: 12px; 
            padding: 20px; 
            line-height: 1.5; 
          }
          h5 { 
            color: darkred; 
            text-align: center; 
            margin: 0 0 10px 0; 
            text-transform: uppercase;
          }
          .section-title {
            background-color: #ffffcc;
            font-weight: bold;
            padding: 4px;
            border: 1px solid #ccc;
            margin: 10px 0 5px 0;
          }
          .question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            padding: 4px 0;
          }
          .question p {
            margin: 0;
            flex: 1;
          }
          .options {
            display: flex;
            gap: 20px;
            min-width: 80px;
            justify-content: flex-end;
          }
          .option {
            font-weight: normal;
            color: #000;
          }
          .selected {
            font-weight: bold;
            color: red;
          }
          .note {
            font-size: 10px;
            margin-top: 20px;
          }
          .footer {
            margin-top: 30px;
            border-top: 1px solid #000;
            padding-top: 10px;
          }
        </style>
      </head>
      <body>
        <h5>Popunjava davalac</h5>
        <p style="font-size:11px;">
          Molimo Vas da pročitate upitnik i iskreno odgovorite na svako pitanje. Upitnik je važan zbog očuvanja Vašeg zdravlja i sigurnosti transfuzijskog liječenja bolesnika.
        </p>

        ${allQuestions
          .map((q) => {
            const selected = answers[q.id];
            return `
              <div class="question">
                <p>${q.id}. ${q.question}</p>
                <div class="options">
                  <span class="option ${selected === 'DA' ? 'selected' : ''}">DA</span>
                  <span class="option ${selected === 'NE' ? 'selected' : ''}">NE</span>
                </div>
              </div>
            `;
          })
          .join('')}

        <div class="footer">
          <p>Hvala što dajete krv</p>
          <p>Potpis davaoca: ___________________________</p>
        </div>
      </body>
    </html>
  `;
};

export default QuestionnaireHTML;
