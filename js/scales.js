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

const diatonicThiMoria = 0;
const diatonicKeHighMoria = diatonicThiMoria + diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh + diatonicVouHigh + diatonicGaHigh + diatonicThiHigh;
const diatonicThiHighMoria = diatonicThiMoria + diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh + diatonicVouHigh + diatonicGaHigh;
const diatonicGaHighMoria = diatonicThiMoria + diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh + diatonicVouHigh;
const diatonicVouHighMoria = diatonicThiMoria + diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh;
const diatonicPaHighMoria = diatonicThiMoria + diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh;
const diatonicNiHighMoria = diatonicThiMoria + diatonicThi + diatonicKe + diatonicZoHigh;
const diatonicZoHighMoria = diatonicThiMoria + diatonicThi + diatonicKe;
const diatonicKeMoria = diatonicThiMoria + diatonicThi;
const diatonicGaMoria = diatonicThiMoria + diatonicGa;
const diatonicVouMoria = diatonicThiMoria + diatonicGa + diatonicVou;
const diatonicPaMoria = diatonicThiMoria + diatonicGa + diatonicVou + diatonicPa;
const diatonicNiMoria = diatonicThiMoria + diatonicGa + diatonicVou + diatonicPa + diatonicNi;
const diatonicZoMoria = diatonicThiMoria + diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo;
const diatonicKeLowMoria = diatonicThiMoria + diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow;
const diatonicThiLowMoria = diatonicThiMoria + diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow + diatonicThiLow;
const diatonicGaLowMoria = diatonicThiMoria + diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow + diatonicThiLow + diatonicGaLow;
const diatonicVouLowMoria = diatonicThiMoria + diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow + diatonicThiLow + diatonicGaLow + diatonicVouLow;

const softChromaticThiMoria = 0;
const softChromaticKeHighMoria = softChromaticThiMoria + softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh + softChromaticVouHigh + softChromaticGaHigh + softChromaticThiHigh;
const softChromaticThiHighMoria = softChromaticThiMoria + softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh + softChromaticVouHigh + softChromaticGaHigh;
const softChromaticGaHighMoria = softChromaticThiMoria + softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh + softChromaticVouHigh;
const softChromaticVouHighMoria = softChromaticThiMoria + softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh;
const softChromaticPaHighMoria = softChromaticThiMoria + softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh;
const softChromaticNiHighMoria = softChromaticThiMoria + softChromaticThi + softChromaticKe + softChromaticZoHigh;
const softChromaticZoHighMoria = softChromaticThiMoria + softChromaticThi + softChromaticKe;
const softChromaticKeMoria = softChromaticThiMoria + softChromaticThi;
const softChromaticGaMoria = softChromaticThiMoria + softChromaticGa;
const softChromaticVouMoria = softChromaticThiMoria + softChromaticGa + softChromaticVou;
const softChromaticPaMoria = softChromaticThiMoria + softChromaticGa + softChromaticVou + softChromaticPa;
const softChromaticNiMoria = softChromaticThiMoria + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi;
const softChromaticZoMoria = softChromaticThiMoria + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo;
const softChromaticKeLowMoria = softChromaticThiMoria + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow;
const softChromaticThiLowMoria = softChromaticThiMoria + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow + softChromaticThiLow;
const softChromaticGaLowMoria = softChromaticThiMoria + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow + softChromaticThiLow + softChromaticGaLow;
const softChromaticVouLowMoria = softChromaticThiMoria + softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow + softChromaticThiLow + softChromaticGaLow + softChromaticVouLow;

const hardChromaticThiMoria = 0;
const hardChromaticKeHighMoria = hardChromaticThiMoria + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh + hardChromaticVouHigh + hardChromaticGaHigh + hardChromaticThiHigh;
const hardChromaticThiHighMoria = hardChromaticThiMoria + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh + hardChromaticVouHigh + hardChromaticGaHigh;
const hardChromaticGaHighMoria = hardChromaticThiMoria + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh + hardChromaticVouHigh;
const hardChromaticVouHighMoria = hardChromaticThiMoria + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh;
const hardChromaticPaHighMoria = hardChromaticThiMoria + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh;
const hardChromaticNiHighMoria = hardChromaticThiMoria + hardChromaticThi + hardChromaticKe + hardChromaticZoHigh;
const hardChromaticZoHighMoria = hardChromaticThiMoria + hardChromaticThi + hardChromaticKe;
const hardChromaticKeMoria = hardChromaticThiMoria + hardChromaticThi;
const hardChromaticGaMoria = hardChromaticThiMoria + hardChromaticGa;
const hardChromaticVouMoria = hardChromaticThiMoria + hardChromaticGa + hardChromaticVou;
const hardChromaticPaMoria = hardChromaticThiMoria + hardChromaticGa + hardChromaticVou + hardChromaticPa;
const hardChromaticNiMoria = hardChromaticThiMoria + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi;
const hardChromaticZoMoria = hardChromaticThiMoria + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo;
const hardChromaticKeLowMoria = hardChromaticThiMoria + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow;
const hardChromaticThiLowMoria = hardChromaticThiMoria + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow + hardChromaticThiLow;
const hardChromaticGaLowMoria = hardChromaticThiMoria + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow + hardChromaticThiLow + hardChromaticGaLow;
const hardChromaticVouLowMoria = hardChromaticThiMoria + hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow + hardChromaticThiLow + hardChromaticGaLow + hardChromaticVouLow;

const enharmonicZoThiMoria = 0;
const enharmonicZoKeHighMoria = enharmonicZoThiMoria + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh + enharmonicZoNiHigh + enharmonicZoPaHigh + enharmonicZoVouHigh + enharmonicZoGaHigh + enharmonicZoThiHigh;
const enharmonicZoThiHighMoria = enharmonicZoThiMoria + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh + enharmonicZoNiHigh + enharmonicZoPaHigh + enharmonicZoVouHigh + enharmonicZoGaHigh;
const enharmonicZoGaHighMoria = enharmonicZoThiMoria + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh + enharmonicZoNiHigh + enharmonicZoPaHigh + enharmonicZoVouHigh;
const enharmonicZoVouHighMoria = enharmonicZoThiMoria + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh + enharmonicZoNiHigh + enharmonicZoPaHigh;
const enharmonicZoPaHighMoria = enharmonicZoThiMoria + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh + enharmonicZoNiHigh;
const enharmonicZoNiHighMoria = enharmonicZoThiMoria + enharmonicZoThi + enharmonicZoKe + enharmonicZoZoHigh;
const enharmonicZoZoHighMoria = enharmonicZoThiMoria + enharmonicZoThi + enharmonicZoKe;
const enharmonicZoKeMoria = enharmonicZoThiMoria + enharmonicZoThi;
const enharmonicZoGaMoria = enharmonicZoThiMoria + enharmonicZoGa;
const enharmonicZoVouMoria = enharmonicZoThiMoria + enharmonicZoGa + enharmonicZoVou;
const enharmonicZoPaMoria = enharmonicZoThiMoria + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa;
const enharmonicZoNiMoria = enharmonicZoThiMoria + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi;
const enharmonicZoZoMoria = enharmonicZoThiMoria + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi + enharmonicZoZo;
const enharmonicZoKeLowMoria = enharmonicZoThiMoria + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi + enharmonicZoZo + enharmonicZoKeLow;
const enharmonicZoThiLowMoria = enharmonicZoThiMoria + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi + enharmonicZoZo + enharmonicZoKeLow + enharmonicZoThiLow;
const enharmonicZoGaLowMoria = enharmonicZoThiMoria + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi + enharmonicZoZo + enharmonicZoKeLow + enharmonicZoThiLow + enharmonicZoGaLow;
const enharmonicZoVouLowMoria = enharmonicZoThiMoria + enharmonicZoGa + enharmonicZoVou + enharmonicZoPa + enharmonicZoNi + enharmonicZoZo + enharmonicZoKeLow + enharmonicZoThiLow + enharmonicZoGaLow + enharmonicZoVouLow;

const enharmonicGaThiMoria = 0;
const enharmonicGaKeHighMoria = enharmonicGaThiMoria + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh + enharmonicGaNiHigh + enharmonicGaPaHigh + enharmonicGaVouHigh + enharmonicGaGaHigh + enharmonicGaThiHigh;
const enharmonicGaThiHighMoria = enharmonicGaThiMoria + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh + enharmonicGaNiHigh + enharmonicGaPaHigh + enharmonicGaVouHigh + enharmonicGaGaHigh;
const enharmonicGaGaHighMoria = enharmonicGaThiMoria + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh + enharmonicGaNiHigh + enharmonicGaPaHigh + enharmonicGaVouHigh;
const enharmonicGaVouHighMoria = enharmonicGaThiMoria + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh + enharmonicGaNiHigh + enharmonicGaPaHigh;
const enharmonicGaPaHighMoria = enharmonicGaThiMoria + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh + enharmonicGaNiHigh;
const enharmonicGaNiHighMoria = enharmonicGaThiMoria + enharmonicGaThi + enharmonicGaKe + enharmonicGaZoHigh;
const enharmonicGaZoHighMoria = enharmonicGaThiMoria + enharmonicGaThi + enharmonicGaKe;
const enharmonicGaKeMoria = enharmonicGaThiMoria + enharmonicGaThi;
const enharmonicGaGaMoria = enharmonicGaThiMoria + enharmonicGaGa;
const enharmonicGaVouMoria = enharmonicGaThiMoria + enharmonicGaGa + enharmonicGaVou;
const enharmonicGaPaMoria = enharmonicGaThiMoria + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa;
const enharmonicGaNiMoria = enharmonicGaThiMoria + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi;
const enharmonicGaZoMoria = enharmonicGaThiMoria + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi + enharmonicGaZo;
const enharmonicGaKeLowMoria = enharmonicGaThiMoria + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi + enharmonicGaZo + enharmonicGaKeLow;
const enharmonicGaThiLowMoria = enharmonicGaThiMoria + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi + enharmonicGaZo + enharmonicGaKeLow + enharmonicGaThiLow;
const enharmonicGaGaLowMoria = enharmonicGaThiMoria + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi + enharmonicGaZo + enharmonicGaKeLow + enharmonicGaThiLow + enharmonicGaGaLow;
const enharmonicGaVouLowMoria = enharmonicGaThiMoria + enharmonicGaGa + enharmonicGaVou + enharmonicGaPa + enharmonicGaNi + enharmonicGaZo + enharmonicGaKeLow + enharmonicGaThiLow + enharmonicGaGaLow + enharmonicGaVouLow;

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
    }
}