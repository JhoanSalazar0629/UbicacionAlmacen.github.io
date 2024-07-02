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
        'C26301': 'A1A', 'C27955': 'A1A', 'C28731': 'A1A', 'C37508': 'A1A', 'C74451': 'A1A', 
        'D21547': 'A1A', 'NTJ370': 'A1A', 'NTJ637': 'A1A', 'A01746': 'A1B', 'A14047': 'A1B', 
        'C26299': 'A1B', 'C28594': 'A1B', 'C49808': 'A1B', 'A14537': 'A1B', 'C27948': 'A1B', 
        'C49808': 'A1B', 'C63356': 'A1B', 'C68592': 'A1B', 'C68593': 'A1B', 'C69455': 'A1B', 
        'C74013': 'A1B', 'D15658': 'A1B', 'D27480': 'A1B', 'Z00572': 'A1B', 'Z00573': 'A1B', 
        'D27481': 'A1B', 'T00689': 'A1C', 'T01392': 'A1C', 'T01479': 'A1C', 'T01642': 'A1C', 'A03144': 'A2A', 
        'A05079': 'A2A', 'C26309': 'A2A', 'C68592CV': 'A2A', 'C68593CV': 'A2A', 'D00907': 'A2A', 
        'D00914': 'A2A', 'D00918': 'A2A', 'D35440': 'A2A', 'D35442': 'A2A', 'C27939': 'A2B', 
        '000328': 'A2B', '000350': 'A2B', 'A03143': 'A2B', 'A06503': 'A2B', 'A12930': 'A2B', 
        'C26307': 'A2B', 'C27937': 'A2B', 'A10235': 'A2B', 'D00919': 'A2B', '000586': 'A2C', 
        '000625': 'A2C', 'T00378': 'A2C', 'A01746CV': 'A3A', 'A01746CVP': 'A3A', 'A03143CV': 'A3A', 
        'A03144CV': 'A3A', 'A05079CV': 'A3A', 'A07175CV': 'A3A', 'A10235CV': 'A3A', 'A10235CVP': 'A3A', 
        'C27939CVP': 'A3A', 'D00907CV': 'A3A', 'D28476': 'A3A', 'D29128': 'A3A', 'D29129': 'A3A', 
        'D29130': 'A3A', 'D29131': 'A3A', 'NTV345': 'A3A', 'T00658': 'A3B', 'T00709': 'A3B', 
        'T01528': 'A3B', 'A00760': 'A4A', 'A12224': 'A4A', 'C27937CV': 'A4A', 'C27955CV': 'A4A', 
        'A06503CV': 'A4A', 'A12301': 'A4A', 'C27937CVP': 'A4A', 'C27939CV': 'A4A', 'C27948CV': 'A4A', 
        'C27955CV': 'A4A', 'C37508CV': 'A4A', 'C49808CV': 'A4A', 'D00914CV': 'A4A', 'D00918CV': 'A4A', 
        'D00919CV': 'A4A', 'NTC456': 'A4A', 'NTX881': 'A4A', 'T01774': 'A4A', 'T03527': 'A4A', 
        'T04377': 'A4A', 'D13591': 'A4B', 'D13602': 'A4B', 'D13607': 'A4B', 'T00641': 'A4B', 
        'T01534': 'A4B', 'T05697': 'A4B', 'T05698': 'A4B', 'NTH961': 'A5A', 
        'NTH965': 'A5A', 'NTJ208': 'A5A', 'NTJ499': 'A5A', 'NTJ500': 'A5A', 'NT0711': 'A5A', 
        'A11870': 'A5B', 'C15443': 'A5B', 'D21087': 'A5B', 'NT/443': 'A5B', 'NTC752': 'A5B', 
        'NTM183': 'A5B', 'NTO083': 'A5B', 'A05272': 'A5B', 'A14905': 'A5C', 'C12490': 'A5C', 'D13592': 'A5C', 
        'D13594': 'A5C', 'D14157': 'A5C', 'A05043': 'A6A', 'A09025RL': 'A6A', 'A09026RL': 'A6A', 
        'A09027RL': 'A6A', 'B00278RL': 'A6A', 'C15392': 'A6A', 'C68704': 'A6A', 'NTJ498': 'A6A', 
        'C69675': 'A6A', 'A15625RL': 'A6B',  'Z00116': 'A6B', 'Z00150': 'A6B', 
        'C60447': 'A6C', 'C60451': 'A6C', 'T01049': 'A6C', 'A08017RL': 'A7A', 'A11814RL': 'A7A', 
        'C68701': 'A7A', 'C68702': 'A7A','C54853': 'A7A', 'C75491': 'A7B', 'NTC791': 'A7B', 'NTX322RL': 'A7B', 
        'Z00646': 'A7B', 'Z00649': 'A7B', 'A03883RL': 'A7C', 'T00659': 'A7D', 'T00662': 'A7D', 
        'T01636': 'A7D', 'T00327': 'B1A', 'T00676': 'B1B', 'T01044': 'B2B', 'NTC381': 'B3A', 
        'NTC445': 'B3A', 'NTH509': 'B3A', 'T00017': 'B3B', 'NTH962CV': 'B4A', 'T01043': 'B4A', 
        'NTS220': 'B4A', 'T01190': 'B4B', 'NTC147': 'B5A', 'NTC149': 'B5A', 'NTC382': 'B5A', 
        'NTD005': 'B5A', 'NTJ399': 'B5A', 'T00072': 'B5B', 'T01194': 'B5B', 'A07175': 'B6A', 
        'NTA530': 'B6A', 'NTC390': 'B6A', 'NTC171': 'B6A','T00377': 'B6B', 'T00697': 'B6B', 'NTA942': 'B7A', 
        'NTC187': 'B7A', 'NTC311': 'B7A', 'NTK823': 'B7A', 'T01050': 'B7B', 
        'T01233': 'B7B', 'T01235': 'B7B', 'T01236': 'B7B', 'C75472': 'B8A', 'A07537': 'B8A', 
        'NTC251': 'B8A', 'NTD761': 'B8A', 'NTO497': 'B8A', 'NTU871': 'B8A', 'T00523': 'B8A', 
        'T00525': 'B8A', 'Z00269': 'B8A', 'Z00002RL': 'B8B', 'Z00006RL': 'B8B', 'Z00294': 'B8B', 
        'Z00589': 'B8B', 'T01090': 'B8C', 'NTC359': 'C1A', 'D32685': 'C1B', 'T01266': 'C1B', 
        'T01293': 'C1B', 'C27580': 'C2A', 'C44079': 'C2A', 'NTC406': 'C2A', 'NTK693': 'C2A', 
        'T00674': 'C2B', 'T00749': 'C2B', 'A04664': 'C3A', 'C02199': 'C3A', 'C39140': 'C3A', 
        'C51802': 'C3A', 'D13865': 'C3A', 'NTH963': 'C3A', 'NTH964': 'C3A', 'NTJ050': 'C3A', 
        'D16177': 'C3B', 'T00824': 'C3B', 'NTH962': 'C4A', 'NTN890': 'C4A', 'NTO712': 'C4A', 
        'A00900': 'C4A', 'A01219': 'C4A', 'NTJ051': 'C4A', 'NTJ492': 'C4A', 'NTJ496': 'C4A', 
        'NTO712': 'C4A', 'T00366': 'C4B', 'A00983': 'C5A', 'NT/058': 'C5A', 'T01429': 'C5A', 
        'NTP989': 'C5A', 'T00026': 'C5B', 'T01721': 'C5B', 'A01972': 'C6A', 'A03519': 'C6A', 'A10824': 'C6A', 
        'NTJ494': 'C6A', 'NTJ868': 'C6A',  'NTS221': 'C6A', 'T00137': 'C6B', 
        'T01427': 'C6B', 'NTM283': 'C7A', 'T01216': 'C7B', 'T01218': 'C7B', 'TZ00559': 'C7B', 
        'TZ00560': 'C7B', 'TZ00561': 'C7B', 'TZ00562': 'C7B', 'TZ00563': 'C7B', 'TZ00564': 'C7B', 
        'TZ00566': 'C7B', 'TZ00567': 'C7B', 'TZ00572': 'C7B', 'A00789': 'C8A', 'A00853': 'C8A', 
        'A01831': 'C8A', 'A01832': 'C8A', 'A01833': 'C8A', 'A01919': 'C8A', 'NTQ814': 'C8A', 
        'T00531': 'C8B', 'T00665': 'C8B', 'T00865': 'C8B', 'TZ00565': 'C8B', 'TZ00568': 'C8B', 
        'TZ00570': 'C8B', 'A01078': 'C9A', 'Z00334': 'C9A', 'Z00590': 'C9A', 'NTJ493': 'C9B', 
        'Z00504': 'C9B', 'TZ00546': 'C9C', 'TZ00552': 'C9C', 'TZ00553': 'C9C', 'TZ00555': 'C9C', 
        'TZ00557': 'C9C', 'D09808': 'GENERAL', 'T01050': 'GENERAL', '700307': 'BOLSA PEQUEÑA PARA EMPACAR',
        'A04511': 'PISO', 'A09955': 'PISO', '700305': 'PISO', 'C17290': 'PISO', 'C50287KG': 'PISO', 'C55715': 'PISO', 
        'C64853': 'PISO', 'C82191': 'PISO', 'C99276': 'PISO',  'D35006': 'PISO', 
        'D35913': 'PISO', 'MUZ00030': 'PISO', 'Z00039': 'PISO', 'Z00100': 'PISO', 
        'Z00115': 'PISO', 'Z00149': 'PISO', 'Z00336': 'PISO', 'Z00626': 'PISO', 'Z00645': 'PISO', 
        'Z00702': 'PISO'
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
