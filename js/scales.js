const diatonicScaleIntervals = [12, 10, 8, 12, 12, 10, 8];
const softChromaticScaleIntervals = [8, 14, 8, 12];
const hardChromaticScaleIntervals = [6, 20, 4, 12];
const enharmonicScaleIntervals = [12, 12, 6, 12, 12, 12, 6];
const legetosScaleIntervals = [6, 9, 15, 12, 6, 9, 15];
const zygosScaleIntervals = [18, 4, 16, 4, 12, 10, 8];
const zygosLegetosScaleIntervals = [18, 4, 20, 4, 12, 6, 9];
const klitonScaleIntervals = [12, 14, 12, 4, 12, 10, 8];
const spathiKeScaleIntervals = [12, 10, 8, 20, 4, 4, 14];
const spathiGaScaleIntervals = [12, 14, 4, 4, 20, 10, 8];

const diatonicScaleNoteMap = [2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5];
const softChromaticScaleNoteMap = [3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0];
const hardChromaticScaleNoteMap = [2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
const enharmonicScaleNoteMap = [2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5];
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

const enharmonicKeHigh = enharmonicScaleIntervals[enharmonicScaleNoteMap[17]];
const enharmonicThiHigh = enharmonicScaleIntervals[enharmonicScaleNoteMap[16]];
const enharmonicGaHigh = enharmonicScaleIntervals[enharmonicScaleNoteMap[15]];
const enharmonicVouHigh = enharmonicScaleIntervals[enharmonicScaleNoteMap[14]];
const enharmonicPaHigh = enharmonicScaleIntervals[enharmonicScaleNoteMap[13]];
const enharmonicNiHigh = enharmonicScaleIntervals[enharmonicScaleNoteMap[12]];
const enharmonicZoHigh = enharmonicScaleIntervals[enharmonicScaleNoteMap[11]];
const enharmonicKe = enharmonicScaleIntervals[enharmonicScaleNoteMap[10]];
const enharmonicThi = enharmonicScaleIntervals[enharmonicScaleNoteMap[9]];
const enharmonicGa = enharmonicScaleIntervals[enharmonicScaleNoteMap[8]];
const enharmonicVou = enharmonicScaleIntervals[enharmonicScaleNoteMap[7]];
const enharmonicPa = enharmonicScaleIntervals[enharmonicScaleNoteMap[6]];
const enharmonicNi = enharmonicScaleIntervals[enharmonicScaleNoteMap[5]];
const enharmonicZo = enharmonicScaleIntervals[enharmonicScaleNoteMap[4]];
const enharmonicKeLow = enharmonicScaleIntervals[enharmonicScaleNoteMap[3]];
const enharmonicThiLow = enharmonicScaleIntervals[enharmonicScaleNoteMap[2]];
const enharmonicGaLow = enharmonicScaleIntervals[enharmonicScaleNoteMap[1]];
const enharmonicVouLow = enharmonicScaleIntervals[enharmonicScaleNoteMap[0]];

const diatonicKeHighMoria = diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh + diatonicVouHigh + diatonicGaHigh + diatonicThiHigh;
const diatonicThiHighMoria = diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh + diatonicVouHigh + diatonicGaHigh;
const diatonicGaHighMoria = diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh + diatonicVouHigh;
const diatonicVouHighMoria = diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh + diatonicPaHigh;
const diatonicPaHighMoria = diatonicThi + diatonicKe + diatonicZoHigh + diatonicNiHigh;
const diatonicNiHighMoria = diatonicThi + diatonicKe + diatonicZoHigh;
const diatonicZoHighMoria = diatonicThi + diatonicKe;
const diatonicKeMoria = diatonicThi;
const diatonicThiMoria = 0;
const diatonicGaMoria = diatonicGa;
const diatonicVouMoria = diatonicGa + diatonicVou;
const diatonicPaMoria = diatonicGa + diatonicVou + diatonicPa;
const diatonicNiMoria = diatonicGa + diatonicVou + diatonicPa + diatonicNi;
const diatonicZoMoria = diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo;
const diatonicKeLowMoria = diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow;
const diatonicThiLowMoria = diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow + diatonicThiLow;
const diatonicGaLowMoria = diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow + diatonicThiLow + diatonicGaLow;
const diatonicVouLowMoria = diatonicGa + diatonicVou + diatonicPa + diatonicNi + diatonicZo + diatonicKeLow + diatonicThiLow + diatonicGaLow + diatonicVouLow;

const softChromaticKeHighMoria = softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh + softChromaticVouHigh + softChromaticGaHigh + softChromaticThiHigh;
const softChromaticThiHighMoria = softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh + softChromaticVouHigh + softChromaticGaHigh;
const softChromaticGaHighMoria = softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh + softChromaticVouHigh;
const softChromaticVouHighMoria = softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh + softChromaticPaHigh;
const softChromaticPaHighMoria = softChromaticThi + softChromaticKe + softChromaticZoHigh + softChromaticNiHigh;
const softChromaticNiHighMoria = softChromaticThi + softChromaticKe + softChromaticZoHigh;
const softChromaticZoHighMoria = softChromaticThi + softChromaticKe;
const softChromaticKeMoria = softChromaticThi;
const softChromaticThiMoria = 0;
const softChromaticGaMoria = softChromaticGa;
const softChromaticVouMoria = softChromaticGa + softChromaticVou;
const softChromaticPaMoria = softChromaticGa + softChromaticVou + softChromaticPa;
const softChromaticNiMoria = softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi;
const softChromaticZoMoria = softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo;
const softChromaticKeLowMoria = softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow;
const softChromaticThiLowMoria = softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow + softChromaticThiLow;
const softChromaticGaLowMoria = softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow + softChromaticThiLow + softChromaticGaLow;
const softChromaticVouLowMoria = softChromaticGa + softChromaticVou + softChromaticPa + softChromaticNi + softChromaticZo + softChromaticKeLow + softChromaticThiLow + softChromaticGaLow + softChromaticVouLow;

const hardChromaticKeHighMoria = hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh + hardChromaticVouHigh + hardChromaticGaHigh + hardChromaticThiHigh;
const hardChromaticThiHighMoria = hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh + hardChromaticVouHigh + hardChromaticGaHigh;
const hardChromaticGaHighMoria = hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh + hardChromaticVouHigh;
const hardChromaticVouHighMoria = hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh + hardChromaticPaHigh;
const hardChromaticPaHighMoria = hardChromaticThi + hardChromaticKe + hardChromaticZoHigh + hardChromaticNiHigh;
const hardChromaticNiHighMoria = hardChromaticThi + hardChromaticKe + hardChromaticZoHigh;
const hardChromaticZoHighMoria = hardChromaticThi + hardChromaticKe;
const hardChromaticKeMoria = hardChromaticThi;
const hardChromaticThiMoria = 0;
const hardChromaticGaMoria = hardChromaticGa;
const hardChromaticVouMoria = hardChromaticGa + hardChromaticVou;
const hardChromaticPaMoria = hardChromaticGa + hardChromaticVou + hardChromaticPa;
const hardChromaticNiMoria = hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi;
const hardChromaticZoMoria = hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo;
const hardChromaticKeLowMoria = hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow;
const hardChromaticThiLowMoria = hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow + hardChromaticThiLow;
const hardChromaticGaLowMoria = hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow + hardChromaticThiLow + hardChromaticGaLow;
const hardChromaticVouLowMoria = hardChromaticGa + hardChromaticVou + hardChromaticPa + hardChromaticNi + hardChromaticZo + hardChromaticKeLow + hardChromaticThiLow + hardChromaticGaLow + hardChromaticVouLow;

const enharmonicKeHighMoria = enharmonicThi + enharmonicKe + enharmonicZoHigh + enharmonicNiHigh + enharmonicPaHigh + enharmonicVouHigh + enharmonicGaHigh + enharmonicThiHigh;
const enharmonicThiHighMoria = enharmonicThi + enharmonicKe + enharmonicZoHigh + enharmonicNiHigh + enharmonicPaHigh + enharmonicVouHigh + enharmonicGaHigh;
const enharmonicGaHighMoria = enharmonicThi + enharmonicKe + enharmonicZoHigh + enharmonicNiHigh + enharmonicPaHigh + enharmonicVouHigh;
const enharmonicVouHighMoria = enharmonicThi + enharmonicKe + enharmonicZoHigh + enharmonicNiHigh + enharmonicPaHigh;
const enharmonicPaHighMoria = enharmonicThi + enharmonicKe + enharmonicZoHigh + enharmonicNiHigh;
const enharmonicNiHighMoria = enharmonicThi + enharmonicKe + enharmonicZoHigh;
const enharmonicZoHighMoria = enharmonicThi + enharmonicKe;
const enharmonicKeMoria = enharmonicThi;
const enharmonicThiMoria = 0;
const enharmonicGaMoria = enharmonicGa;
const enharmonicVouMoria = enharmonicGa + enharmonicVou;
const enharmonicPaMoria = enharmonicGa + enharmonicVou + enharmonicPa;
const enharmonicNiMoria = enharmonicGa + enharmonicVou + enharmonicPa + enharmonicNi;
const enharmonicZoMoria = enharmonicGa + enharmonicVou + enharmonicPa + enharmonicNi + enharmonicZo;
const enharmonicKeLowMoria = enharmonicGa + enharmonicVou + enharmonicPa + enharmonicNi + enharmonicZo + enharmonicKeLow;
const enharmonicThiLowMoria = enharmonicGa + enharmonicVou + enharmonicPa + enharmonicNi + enharmonicZo + enharmonicKeLow + enharmonicThiLow;
const enharmonicGaLowMoria = enharmonicGa + enharmonicVou + enharmonicPa + enharmonicNi + enharmonicZo + enharmonicKeLow + enharmonicThiLow + enharmonicGaLow;
const enharmonicVouLowMoria = enharmonicGa + enharmonicVou + enharmonicPa + enharmonicNi + enharmonicZo + enharmonicKeLow + enharmonicThiLow + enharmonicGaLow + enharmonicVouLow;

function keHighNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicKeHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticKeHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticKeHighMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicKeHighMoria / 72);
    }
}

function thiHighNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicThiHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticThiHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticThiHighMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicThiHighMoria / 72);
    }
}

function gaHighNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicGaHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticGaHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticGaHighMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicGaHighMoria / 72);
    }
}

function vouHighNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicVouHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticVouHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticVouHighMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicVouHighMoria / 72);
    }
}

function paHighNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicPaHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticPaHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticPaHighMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicPaHighMoria / 72);
    }
}

function niHighNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicNiHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticNiHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticNiHighMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicNiHighMoria / 72);
    }
}

function zoHighNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicZoHighMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticZoHighMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticZoHighMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicZoHighMoria / 72);
    }
}

function keNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicKeMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticKeMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticKeMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicKeMoria / 72);
    }
}

function thiNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, diatonicThiMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, softChromaticThiMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, hardChromaticThiMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, enharmonicThiMoria / 72);
    }
}

function gaNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicGaMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticGaMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticGaMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicGaMoria / 72);
    }
}

function vouNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicVouMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticVouMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticVouMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicVouMoria / 72);
    }
}

function paNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicPaMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticPaMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticPaMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicPaMoria / 72);
    }
}

function niNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicNiMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticNiMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticNiMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicNiMoria / 72);
    }
}

function zoNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicZoMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticZoMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticZoMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicZoMoria / 72);
    }
}

function keLowNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicKeLowMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticKeLowMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticKeLowMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicKeLowMoria / 72);
    }
}

function thiLowNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicThiLowMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticThiLowMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticThiLowMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicThiLowMoria / 72);
    }
}

function gaLowNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicGaLowMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticGaLowMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticGaLowMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicGaLowMoria / 72);
    }
}

function vouLowNote() {
    if(dtBtn.value=="diatonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -diatonicVouLowMoria / 72);
    } else if(dtBtn.value=="softChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -softChromaticVouLowMoria / 72);
    } else if(dtBtn.value=="hardChromaticScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -hardChromaticVouLowMoria / 72);
    } else if(dtBtn.value=="enharmonicScale") {
        diesis4Btn.value = Number(switchBtn.value) + Number(pitchBtn.value) + Number(diesis2Btn.value);
        stopBtn.value = diesis4Btn.value * Math.pow(2, -enharmonicVouLowMoria / 72);
    }
}