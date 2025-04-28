import logo from '../../../../assets/logo1.png';
export const DonorCardHTML = () => `
  <html>
    <head>
        <script>
      document.addEventListener("DOMContentLoaded", () => {
        const logoPath = '../../../../assets/logo1.png';
        document.getElementById('logo').src = logoPath;
      });
    </script>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 5px;
          display: flex;
          flex-direction: column;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid black;
          padding: 10px;
          margin-bottom: 100px;
        }
        .header .title {
          font-size: 20px;
          font-weight: bold;
          color: darkred;
        }
        
        .partOne {
            display: flex;
            flex-direction: row; 
            align-items: center; 
            gap: 10px;
        }
        .partOne .section {
            display: flex;
            flex: 1;
            flex-direction: row; 
            align-items: center; 
            gap: 10px;
        }
        .partOne_section__item{
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: start;
            justify-content: start;
            gap: 5px;
        }
        
        .letters-group{
            display:flex;
            flex:1;
            justify-content: space-between;
            align-items: center;
            gap: 50px;
        }
        
        .letter {
            font-size: 16px;
            font-weight: bold;
        }
       
        .section {
          border: 1px solid black;
          padding: 5px;
        }
        .row {
          display: flex;
          align-items: center;
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
        <img id="logo" src="placeholder.png" alt="Logo" height="50">
    </div>
    <div class="title">KARTON DAVAOCA</div>
    <div>Datum: ____________</div>
</div>

<div>
<div class="partOne">
    <div class="section">
        <div class="partOne_section__item">
            <strong>Određivanje hemoglobina/hematokrita:</strong>
            <div>
                <span class="label">Očitana vrijednost:</span> <span class="">________________________________________________</span>
            </div>
        </div>
        <!--======================= KRVA GRUPA ===================-->
        <div class="partOne_section__item">
            <strong>Određivanje krvne grupe na pločici:</strong>
            <div class="letters-group">
                <label class="letter" style="color: darkblue">A</label>
                <label class="letter"  style="color: darkred">B</label>
                <label class="letter" style="color: darkgoldenrod">AB</label>
                <label class="letter" style="color: black">0</label>
            </div>
            <div>
                Potpis tehničara: <span style="width: 100%">_______________________________________________________</span>
            </div>
        </div>
    </div>
</div>

<div class="section">
    <div style="display: flex;">
        <!--======================= LJEKARSKI PREGLED ===================-->
        <div style="display: flex; flex: 1; flex-direction: column;">
            <strong style="margin-bottom: 10px">Ljekarski pregled:</strong>
            <div style="display: flex;">
                <div class="row">
                    <span class="label">Pluća:________________</span>
                </div>
                <div class="row">
                    <span class="label"> ,Srce:________________</span>
                </div>
                <div class="row">
                    <span class="label"> ,TA:________/________</span>
                </div>
            </div>

            <div style="display: flex;">
                <div class="row">
                    <span class="label"> TM:________________</span>
                </div>
                <div class="row">
                    <span class="label"> ,TT:________________</span>
                </div>
                <div class="row">
                    <span class="label"> ,Puls:________________</span>
                </div>
            </div>

            <div>
                <div class="row">
                    <span class="label">Tip kese:____________________________________________</span>
                </div>
                <div class="row">
                    <span class="label">Predložena količina:_________________________________</span>
                </div>
                <div class="row">
                    <span class="label">Napomena:___________________________________________________________________________</span>
                </div>
            </div>
        </div>

        <!--======================= BARD KOD DONACIJE ===================-->
        <div style="display: flex; flex-direction: column; flex: 1;">
            <span style="margin-bottom: 10px">Bar-kod donacije:</span>
            <div style="display: flex;justify-content:space-between;flex-direction:column;flex:1; gap: 10px;">
                <div style="display: flex; margin-top: 20px; align-items:center;gap: 100px;" >
                    <span>Podesan:</span>
                    <div style="display: flex; gap: 30px">
                        <strong>Da</strong>
                        <strong>Ne</strong>
                    </div>
                </div>
                <div class="row" style="width: 100%; overflow: hidden">
                    <span class="label">Razlog odbijanja:_____________________________________________________________________________</span>
                </div>
                <div class="row" style="width: 100%; overflow: hidden">
                    <span class="label">Potpis ljekara:_______________________________________________________________________</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>



<!--======================= VENEPUNKCIJA ===================-->
<div class="section">
    <strong>Venepunkcija:</strong>
    <div style="display: flex; flex:1; align-items: start; flex-direction: column; gap: 10px;">
        <div style="display: flex; width: 100%; align-items: center">
            <div style="display: flex; flex:1; align-items: center; gap: 10px;">
                <div>
                    Mjesto punkcije:
                </div>
                <div class="checkbox-group">
                    <strong style="display:flex; align-items: center; justify-content: center"><input type="checkbox" style="transform: scale(0.8); width: 12px; height: 12px;"> Lijeva ruka</strong>
                    <strong style="display:flex; align-items: center; justify-content: center"><input type="checkbox" style="transform: scale(0.8); width: 12px; height: 12px;"> Desna ruka</strong>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; flex:1; align-items: start; gap: 25px;">
                <div>
                    <span class="label">Broj LOT-a kese: ______________________________________________ </span>
                </div>
                <div>
                    <span class="label">Količina uzete krvi: ______________________________________________ </span>
                </div>
            </div>
        </div>
        <div>
            <span class="label">Početak davanja: ________________________h ______________________ min</span>
        </div>
        <div>
            <span class="label">Završetak davanja: ________________________h ______________________ min</span>
        </div>
        <div>
            <span class="label">Razlog prije vremenog prekidanja davanja: ______________________________________________________________________________________________________________________________________________________________</span>
        </div>

        <div style="display:flex;align-items:end;width: 100%; justify-content: end">
            <span>Potpis tehničara: ____________________________________________________________________________________________ </span>
        </div>
    </div>
</div>




 <div style="margin-top: 20px">
        <strong style="margin-top: 10px;">Testiranje:</strong>
    </div>
    <div class="section" style="padding:0px">
        <div style="display: flex; ">
            <!--======================= LJEKARSKI PREGLED ===================-->
            <div style="display: flex; flex: 1; flex-direction: column; padding: 5px;">
                <div style="display: flex;">
                    <div class="row">
                        <span class="label">Broj krvne grupa:________________</span>
                    </div>
                    <div class="row">
                        <span class="label"> ,Krvna grupa:________________</span>
                    </div>
                </div>
    
                <div style="display: flex;">
                    <div class="row">
                        <span class="label"> Du/Dw:________________</span>
                    </div>
                    <div class="row">
                        <span class="label"> ,RhD:________________</span>
                    </div>
                </div>
    
                <div style="display: flex">
                    <div class="row">
                        <span class="label"> Kell antigen:________________</span>
                    </div>
                    <div class="row">
                        <span class="label">SCR:_________________________________</span>
                    </div>
                </div>
    
                <div>
                    <div class="row">
                        <span class="label">Rh Fenotip:____________________________________________</span>
                    </div>
                    <div class="row">
                        <span class="label">Potpis tehničara:_________________________________</span>
                    </div>
                    <div class="row">
                        <span class="label">Potpis ljekara:___________________________________________________________________________</span>
                    </div>
                </div>
            </div>
    
            <!--======================= TESTIRANJE ===================-->
            <div style="display: flex; flex-direction: column; justify-content:space-between;flex: 1; border-left:1px solid gray;">
                <div style="padding: 5px;">
                    <div style="display: flex;">
                        <div class="row">
                            <span class="label">Anti HIV 1/2:_____________________________</span>
                        </div>
                        <div class="row">
                            <span class="label"> ,HBsAG:_____________________________</span>
                        </div>
                    </div>
                    <div style="display: flex;">
                        <div class="row">
                            <span class="label">Anti HCV:_____________________________</span>
                        </div>
                        <div class="row">
                            <span class="label"> ,TP-EIA:_____________________________</span>
                        </div>
                    </div>
                </div>
    
                <div style="padding: 5px;">
                    <div class="row">
                        <span class="label">Potpis tehničara:________________________________________________________</span>
                    </div>
                    <div class="row">
                        <span class="label">Potpis ljekara:___________________________________________________________________________</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
    
  </html>
`;
