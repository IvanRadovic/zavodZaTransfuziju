const QuestionnaireHTML = ({ allQuestions, answers }) => {
  let displayIndex = 1;

  const questionsHTML = allQuestions
    .map((q) => {
      const selected = answers[q.id];
      let titleHTML = '';

      if ([20, 22, 23].includes(q.id)) {
        return `
            <div class="questionWithSubQuestion">
              <div style="display: flex; align-items: center; gap: 5px; font-size: 9px; padding: 0px;">
                <div class="id">${displayIndex++}</div>
                <strong style="font-size: 12px !important;">${q.question}${q.id === 23 ? ':' : ''}</strong>
              </div>
              <div class="sub-question">
                ${q.subQuestions
                  .map(
                    (subQ) => `
                      <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-left: 5px">
                        <div>${subQ.label} ${subQ.text}</div>
                        <div class="options" style="padding-right: 5px">
                          <span class="option ${answers[subQ.id] === 'DA' ? 'selected' : ''}">Da</span>
                          <span class="option ${answers[subQ.id] === 'NE' ? 'selected' : ''}">Ne</span>
                        </div>
                      </div>
                    `
                  )
                  .join('')}
              </div>
            </div>
        `;
      }

      if (q.id === 24) {
        titleHTML = `
            <div class="questionHeader">
                <div style="text-align: center;font-size:13px !important;margin-top: 4px; margin-bottom: 4px; font-weight: bolder;">
                    ZA ŽENE
                </div>
            </div>
        `;
      } else if (q.id === 27) {
        titleHTML = `
          <div class="questionHeader">
              <div style="text-align: center; font-size:13px !important; margin-top: 4px; margin-bottom: 4px;font-weight: bolder">SAGLASNOST DAVAOCA</div>
          </div>
          <div style="align-self: start; background-color: white; border-top: 0.5px solid gray !important;border-bottom: 0.5px solid gray !important;border-right: 0.5px solid gray !important; padding-left: 5px; padding-top: 2px; padding-bottom: 2px">
              Popunio/la sam upitnik o davanju krvi ili komponente krvi i izjavljujem sledeće
          </div>
        `;
      }

      return `
        ${titleHTML}
        <div class="question">
          <div style="display: flex; align-items: center; gap: 5px; font-size: 9px; padding: -5px;">
            ${q.id < 27 ? `<div class="id" style="margin: 0px; padding: 2px">${displayIndex++}</div>` : ''}
            <div style="font-size: 12px !important;padding: 1px 0px; margin: 0px">${q.question}</div>
          </div>
          <div class="options" style="margin-left: 5px">
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
              <h4 style="color: #d80c0c; text-align: center; font-size: 15px; margin-bottom: 0px; margin-top:0px;font-weight: bolder">POPUNJAVA DAVALAC</h4>
              <p style="font-size:13px !important; margin: 0 10px; color: #d80c0c; text-align: start; font-style: italic; padding-left: 2px">
                  Molimo Vas da pročitate upitnik i iskreno odgovorite na svako pitanje. Upitnik je važan zbog očuvanja Vašeg zdravlja i sigurnosti transfuzijskog liječenja bolesnika.
                  Vaši odgovori, kao i svi ostali podaci o Vama su potpuno povjerljivi (ljekarska tajna) i koristiće se samo za potrebe transfuziološke službe.
              </p>
          </div>

          ${questionsHTML}

          <div class="signature">
            <p style="color: #d80c0c; padding-left: 5px; font-weight: bolder ">HVALA ŠTO DAJETE KRV</p>
            <p>Potpis davaoca: _______________________________________</p>
          </div>

          <div class="footer">
            <div class="footerNote">
              <h6 style="margin: 5px; font-size: 13px !important; font-weight:bold">Napomena</h6>
              <div class="footer-note-item"><input type="checkbox" style="transform: scale(0.8); width: 11px; height: 10px;" /> Odustao/la</div>
              <div class="footer-note-item"><input type="checkbox" style="transform: scale(0.8); width: 11px; height: 10px;" /> Odobijanje davanja</div>
              <div class="footer-note-item"><input type="checkbox" style="transform: scale(0.8); width: 11px; height: 10px;" /> Saglasnost povučena</div>
            </div>
            <div style="display: flex; align-items: end;">
              <p>Potpis davaoca: _______________________________________</p>
            </div>
          </div>
        </div>
  `;
};

export default QuestionnaireHTML;
