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
    dts();
    dtBtn.value = "diatonicScale";
    document.getElementById("scl").classList.toggle("show");
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

softChromaticScaleBtn.onclick = () => {
    scs();
    dtBtn.value = "softChromaticScale";
    document.getElementById("scl").classList.toggle("show");
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

hardChromaticScaleBtn.onclick = () => {
    hcs();
    dtBtn.value = "hardChromaticScale";
    document.getElementById("scl").classList.toggle("show");
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

enharmonicScaleBtn.onclick = () => {
    ens();
    dtBtn.value = "enharmonicScale";
    document.getElementById("scl").classList.toggle("show");
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

legetosScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

zygosScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

zygosLegetosScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

klitonScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

spathiKeScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

spathiGaScaleBtn.onclick = () => {
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

dtBtn.onclick = () => {
    dts();
    dtBtn.value = "diatonicScale";
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

scBtn.onclick = () => {
    scs();
    dtBtn.value = "softChromaticScale";
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

hcBtn.onclick = () => {
    hcs();
    dtBtn.value = "hardChromaticScale";
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

enBtn.onclick = () => {
    ens();
    dtBtn.value = "enharmonicScale";
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

diesis2Btn.onclick = () => {
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
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

diesis4Btn.onclick = () => {
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
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

diesis6Btn.onclick = () => {
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
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

diesis8Btn.onclick = () => {
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
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

yfesis2Btn.onclick = () => {
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
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

yfesis4Btn.onclick = () => {
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
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

yfesis6Btn.onclick = () => {
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
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

yfesis8Btn.onclick = () => {
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
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

switchBtn.onclick = () => {
    if(switchBtn.value=="196") {
        switchOn();
        switchBtn.value = "392";
    } else if(switchBtn.value=="392") {
        switchOff();
        switchBtn.value = "196";
    }
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

minusBtn.onclick = () => {
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
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

plusBtn.onclick = () => {
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
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
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
    minusBtn.removeAttribute("disabled");
    plusBtn.removeAttribute("disabled");
    minusOn();
    plusOn();
    pitchBtn.value = "0";
    if (audioCtx && audioCtx.state === "running") {
        audioCtx.close();
        if(keHighBtn.value=="on") {
            keHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiHighBtn.value=="on") {
            thiHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaHighBtn.value=="on") {
            gaHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouHighBtn.value=="on") {
            vouHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paHighBtn.value=="on") {
            paHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niHighBtn.value=="on") {
            niHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoHighBtn.value=="on") {
            zoHighNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keBtn.value=="on") {
            keNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiBtn.value=="on") {
            thiNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaBtn.value=="on") {
            gaNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouBtn.value=="on") {
            vouNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(paBtn.value=="on") {
            paNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(niBtn.value=="on") {
            niNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(zoBtn.value=="on") {
            zoNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(keLowBtn.value=="on") {
            keLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(thiLowBtn.value=="on") {
            thiLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(gaLowBtn.value=="on") {
            gaLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        } else if(vouLowBtn.value=="on") {
            vouLowNote();
            init();
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    }
}

volBtn.onclick = () => {
    volLowBtn.removeAttribute("disabled");
    volHighBtn.removeAttribute("disabled");
    volLowOn();
    volHighOn();
    volBtn.value = "0.8";
}