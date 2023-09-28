let audioCtx;

function init() {
    // Create web audio api context
    audioCtx = new AudioContext();

    // Create an Oscillator
    const oscillator = new OscillatorNode(audioCtx, {type: "square", frequency: stopBtn.value});

    // Create the node that controls the volume.
    const gainNode = new GainNode(audioCtx);
    gainNode.gain.value = volBtn.value;
    volLowBtn.addEventListener(
        "click",
        () => {
            gainNode.gain.value = volBtn.value;
        },
        false
    );

    volBtn.addEventListener(
        "click",
        () => {
            gainNode.gain.value = volBtn.value;
        },
        false
    );

    volHighBtn.addEventListener(
        "click",
        () => {
            gainNode.gain.value = volBtn.value;
        },
        false
    );

    // Connect both nodes to the speakers

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Now that everything is connected, starts the sound
    oscillator.start(0);
}

stopBtn.onclick = () => {
    audioCtx.close().then(() => {
      stopBtn.setAttribute("disabled", "disabled");
      stopOff();
    });
}

keHighBtn.onclick = () => {
    if(keHighBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            keHighBtn.value = "on";
            keHighOn();
            stopOn();
            keHighNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(keHighBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

thiHighBtn.onclick = () => {
    if(thiHighBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            thiHighBtn.value = "on";
            thiHighOn();
            stopOn();
            thiHighNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(thiHighBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

gaHighBtn.onclick = () => {
    if(gaHighBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            gaHighBtn.value = "on";
            gaHighOn();
            stopOn();
            gaHighNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(gaHighBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

vouHighBtn.onclick = () => {
    if(vouHighBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            vouHighBtn.value = "on";
            vouHighOn();
            stopOn();
            vouHighNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(vouHighBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

paHighBtn.onclick = () => {
    if(paHighBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            paHighBtn.value = "on";
            paHighOn();
            stopOn();
            paHighNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(paHighBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

niHighBtn.onclick = () => {
    if(niHighBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            niHighBtn.value = "on";
            niHighOn();
            stopOn();
            niHighNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(niHighBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

zoHighBtn.onclick = () => {
    if(zoHighBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            zoHighBtn.value = "on";
            zoHighOn();
            stopOn();
            zoHighNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(zoHighBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

keBtn.onclick = () => {
    if(keBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            keBtn.value = "on";
            keOn();
            stopOn();
            keNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(keBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

thiBtn.onclick = () => {
    if(thiBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            thiBtn.value = "on";
            thiOn();
            stopOn();
            thiNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(thiBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

gaBtn.onclick = () => {
    if(gaBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            gaBtn.value = "on";
            gaOn();
            stopOn();
            gaNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(gaBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

vouBtn.onclick = () => {
    if(vouBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            vouBtn.value = "on";
            vouOn();
            stopOn();
            vouNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(vouBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

paBtn.onclick = () => {
    if(paBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            paBtn.value = "on";
            paOn();
            stopOn();
            paNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(paBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

niBtn.onclick = () => {
    if(niBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            niBtn.value = "on";
            niOn();
            stopOn();
            niNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(niBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

zoBtn.onclick = () => {
    if(zoBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            zoBtn.value = "on";
            zoOn();
            stopOn();
            zoNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(zoBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

keLowBtn.onclick = () => {
    if(keLowBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            keLowBtn.value = "on";
            keLowOn();
            stopOn();
            keLowNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(keLowBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

thiLowBtn.onclick = () => {
    if(thiLowBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            thiLowBtn.value = "on";
            thiLowOn();
            stopOn();
            thiLowNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(thiLowBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

gaLowBtn.onclick = () => {
    if(gaLowBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            gaLowBtn.value = "on";
            gaLowOn();
            stopOn();
            gaLowNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(gaLowBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}

vouLowBtn.onclick = () => {
    if(vouLowBtn.value=="off") {
        if (!audioCtx || audioCtx.state === "closed" || audioCtx.state === "running") {
            if (audioCtx && audioCtx.state === "running") {
                audioCtx.close();
            }
            vouLowBtn.value = "on";
            vouLowOn();
            stopOn();
            vouLowNote();
            init();
            stopBtn.removeAttribute("disabled");
            footerBtn.innerHTML = Number(stopBtn.value).toFixed(1);
        }
    } else if(vouLowBtn.value=="on") {
        stopOff();
        audioCtx.close();
        stopBtn.setAttribute("disabled", "disabled");
    }
}