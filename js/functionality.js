const scalesBtn = document.getElementById("scales");
const diatonicScaleBtn = document.getElementById("diatonicScale");
const softChromaticScaleBtn = document.getElementById("softChromaticScale");
const hardChromaticScaleBtn = document.getElementById("hardChromaticScale");
const enharmonicScaleBtn = document.getElementById("enharmonicScale");
const legetosScaleBtn = document.getElementById("legetosScale");
const zygosScaleBtn = document.getElementById("zygosScale");
const zygosLegetosScaleBtn = document.getElementById("zygosLegetosScale");
const klitonScaleBtn = document.getElementById("klitonScale");
const spathiKeScaleBtn = document.getElementById("spathiKeScale");
const spathiGaScaleBtn = document.getElementById("spathiGaScale");
const dtBtn = document.getElementById("dts");
const scBtn = document.getElementById("scs");
const hcBtn = document.getElementById("hcs");
const enBtn = document.getElementById("ens");
const diesis2Btn = document.getElementById("diesis2");
const diesis4Btn = document.getElementById("diesis4");
const diesis6Btn = document.getElementById("diesis6");
const diesis8Btn = document.getElementById("diesis8");
const yfesis2Btn = document.getElementById("yfesis2");
const yfesis4Btn = document.getElementById("yfesis4");
const yfesis6Btn = document.getElementById("yfesis6");
const yfesis8Btn = document.getElementById("yfesis8");
const switchBtn = document.getElementById("switch");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const volLowBtn = document.getElementById("volLow");
const volHighBtn = document.getElementById("volHigh");
const pitchBtn = document.getElementById("pitch");
const volBtn = document.getElementById("vol");
const stopBtn = document.getElementById("stop");
const keHighBtn = document.getElementById("keHigh");
const thiHighBtn = document.getElementById("thiHigh");
const gaHighBtn = document.getElementById("gaHigh");
const vouHighBtn = document.getElementById("vouHigh");
const paHighBtn = document.getElementById("paHigh");
const niHighBtn = document.getElementById("niHigh");
const zoHighBtn = document.getElementById("zoHigh");
const keBtn = document.getElementById("ke");
const thiBtn = document.getElementById("thi");
const gaBtn = document.getElementById("ga");
const vouBtn = document.getElementById("vou");
const paBtn = document.getElementById("pa");
const niBtn = document.getElementById("ni");
const zoBtn = document.getElementById("zo");
const keLowBtn = document.getElementById("keLow");
const thiLowBtn = document.getElementById("thiLow");
const gaLowBtn = document.getElementById("gaLow");
const vouLowBtn = document.getElementById("vouLow");
const footerBtn = document.getElementById("freq");

scalesBtn.onclick = () => {
    document.getElementById("scl").classList.toggle("show");
}

diatonicScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    dts();
    dtBtn.value = "diatonicScale";
    document.getElementById("scl").classList.toggle("show");
}

softChromaticScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    scs();
    dtBtn.value = "softChromaticScale";
    document.getElementById("scl").classList.toggle("show");
}

hardChromaticScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    hcs();
    dtBtn.value = "hardChromaticScale";
    document.getElementById("scl").classList.toggle("show");
}

enharmonicScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    ens();
    dtBtn.value = "enharmonicScale";
    document.getElementById("scl").classList.toggle("show");
}

legetosScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
}

zygosScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
}

zygosLegetosScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
}

klitonScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
}

spathiKeScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
}

spathiGaScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
}

dtBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    dts();
    dtBtn.value = "diatonicScale";
}

scBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    scs();
    dtBtn.value = "softChromaticScale";
}

hcBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    hcs();
    dtBtn.value = "hardChromaticScale";
}

enBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    ens();
    dtBtn.value = "enharmonicScale";
}

diesis2Btn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    if(yfesis2Btn.value=="off") {
        diesis2();
        diesis2Btn.value = "2";
        yfesis2Btn.value = "on";
    } else if(yfesis2Btn.value=="on") {
        if(diesis2Btn.value=="2") {
            alteration();
            diesis2Btn.value = "0";
            yfesis2Btn.value = "off";
        } else{
            diesis2();
            diesis2Btn.value = "2";
            yfesis2Btn.value = "on";
        }
    }
}

diesis4Btn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    if(yfesis2Btn.value=="off") {
        diesis4();
        diesis2Btn.value = "4";
        yfesis2Btn.value = "on";
    } else if(yfesis2Btn.value=="on") {
        if(diesis2Btn.value=="4") {
            alteration();
            diesis2Btn.value = "0";
            yfesis2Btn.value = "off";
        } else{
            diesis4();
            diesis2Btn.value = "4";
            yfesis2Btn.value = "on";
        }
    }
}

diesis6Btn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    if(yfesis2Btn.value=="off") {
        diesis6();
        diesis2Btn.value = "6";
        yfesis2Btn.value = "on";
    } else if(yfesis2Btn.value=="on") {
        if(diesis2Btn.value=="6") {
            alteration();
            diesis2Btn.value = "0";
            yfesis2Btn.value = "off";
        } else{
            diesis6();
            diesis2Btn.value = "6";
            yfesis2Btn.value = "on";
        }
    }
}

diesis8Btn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    if(yfesis2Btn.value=="off") {
        diesis8();
        diesis2Btn.value = "8";
        yfesis2Btn.value = "on";
    } else if(yfesis2Btn.value=="on") {
        if(diesis2Btn.value=="8") {
            alteration();
            diesis2Btn.value = "0";
            yfesis2Btn.value = "off";
        } else{
            diesis8();
            diesis2Btn.value = "8";
            yfesis2Btn.value = "on";
        }
    }
}

yfesis2Btn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    if(yfesis2Btn.value=="off") {
        yfesis2();
        diesis2Btn.value = "-2";
        yfesis2Btn.value = "on";
    } else if(yfesis2Btn.value=="on") {
        if(diesis2Btn.value=="-2") {
            alteration();
            diesis2Btn.value = "0";
            yfesis2Btn.value = "off";
        } else{
            yfesis2();
            diesis2Btn.value = "-2";
            yfesis2Btn.value = "on";
        }
    }
}

yfesis4Btn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    if(yfesis2Btn.value=="off") {
        yfesis4();
        diesis2Btn.value = "-4";
        yfesis2Btn.value = "on";
    } else if(yfesis2Btn.value=="on") {
        if(diesis2Btn.value=="-4") {
            alteration();
            diesis2Btn.value = "0";
            yfesis2Btn.value = "off";
        } else{
            yfesis4();
            diesis2Btn.value = "-4";
            yfesis2Btn.value = "on";
        }
    }
}

yfesis6Btn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    if(yfesis2Btn.value=="off") {
        yfesis6();
        diesis2Btn.value = "-6";
        yfesis2Btn.value = "on";
    } else if(yfesis2Btn.value=="on") {
        if(diesis2Btn.value=="-6") {
            alteration();
            diesis2Btn.value = "0";
            yfesis2Btn.value = "off";
        } else{
            yfesis6();
            diesis2Btn.value = "-6";
            yfesis2Btn.value = "on";
        }
    }
}

yfesis8Btn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    if(yfesis2Btn.value=="off") {
        yfesis8();
        diesis2Btn.value = "-8";
        yfesis2Btn.value = "on";
    } else if(yfesis2Btn.value=="on") {
        if(diesis2Btn.value=="-8") {
            alteration();
            diesis2Btn.value = "0";
            yfesis2Btn.value = "off";
        } else{
            yfesis8();
            diesis2Btn.value = "-8";
            yfesis2Btn.value = "on";
        }
    }
}

switchBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    if(switchBtn.value=="196") {
        switchOn();
        switchBtn.value = "392";
    } else if(switchBtn.value=="392") {
        switchOff();
        switchBtn.value = "196";
    }
}

minusBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    if(pitchBtn.value > -35) {
        plusBtn.removeAttribute("disabled");
        minusOn();
        plusOn();
        let pitchMinus = Number(pitchBtn.value) - 1;
        pitchBtn.value = pitchMinus;
    } else if(pitchBtn.value == -35) {
        minusOff();
        plusOn();
        pitchBtn.value = "-36";
        minusBtn.setAttribute("disabled", "disabled");
    }
}

plusBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    if(pitchBtn.value < 35) {
        minusBtn.removeAttribute("disabled");
        plusOn();
        minusOn();
        let pitchPlus = Number(pitchBtn.value) + 1;
        pitchBtn.value = pitchPlus;
    } else if(pitchBtn.value == 35) {
        plusOff();
        minusOn();
        pitchBtn.value = "36";
        plusBtn.setAttribute("disabled", "disabled");
    }
}

volLowBtn.onclick = () => {
    if(volBtn.value > 0.2) {
        volHighBtn.removeAttribute("disabled");
        volLowOn();
        volHighOn();
        let volMinus = Number(volBtn.value) - 0.1;
        volBtn.value = volMinus.toFixed(1);
    } else if(volBtn.value == 0.2) {
        volLowOff();
        volHighOn();
        volBtn.value = "0.1";
        volLowBtn.setAttribute("disabled", "disabled");
    }
}

volHighBtn.onclick = () => {
    if(volBtn.value < 0.9) {
        volLowBtn.removeAttribute("disabled");
        volHighOn();
        volLowOn();
        let volPlus = Number(volBtn.value) + 0.1;
        volBtn.value = volPlus.toFixed(1);
    } else if(volBtn.value == 0.9) {
        volHighOff();
        volLowOn();
        volBtn.value = "1.0";
        volHighBtn.setAttribute("disabled", "disabled");
    }
}

pitchBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
    }
    stopOff();
    minusBtn.removeAttribute("disabled");
    plusBtn.removeAttribute("disabled");
    minusOn();
    plusOn();
    pitchBtn.value = "0";
}

volBtn.onclick = () => {
    volLowBtn.removeAttribute("disabled");
    volHighBtn.removeAttribute("disabled");
    volLowOn();
    volHighOn();
    volBtn.value = "0.8";
}