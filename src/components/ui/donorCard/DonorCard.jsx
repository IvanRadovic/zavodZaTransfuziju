export const DonorCardHTML = () => `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid black;
          padding: 10px;
          margin-bottom: 20px;
        }
        .header .title {
          font-size: 20px;
          font-weight: bold;
          color: darkred;
        }
        .section {
          border: 1px solid black;
          padding: 10px;
          margin-bottom: 20px;
        }
        .row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .label {
          flex: 1;
        }
        .value {
          border-bottom: 1px solid black;
          flex: 2;
        }
        .checkbox-group {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .checkbox-group input {
          margin-right: 5px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }
        table, th, td {
          border: 1px solid black;
        }
        th, td {
          padding: 5px;
          text-align: left;
        }
      </style>
    </head>
    <body>

      <div class="header">
        <div>
          <img src="LOGO_URL" alt="Logo" height="50">
        </div>
        <div class="title">KARTON DAVAOCA</div>
        <div>Datum: ____________</div>
      </div>

      <div class="section">
        <strong>Određivanje hemoglobina/hematokrita:</strong>
        <div class="row">
          <span class="label">Očitana vrijednost:</span> <span class="value"></span>
        </div>
      </div>

      <div class="section">
        <strong>Određivanje krvne grupe na pločici:</strong>
        <div class="checkbox-group">
          <label><input type="checkbox"> A</label>
          <label><input type="checkbox"> B</label>
          <label><input type="checkbox"> AB</label>
          <label><input type="checkbox"> 0</label>
        </div>
      </div>

      <div class="section">
        <strong>Ljekarski pregled:</strong>
        <div class="row"><span class="label">Pluća:</span> <span class="value"></span></div>
        <div class="row"><span class="label">Srce:</span> <span class="value"></span></div>
        <div class="row"><span class="label">TA:</span> <span class="value"></span></div>
        <div class="row"><span class="label">TM:</span> <span class="value"></span></div>
        <div class="row"><span class="label">TT:</span> <span class="value"></span></div>
        <div class="row"><span class="label">Puls:</span> <span class="value"></span></div>
        <div class="row"><span class="label">Tip kese:</span> <span class="value"></span></div>
        <div class="row"><span class="label">Predložena količina:</span> <span class="value"></span></div>
        <div class="row"><span class="label">Napomena:</span> <span class="value"></span></div>
      </div>

      <div class="section">
        <strong>Venepunkcija:</strong>
        <div class="checkbox-group">
          <label><input type="checkbox"> Lijeva ruka</label>
          <label><input type="checkbox"> Desna ruka</label>
        </div>
        <div class="row"><span class="label">Početak davanja:</span> <span class="value"></span></div>
        <div class="row"><span class="label">Završetak davanja:</span> <span class="value"></span></div>
        <div class="row"><span class="label">Razlog privremenog prekida davanja:</span> <span class="value"></span></div>
        <div class="row"><span class="label">Potpis tehničara:</span> <span class="value"></span></div>
      </div>

      <div class="section">
        <strong>Testiranje:</strong>
        <table>
          <tr><td>Broj krvne grupe:</td><td></td><td>Krvna grupa:</td><td></td></tr>
          <tr><td>Du/Dw:</td><td></td><td>RhD:</td><td></td></tr>
          <tr><td>Kell anti jen:</td><td></td><td>SCR:</td><td></td></tr>
          <tr><td>Rh Fenotip:</td><td></td><td></td><td></td></tr>
          <tr><td>Anti HIV 1/2:</td><td></td><td>HBsAg:</td><td></td></tr>
          <tr><td>Anti HCV:</td><td></td><td>TP-EIA:</td><td></td></tr>
          <tr><td>Potpis tehničara:</td><td></td><td>Potpis ljekara:</td><td></td></tr>
        </table>
      </div>

    </body>
  </html>
`;
