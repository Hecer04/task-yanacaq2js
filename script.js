               //N= 1. Yaradılan funksiya iki parametr tələb edir : məsafə və zaman.
// N= 2. Şərtlər :        

//             1. Əgər avtomobilin ortalama sürəti 0-60 km/s arasıdırsa 100km-ə ortalama 6 litr yanacaq sərf edir.
//             2. Əgər avtomobilin ortalama sürəti 60-90 km/s arasıdırsa 100km-ə ortalama 9 litr yanacaq sərf edir.
//             3. Əgər avtomobilin ortalama sürəti 90-120- km/s arasıdırsa 100km-ə ortalama 8 litr yanacaq sərf edir.
//             4. Əgər avtomobilin ortalama sürəti 120 km/s-dan çoxdursa 100km-ə ortalama 10 litr yanacaq sərf edir.

              // N= 3. Funksiya çıxışda "130 km yolu 2 saat müddətinə getmək üçün, sizin ortalama sürətiniz 75 km saat olmalıdır. Sizə lazım olacaq yanacaq miqdarı 12 litr, ortalama yanacaq sərfiyyatı isə 9 l/100 km olacaq" tipli string qaytarmalıdır. 

function hesablaYanacaqMiqdari(mesafe, zaman) {
    // Ortalama sürət---------------> D = V * t (mesafe = sürət * zaman, V = sürət)
    const ortaSuret = mesafe / (zaman ); // sürəti hesabla
    // Yanacaq sərfiyyatını hesablamaq üçün  əsasən ortalama sürət
    let Sərfiyyat = 0;
    if (ortaSuret >= 0 && ortaSuret < 60) {
      Sərfiyyat = 6; //----------------------> 0-60 km/s arası, 100 km-ə 6 litr yanacaq sərf edir
    } else if (ortaSuret >= 60 && ortaSuret < 90) {
      Sərfiyyat = 9;// ---------------------------->60-90 km/s arası, 100 km-ə 9 litr yanacaq sərf edir
    } else if (ortaSuret >= 90 && ortaSuret < 120) {
      Sərfiyyat = 8; //----------------------------> 90-120 km/s arası, 100 km-ə 8 litr yanacaq sərf edir
    } else {
      Sərfiyyat = 10; // --------------------------->120 km/s-dan çox, 100 km-ə 10 litr yanacaq sərf edir
    }
    // Yanacaq miqdarını hesabla--------------> Sərfiyyat * mesafe / 100:
    const Miqdar = (Sərfiyyat * mesafe) / 100;
    const suret = `${mesafe} km yolu ${zaman} saat müddətinə getmək üçün, 
    sizin ortalama sürətiniz ${ortaSuret.toFixed(2)} km saat olmalıdır. 
      // Sizə lazım olacaq yanacaq miqdarı ${Miqdar.toFixed(2)} litr,
       ortalama yanacaq sərfiyyatı isə ${Sərfiyyat} l/100 km olacaq.`;
    return suret;
  }
  const mesafe = 90; // (km)
  const zaman = 2; // (saat)
  const cixis = hesablaYanacaqMiqdari(90, 2);
  console.log(hesablaYanacaqMiqdari(90, 2));
  