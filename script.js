/*tomamos el contenedor 'product-form' que almacena el input y el boton para posteriormente asignar un evento de escucha
al presionar el boton con el id submit y declaro la funcion event para manipular el comportamiento y evitar que la pagina
se recargue al enviar el formulario usando .preventDefault()*/
document.getElementById('product-form').addEventListener('submit', function(event) {
        event.preventDefault();

    /* Convertir el código del producto a una sola palabra eliminando los espacios del inicio y el final del 
    valor con value.trim() y con .toUpperCase los datos tomados se conviertan en mayúsculas*/
    const productCode = document.getElementById('product-code').value.trim().toUpperCase();
    const locationResult = document.getElementById('location-result');

    /* Datos de referencias y ubicaciones, para esto usamos un diccionario que recibe 2 parametros (clave y valor)
    */
    const productLocations = {
        'C26301': 'A1A Cajax1400 Paqx200', 'C27955': 'A1A , Cajax1200 Paqx100', 'C28731': 'A1A', 'C37508': 'A1A Paqx100', 'C74451': 'A1A Paqx200', 
        'D21547': 'A1A Cajax3000 Paqx200', 'NTJ370': 'A1A', 'NTJ637': 'A1A', 'C49808': 'A1A', 'A14047': 'A1B', 
        'C26299': 'A1B', 'C28594': 'A1B', 'A14537': 'A1B', 'C27948': 'A1B', 
        'C63356': 'A1B Cajax4000 Paqx200', 'C68592': 'A1B', 'C68593': 'A1B', 'C69455': 'A1B Paqx200', 
        'C74013': 'A1B Cajax2000 Paqx200', 'D15658': 'A1B Cajax1600 Paqx200', 'D27480': 'A1B', 'Z00572': 'A1B', 'Z00573': 'A1B', 
        'D27481': 'A1B', 'T00689': 'A1C', 'T01392': 'A1C', 'T01479': 'A1C', 'T01642': 'A1C', 
        'A05079': 'A2A', 'C26309': 'A2A', 'D00907': 'A2A', 
        'D00914': 'A2A Cajax2300 Paqx100', 'D00918': 'A2A Cajax1800 Paqx100', 'D35440': 'A2A Cajax2400 Paqx200', 'D35442': 'A2A Cajax1600 Paqx200', 'A01746 Cajax2000 Paqx100': 'A2A , Paqx100unds','C31224': 'A2A Paqx200', 'C27939': 'A2B', 
        'a01746': 'A2A' , 'C68592CV': 'A2B', 'C68593CV': 'A2B','000328': 'A2B', '000350': 'A2B', 'A03143': 'A2B Cajax1600 Paqx100', 'A06503': 'A2B', 'A12930': 'A2B', 'D21539': 'A2B', 
        'C26307': 'A2B', 'A10235': 'A2B Cajax1600 Paqx100', 'D00919': 'A2B Cajax2400', 'C27937': 'A2B , Paqx100unds', '000586': 'A2C', 
        '000625': 'A2C', 'T00378': 'A2C', 'A01746CV': 'A3A Cajax1500 Paqx100', 'A01746CVP': 'A3A', 'A03143CV': 'A3A Cajax1500 Paqx100', 
        'A03144CV': 'A3A Paqx50', 'A05079CV': 'A3A', 'A07175CV': 'A3A', 'A10235CV': 'A3A Cajax1500 Paqx100', 'A10235CVP': 'A3A', 
        'C27939CVP': 'A3A', 'D00907CV': 'A3A', 'D28476': 'A3A Cajax1400 Paqx100', 'D29128': 'A3A Caja1400 Paqx100', 'D29129': 'A3A Cajax1400 Paqx100', 
        'D29130': 'A3A Cajax1400 Paqx100', 'D29131': 'A3A Cajax1400 Paqx100', 'NTV345': 'A3A Cajax3000 Paqx200', 'A03144': 'A3A',  'C49808CV': 'A3A', 'T00658': 'A3B', 'T00709': 'A3B', 
        'T01528': 'A3B', 'A00760': 'A4A Cajax24kg Paqx1kg', 'A12224': 'A4A Paqx200', 'C27937CV': 'A4A', 'C27955CV': 'A4A', 
        'A06503CV': 'A4A Cajax1000 Paqx50', 'A12301': 'A4A Paqx200', 'C27937CVP': 'A4A', 'C27939CV': 'A4A', 'C27948CV': 'A4A', 
        'C37508CV': 'A4A', 'D00914CV': 'A4A', 'D00918CV': 'A4A', 
        'D00919CV': 'A4A', 'NTC456': 'A4A', 'NTX881': 'A4A Cajax24kg Paqx1kg', 'T01774': 'A4A', 'T03527': 'A4A', 
        'T04377': 'A4A', 'D13591': 'A4B Cajax2000 Paqx200', 'D13602': 'A4B Cajax1000 Paqx200', 'D13607': 'A4B', 'T00641': 'A4B', 
        'T01534': 'A4B', 'T05697': 'A4B', 'T05698': 'A4B', 'NTH961': 'A5A', 
        'NTH965': 'A5A', 'NTJ208': 'A5A', 'NTJ499': 'A5A Cajax2800 Paqx200', 'NTJ500': 'A5A Cajax1800 Paqx200', 'NTO711': 'A5A', 
        'A11870': 'A5B', 'C15443': 'A5B', 'D21087': 'A5B Paqx200', 'NT/443': 'A5B , Cajax2800 Paqx200', 'NTC752': 'A5B', 
        'NTM183': 'A5B , Cajax700unds, Paqx100unds', 'NTO083': 'A5B', 'A05272': 'A5B Cajax7000 Paqx200', 'C12490': 'A5C', 
        'D13594': 'A5C , Cajax1600 Paqx200', 'D14157': 'A5C, Cajax2000 Paqx200', 'D13592': 'A4B , Cajax1000 Paqx200' , 'A05043': 'A6A , Caja800 Paqx200', 'A09025RL': 'A6A', 'A09026RL': 'A6A', 
        'A09027RL': 'A6A', 'B00278RL': 'A6A', 'C15392': 'A6A', 'NTJ498': 'A6A Cajax4600 Paqx200', 
        'C69675': 'A6A Cajax1800 Paqx200', 'C68704': 'A6B, Cajax1800 Paqx200', 'A15625RL': 'A6B',  'Z00116': 'A6B , Cajax288x6Cadisx48', 'Z00150': 'A6B , Cajax210x6cadisx35', 
        'C60447': 'A6C', 'C60451': 'A6C', 'T01049': 'A6C, Cajax1200 Paqx100', 'A08017RL': 'A7A', 'A11814RL': 'A7A', 
        'C68702': 'A7A , Cajax3000 Paqx200','C54853': 'A7A, Cajax2200 Paqx200', 'C75491': 'A7B Cajax3400 Paqx200', 'NTC791': 'A7B Cajax2600 Paqx200', 'NTX322RL': 'A7B', 
        'Z00646': 'A7B', 'Z00649 Paqx100': 'A7B', 'Z00663': 'A7B', 'A03883RL': 'A7C', 'D16177': 'A7C Cajax2000 Paqx200','Z00649':'A7C', 'T00659': 'A7D', 'T00662': 'A7D', 
        'T01636': 'A7D', 'T00327': 'B1A, Cajax800 Paqx100', 'T00676': 'B1B Cajax800 Paqx100', 'T01044': 'B2B', 'NTC381': 'B3A', 
        'NTC445': 'B3A', 'NTH509': 'B3A', 'T00017': 'B3B', 'NTH962CV': 'B4A', 'T01043': 'B4A', 
        'NTS220': 'B4A', 'T01190': 'B4B Cajax500 Paqx100', 'NTC147': 'B5A', 'NTC149': 'B5A', 'NTC382': 'B5A', 
        'NTD005': 'B5A', 'NTJ399': 'B5A', 'T00072': 'B5B', 'T01194': 'B5B', 
        'NTA530': 'B6A', 'NTC390': 'B6A', 'NTC171': 'B6A','T00377': 'B6B', 'T00697': 'B6B', 'NTA942': 'B7A', 
        'NTC187': 'B7A', 'NTC311': 'B7A', 'NTK823': 'B7A', 'A07175': 'B7A', 'T01050': 'B7B, Cajax800 Paqx100', 
        'T01233': 'B7B', 'T01235': 'B7B', 'T01236': 'B7B', 'C75472': 'B8A', 'A07537': 'B8A', 
        'NTC251': 'B8A', 'NTO497': 'B8A', 'NTU871': 'B8A', 'T00523': 'B8A', 
        'T00525': 'B8A', 'Z00269': 'B8A', 'Z00002RL': 'B8B', 'NTD761': 'B8B', 'Z00006RL': 'B8B', 'Z00294': 'B8B', 
        'Z00589': 'B8B', 'T01090': 'B8C', 'NTC359': 'C1A', 'A04511': 'C1A', 'D32685': 'C1B', 'T01266': 'C1B', 
        'T01293': 'C1B', 'C27580': 'C2A', 'C44079': 'C2A', 'NTC406': 'C2A', 'NTK693': 'C2A', 'A09955': 'C2A', 
        'T00674': 'C2B', 'T00749': 'C2B , Cajax1800 Paqx100', 'A04664': 'C3A', 'C02199': 'C3A', 'C39140': 'C3A', 
        'C51802': 'C3A', 'D13865': 'C3A', 'NTH963': 'C3A , Cajax3000 Paqx200', 'NTH964': 'C3A', 'NTJ050': 'C3A', 
        'T00824': 'C3B', 'D09808': 'C3B', 'NTH962': 'C4A', 'NTN890': 'C4A', 'NTO712': 'C4A', 
        'A00900': 'C4A', 'A01219': 'C4A Cajax2000 Paqx100', 'NTJ051': 'C4A', 'NTJ492': 'C4A', 'NTJ496': 'C4A', 
        'NTO712': 'C4A', 'A14905': 'C4A , Paqx50', 'T00366': 'C4B , Cajax600 Paqx100', 'A00983': 'C5A', 'NT/058': 'C5A', 'T01429': 'C5A', 
        'NTP989': 'C5A Cajax250 Paqx25', 'T00026': 'C5B', 'T01721': 'C5B', 'A01972': 'C6A', 'A03519': 'C6A', 'A10824': 'C6A', 
        'NTJ494': 'C6A', 'NTJ868': 'C6A',  'NTS221': 'C6A', 'C68701': 'C6A , Paqx200unds', 'T00137': 'C6B', 
        'T01427': 'C6B', 'T01218': 'C6B', 'T01216': 'C6B','T01467':'C6B' , 'NTM283': 'C7A', 'TZ00559': 'C7B', 
        'TZ00560': 'C7B', 'TZ00561': 'C7B', 'TZ00562': 'C7B', 'TZ00563': 'C7B', 'TZ00564': 'C7B', 
        'TZ00566': 'C7B', 'TZ00567': 'C7B', 'TZ00572': 'C7B 100undx0.13kg', 'A00789': 'C8A', 'A00853': 'C8A', 
        'A01831': 'C8A', 'A01832': 'C8A', 'A01833': 'C8A', 'A01919': 'C8A', 'NTQ814': 'C8A','A01873': 'C8A , Cajax1600 Paqx200', 
        'T00531': 'C8B', 'T00665': 'C8B', 'T00865': 'C8B', 'TZ00565': 'C8B Cajax300 Paqx50', 'TZ00568': 'C8B CAjax300 Paqx50', 
        'TZ00570': 'C8B Cajax800 Paqx50', 'A01078': 'C9A', 'Z00334': 'C9A', 'Z00590': 'C9A', 'NTJ493': 'C9B', 
        'Z00504': 'C9B', 'TZ00546': 'C9C', 'TZ00552': 'C9C', 'TZ00553': 'C9C', 'TZ00555': 'C9C', 
        'TZ00557': 'C9C', '700307': 'BOLSA PEQUEÑA PARA EMPACAR',
         '700305': 'PISO', 'C17290': 'PISO', 'C50287KG': 'PISO', 'C55715': 'PISO', 
        'C64853': 'PISO', 'C82191': 'PISO', 'C99276': 'PISO',  'D35006': 'PISO', 
        'D35913': 'PISO', 'MUZ00030': 'PISO', 'Z00039': 'PISO TRIPA CERDO CALIBRADA 26-28', 'Z00100': 'PISO', 
        'Z00115': 'PISO', 'Z00149': 'PISO', 'Z00336': 'PISO', 'Z00626': 'PISO , Caja x288unds', 'Z00645': 'PISO', 
        'Z00702': 'PISO , Cajax210unds'
    };

    /* Verificar si el código del producto existe en el diccionario, asi que en la verificacion mira si el dato ingresado
    en el input por el usuario existe dentro del diccionario , en este caso la validacion la hace con la clave del diccionario*/
    if (productCode in productLocations) {
        /*si se cumple esto a la caja locationResult se asigno un texto donde diga la ubicacion usando 
        productLocations[productCode] con esto accedo al diccionario, de paso la clave y me devuelve el valor de esa clave*/
        locationResult.textContent = `La ubicación del producto es ${productLocations[productCode]}.`;
    } else {
        //de no cumplirse me mostrara un mensaje de que no esta
        locationResult.textContent = 'Referencia no encontrada.';
    }
});
