const QuestionnaireHTML = ({ allQuestions, answers }) => {
  let displayIndex = 1;

  const questionsHTML = allQuestions
    .map((q) => {
      const selected = answers[q.id];
      let titleHTML = '';

      if (q.id === 21 || q.id === 22) {
        return '';
      }

      if (q.id === 20) {
        return `
          <div class="questionWithSubQuestion">
            <div style="display: flex; align-items: center; gap: 5px; font-size: 3px; padding: 0px;">
              <div class="id">${displayIndex++}</div>
              <strong>Da li ste u proteklih 12 mjeseci:</strong>
            </div>
            <div class="sub-question">
              <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                <div>a) ${allQuestions.find((q) => q.id === 20)?.questionSubA || 'Podpitanje A'}</div>
                <div class="options" style="padding-right: 5px">>
                  <span class="option ${answers[20] === 'DA' ? 'selected' : ''}">Da</span>
                  <span class="option ${answers[20] === 'NE' ? 'selected' : ''}">Ne</span>
                </div>
              </div>
              <div style="display: flex;justify-content: space-between; align-items: center; gap: 10px;">
                <div>b) ${allQuestions.find((q) => q.id === 21)?.question || 'Podpitanje B'}</div>
                <div class="options" style="padding-right: 5px">>
                  <span class="option ${answers[21] === 'DA' ? 'selected' : ''}">Da</span>
                  <span class="option ${answers[21] === 'NE' ? 'selected' : ''}">Ne</span>
                </div>
              </div>
              <div style="display: flex;justify-content: space-between; align-items: center; gap: 10px;">
                <div>c) ${allQuestions.find((q) => q.id === 22)?.question || 'Podpitanje C'}</div>
                <div class="options" style="padding-right: 5px">>
                  <span class="option ${answers[22] === 'DA' ? 'selected' : ''}">Da</span>
                  <span class="option ${answers[22] === 'NE' ? 'selected' : ''}">Ne</span>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      if (q.id === 24) {
        return `
        <div class="questionWithSubQuestion">
          <div style="display: flex; align-items: center; gap: 5px; font-size: 3px; padding: 0px;">
            <div class="id">${displayIndex++}</div>
            <strong>Oblici rizičnih stanja i ponašanja:</strong>
          </div>
          <div class="sub-question">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div>a) ${q.questionSubA}</div>
              <div class="options" style="padding-right: 5px">>
                <span class="option ${answers[24] === 'DA' ? 'selected' : ''}">Da</span>
                <span class="option ${answers[24] === 'NE' ? 'selected' : ''}">Ne</span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div>b) ${q.questionSubB}</div>
              <div class="options" style="padding-right: 5px">>
                <span class="option ${answers[25] === 'DA' ? 'selected' : ''}">Da</span>
                <span class="option ${answers[25] === 'NE' ? 'selected' : ''}">Ne</span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div>c) ${q.questionSubC}</div>
              <div class="options" style="padding-right: 5px">>
                <span class="option ${answers[26] === 'DA' ? 'selected' : ''}">Da</span>
                <span class="option ${answers[26] === 'NE' ? 'selected' : ''}">Ne</span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div>d) ${q.questionSubD}</div>
              <div class="options"style="padding-right: 5px"> >
                <span class="option ${answers[27] === 'DA' ? 'selected' : ''}">Da</span>
                <span class="option ${answers[27] === 'NE' ? 'selected' : ''}">Ne</span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div>e) ${q.questionSubE}</div>
              <div class="options" style="padding-right: 5px">
                <span class="option ${answers[28] === 'DA' ? 'selected' : ''}">Da</span>
                <span class="option ${answers[28] === 'NE' ? 'selected' : ''}">Ne</span>
              </div>
            </div>
          </div>
        </div>
      `;
      }

      if (q.id === 29) {
        return `
        <div class="questionWithSubQuestion">
          <div style="display: flex; align-items: center; gap: 5px; font-size: 3px; padding: 0px;">
            <div class="id">${displayIndex++}</div>
            <strong>Da li ste imali seksualne odnose tokom proteklih 6 mjeseci:</strong>
          </div>
          <div class="sub-question">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div>a) ${q.questionSubA}</div>
              <div class="options" style="padding-right: 5px">>
                <span class="option ${answers[29] === 'DA' ? 'selected' : ''}">Da</span>
                <span class="option ${answers[29] === 'NE' ? 'selected' : ''}">Ne</span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div>b) ${q.questionSubB}</div>
              <div class="options" style="padding-right: 5px">>
                <span class="option ${answers[30] === 'DA' ? 'selected' : ''}">Da</span>
                <span class="option ${answers[30] === 'NE' ? 'selected' : ''}">Ne</span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div>c) ${q.questionSubC}</div>
              <div class="options" style="padding-right: 5px">>
                <span class="option ${answers[31] === 'DA' ? 'selected' : ''}">Da</span>
                <span class="option ${answers[31] === 'NE' ? 'selected' : ''}">Ne</span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div>d) ${q.questionSubD}</div>
              <div class="options"style="padding-right: 5px"> >
                <span class="option ${answers[32] === 'DA' ? 'selected' : ''}">Da</span>
                <span class="option ${answers[32] === 'NE' ? 'selected' : ''}">Ne</span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div>e) ${q.questionSubE}</div>
              <div class="options" style="padding-right: 5px">
                <span class="option ${answers[33] === 'DA' ? 'selected' : ''}">Da</span>
                <span class="option ${answers[33] === 'NE' ? 'selected' : ''}">Ne</span>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div>e) ${q.questionSubF}</div>
              <div class="options" style="padding-right: 5px">
                <span class="option ${answers[34] === 'DA' ? 'selected' : ''}">Da</span>
                <span class="option ${answers[34] === 'NE' ? 'selected' : ''}">Ne</span>
              </div>
            </div>
          </div>
        </div>
      `;
      }

      if (q.id === 35) {
        titleHTML = `<div class="questionHeader"><div style="margin-top: 4px; margin-bottom: 4px; font-weight: bold">ZA ŽENE</div></div>`;
      } else if (q.id === 38) {
        titleHTML = `
          <div class="questionHeader">
              <div style="margin-top: 4px; margin-bottom: 4px;font-weight: bold">SAGLASNOST DAVAOCA</div>
          </div>
          <div style="align-self: start; background-color: white; border: 0.5px solid gray; padding-left: 5px; padding-top: 2px; padding-bottom: 2px">
              Popunio/la sam upitnik o davanju krvi ili komponente krvi i izjavljujem sledeće
          </div>
        `;
      }

      return `
        ${titleHTML}
        <div class="question">
          <div style="display: flex; align-items: center; gap: 5px; font-size: 3px; padding: -5px;">
            <div class="id" style="margin: 0px; padding: 2px">${displayIndex++}</div>
            <div style="font-size: 10px;padding: 0px; margin: 0px">${q.question}</div>
          </div>
          <div class="options">
            <span class="option ${selected === 'DA' ? 'selected' : ''}">Da</span>
            <span class="option ${selected === 'NE' ? 'selected' : ''}">Ne</span>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body { font-family: Arial, sans-serif; font-size: 10px;  line-height: 1; }
          .container{ border: 0.5px solid gray; }
          h5 { color: darkred; text-align: center; margin:0; text-transform: uppercase; }
          .questionHeader { background-color: #cdb476; display: flex; justify-content: center; align-items: center; flex-direction: column; color: darkred; margin: 0px; padding-left: 2px; padding-right: 2px }
          .question { display: flex; justify-content: space-between; align-items: center; padding-right: 5px; border: 0.5px solid #ccc; }
          .questionWithSubQuestion { display: flex; flex-direction: column; }
          .sub-question{ padding-left: 30px; }
          .id { width: 8px; border-right: 0.5px solid #ccc; margin:0px; padding: 5px; }
          .question p { margin: 0; flex: 1; }
          .options { display: flex; gap: 10px; min-width: 30px; justify-content: end; align-items: end; }
          .option { font-weight: normal; color: #000; font-size: 5px; }
          .options .selected { font-weight: bold; color: darkred; }
          .selected { font-weight: bold; color: darkred; }
        
          .signature, .footer { display: flex; justify-content: space-between; align-items: center; border-top: 0.5px solid #000; }
          .footerNote{ display: flex; flex-direction: column; padding-left: 2px; padding-right: 2px; }
          .footer-note-item{ margin-bottom: 0px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="questionHeader">
              <h4 style="color: darkred; font-size: 19px; margin-bottom: 1px; margin-top:0px;font-weight: bold">Popunjava davalac</h4>
              <p style="font-size:14px; margin: 0 10px; color: darkred; text-align: start; font-style: italic">
                  Molimo Vas da pročitate upitnik i iskreno odgovorite na svako pitanje. Upitnik je važan zbog očuvanja Vašeg zdravlja i sigurnosti transfuzijskog liječenja bolesnika.
                  Vaši odgovori, kao i svi ostali podaci o Vama su potpuno povjerljivi (ljekarska tajna) i koristiće se samo za potrebe transfuziološke službe.
              </p>
          </div>

          ${questionsHTML}

          <div class="signature">
            <p style="color: darkred; padding-left: 5px ">HVALA ŠTO DAJE KRV</p>
            <p>Potpis davaoca: ___________________________</p>
          </div>

          <div class="footer">
            <div class="footerNote">
              <h6 style="margin: 5px; font-weight:bold">Napomena</h6>
              <div class="footer-note-item"><input type="checkbox" style="transform: scale(0.8); width: 12px; height: 10px;" /> Odustao/la</div>
              <div class="footer-note-item"><input type="checkbox" style="transform: scale(0.8); width: 12px; height: 10px;" /> Odobijanje davanja</div>
              <div class="footer-note-item"><input type="checkbox" style="transform: scale(0.8); width: 12px; height: 10px;" /> Saglasnost povučena</div>
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
