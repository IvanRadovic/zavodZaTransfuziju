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
            <div style="display: flex; align-items: center; gap: 5px; font-size: 13px; padding: 0px;">
              <div class="id">${displayIndex++}</div>
              <strong style="font-size: 18px !important;">Da li ste u proteklih 12 mjeseci:</strong>
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
          <div style="display: flex; align-items: center; gap: 5px; font-size: 13px; padding: 0px;">
            <div class="id">${displayIndex++}</div>
            <strong style="font-size: 18px !important;">Oblici rizičnih stanja i ponašanja:</strong>
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
          <div style="display: flex; align-items: center; gap: 5px; font-size: 13px; padding: 0px;">
            <div class="id">${displayIndex++}</div>
            <strong style="font-size: 18px !important;">Da li ste imali seksualne odnose tokom proteklih 6 mjeseci:</strong>
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
        titleHTML = `<div class="questionHeader"><div style=" font-size:18px !important;margin-top: 4px; margin-bottom: 4px; font-weight: bold">ZA ŽENE</div></div>`;
      } else if (q.id === 38) {
        titleHTML = `
          <div class="questionHeader">
              <div style=" font-size:18px !important; margin-top: 4px; margin-bottom: 4px;font-weight: bold">SAGLASNOST DAVAOCA</div>
          </div>
          <div style="align-self: start; background-color: white; border: 0.5px solid gray; padding-left: 5px; padding-top: 2px; padding-bottom: 2px">
              Popunio/la sam upitnik o davanju krvi ili komponente krvi i izjavljujem sledeće
          </div>
        `;
      }

      return `
        ${titleHTML}
        <div class="question">
          <div style="display: flex; align-items: center; gap: 5px; font-size: 13px; padding: -5px;">
            <div class="id" style="margin: 0px; padding: 2px">${displayIndex++}</div>
            <div style="font-size: 18px !important;padding: 0px; margin: 0px">${q.question}</div>
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
        <div class="container">
          <div class="questionHeader">
              <h4 style="color: #d80c0c; font-size: 22px; margin-bottom: 1px; margin-top:0px;font-weight: bold">POPUNJAVA DAVALAC</h4>
              <p style="font-size:19px !important; margin: 0 10px; color: #d80c0c; text-align: start; font-style: italic">
                  Molimo Vas da pročitate upitnik i iskreno odgovorite na svako pitanje. Upitnik je važan zbog očuvanja Vašeg zdravlja i sigurnosti transfuzijskog liječenja bolesnika.
                  Vaši odgovori, kao i svi ostali podaci o Vama su potpuno povjerljivi (ljekarska tajna) i koristiće se samo za potrebe transfuziološke službe.
              </p>
          </div>

          ${questionsHTML}

          <div class="signature">
            <p style="color: #d80c0c; padding-left: 5px ">HVALA ŠTO DAJETE KRV</p>
            <p>Potpis davaoca: _______________________________________</p>
          </div>

          <div class="footer">
            <div class="footerNote">
              <h6 style="margin: 5px; font-size: 16px !important; font-weight:bold">Napomena</h6>
              <div class="footer-note-item"><input type="checkbox" style="transform: scale(0.8); width: 12px; height: 10px;" /> Odustao/la</div>
              <div class="footer-note-item"><input type="checkbox" style="transform: scale(0.8); width: 12px; height: 10px;" /> Odobijanje davanja</div>
              <div class="footer-note-item"><input type="checkbox" style="transform: scale(0.8); width: 12px; height: 10px;" /> Saglasnost povučena</div>
            </div>
            <div style="display: flex; align-items: end;">
              <p>Potpis davaoca: _______________________________________</p>
            </div>
          </div>
        </div>
  `;
};

export default QuestionnaireHTML;
