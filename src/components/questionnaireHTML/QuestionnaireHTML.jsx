const QuestionnaireHTML = ({ allQuestions, answers }) => {
  return `
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body { 
            font-family: Arial, sans-serif; 
            font-size: 6px; 
            padding: 10px; 
            line-height: 1.5; 
          }
          
          .container{
            border: 0.5px solid black;
          }
          h5 { 
            color: darkred; 
            text-align: center; 
            margin: 0 0 10px 0; 
            text-transform: uppercase;
          }
          
          .questionHeader {
          background-color: #cdb476;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: darkred;
          margin: 0px;
          padding: 0px;
          }
         
          .question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 0.5px solid #ccc;
          }
          .question p {
            margin: 0;
            flex: 1;
          }
          .options {
            display: flex;
            gap: 10px;
            min-width: 80px;
            justify-content: flex-end;
            
          }
          .option {
            font-weight: normal;
            color: #000;
    
          }
          .optionLeft{
          border-right: 0.5px solid black;
          }
          .selected {
            font-weight: bold;
            color: darkred;
          }
          .note {
            font-size: 10px;
            margin-top: 20px;
          }
          .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #000;
          }
        </style>
      </head>
      <body>
      <div class="container">
        <div class="questionHeader">
            <h4 style="color: darkred">Popunjava davalac</h4>
            <p style="font-size:9px; color: darkred">
                Molimo Vas da pročitate upitnik i iskreno odgovorite na svako pitanje. Upitnik je važan zbog očuvanja Vašeg zdravlja i sigurnosti transfuzijskog liječenja bolesnika.
                Vaši odgovori, kao i svi ostali podaci o Vama su potpuno povjerljivi (ljekarska tajna) i koristiće se samo za potrebe transfuziološke svrhe.
            </p>
        </div>

        ${allQuestions
          .map((q) => {
            const selected = answers[q.id];
            let titleHTML = '';

            if (q.id === 34) {
              titleHTML = `<div class="questionHeader">ZA ZENE</div>`;
            } else if (q.id === 37) {
              titleHTML = `<div class="questionHeader">SAGLASNOST DAVAOCA</div>`;
            }
            return `
              <div class="question">
                <p style="font-size:3px; padding:0px">${q.id}. ${q.question}</p>
                <div class="options">
                  <span class="option ${selected === 'DA' ? 'selected' : ''}">DA</span>
                  <span class="option ${selected === 'NE' ? 'selected' : ''}">NE</span>
                </div>
                
              </div>
               ${titleHTML}
            `;
          })
          .join('')}

        <div class="footer">
          <p style="color: darkred">HVALA ŠTO DAJE KRV</p>
          <p>Potpis davaoca: ___________________________</p>
        </div>
      </div>
      </body>
    </html>
  `;
};

export default QuestionnaireHTML;
