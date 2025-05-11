const logoBase64 = `data:image/png;base64,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`;
export const DonorCardHTML = () => `
    
<div class="container-donor-card">
    <div class="header">
        <div style="display: flex; align-items: center; flex-direction: column; margin-left:8px !important; margin-right: 8px; !important;">
            <img id="logo" src="${logoBase64}" alt="Logo" height="110" width="110" />
            <div style="display: flex; flex-direction: column; align-items: center;">
                <p style="margin:0; font-size: 13px; font-weight: bold; text-align: center"> Zavod za transfuziju <br/> krvi Crne Gore</p>
            </div>
        </div>
        <div class="title">KARTON DAVAOCA</div>
        <div style="align-self: end; margin-bottom: 8px">Datum: _____________________________________________</div>
    </div>
    
    <div>
    <div class="partOne">
        <div class="section">
            <div class="partOne_section__item">
                <strong>Određivanje hemoglobina/hematokrita:</strong>
                <div>
                    <span class="label">Očitana vrijednost:</span> <span class="">______________________________</span>
                </div>
            </div>
            <!--======================= KRVA GRUPA ===================-->
            <div class="partOne_section__item">
                <strong>Određivanje krvne grupe na pločici:</strong>
                <div class="letters-group">
                    <label class="letter" style="color: darkblue">A</label>
                    <label class="letter"  style="color: #D14641">B</label>
                    <label class="letter" style="color: darkgoldenrod">AB</label>
                    <label class="letter" style="color: black">0</label>
                </div>
                <div>
                    Potpis tehničara: <span style="width: 90%">_____________________________</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="section">
        <div style="display: flex;">
            <!--======================= LJEKARSKI PREGLED ===================-->
            <div style="display: flex; flex: 1; flex-direction: column;">
                <strong style="margin-bottom: 5px">Ljekarski pregled:</strong>
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
                        <span class="label">Napomena:____________________________________________</span>
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
                    <div class="row" style="width: 90%; overflow: hidden">
                        <span class="label">Razlog odbijanja:_____________________________________________________</span>
                    </div>
                    <div class="row" style="width: 90%; overflow: hidden">
                        <span class="label">Potpis ljekara:____________________________________________________</span>
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
                <span class="label">Razlog prije vremenog prekidanja davanja: ____________________________________________________________________</span>
            </div>
    
            <div style="display:flex;align-items:end;width: 0%; justify-content: end">
                <span>Potpis tehničara: ______________________________________</span>
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
                                <span class="label">Anti HIV 1/2:___________________</span>
                            </div>
                            <div class="row">
                                <span class="label"> ,HBsAG:_______</span>
                            </div>
                        </div>
                        <div style="display: flex;">
                            <div class="row">
                                <span class="label">Anti HCV:___________________</span>
                            </div>
                            <div class="row">
                                <span class="label"> ,TP-EIA:__________</span>
                            </div>
                        </div>
                    </div>
        
                    <div style="padding: 5px;">
                        <div class="row">
                            <span class="label">Potpis tehničara:__________________</span>
                        </div>
                        <div class="row">
                            <span class="label">Potpis ljekara:___________________________</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;
