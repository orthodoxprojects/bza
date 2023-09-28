const diatonicScaleIntervals = [12, 10, 8, 12, 12, 10, 8];
const softChromaticScaleIntervals = [8, 14, 8, 12];
const hardChromaticScaleIntervals = [6, 20, 4, 12];
const enharmonicZoScaleIntervals = [12, 12, 6, 12];
const enharmonicGaScaleIntervals = [12, 12, 6];
const legetosScaleIntervals = [6, 9, 15, 12, 6, 9, 15];
const zygosScaleIntervals = [18, 4, 16, 4, 12, 10, 8];
const zygosLegetosScaleIntervals = [18, 4, 20, 4, 12, 6, 9];
const klitonScaleIntervals = [12, 14, 12, 4, 12, 10, 8];
const spathiKeScaleIntervals = [12, 10, 8, 20, 4, 4, 14];
const spathiGaScaleIntervals = [12, 14, 4, 4, 20, 10, 8];

const diatonicScaleNoteMap = [2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5];
const softChromaticScaleNoteMap = [3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0];
const hardChromaticScaleNoteMap = [2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
const enharmonicZoScaleNoteMap = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1];
const enharmonicGaScaleNoteMap = [1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0];
const legetosScaleNoteMap = [1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4];
const zygosScaleNoteMap = [2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5];
const zygosLegetosScaleNoteMap = [2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5];
const klitonScaleNoteMap = [2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5];
const spathiKeScaleNoteMap = [2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5];
const spathiGaScaleNoteMap = [2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5];

const diatonicKeHigh = diatonicScaleIntervals[diatonicScaleNoteMap[17]];
const diatonicThiHigh = diatonicScaleIntervals[diatonicScaleNoteMap[16]];
const diatonicGaHigh = diatonicScaleIntervals[diatonicScaleNoteMap[15]];
const diatonicVouHigh = diatonicScaleIntervals[diatonicScaleNoteMap[14]];
const diatonicPaHigh = diatonicScaleIntervals[diatonicScaleNoteMap[13]];
const diatonicNiHigh = diatonicScaleIntervals[diatonicScaleNoteMap[12]];
const diatonicZoHigh = diatonicScaleIntervals[diatonicScaleNoteMap[11]];
const diatonicKe = diatonicScaleIntervals[diatonicScaleNoteMap[10]];
const diatonicThi = diatonicScaleIntervals[diatonicScaleNoteMap[9]];
const diatonicGa = diatonicScaleIntervals[diatonicScaleNoteMap[8]];
const diatonicVou = diatonicScaleIntervals[diatonicScaleNoteMap[7]];
const diatonicPa = diatonicScaleIntervals[diatonicScaleNoteMap[6]];
const diatonicNi = diatonicScaleIntervals[diatonicScaleNoteMap[5]];
const diatonicZo = diatonicScaleIntervals[diatonicScaleNoteMap[4]];
const diatonicKeLow = diatonicScaleIntervals[diatonicScaleNoteMap[3]];
const diatonicThiLow = diatonicScaleIntervals[diatonicScaleNoteMap[2]];
const diatonicGaLow = diatonicScaleIntervals[diatonicScaleNoteMap[1]];
const diatonicVouLow = diatonicScaleIntervals[diatonicScaleNoteMap[0]];

const softChromaticKeHigh = softChromaticScaleIntervals[softChromaticScaleNoteMap[17]];
const softChromaticThiHigh = softChromaticScaleIntervals[softChromaticScaleNoteMap[16]];
const softChromaticGaHigh = softChromaticScaleIntervals[softChromaticScaleNoteMap[15]];
const softChromaticVouHigh = softChromaticScaleIntervals[softChromaticScaleNoteMap[14]];
const softChromaticPaHigh = softChromaticScaleIntervals[softChromaticScaleNoteMap[13]];
const softChromaticNiHigh = softChromaticScaleIntervals[softChromaticScaleNoteMap[12]];
const softChromaticZoHigh = softChromaticScaleIntervals[softChromaticScaleNoteMap[11]];
const softChromaticKe = softChromaticScaleIntervals[softChromaticScaleNoteMap[10]];
const softChromaticThi = softChromaticScaleIntervals[softChromaticScaleNoteMap[9]];
const softChromaticGa = softChromaticScaleIntervals[softChromaticScaleNoteMap[8]];
const softChromaticVou = softChromaticScaleIntervals[softChromaticScaleNoteMap[7]];
const softChromaticPa = softChromaticScaleIntervals[softChromaticScaleNoteMap[6]];
const softChromaticNi = softChromaticScaleIntervals[softChromaticScaleNoteMap[5]];
const softChromaticZo = softChromaticScaleIntervals[softChromaticScaleNoteMap[4]];
const softChromaticKeLow = softChromaticScaleIntervals[softChromaticScaleNoteMap[3]];
const softChromaticThiLow = softChromaticScaleIntervals[softChromaticScaleNoteMap[2]];
const softChromaticGaLow = softChromaticScaleIntervals[softChromaticScaleNoteMap[1]];
const softChromaticVouLow = softChromaticScaleIntervals[softChromaticScaleNoteMap[0]];

const hardChromaticKeHigh = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[17]];
const hardChromaticThiHigh = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[16]];
const hardChromaticGaHigh = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[15]];
const hardChromaticVouHigh = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[14]];
const hardChromaticPaHigh = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[13]];
const hardChromaticNiHigh = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[12]];
const hardChromaticZoHigh = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[11]];
const hardChromaticKe = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[10]];
const hardChromaticThi = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[9]];
const hardChromaticGa = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[8]];
const hardChromaticVou = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[7]];
const hardChromaticPa = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[6]];
const hardChromaticNi = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[5]];
const hardChromaticZo = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[4]];
const hardChromaticKeLow = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[3]];
const hardChromaticThiLow = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[2]];
const hardChromaticGaLow = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[1]];
const hardChromaticVouLow = hardChromaticScaleIntervals[hardChromaticScaleNoteMap[0]];

const enharmonicZoKeHigh = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[17]];
const enharmonicZoThiHigh = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[16]];
const enharmonicZoGaHigh = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[15]];
const enharmonicZoVouHigh = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[14]];
const enharmonicZoPaHigh = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[13]];
const enharmonicZoNiHigh = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[12]];
const enharmonicZoZoHigh = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[11]];
const enharmonicZoKe = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[10]];
const enharmonicZoThi = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[9]];
const enharmonicZoGa = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[8]];
const enharmonicZoVou = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[7]];
const enharmonicZoPa = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[6]];
const enharmonicZoNi = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[5]];
const enharmonicZoZo = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[4]];
const enharmonicZoKeLow = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[3]];
const enharmonicZoThiLow = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[2]];
const enharmonicZoGaLow = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[1]];
const enharmonicZoVouLow = enharmonicZoScaleIntervals[enharmonicZoScaleNoteMap[0]];

const enharmonicGaKeHigh = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[17]];
const enharmonicGaThiHigh = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[16]];
const enharmonicGaGaHigh = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[15]];
const enharmonicGaVouHigh = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[14]];
const enharmonicGaPaHigh = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[13]];
const enharmonicGaNiHigh = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[12]];
const enharmonicGaZoHigh = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[11]];
const enharmonicGaKe = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[10]];
const enharmonicGaThi = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[9]];
const enharmonicGaGa = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[8]];
const enharmonicGaVou = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[7]];
const enharmonicGaPa = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[6]];
const enharmonicGaNi = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[5]];
const enharmonicGaZo = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[4]];
const enharmonicGaKeLow = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[3]];
const enharmonicGaThiLow = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[2]];
const enharmonicGaGaLow = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[1]];
const enharmonicGaVouLow = enharmonicGaScaleIntervals[enharmonicGaScaleNoteMap[0]];

const legetosKeHigh = legetosScaleIntervals[legetosScaleNoteMap[17]];
const legetosThiHigh = legetosScaleIntervals[legetosScaleNoteMap[16]];
const legetosGaHigh = legetosScaleIntervals[legetosScaleNoteMap[15]];
const legetosVouHigh = legetosScaleIntervals[legetosScaleNoteMap[14]];
const legetosPaHigh = legetosScaleIntervals[legetosScaleNoteMap[13]];
const legetosNiHigh = legetosScaleIntervals[legetosScaleNoteMap[12]];
const legetosZoHigh = legetosScaleIntervals[legetosScaleNoteMap[11]];
const legetosKe = legetosScaleIntervals[legetosScaleNoteMap[10]];
const legetosThi = legetosScaleIntervals[legetosScaleNoteMap[9]];
const legetosGa = legetosScaleIntervals[legetosScaleNoteMap[8]];
const legetosVou = legetosScaleIntervals[legetosScaleNoteMap[7]];
const legetosPa = legetosScaleIntervals[legetosScaleNoteMap[6]];
const legetosNi = legetosScaleIntervals[legetosScaleNoteMap[5]];
const legetosZo = legetosScaleIntervals[legetosScaleNoteMap[4]];
const legetosKeLow = legetosScaleIntervals[legetosScaleNoteMap[3]];
const legetosThiLow = legetosScaleIntervals[legetosScaleNoteMap[2]];
const legetosGaLow = legetosScaleIntervals[legetosScaleNoteMap[1]];
const legetosVouLow = legetosScaleIntervals[legetosScaleNoteMap[0]];

const zygosKeHigh = zygosScaleIntervals[zygosScaleNoteMap[17]];
const zygosThiHigh = zygosScaleIntervals[zygosScaleNoteMap[16]];
const zygosGaHigh = zygosScaleIntervals[zygosScaleNoteMap[15]];
const zygosVouHigh = zygosScaleIntervals[zygosScaleNoteMap[14]];
const zygosPaHigh = zygosScaleIntervals[zygosScaleNoteMap[13]];
const zygosNiHigh = zygosScaleIntervals[zygosScaleNoteMap[12]];
const zygosZoHigh = zygosScaleIntervals[zygosScaleNoteMap[11]];
const zygosKe = zygosScaleIntervals[zygosScaleNoteMap[10]];
const zygosThi = zygosScaleIntervals[zygosScaleNoteMap[9]];
const zygosGa = zygosScaleIntervals[zygosScaleNoteMap[8]];
const zygosVou = zygosScaleIntervals[zygosScaleNoteMap[7]];
const zygosPa = zygosScaleIntervals[zygosScaleNoteMap[6]];
const zygosNi = zygosScaleIntervals[zygosScaleNoteMap[5]];
const zygosZo = zygosScaleIntervals[zygosScaleNoteMap[4]];
const zygosKeLow = zygosScaleIntervals[zygosScaleNoteMap[3]];
const zygosThiLow = zygosScaleIntervals[zygosScaleNoteMap[2]];
const zygosGaLow = zygosScaleIntervals[zygosScaleNoteMap[1]];
const zygosVouLow = zygosScaleIntervals[zygosScaleNoteMap[0]];

const zygosLegetosKeHigh = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[17]];
const zygosLegetosThiHigh = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[16]];
const zygosLegetosGaHigh = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[15]];
const zygosLegetosVouHigh = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[14]];
const zygosLegetosPaHigh = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[13]];
const zygosLegetosNiHigh = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[12]];
const zygosLegetosZoHigh = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[11]];
const zygosLegetosKe = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[10]];
const zygosLegetosThi = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[9]];
const zygosLegetosGa = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[8]];
const zygosLegetosVou = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[7]];
const zygosLegetosPa = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[6]];
const zygosLegetosNi = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[5]];
const zygosLegetosZo = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[4]];
const zygosLegetosKeLow = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[3]];
const zygosLegetosThiLow = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[2]];
const zygosLegetosGaLow = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[1]];
const zygosLegetosVouLow = zygosLegetosScaleIntervals[zygosLegetosScaleNoteMap[0]];

const klitonKeHigh = klitonScaleIntervals[klitonScaleNoteMap[17]];
const klitonThiHigh = klitonScaleIntervals[klitonScaleNoteMap[16]];
const klitonGaHigh = klitonScaleIntervals[klitonScaleNoteMap[15]];
const klitonVouHigh = klitonScaleIntervals[klitonScaleNoteMap[14]];
const klitonPaHigh = klitonScaleIntervals[klitonScaleNoteMap[13]];
const klitonNiHigh = klitonScaleIntervals[klitonScaleNoteMap[12]];
const klitonZoHigh = klitonScaleIntervals[klitonScaleNoteMap[11]];
const klitonKe = klitonScaleIntervals[klitonScaleNoteMap[10]];
const klitonThi = klitonScaleIntervals[klitonScaleNoteMap[9]];
const klitonGa = klitonScaleIntervals[klitonScaleNoteMap[8]];
const klitonVou = klitonScaleIntervals[klitonScaleNoteMap[7]];
const klitonPa = klitonScaleIntervals[klitonScaleNoteMap[6]];
const klitonNi = klitonScaleIntervals[klitonScaleNoteMap[5]];
const klitonZo = klitonScaleIntervals[klitonScaleNoteMap[4]];
const klitonKeLow = klitonScaleIntervals[klitonScaleNoteMap[3]];
const klitonThiLow = klitonScaleIntervals[klitonScaleNoteMap[2]];
const klitonGaLow = klitonScaleIntervals[klitonScaleNoteMap[1]];
const klitonVouLow = klitonScaleIntervals[klitonScaleNoteMap[0]];

const spathiKeKeHigh = spathiKeScaleIntervals[spathiKeScaleNoteMap[17]];
const spathiKeThiHigh = spathiKeScaleIntervals[spathiKeScaleNoteMap[16]];
const spathiKeGaHigh = spathiKeScaleIntervals[spathiKeScaleNoteMap[15]];
const spathiKeVouHigh = spathiKeScaleIntervals[spathiKeScaleNoteMap[14]];
const spathiKePaHigh = spathiKeScaleIntervals[spathiKeScaleNoteMap[13]];
const spathiKeNiHigh = spathiKeScaleIntervals[spathiKeScaleNoteMap[12]];
const spathiKeZoHigh = spathiKeScaleIntervals[spathiKeScaleNoteMap[11]];
const spathiKeKe = spathiKeScaleIntervals[spathiKeScaleNoteMap[10]];
const spathiKeThi = spathiKeScaleIntervals[spathiKeScaleNoteMap[9]];
const spathiKeGa = spathiKeScaleIntervals[spathiKeScaleNoteMap[8]];
const spathiKeVou = spathiKeScaleIntervals[spathiKeScaleNoteMap[7]];
const spathiKePa = spathiKeScaleIntervals[spathiKeScaleNoteMap[6]];
const spathiKeNi = spathiKeScaleIntervals[spathiKeScaleNoteMap[5]];
const spathiKeZo = spathiKeScaleIntervals[spathiKeScaleNoteMap[4]];
const spathiKeKeLow = spathiKeScaleIntervals[spathiKeScaleNoteMap[3]];
const spathiKeThiLow = spathiKeScaleIntervals[spathiKeScaleNoteMap[2]];
const spathiKeGaLow = spathiKeScaleIntervals[spathiKeScaleNoteMap[1]];
const spathiKeVouLow = spathiKeScaleIntervals[spathiKeScaleNoteMap[0]];

const spathiGaKeHigh = spathiGaScaleIntervals[spathiGaScaleNoteMap[17]];
const spathiGaThiHigh = spathiGaScaleIntervals[spathiGaScaleNoteMap[16]];
const spathiGaGaHigh = spathiGaScaleIntervals[spathiGaScaleNoteMap[15]];
const spathiGaVouHigh = spathiGaScaleIntervals[spathiGaScaleNoteMap[14]];
const spathiGaPaHigh = spathiGaScaleIntervals[spathiGaScaleNoteMap[13]];
const spathiGaNiHigh = spathiGaScaleIntervals[spathiGaScaleNoteMap[12]];
const spathiGaZoHigh = spathiGaScaleIntervals[spathiGaScaleNoteMap[11]];
const spathiGaKe = spathiGaScaleIntervals[spathiGaScaleNoteMap[10]];
const spathiGaThi = spathiGaScaleIntervals[spathiGaScaleNoteMap[9]];
const spathiGaGa = spathiGaScaleIntervals[spathiGaScaleNoteMap[8]];
const spathiGaVou = spathiGaScaleIntervals[spathiGaScaleNoteMap[7]];
const spathiGaPa = spathiGaScaleIntervals[spathiGaScaleNoteMap[6]];
const spathiGaNi = spathiGaScaleIntervals[spathiGaScaleNoteMap[5]];
const spathiGaZo = spathiGaScaleIntervals[spathiGaScaleNoteMap[4]];
const spathiGaKeLow = spathiGaScaleIntervals[spathiGaScaleNoteMap[3]];
const spathiGaThiLow = spathiGaScaleIntervals[spathiGaScaleNoteMap[2]];
const spathiGaGaLow = spathiGaScaleIntervals[spathiGaScaleNoteMap[1]];
const spathiGaVouLow = spathiGaScaleIntervals[spathiGaScaleNoteMap[0]];

const diatonicThiMoria = 0;
const diatonicKeHighMoria = Math.abs(diatonicThiMoria) + diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh + diatonicVouHigh + diatonicGaHigh + diatonicThiHigh;
const diatonicThiHighMoria = Math.abs(diatonicThiMoria) + diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh + diatonicVouHigh + diatonicGaHigh;
const diatonicGaHighMoria = Math.abs(diatonicThiMoria) + diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh + diatonicVouHigh;
const diatonicVouHighMoria = Math.abs(diatonicThiMoria) + diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh;
const diatonicPaHighMoria = Math.abs(diatonicThiMoria) + diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh;
const diatonicNiHighMoria = Math.abs(diatonicThiMoria) + diatonicThi + diatonicKe + diatonicZoHigh;
const diatonicZoHighMoria = Math.abs(diatonicThiMoria) + diatonicThi + diatonicKe;
const diatonicKeMoria = Math.abs(diatonicThiMoria) + diatonicThi;
const diatonicGaMoria = Math.abs(diatonicThiMoria) + diatonicGa;
const diatonicVouMoria = Math.abs(diatonicThiMoria) + diatonicGa + diatonicVou;
const diatonicPaMoria = Math.abs(diatonicThiMoria) + diatonicGa + diatonicVou + diatonicPa;
const diatonicNiMoria = Math.abs(diatonicThiMoria) + diatonicGa + diatonicVou + diatonicPa + diatonicNi;
const diatonicZoMoria = Math.abs(diatonicThiMoria) + diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo;
const diatonicKeLowMoria = Math.abs(diatonicThiMoria) + diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow;
const diatonicThiLowMoria = Math.abs(diatonicThiMoria) + diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow + diatonicThiLow;
const diatonicGaLowMoria = Math.abs(diatonicThiMoria) + diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow + diatonicThiLow + diatonicGaLow;
const diatonicVouLowMoria = Math.abs(diatonicThiMoria) + diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow + diatonicThiLow + diatonicGaLow + diatonicVouLow;

const softChromaticThiMoria = 0;
const softChromaticKeHighMoria = Math.abs(softChromaticThiMoria) + softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh + softChromaticVouHigh + softChromaticGaHigh + softChromaticThiHigh;
const softChromaticThiHighMoria = Math.abs(softChromaticThiMoria) + softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh + softChromaticVouHigh + softChromaticGaHigh;
const softChromaticGaHighMoria = Math.abs(softChromaticThiMoria) + softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh + softChromaticVouHigh;
const softChromaticVouHighMoria = Math.abs(softChromaticThiMoria) + softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh;
const softChromaticPaHighMoria = Math.abs(softChromaticThiMoria) + softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh;
const softChromaticNiHighMoria = Math.abs(softChromaticThiMoria) + softChromaticThi + softChromaticKe + softChromaticZoHigh;
const softChromaticZoHighMoria = Math.abs(softChromaticThiMoria) + softChromaticThi + softChromaticKe;
const softChromaticKeMoria = Math.abs(softChromaticThiMoria) + softChromaticThi;
const softChromaticGaMoria = Math.abs(softChromaticThiMoria) + softChromaticGa;
const softChromaticVouMoria = Math.abs(softChromaticThiMoria) + softChromaticGa + softChromaticVou;
const softChromaticPaMoria = Math.abs(softChromaticThiMoria) + softChromaticGa + softChromaticVou + softChromaticPa;
const softChromaticNiMoria = Math.abs(softChromaticThiMoria) + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi;
const softChromaticZoMoria = Math.abs(softChromaticThiMoria) + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo;
const softChromaticKeLowMoria = Math.abs(softChromaticThiMoria) + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow;
const softChromaticThiLowMoria = Math.abs(softChromaticThiMoria) + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow + softChromaticThiLow;
const softChromaticGaLowMoria = Math.abs(softChromaticThiMoria) + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow + softChromaticThiLow + softChromaticGaLow;
const softChromaticVouLowMoria = Math.abs(softChromaticThiMoria) + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow + softChromaticThiLow + softChromaticGaLow + softChromaticVouLow;

const hardChromaticThiMoria = 0;
const hardChromaticKeHighMoria = Math.abs(hardChromaticThiMoria) + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh + hardChromaticVouHigh + hardChromaticGaHigh + hardChromaticThiHigh;
const hardChromaticThiHighMoria = Math.abs(hardChromaticThiMoria) + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh + hardChromaticVouHigh + hardChromaticGaHigh;
const hardChromaticGaHighMoria = Math.abs(hardChromaticThiMoria) + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh + hardChromaticVouHigh;
const hardChromaticVouHighMoria = Math.abs(hardChromaticThiMoria) + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh;
const hardChromaticPaHighMoria = Math.abs(hardChromaticThiMoria) + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh;
const hardChromaticNiHighMoria = Math.abs(hardChromaticThiMoria) + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh;
const hardChromaticZoHighMoria = Math.abs(hardChromaticThiMoria) + hardChromaticThi + hardChromaticKe;
const hardChromaticKeMoria = Math.abs(hardChromaticThiMoria) + hardChromaticThi;
const hardChromaticGaMoria = Math.abs(hardChromaticThiMoria) + hardChromaticGa;
const hardChromaticVouMoria = Math.abs(hardChromaticThiMoria) + hardChromaticGa + hardChromaticVou;
const hardChromaticPaMoria = Math.abs(hardChromaticThiMoria) + hardChromaticGa + hardChromaticVou + hardChromaticPa;
const hardChromaticNiMoria = Math.abs(hardChromaticThiMoria) + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi;
const hardChromaticZoMoria = Math.abs(hardChromaticThiMoria) + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo;
const hardChromaticKeLowMoria = Math.abs(hardChromaticThiMoria) + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow;
const hardChromaticThiLowMoria = Math.abs(hardChromaticThiMoria) + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow + hardChromaticThiLow;
const hardChromaticGaLowMoria = Math.abs(hardChromaticThiMoria) + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow + hardChromaticThiLow + hardChromaticGaLow;
const hardChromaticVouLowMoria = Math.abs(hardChromaticThiMoria) + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow + hardChromaticThiLow + hardChromaticGaLow + hardChromaticVouLow;

const enharmonicZoThiMoria = 0;
const enharmonicZoKeHighMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh + enharmonicZoNiHigh + enharmonicZoPaHigh + enharmonicZoVouHigh + enharmonicZoGaHigh + enharmonicZoThiHigh;
const enharmonicZoThiHighMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh + enharmonicZoNiHigh + enharmonicZoPaHigh + enharmonicZoVouHigh + enharmonicZoGaHigh;
const enharmonicZoGaHighMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh + enharmonicZoNiHigh + enharmonicZoPaHigh + enharmonicZoVouHigh;
const enharmonicZoVouHighMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh + enharmonicZoNiHigh + enharmonicZoPaHigh;
const enharmonicZoPaHighMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh + enharmonicZoNiHigh;
const enharmonicZoNiHighMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh;
const enharmonicZoZoHighMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoThi + enharmonicZoKe;
const enharmonicZoKeMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoThi;
const enharmonicZoGaMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoGa;
const enharmonicZoVouMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoGa + enharmonicZoVou;
const enharmonicZoPaMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa;
const enharmonicZoNiMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi;
const enharmonicZoZoMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi + enharmonicZoZo;
const enharmonicZoKeLowMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi + enharmonicZoZo + enharmonicZoKeLow;
const enharmonicZoThiLowMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi + enharmonicZoZo + enharmonicZoKeLow + enharmonicZoThiLow;
const enharmonicZoGaLowMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi + enharmonicZoZo + enharmonicZoKeLow + enharmonicZoThiLow + enharmonicZoGaLow;
const enharmonicZoVouLowMoria = Math.abs(enharmonicZoThiMoria) + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi + enharmonicZoZo + enharmonicZoKeLow + enharmonicZoThiLow + enharmonicZoGaLow + enharmonicZoVouLow;

const enharmonicGaThiMoria = 0;
const enharmonicGaKeHighMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh + enharmonicGaNiHigh + enharmonicGaPaHigh + enharmonicGaVouHigh + enharmonicGaGaHigh + enharmonicGaThiHigh;
const enharmonicGaThiHighMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh + enharmonicGaNiHigh + enharmonicGaPaHigh + enharmonicGaVouHigh + enharmonicGaGaHigh;
const enharmonicGaGaHighMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh + enharmonicGaNiHigh + enharmonicGaPaHigh + enharmonicGaVouHigh;
const enharmonicGaVouHighMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh + enharmonicGaNiHigh + enharmonicGaPaHigh;
const enharmonicGaPaHighMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh + enharmonicGaNiHigh;
const enharmonicGaNiHighMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh;
const enharmonicGaZoHighMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaThi + enharmonicGaKe;
const enharmonicGaKeMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaThi;
const enharmonicGaGaMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaGa;
const enharmonicGaVouMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaGa + enharmonicGaVou;
const enharmonicGaPaMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa;
const enharmonicGaNiMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi;
const enharmonicGaZoMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi + enharmonicGaZo;
const enharmonicGaKeLowMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi + enharmonicGaZo + enharmonicGaKeLow;
const enharmonicGaThiLowMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi + enharmonicGaZo + enharmonicGaKeLow + enharmonicGaThiLow;
const enharmonicGaGaLowMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi + enharmonicGaZo + enharmonicGaKeLow + enharmonicGaThiLow + enharmonicGaGaLow;
const enharmonicGaVouLowMoria = Math.abs(enharmonicGaThiMoria) + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi + enharmonicGaZo + enharmonicGaKeLow + enharmonicGaThiLow + enharmonicGaGaLow + enharmonicGaVouLow;

const legetosThiMoria = 0;
const legetosKeHighMoria = Math.abs(legetosThiMoria) + legetosThi + legetosKe + legetosZoHigh + legetosNiHigh + legetosPaHigh + legetosVouHigh + legetosGaHigh + legetosThiHigh;
const legetosThiHighMoria = Math.abs(legetosThiMoria) + legetosThi + legetosKe + legetosZoHigh + legetosNiHigh + legetosPaHigh + legetosVouHigh + legetosGaHigh;
const legetosGaHighMoria = Math.abs(legetosThiMoria) + legetosThi + legetosKe + legetosZoHigh + legetosNiHigh + legetosPaHigh + legetosVouHigh;
const legetosVouHighMoria = Math.abs(legetosThiMoria) + legetosThi + legetosKe + legetosZoHigh + legetosNiHigh + legetosPaHigh;
const legetosPaHighMoria = Math.abs(legetosThiMoria) + legetosThi + legetosKe + legetosZoHigh + legetosNiHigh;
const legetosNiHighMoria = Math.abs(legetosThiMoria) + legetosThi + legetosKe + legetosZoHigh;
const legetosZoHighMoria = Math.abs(legetosThiMoria) + legetosThi + legetosKe;
const legetosKeMoria = Math.abs(legetosThiMoria) + legetosThi;
const legetosGaMoria = Math.abs(legetosThiMoria) + legetosGa;
const legetosVouMoria = Math.abs(legetosThiMoria) + legetosGa + legetosVou;
const legetosPaMoria = Math.abs(legetosThiMoria) + legetosGa + legetosVou + legetosPa;
const legetosNiMoria = Math.abs(legetosThiMoria) + legetosGa + legetosVou + legetosPa + legetosNi;
const legetosZoMoria = Math.abs(legetosThiMoria) + legetosGa + legetosVou + legetosPa + legetosNi + legetosZo;
const legetosKeLowMoria = Math.abs(legetosThiMoria) + legetosGa + legetosVou + legetosPa + legetosNi + legetosZo + legetosKeLow;
const legetosThiLowMoria = Math.abs(legetosThiMoria) + legetosGa + legetosVou + legetosPa + legetosNi + legetosZo + legetosKeLow + legetosThiLow;
const legetosGaLowMoria = Math.abs(legetosThiMoria) + legetosGa + legetosVou + legetosPa + legetosNi + legetosZo + legetosKeLow + legetosThiLow + legetosGaLow;
const legetosVouLowMoria = Math.abs(legetosThiMoria) + legetosGa + legetosVou + legetosPa + legetosNi + legetosZo + legetosKeLow + legetosThiLow + legetosGaLow + legetosVouLow;

const zygosThiMoria = 0;
const zygosKeHighMoria = Math.abs(zygosThiMoria) + zygosThi + zygosKe + zygosZoHigh + zygosNiHigh + zygosPaHigh + zygosVouHigh + zygosGaHigh + zygosThiHigh;
const zygosThiHighMoria = Math.abs(zygosThiMoria) + zygosThi + zygosKe + zygosZoHigh + zygosNiHigh + zygosPaHigh + zygosVouHigh + zygosGaHigh;
const zygosGaHighMoria = Math.abs(zygosThiMoria) + zygosThi + zygosKe + zygosZoHigh + zygosNiHigh + zygosPaHigh + zygosVouHigh;
const zygosVouHighMoria = Math.abs(zygosThiMoria) + zygosThi + zygosKe + zygosZoHigh + zygosNiHigh + zygosPaHigh;
const zygosPaHighMoria = Math.abs(zygosThiMoria) + zygosThi + zygosKe + zygosZoHigh + zygosNiHigh;
const zygosNiHighMoria = Math.abs(zygosThiMoria) + zygosThi + zygosKe + zygosZoHigh;
const zygosZoHighMoria = Math.abs(zygosThiMoria) + zygosThi + zygosKe;
const zygosKeMoria = Math.abs(zygosThiMoria) + zygosThi;
const zygosGaMoria = Math.abs(zygosThiMoria) + zygosGa;
const zygosVouMoria = Math.abs(zygosThiMoria) + zygosGa + zygosVou;
const zygosPaMoria = Math.abs(zygosThiMoria) + zygosGa + zygosVou + zygosPa;
const zygosNiMoria = Math.abs(zygosThiMoria) + zygosGa + zygosVou + zygosPa + zygosNi;
const zygosZoMoria = Math.abs(zygosThiMoria) + zygosGa + zygosVou + zygosPa + zygosNi + zygosZo;
const zygosKeLowMoria = Math.abs(zygosThiMoria) + zygosGa + zygosVou + zygosPa + zygosNi + zygosZo + zygosKeLow;
const zygosThiLowMoria = Math.abs(zygosThiMoria) + zygosGa + zygosVou + zygosPa + zygosNi + zygosZo + zygosKeLow + zygosThiLow;
const zygosGaLowMoria = Math.abs(zygosThiMoria) + zygosGa + zygosVou + zygosPa + zygosNi + zygosZo + zygosKeLow + zygosThiLow + zygosGaLow;
const zygosVouLowMoria = Math.abs(zygosThiMoria) + zygosGa + zygosVou + zygosPa + zygosNi + zygosZo + zygosKeLow + zygosThiLow + zygosGaLow + zygosVouLow;

const zygosLegetosThiMoria = 0;
const zygosLegetosKeHighMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosThi + zygosLegetosKe + zygosLegetosZoHigh + zygosLegetosNiHigh + zygosLegetosPaHigh + zygosLegetosVouHigh + zygosLegetosGaHigh + zygosLegetosThiHigh;
const zygosLegetosThiHighMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosThi + zygosLegetosKe + zygosLegetosZoHigh + zygosLegetosNiHigh + zygosLegetosPaHigh + zygosLegetosVouHigh + zygosLegetosGaHigh;
const zygosLegetosGaHighMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosThi + zygosLegetosKe + zygosLegetosZoHigh + zygosLegetosNiHigh + zygosLegetosPaHigh + zygosLegetosVouHigh;
const zygosLegetosVouHighMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosThi + zygosLegetosKe + zygosLegetosZoHigh + zygosLegetosNiHigh + zygosLegetosPaHigh;
const zygosLegetosPaHighMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosThi + zygosLegetosKe + zygosLegetosZoHigh + zygosLegetosNiHigh;
const zygosLegetosNiHighMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosThi + zygosLegetosKe + zygosLegetosZoHigh;
const zygosLegetosZoHighMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosThi + zygosLegetosKe;
const zygosLegetosKeMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosThi;
const zygosLegetosGaMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosGa;
const zygosLegetosVouMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosGa + zygosLegetosVou;
const zygosLegetosPaMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosGa + zygosLegetosVou + zygosLegetosPa;
const zygosLegetosNiMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosGa + zygosLegetosVou + zygosLegetosPa + zygosLegetosNi;
const zygosLegetosZoMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosGa + zygosLegetosVou + zygosLegetosPa + zygosLegetosNi + zygosLegetosZo;
const zygosLegetosKeLowMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosGa + zygosLegetosVou + zygosLegetosPa + zygosLegetosNi + zygosLegetosZo + zygosLegetosKeLow;
const zygosLegetosThiLowMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosGa + zygosLegetosVou + zygosLegetosPa + zygosLegetosNi + zygosLegetosZo + zygosLegetosKeLow + zygosLegetosThiLow;
const zygosLegetosGaLowMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosGa + zygosLegetosVou + zygosLegetosPa + zygosLegetosNi + zygosLegetosZo + zygosLegetosKeLow + zygosLegetosThiLow + zygosLegetosGaLow;
const zygosLegetosVouLowMoria = Math.abs(zygosLegetosThiMoria) + zygosLegetosGa + zygosLegetosVou + zygosLegetosPa + zygosLegetosNi + zygosLegetosZo + zygosLegetosKeLow + zygosLegetosThiLow + zygosLegetosGaLow + zygosLegetosVouLow;

const klitonThiMoria = 0;
const klitonKeHighMoria = Math.abs(klitonThiMoria) + klitonThi + klitonKe + klitonZoHigh + klitonNiHigh + klitonPaHigh + klitonVouHigh + klitonGaHigh + klitonThiHigh;
const klitonThiHighMoria = Math.abs(klitonThiMoria) + klitonThi + klitonKe + klitonZoHigh + klitonNiHigh + klitonPaHigh + klitonVouHigh + klitonGaHigh;
const klitonGaHighMoria = Math.abs(klitonThiMoria) + klitonThi + klitonKe + klitonZoHigh + klitonNiHigh + klitonPaHigh + klitonVouHigh;
const klitonVouHighMoria = Math.abs(klitonThiMoria) + klitonThi + klitonKe + klitonZoHigh + klitonNiHigh + klitonPaHigh;
const klitonPaHighMoria = Math.abs(klitonThiMoria) + klitonThi + klitonKe + klitonZoHigh + klitonNiHigh;
const klitonNiHighMoria = Math.abs(klitonThiMoria) + klitonThi + klitonKe + klitonZoHigh;
const klitonZoHighMoria = Math.abs(klitonThiMoria) + klitonThi + klitonKe;
const klitonKeMoria = Math.abs(klitonThiMoria) + klitonThi;
const klitonGaMoria = Math.abs(klitonThiMoria) + klitonGa;
const klitonVouMoria = Math.abs(klitonThiMoria) + klitonGa + klitonVou;
const klitonPaMoria = Math.abs(klitonThiMoria) + klitonGa + klitonVou + klitonPa;
const klitonNiMoria = Math.abs(klitonThiMoria) + klitonGa + klitonVou + klitonPa + klitonNi;
const klitonZoMoria = Math.abs(klitonThiMoria) + klitonGa + klitonVou + klitonPa + klitonNi + klitonZo;
const klitonKeLowMoria = Math.abs(klitonThiMoria) + klitonGa + klitonVou + klitonPa + klitonNi + klitonZo + klitonKeLow;
const klitonThiLowMoria = Math.abs(klitonThiMoria) + klitonGa + klitonVou + klitonPa + klitonNi + klitonZo + klitonKeLow + klitonThiLow;
const klitonGaLowMoria = Math.abs(klitonThiMoria) + klitonGa + klitonVou + klitonPa + klitonNi + klitonZo + klitonKeLow + klitonThiLow + klitonGaLow;
const klitonVouLowMoria = Math.abs(klitonThiMoria) + klitonGa + klitonVou + klitonPa + klitonNi + klitonZo + klitonKeLow + klitonThiLow + klitonGaLow + klitonVouLow;

const spathiKeThiMoria = 8;
const spathiKeKeHighMoria = Math.abs(spathiKeThiMoria) + spathiKeThi + spathiKeKe + spathiKeZoHigh + spathiKeNiHigh + spathiKePaHigh + spathiKeVouHigh + spathiKeGaHigh + spathiKeThiHigh;
const spathiKeThiHighMoria = Math.abs(spathiKeThiMoria) + spathiKeThi + spathiKeKe + spathiKeZoHigh + spathiKeNiHigh + spathiKePaHigh + spathiKeVouHigh + spathiKeGaHigh;
const spathiKeGaHighMoria = Math.abs(spathiKeThiMoria) + spathiKeThi + spathiKeKe + spathiKeZoHigh + spathiKeNiHigh + spathiKePaHigh + spathiKeVouHigh;
const spathiKeVouHighMoria = Math.abs(spathiKeThiMoria) + spathiKeThi + spathiKeKe + spathiKeZoHigh + spathiKeNiHigh + spathiKePaHigh;
const spathiKePaHighMoria = Math.abs(spathiKeThiMoria) + spathiKeThi + spathiKeKe + spathiKeZoHigh + spathiKeNiHigh;
const spathiKeNiHighMoria = Math.abs(spathiKeThiMoria) + spathiKeThi + spathiKeKe + spathiKeZoHigh;
const spathiKeZoHighMoria = Math.abs(spathiKeThiMoria) + spathiKeThi + spathiKeKe;
const spathiKeKeMoria = Math.abs(spathiKeThiMoria) + spathiKeThi;
const spathiKeGaMoria = Math.abs(spathiKeThiMoria) + spathiKeGa;
const spathiKeVouMoria = Math.abs(spathiKeThiMoria) + spathiKeGa + spathiKeVou;
const spathiKePaMoria = Math.abs(spathiKeThiMoria) + spathiKeGa + spathiKeVou + spathiKePa;
const spathiKeNiMoria = Math.abs(spathiKeThiMoria) + spathiKeGa + spathiKeVou + spathiKePa + spathiKeNi;
const spathiKeZoMoria = Math.abs(spathiKeThiMoria) + spathiKeGa + spathiKeVou + spathiKePa + spathiKeNi + spathiKeZo;
const spathiKeKeLowMoria = Math.abs(spathiKeThiMoria) + spathiKeGa + spathiKeVou + spathiKePa + spathiKeNi + spathiKeZo + spathiKeKeLow;
const spathiKeThiLowMoria = Math.abs(spathiKeThiMoria) + spathiKeGa + spathiKeVou + spathiKePa + spathiKeNi + spathiKeZo + spathiKeKeLow + spathiKeThiLow;
const spathiKeGaLowMoria = Math.abs(spathiKeThiMoria) + spathiKeGa + spathiKeVou + spathiKePa + spathiKeNi + spathiKeZo + spathiKeKeLow + spathiKeThiLow + spathiKeGaLow;
const spathiKeVouLowMoria = Math.abs(spathiKeThiMoria) + spathiKeGa + spathiKeVou + spathiKePa + spathiKeNi + spathiKeZo + spathiKeKeLow + spathiKeThiLow + spathiKeGaLow + spathiKeVouLow;

const spathiGaThiMoria = -8;
const spathiGaKeHighMoria = Math.abs(spathiGaThiMoria) + spathiGaThi + spathiGaKe + spathiGaZoHigh + spathiGaNiHigh + spathiGaPaHigh + spathiGaVouHigh + spathiGaGaHigh + spathiGaThiHigh;
const spathiGaThiHighMoria = Math.abs(spathiGaThiMoria) + spathiGaThi + spathiGaKe + spathiGaZoHigh + spathiGaNiHigh + spathiGaPaHigh + spathiGaVouHigh + spathiGaGaHigh;
const spathiGaGaHighMoria = Math.abs(spathiGaThiMoria) + spathiGaThi + spathiGaKe + spathiGaZoHigh + spathiGaNiHigh + spathiGaPaHigh + spathiGaVouHigh;
const spathiGaVouHighMoria = Math.abs(spathiGaThiMoria) + spathiGaThi + spathiGaKe + spathiGaZoHigh + spathiGaNiHigh + spathiGaPaHigh;
const spathiGaPaHighMoria = Math.abs(spathiGaThiMoria) + spathiGaThi + spathiGaKe + spathiGaZoHigh + spathiGaNiHigh;
const spathiGaNiHighMoria = Math.abs(spathiGaThiMoria) + spathiGaThi + spathiGaKe + spathiGaZoHigh;
const spathiGaZoHighMoria = Math.abs(spathiGaThiMoria) + spathiGaThi + spathiGaKe;
const spathiGaKeMoria = Math.abs(spathiGaThiMoria) + spathiGaThi;
const spathiGaGaMoria = Math.abs(spathiGaThiMoria) + spathiGaGa;
const spathiGaVouMoria = Math.abs(spathiGaThiMoria) + spathiGaGa + spathiGaVou;
const spathiGaPaMoria = Math.abs(spathiGaThiMoria) + spathiGaGa + spathiGaVou + spathiGaPa;
const spathiGaNiMoria = Math.abs(spathiGaThiMoria) + spathiGaGa + spathiGaVou + spathiGaPa + spathiGaNi;
const spathiGaZoMoria = Math.abs(spathiGaThiMoria) + spathiGaGa + spathiGaVou + spathiGaPa + spathiGaNi + spathiGaZo;
const spathiGaKeLowMoria = Math.abs(spathiGaThiMoria) + spathiGaGa + spathiGaVou + spathiGaPa + spathiGaNi + spathiGaZo + spathiGaKeLow;
const spathiGaThiLowMoria = Math.abs(spathiGaThiMoria) + spathiGaGa + spathiGaVou + spathiGaPa + spathiGaNi + spathiGaZo + spathiGaKeLow + spathiGaThiLow;
const spathiGaGaLowMoria = Math.abs(spathiGaThiMoria) + spathiGaGa + spathiGaVou + spathiGaPa + spathiGaNi + spathiGaZo + spathiGaKeLow + spathiGaThiLow + spathiGaGaLow;
const spathiGaVouLowMoria = Math.abs(spathiGaThiMoria) + spathiGaGa + spathiGaVou + spathiGaPa + spathiGaNi + spathiGaZo + spathiGaKeLow + spathiGaThiLow + spathiGaGaLow + spathiGaVouLow;

function keHighNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicKeHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticKeHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticKeHighMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicZoKeHighMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicGaKeHighMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, legetosKeHighMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosKeHighMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosLegetosKeHighMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, klitonKeHighMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiKeKeHighMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiGaKeHighMoria / 72);
    }
}

function thiHighNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicThiHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticThiHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticThiHighMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicZoThiHighMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicGaThiHighMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, legetosThiHighMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosThiHighMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosLegetosThiHighMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, klitonThiHighMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiKeThiHighMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiGaThiHighMoria / 72);
    }
}

function gaHighNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicGaHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticGaHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticGaHighMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicZoGaHighMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicGaGaHighMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, legetosGaHighMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosGaHighMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosLegetosGaHighMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, klitonGaHighMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiKeGaHighMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiGaGaHighMoria / 72);
    }
}

function vouHighNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicVouHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticVouHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticVouHighMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicZoVouHighMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicGaVouHighMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, legetosVouHighMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosVouHighMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosLegetosVouHighMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, klitonVouHighMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiKeVouHighMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiGaVouHighMoria / 72);
    }
}

function paHighNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicPaHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticPaHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticPaHighMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicZoPaHighMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicGaPaHighMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, legetosPaHighMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosPaHighMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosLegetosPaHighMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, klitonPaHighMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiKePaHighMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiGaPaHighMoria / 72);
    }
}

function niHighNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicNiHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticNiHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticNiHighMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicZoNiHighMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicGaNiHighMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, legetosNiHighMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosNiHighMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosLegetosNiHighMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, klitonNiHighMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiKeNiHighMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiGaNiHighMoria / 72);
    }
}

function zoHighNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicZoHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticZoHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticZoHighMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicZoZoHighMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicGaZoHighMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, legetosZoHighMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosZoHighMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosLegetosZoHighMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, klitonZoHighMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiKeZoHighMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiGaZoHighMoria / 72);
    }
}

function keNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicKeMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticKeMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticKeMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicZoKeMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicGaKeMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, legetosKeMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosKeMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosLegetosKeMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, klitonKeMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiKeKeMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiGaKeMoria / 72);
    }
}

function thiNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicThiMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticThiMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticThiMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicZoThiMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicGaThiMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, legetosThiMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosThiMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, zygosLegetosThiMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, klitonThiMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiKeThiMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, spathiGaThiMoria / 72);
    }
}

function gaNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicGaMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticGaMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticGaMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicZoGaMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicGaGaMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -legetosGaMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosGaMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosLegetosGaMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -klitonGaMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiKeGaMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiGaGaMoria / 72);
    }
}

function vouNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicVouMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticVouMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticVouMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicZoVouMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicGaVouMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -legetosVouMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosVouMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosLegetosVouMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -klitonVouMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiKeVouMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiGaVouMoria / 72);
    }
}

function paNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicPaMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticPaMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticPaMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicZoPaMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicGaPaMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -legetosPaMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosPaMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosLegetosPaMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -klitonPaMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiKePaMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiGaPaMoria / 72);
    }
}

function niNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicNiMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticNiMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticNiMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicZoNiMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicGaNiMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -legetosNiMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosNiMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosLegetosNiMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -klitonNiMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiKeNiMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiGaNiMoria / 72);
    }
}

function zoNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicZoMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticZoMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticZoMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicZoZoMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicGaZoMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -legetosZoMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosZoMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosLegetosZoMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -klitonZoMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiKeZoMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiGaZoMoria / 72);
    }
}

function keLowNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicKeLowMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticKeLowMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticKeLowMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicZoKeLowMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicGaKeLowMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -legetosKeLowMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosKeLowMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosLegetosKeLowMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -klitonKeLowMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiKeKeLowMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiGaKeLowMoria / 72);
    }
}

function thiLowNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicThiLowMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticThiLowMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticThiLowMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicZoThiLowMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicGaThiLowMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -legetosThiLowMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosThiLowMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosLegetosThiLowMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -klitonThiLowMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiKeThiLowMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiGaThiLowMoria / 72);
    }
}

function gaLowNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicGaLowMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticGaLowMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticGaLowMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicZoGaLowMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicGaGaLowMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -legetosGaLowMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosGaLowMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosLegetosGaLowMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -klitonGaLowMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiKeGaLowMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiGaGaLowMoria / 72);
    }
}

function vouLowNote() {
    if(dtBtn.value=="diatonicScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicVouLowMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticVouLowMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticVouLowMoria / 72);
    } else if(dtBtn.value=="enharmonicZoScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicZoVouLowMoria / 72);
    } else if(dtBtn.value=="enharmonicGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicGaVouLowMoria / 72);
    } else if(dtBtn.value=="legetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -legetosVouLowMoria / 72);
    } else if(dtBtn.value=="zygosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosVouLowMoria / 72);
    } else if(dtBtn.value=="zygosLegetosScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -zygosLegetosVouLowMoria / 72);
    } else if(dtBtn.value=="klitonScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -klitonVouLowMoria / 72);
    } else if(dtBtn.value=="spathiKeScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiKeVouLowMoria / 72);
    } else if(dtBtn.value=="spathiGaScale") {
        let baseFrequency = Number(pitchBtn.value) + Number(diesis2Btn.value);
        diesis4Btn.value = switchBtn.value * Math.pow(2, baseFrequency / 72);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -spathiGaVouLowMoria / 72);
    }
}