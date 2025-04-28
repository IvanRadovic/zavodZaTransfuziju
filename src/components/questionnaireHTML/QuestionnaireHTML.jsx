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
          padding: 5px;
          
          }
         
          .question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 0.5px solid #ccc;
          }
          
          .id {
                width: 8px;
                border-right: 0.5px solid #ccc;
                margin:0px;
                padding: 5px;
          }
          .question p {
            margin: 0;
            flex: 1;
          }
          .options {
            display: flex;
            gap: 10px;
            min-width: 80px;
            justify-content: end;
            align-items: end;
          }
          .option {
            font-weight: normal;
            color: #000;
    
          }
          
          .options .selected {
            font-weight: bold;
            color: darkred;
          }
          .selected {
            font-weight: bold;
            color: darkred;
          }
          .note {
            font-size: 10px;
            margin-top: 20px;
          }
          .signature, .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #000;
          }
          
          .footerNote{
              display: flex;
              flex-direction: column;
              gap:2px;
              padding: 2px;
          }
          
          .footer-note-item{
          margin-bottom: 0px;
          
          }
        </style>
      </head>
      <body>
      <div class="container">
        <div class="questionHeader">
            <h4 style="color: darkred">Popunjava davalac</h4>
            <p style="font-size:9px; color: darkred; text-align: start">
                Molimo Vas da pročitate upitnik i iskreno odgovorite na svako pitanje. Upitnik je važan zbog očuvanja Vašeg zdravlja i sigurnosti transfuzijskog liječenja bolesnika.
                Vaši odgovori, kao i svi ostali podaci o Vama su potpuno povjerljivi (ljekarska tajna) i koristiće se samo za potrebe transfuziološke svrhe.
            </p>
        </div>

        ${allQuestions
          .map((q) => {
            const selected = answers[q.id];
            let titleHTML = '';

            if (q.id === 34) {
              titleHTML = `<div class="questionHeader">ZA ŽENE</div>`;
            } else if (q.id === 37) {
              titleHTML = `
                <div class="questionHeader">
                    <div>SAGLASNOST DAVAOCA</div>
                </div>
                <div style="align-self: start; background-color: white; border: 0.5px solid gray; padding-left: 5px">
                    Popunio/la sam upitnik o davanju krvi ili komponente krvi i izjavljujem sledeće
                </div>
              `;
            }
            return `
              <div class="question">
              <div style="display: flex; align-items: center; gap: 5px; font-size: 3px; padding: 0px;">
                <div class="id">${q.id}.</div>
                <div>${q.question}</div>
              </div>
              <div class="options">
                  <span class="option ${selected === 'DA' ? 'selected' : ''}">DA</span>
                  <span class="option ${selected === 'NE' ? 'selected' : ''}">NE</span>
              </div>
                
              </div>
               ${titleHTML}
            `;
          })
          .join('')}

        <div class="signature">
          <p style="color: darkred">HVALA ŠTO DAJE KRV</p>
          <p>Potpis davaoca: ___________________________</p>
        </div>
        <div class="footer">
          <div class="footerNote">
            <h6 style="margin-bottom: 0px; font-weight:bold">Napomena</h6>
            <div class="footer-note-item" style="display: flex; align-items: center; gap: 2px;">
                <input type="checkbox" style="transform: scale(0.8); width: 12px; height: 12px;" />              <p style="margin: 0;">Odustao/la</p>
            </div>
            <div class="footer-note-item" style="display: flex; align-items: center; gap: 2px;">
              <input type="checkbox" style="transform: scale(0.8); width: 12px; height: 12px;" />
              <p style="margin: 0;">Odobijanje davanja</p>
            </div>
            <div class="footer-note-item" style="display: flex; align-items: center; gap: 2px;">
              <input type="checkbox" style="transform: scale(0.8); width: 12px; height: 12px;" />
              <p style="margin: 0;">Saglasnost povučena</p>
            </div>
          </div>
          <div style="display: flex; align-items: end;">
            <p>Potpis davaoca: ___________________________</p>
          </div>
</div>
      </div>
      </body>
    </html>
  `;
};

export default QuestionnaireHTML;
