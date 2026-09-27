// let = document.getElementById('')
let start = document.getElementById('start')
let deathScreen = document.getElementById('deathScreen')
let stage1 = document.getElementById('stage1')
let stage2 = document.getElementById('stage2')
let stage3 = document.getElementById('stage3')
let stage4 = document.getElementById('stage4')
let stage5 = document.getElementById('stage5')
let events = document.getElementById('events')
let reload = document.getElementById('reload')
let robin = document.getElementById('robin')

start.addEventListener("click", () => {
    stage1.classList.remove("invisible")
    stage1.classList.add("stage_vis")
    start.classList.add("invisible")
})

// stage1
let choice1_1 = document.getElementById('choice1_1')
let choice1_2 = document.getElementById('choice1_2')
let choice1_3 = document.getElementById('choice1_3')
let stage1End = document.getElementById('stage1End')

choice1_1.addEventListener("click", () => {
    stage1.classList.remove("stage_vis")
    stage1.classList.add("invisible")
    deathScreen.classList.remove("invisible")
    deathScreen.classList.add("death")
    reload.classList.remove("invisible")
    events.textContent = "Вскоре к вам подошли несколько человек и пристрелили вас."
})
choice1_2.addEventListener("click", () => {
    stage1.classList.remove("stage_vis")
    stage1.classList.add("invisible")
    deathScreen.classList.remove("invisible")
    deathScreen.classList.add("death")
    reload.classList.remove("invisible")
    events.textContent = "Вы попытались убежать, зашли в первую попавшуюся дверь, но там были несколько человек с необычным оружием."
})
choice1_3.addEventListener("click", () => {
    stage1.classList.remove("stage_vis")
    stage1.classList.add("invisible")
    events.textContent = "Вы спрятались в чем-то похожим на шкаф. В комнату зашли несколько человек, осмотрели её, ничего не нашли и ушли, вероятнее всего решив что это была системная ошибка."
    stage1End.classList.remove("invisible")
})
stage1End.addEventListener("click", () => {
    stage1End.classList.add("invisible")
    events.textContent = ""
    stage2.classList.remove("invisible")
    stage2.classList.add("stage_vis")
})

// stage2
let choice2_1 = document.getElementById('choice2_1')
let choice2_2 = document.getElementById('choice2_2')
let choice2_3 = document.getElementById('choice2_3')
let stage2End = document.getElementById('stage2End')

choice2_1.onclick = () => {
    stage2.classList.remove("stage_vis")
    stage2.classList.add("invisible")
    deathScreen.classList.remove("invisible")
    deathScreen.classList.add("death")
    reload.classList.remove("invisible")
    events.textContent = "Несмотря на свой цвет, эта жидкость оказалась какой-то кислотой и вы прожили свои последние минуты в сильных страданиях."
}
choice2_2.onclick = () => {
    stage2.classList.remove("stage_vis")
    stage2.classList.add("invisible")
    events.textContent = "Ммм, это оказался лимонад, вам понравилось)."
    stage2End.classList.remove("invisible")
}
choice2_3.onclick = () => {
    stage2.classList.remove("stage_vis")
    stage2.classList.add("invisible")
    deathScreen.classList.remove("invisible")
    deathScreen.classList.add("death")
    reload.classList.remove("invisible")
    events.textContent = "Запись №993/3:В коридоре зон криосна был обнаружен труп, вероятнее всего убитый взрывом огненного реагента в его глотке, убитый оказался сбежавшим из камеры 993."
}
stage2End.addEventListener("click", () => {
    stage2End.classList.add("invisible")
    events.textContent = ""
    stage3.classList.remove("invisible")
    stage3.classList.add("stage_vis")
})

// stage3
let choice3_1 = document.getElementById('choice3_1')
let choice3_2 = document.getElementById('choice3_2')
let choice3_3 = document.getElementById('choice3_3')
let choice3_4 = document.getElementById('choice3_4')
let stage3End = document.getElementById('stage3End')

choice3_1.addEventListener("click", () => {
    stage3.classList.remove("stage_vis")
    stage3.classList.add("invisible")
    events.textContent = "Спустя пару минут вы смогли открыть электрощиток."
    stage3End.classList.remove("invisible")
})
choice3_2.addEventListener("click", () => {
    stage3.classList.remove("stage_vis")
    stage3.classList.add("invisible")
    deathScreen.classList.remove("invisible")
    deathScreen.classList.add("death")
    reload.classList.remove("invisible")

    events.textContent = "Вы ударили дверь. От удара вам стало больно и вы присели передохнуть. Вдруг где-то через 2 минуты дверь резко открылась, там был человек с необычной пушкой и застрелил вас."
})
choice3_3.addEventListener("click", () => {
    stage3.classList.remove("stage_vis")
    stage3.classList.add("invisible")
    deathScreen.classList.remove("invisible")
    deathScreen.classList.add("death")
    reload.classList.remove("invisible")
    events.textContent = "Вы приложили руку к сканеру, прозвучал писк и ваше тело пронзило более 1000 вольт. К сожалению ваше сердце не выдержало такой нагрузки."
})
choice3_4.addEventListener("click", () => {
    stage3.classList.remove("stage_vis")
    stage3.classList.add("invisible")
    deathScreen.classList.remove("invisible")
    deathScreen.classList.add("death")
    reload.classList.remove("invisible")
    events.textContent = "Вы ударили электрощиток, и вас ударило током. Вы умерли на месте."
})
stage3End.addEventListener("click", () => {
    stage3End.classList.add("invisible")
    events.textContent = ""
    stage4.classList.remove("invisible")
    stage4.classList.add("stage_vis")
})

// stage4
let choice4_1 = document.getElementById('choice4_1')
let choice4_2 = document.getElementById('choice4_2')
let choice4_3 = document.getElementById('choice4_3')
let stage4End = document.getElementById('stage4End')

choice4_1.onclick = () => {
    stage4.classList.remove("stage_vis")
    stage4.classList.add("invisible")
    deathScreen.classList.remove("invisible")
    deathScreen.classList.add("death")
    reload.classList.remove("invisible")
    events.textContent = "После разреза красного провода вас оглушил очень громкий писк. Через пару минут вы погибли от выстрела охранника вам в спину."
}
choice4_2.onclick = () => {
    stage4.classList.remove("stage_vis")
    stage4.classList.add("invisible")
    deathScreen.classList.remove("invisible")
    deathScreen.classList.add("death")
    reload.classList.remove("invisible")
    events.textContent = "После разреза зеленого провода щиток взорвался. А вы погибли."
}
choice4_3.onclick = () => {
    stage4.classList.remove("stage_vis")
    stage4.classList.add("invisible")
    events.textContent = "После разреза синего провода дверь открылась."
    stage4End.classList.remove("invisible")
}
stage4End.addEventListener("click", () => {
    stage4End.classList.add("invisible")
    events.textContent = ""
    stage5.classList.remove("invisible")
    stage5.classList.add("stage_vis")
})

// stage5
let choice5_1 = document.getElementById('choice5_1')
let choice5_2 = document.getElementById('choice5_2')
let choice5_3 = document.getElementById('choice5_3')
let stage5End = document.getElementById('stage5End')

choice5_1.addEventListener("click", () => {
    stage5.classList.remove("stage_vis")
    stage5.classList.add("invisible")
    deathScreen.classList.remove("invisible")
    deathScreen.classList.add("death")
    reload.classList.remove("invisible")
    events.textContent = "Вы пошли налево. Через пару минут ходьбы пол оказался слишком скользким и вы подскользнулись, вывернув шею."
})
choice5_2.addEventListener("click", () => {
    stage5.classList.remove("stage_vis")
    stage5.classList.add("invisible")
    events.textContent = "Вы пошли вперед. Сразу за поворотом была комната с эвакуационными капсулами, вы сели в одну из них и прибыли в безопасное место."
    stage5End.classList.remove("invisible")
})
choice5_3.addEventListener("click", () => {
    stage5.classList.remove("stage_vis")
    stage5.classList.add("invisible")
    deathScreen.classList.remove("invisible")
    deathScreen.classList.add("death")
    reload.classList.remove("invisible")
    events.textContent = "Вы пошли направо. Вскоре вас по дороге встретил охранник. К сожалению, вы не пережили этой встречи."
})

stage5End.addEventListener("click", () => {
    stage5End.classList.add("invisible")
    events.textContent = "Вы выжили. Конец..?"
    events.classList.add("end")
    robin.classList.remove("invisible")
})
