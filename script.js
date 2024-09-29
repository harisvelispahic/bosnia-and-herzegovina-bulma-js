const municipalities = document.querySelectorAll(".municipality");

const cantons = document.querySelectorAll(".canton");
const regions = document.querySelectorAll(".region");
const BrčkoDistriktCantonRegion = document.querySelector("#BrčkoDistriktCantonRegion");

const entities = document.querySelectorAll(".entity");
const BrčkoDistriktEntity = document.querySelector("#BrčkoDistriktEntity");

const BosniaAndHerzegovina = document.querySelector("#BosniaAndHerzegovina"); 

function hideMunicipalities () {
    for(let m of municipalities){
        m.style.display = "none";
    }
}

function showMunicipalities () {
    for(let m of municipalities){
        m.style.display = "block";
    }
}

function hideCantons () {
    for(let c of cantons){
        c.style.display = "none";
    }
}

function showCantons () {
    for(let c of cantons){
        c.style.display = "block";
    }
}

function hideRegions () {
    for(let r of regions){
        r.style.display = "none";
    }
}

function showRegions () {
    for(let r of regions){
        r.style.display = "block";
    }
}

function hideCantonsRegions () {
    hideCantons();
    hideRegions();
    BrčkoDistriktCantonRegion.style.display = "none";
}

function showCantonsRegions () {
    showCantons();
    showRegions();
    BrčkoDistriktCantonRegion.style.display = "block";
}

function hideEntities() {
    for(let e of entities){
        e.style.display = "none";
    }
    BrčkoDistriktEntity.style.display = "none";
}

function showEntities() {
    for(let e of entities){
        e.style.display = "block";
    }
    BrčkoDistriktEntity.style.display = "block";
}

function hideBosniaAndHerzegovina() {
    BosniaAndHerzegovina.style.display = "none";
}

function showBosniaAndHerzegovina() {
    BosniaAndHerzegovina.style.display = "block";
}


document.querySelector("#showMunicipalities").addEventListener("click", ()=>{
    hideCantonsRegions();
    hideEntities();
    hideBosniaAndHerzegovina();
    showMunicipalities();
})

document.querySelector("#showCantonsRegions").addEventListener("click", ()=>{
    hideMunicipalities();
    hideEntities();
    hideBosniaAndHerzegovina();
    showCantonsRegions();
})

document.querySelector("#showEntities").addEventListener("click", ()=>{
    hideMunicipalities();
    hideCantonsRegions();
    hideBosniaAndHerzegovina();
    showEntities();
})

document.querySelector("#showBosniaAndHerzegovina").addEventListener("click", ()=>{
    hideMunicipalities();
    hideCantonsRegions();
    hideEntities();
    showBosniaAndHerzegovina();
})


for(let m of municipalities) {

    const mouseoutSVG = () => {
        // m.style.opacity = 0.7;
        m.style.fillOpacity = 0.7;
        m.style.stroke = "#bbbbbb";
    }

    m.addEventListener("mouseover", () => {
        m.style.transition = "100ms";
        m.style.fillOpacity = 1;
        m.style.stroke = "#000000";
        // m.style.strokeWidth = 3;
    })
    m.addEventListener("mouseout", mouseoutSVG);
    // m.addEventListener("click", ()=>{
    //     console.log(m.id);
    //     m.style.fillOpacity = 1;
    //     m.removeEventListener("mouseout", mouseoutSVG);
    // })
}


for(let c of cantons) {

    const mouseoutSVG = () => {
        // m.style.opacity = 0.7;
        c.style.fillOpacity = 0.7;
        c.style.stroke = "#bbbbbb";
    }

    c.addEventListener("mouseover", () => {
        c.style.transition = "100ms";
        c.style.fillOpacity = 1;
        c.style.stroke = "#000000";
        // m.style.strokeWidth = 3;
    })
    c.addEventListener("mouseout", mouseoutSVG);
}

for(let r of regions) {

    const mouseoutSVG = () => {
        // m.style.opacity = 0.7;
        r.style.fillOpacity = 0.7;
        r.style.stroke = "#bbbbbb";
    }

    r.addEventListener("mouseover", () => {
        r.style.transition = "100ms";
        r.style.fillOpacity = 1;
        r.style.stroke = "#000000";
        // m.style.strokeWidth = 3;
    })
    r.addEventListener("mouseout", mouseoutSVG);
}

BrčkoDistriktCantonRegion.addEventListener("mouseover", function() {
    this.style.transition = "100ms";
    this.style.fillOpacity = 1;
    this.style.stroke = "#000000";
})
BrčkoDistriktCantonRegion.addEventListener("mouseout", function() {
    this.style.fillOpacity = 0.7;
    this.style.stroke = "#bbbbbb";
})


for(let e of entities) {

    const mouseoutSVG = () => {
        // m.style.opacity = 0.7;
        e.style.fillOpacity = 0.7;
        e.style.stroke = "#bbbbbb";
    }

    e.addEventListener("mouseover", () => {
        e.style.transition = "100ms";
        e.style.fillOpacity = 1;
        e.style.stroke = "#000000";
        // m.style.strokeWidth = 3;
    })
    e.addEventListener("mouseout", mouseoutSVG);
}

BrčkoDistriktEntity.addEventListener("mouseover", function() {
    this.style.transition = "100ms";
    this.style.fillOpacity = 1;
    this.style.stroke = "#000000";
})
BrčkoDistriktEntity.addEventListener("mouseout", function() {
    this.style.fillOpacity = 0.7;
    this.style.stroke = "#bbbbbb";
})


BosniaAndHerzegovina.addEventListener("mouseover", function() {
    this.style.transition = "100ms";
    this.style.fillOpacity = 1;
    this.style.stroke = "#000000";
})
BosniaAndHerzegovina.addEventListener("mouseout", function() {
    this.style.fillOpacity = 0.7;
    this.style.stroke = "#bbbbbb";
})

function updateButtonsWidth() {
    const choiceButtons = document.querySelectorAll(".is-rounded");
    let widestButtonWidth = 0;
    
    for(let btn of choiceButtons) {
        widestButtonWidth = Math.max(widestButtonWidth, btn.offsetWidth);
        // console.log(btn.offsetWidth);
    }
    
    for(let btn of choiceButtons) {
        btn.style.width = widestButtonWidth + "px";
    }
}



document.body.onload = ()=>{
    document.querySelector("#buttons-div").style.display = "block";
    updateButtonsWidth();
} 



// MUNICIPALITY CARDS
document.querySelector("#Banovići").addEventListener("mousemove", (event) => {
    document.querySelector("#BanovićiCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#BanovićiCard").style.top = `${event.clientY - 200}px`;
    document.querySelector("#BanovićiCard").style.display = "block";
})
document.querySelector("#Banovići").addEventListener("mouseleave", () => {
    document.querySelector("#BanovićiCard").style.display = "none";
})

document.querySelector("[id='Banja Luka']").addEventListener("mousemove", (event) => {
    document.querySelector("#BanjaLukaCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#BanjaLukaCard").style.top = `${event.clientY - 100}px`;
    document.querySelector("#BanjaLukaCard").style.display = "block";
})
document.querySelector("[id='Banja Luka']").addEventListener("mouseleave", () => {
    document.querySelector("#BanjaLukaCard").style.display = "none";
})

document.querySelector("#Berkovići").addEventListener("mousemove", (event) => {
    document.querySelector("#BerkovićiCard").style.left = `${event.clientX - 400}px`;
    document.querySelector("#BerkovićiCard").style.top = `${event.clientY - 470}px`;
    document.querySelector("#BerkovićiCard").style.display = "block";
})
document.querySelector("#Berkovići").addEventListener("mouseleave", () => {
    document.querySelector("#BerkovićiCard").style.display = "none";
})

document.querySelector("#Bihać").addEventListener("mousemove", (event) => {
    document.querySelector("#BihaćCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#BihaćCard").style.top = `${event.clientY - 70}px`;
    document.querySelector("#BihaćCard").style.display = "block";
})
document.querySelector("#Bihać").addEventListener("mouseleave", () => {
    document.querySelector("#BihaćCard").style.display = "none";
})

document.querySelector("#Bijeljina").addEventListener("mousemove", (event) => {
    document.querySelector("#BijeljinaCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#BijeljinaCard").style.top = `${event.clientY - 70}px`;
    document.querySelector("#BijeljinaCard").style.display = "block";
})
document.querySelector("#Bijeljina").addEventListener("mouseleave", () => {
    document.querySelector("#BijeljinaCard").style.display = "none";
})

document.querySelector("#Bileća").addEventListener("mousemove", (event) => {
    document.querySelector("#BilećaCard").style.left = `${event.clientX - 400}px`;
    document.querySelector("#BilećaCard").style.top = `${event.clientY - 670}px`;
    document.querySelector("#BilećaCard").style.display = "block";
})
document.querySelector("#Bileća").addEventListener("mouseleave", () => {
    document.querySelector("#BilećaCard").style.display = "none";
})

document.querySelector("[id='Bosanska Krupa']").addEventListener("mousemove", (event) => {
    document.querySelector("#BosanskaKrupaCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#BosanskaKrupaCard").style.top = `${event.clientY - 100}px`;
    document.querySelector("#BosanskaKrupaCard").style.display = "block";
})
document.querySelector("[id='Bosanska Krupa']").addEventListener("mouseleave", () => {
    document.querySelector("#BosanskaKrupaCard").style.display = "none";
})

document.querySelector("[id='Bosanski Petrovac']").addEventListener("mousemove", (event) => {
    document.querySelector("#BosanskiPetrovacCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#BosanskiPetrovacCard").style.top = `${event.clientY - 100}px`;
    document.querySelector("#BosanskiPetrovacCard").style.display = "block";
})
document.querySelector("[id='Bosanski Petrovac']").addEventListener("mouseleave", () => {
    document.querySelector("#BosanskiPetrovacCard").style.display = "none";
})

document.querySelector("[id='Bosansko Grahovo']").addEventListener("mousemove", (event) => {
    document.querySelector("#BosanskoGrahovoCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#BosanskoGrahovoCard").style.top = `${event.clientY - 230}px`;
    document.querySelector("#BosanskoGrahovoCard").style.display = "block";
})
document.querySelector("[id='Bosansko Grahovo']").addEventListener("mouseleave", () => {
    document.querySelector("#BosanskoGrahovoCard").style.display = "none";
})

document.querySelector("[id='Bosanski Brod']").addEventListener("mousemove", (event) => {
    document.querySelector("#BosanskiBrodCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#BosanskiBrodCard").style.top = `${event.clientY - 30}px`;
    document.querySelector("#BosanskiBrodCard").style.display = "block";
})
document.querySelector("[id='Bosanski Brod']").addEventListener("mouseleave", () => {
    document.querySelector("#BosanskiBrodCard").style.display = "none";
})

document.querySelector("#Bratunac").addEventListener("mousemove", (event) => {
    document.querySelector("#BratunacCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#BratunacCard").style.top = `${event.clientY - 270}px`;
    document.querySelector("#BratunacCard").style.display = "block";
})
document.querySelector("#Bratunac").addEventListener("mouseleave", () => {
    document.querySelector("#BratunacCard").style.display = "none";
})

document.querySelector("#Brčko").addEventListener("mousemove", (event) => {
    document.querySelector("#BrčkoCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#BrčkoCard").style.top = `${event.clientY - 70}px`;
    document.querySelector("#BrčkoCard").style.display = "block";
})
document.querySelector("#Brčko").addEventListener("mouseleave", () => {
    document.querySelector("#BrčkoCard").style.display = "none";
})

document.querySelector("#Breza").addEventListener("mousemove", (event) => {
    document.querySelector("#BrezaCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#BrezaCard").style.top = `${event.clientY - 300}px`;
    document.querySelector("#BrezaCard").style.display = "block";
})
document.querySelector("#Breza").addEventListener("mouseleave", () => {
    document.querySelector("#BrezaCard").style.display = "none";
})

document.querySelector("#Bugojno").addEventListener("mousemove", (event) => {
    document.querySelector("#BugojnoCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#BugojnoCard").style.top = `${event.clientY - 300}px`;
    document.querySelector("#BugojnoCard").style.display = "block";
})
document.querySelector("#Bugojno").addEventListener("mouseleave", () => {
    document.querySelector("#BugojnoCard").style.display = "none";
})

document.querySelector("#Busovača").addEventListener("mousemove", (event) => {
    document.querySelector("#BusovačaCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#BusovačaCard").style.top = `${event.clientY - 300}px`;
    document.querySelector("#BusovačaCard").style.display = "block";
})
document.querySelector("#Busovača").addEventListener("mouseleave", () => {
    document.querySelector("#BusovačaCard").style.display = "none";
})

document.querySelector("#Bužim").addEventListener("mousemove", (event) => {
    document.querySelector("#BužimCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#BužimCard").style.top = `${event.clientY - 50}px`;
    document.querySelector("#BužimCard").style.display = "block";
})
document.querySelector("#Bužim").addEventListener("mouseleave", () => {
    document.querySelector("#BužimCard").style.display = "none";
})

document.querySelector("#Cazin").addEventListener("mousemove", (event) => {
    document.querySelector("#CazinCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#CazinCard").style.top = `${event.clientY - 50}px`;
    document.querySelector("#CazinCard").style.display = "block";
})
document.querySelector("#Cazin").addEventListener("mouseleave", () => {
    document.querySelector("#CazinCard").style.display = "none";
})

document.querySelector("[id='Centar Sarajevo']").addEventListener("mousemove", (event) => {
    document.querySelector("#CentarSarajevoCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#CentarSarajevoCard").style.top = `${event.clientY - 330}px`;
    document.querySelector("#CentarSarajevoCard").style.display = "block";
})
document.querySelector("[id='Centar Sarajevo']").addEventListener("mouseleave", () => {
    document.querySelector("#CentarSarajevoCard").style.display = "none";
})

document.querySelector("#Čajniče").addEventListener("mousemove", (event) => {
    document.querySelector("#ČajničeCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#ČajničeCard").style.top = `${event.clientY - 530}px`;
    document.querySelector("#ČajničeCard").style.display = "block";
})
document.querySelector("#Čajniče").addEventListener("mouseleave", () => {
    document.querySelector("#ČajničeCard").style.display = "none";
})

document.querySelector("#Čapljina").addEventListener("mousemove", (event) => {
    document.querySelector("#ČapljinaCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#ČapljinaCard").style.top = `${event.clientY - 600}px`;
    document.querySelector("#ČapljinaCard").style.display = "block";
})
document.querySelector("#Čapljina").addEventListener("mouseleave", () => {
    document.querySelector("#ČapljinaCard").style.display = "none";
})

document.querySelector("#Čelić").addEventListener("mousemove", (event) => {
    document.querySelector("#ČelićCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#ČelićCard").style.top = `${event.clientY - 200}px`;
    document.querySelector("#ČelićCard").style.display = "block";
})
document.querySelector("#Čelić").addEventListener("mouseleave", () => {
    document.querySelector("#ČelićCard").style.display = "none";
})

document.querySelector("#Čelinac").addEventListener("mousemove", (event) => {
    document.querySelector("#ČelinacCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#ČelinacCard").style.top = `${event.clientY - 150}px`;
    document.querySelector("#ČelinacCard").style.display = "block";
})
document.querySelector("#Čelinac").addEventListener("mouseleave", () => {
    document.querySelector("#ČelinacCard").style.display = "none";
})

document.querySelector("#Čitluk").addEventListener("mousemove", (event) => {
    document.querySelector("#ČitlukCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#ČitlukCard").style.top = `${event.clientY - 550}px`;
    document.querySelector("#ČitlukCard").style.display = "block";
})
document.querySelector("#Čitluk").addEventListener("mouseleave", () => {
    document.querySelector("#ČitlukCard").style.display = "none";
})

document.querySelector("#Derventa").addEventListener("mousemove", (event) => {
    document.querySelector("#DerventaCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#DerventaCard").style.top = `${event.clientY - 50}px`;
    document.querySelector("#DerventaCard").style.display = "block";
})
document.querySelector("#Derventa").addEventListener("mouseleave", () => {
    document.querySelector("#DerventaCard").style.display = "none";
})

document.querySelector("#Doboj").addEventListener("mousemove", (event) => {
    document.querySelector("#DobojCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#DobojCard").style.top = `${event.clientY - 110}px`;
    document.querySelector("#DobojCard").style.display = "block";
})
document.querySelector("#Doboj").addEventListener("mouseleave", () => {
    document.querySelector("#DobojCard").style.display = "none";
})

document.querySelector("#Doboj-Istok").addEventListener("mousemove", (event) => {
    document.querySelector("#DobojIstokCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#DobojIstokCard").style.top = `${event.clientY - 150}px`;
    document.querySelector("#DobojIstokCard").style.display = "block";
})
document.querySelector("#Doboj-Istok").addEventListener("mouseleave", () => {
    document.querySelector("#DobojIstokCard").style.display = "none";
})

document.querySelector("#Doboj-Jug").addEventListener("mousemove", (event) => {
    document.querySelector("#DobojJugCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#DobojJugCard").style.top = `${event.clientY - 150}px`;
    document.querySelector("#DobojJugCard").style.display = "block";
})
document.querySelector("#Doboj-Jug").addEventListener("mouseleave", () => {
    document.querySelector("#DobojJugCard").style.display = "none";
})

document.querySelector("#Dobretići").addEventListener("mousemove", (event) => {
    document.querySelector("#DobretićiCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#DobretićiCard").style.top = `${event.clientY - 200}px`;
    document.querySelector("#DobretićiCard").style.display = "block";
})
document.querySelector("#Dobretići").addEventListener("mouseleave", () => {
    document.querySelector("#DobretićiCard").style.display = "none";
})

document.querySelector("#Domaljevac-Šamac").addEventListener("mousemove", (event) => {
    document.querySelector("#DomaljevacŠamacCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#DomaljevacŠamacCard").style.top = `${event.clientY - 50}px`;
    document.querySelector("#DomaljevacŠamacCard").style.display = "block";
})
document.querySelector("#Domaljevac-Šamac").addEventListener("mouseleave", () => {
    document.querySelector("#DomaljevacŠamacCard").style.display = "none";
})

document.querySelector("[id='Donji Vakuf']").addEventListener("mousemove", (event) => {
    document.querySelector("#DonjiVakufCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#DonjiVakufCard").style.top = `${event.clientY - 300}px`;
    document.querySelector("#DonjiVakufCard").style.display = "block";
})
document.querySelector("[id='Donji Vakuf'").addEventListener("mouseleave", () => {
    document.querySelector("#DonjiVakufCard").style.display = "none";
})

document.querySelector("[id='Donji Žabar']").addEventListener("mousemove", (event) => {
    document.querySelector("#DonjiŽabarCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#DonjiŽabarCard").style.top = `${event.clientY - 50}px`;
    document.querySelector("#DonjiŽabarCard").style.display = "block";
})
document.querySelector("[id='Donji Žabar']").addEventListener("mouseleave", () => {
    document.querySelector("#DonjiŽabarCard").style.display = "none";
})

document.querySelector("#Drvar").addEventListener("mousemove", (event) => {
    document.querySelector("#DrvarCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#DrvarCard").style.top = `${event.clientY - 250}px`;
    document.querySelector("#DrvarCard").style.display = "block";
})
document.querySelector("#Drvar").addEventListener("mouseleave", () => {
    document.querySelector("#DrvarCard").style.display = "none";
})

document.querySelector("[id='Foča (FBIH)']").addEventListener("mousemove", (event) => {
    document.querySelector("#FočaFBIHCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#FočaFBIHCard").style.top = `${event.clientY - 500}px`;
    document.querySelector("#FočaFBIHCard").style.display = "block";
})
document.querySelector("[id='Foča (FBIH)']").addEventListener("mouseleave", () => {
    document.querySelector("#FočaFBIHCard").style.display = "none";
})

document.querySelector("[id='Foča (RS)']").addEventListener("mousemove", (event) => {
    document.querySelector("#FočaRSCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#FočaRSCard").style.top = `${event.clientY - 570}px`;
    document.querySelector("#FočaRSCard").style.display = "block";
})
document.querySelector("[id='Foča (RS)']").addEventListener("mouseleave", () => {
    document.querySelector("#FočaRSCard").style.display = "none";
})

document.querySelector("#Fojnica").addEventListener("mousemove", (event) => {
    document.querySelector("#FojnicaCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#FojnicaCard").style.top = `${event.clientY - 350}px`;
    document.querySelector("#FojnicaCard").style.display = "block";
})
document.querySelector("#Fojnica").addEventListener("mouseleave", () => {
    document.querySelector("#FojnicaCard").style.display = "none";
})

document.querySelector("#Gacko").addEventListener("mousemove", (event) => {
    document.querySelector("#GackoCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#GackoCard").style.top = `${event.clientY - 600}px`;
    document.querySelector("#GackoCard").style.display = "block";
})
document.querySelector("#Gacko").addEventListener("mouseleave", () => {
    document.querySelector("#GackoCard").style.display = "none";
})

document.querySelector("#Glamoč").addEventListener("mousemove", (event) => {
    document.querySelector("#GlamočCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#GlamočCard").style.top = `${event.clientY - 330}px`;
    document.querySelector("#GlamočCard").style.display = "block";
})
document.querySelector("#Glamoč").addEventListener("mouseleave", () => {
    document.querySelector("#GlamočCard").style.display = "none";
})

document.querySelector("#Goražde").addEventListener("mousemove", (event) => {
    document.querySelector("#GoraždeCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#GoraždeCard").style.top = `${event.clientY - 450}px`;
    document.querySelector("#GoraždeCard").style.display = "block";
})
document.querySelector("#Goražde").addEventListener("mouseleave", () => {
    document.querySelector("#GoraždeCard").style.display = "none";
})

document.querySelector("[id='Gornji Vakuf']").addEventListener("mousemove", (event) => {
    document.querySelector("#GornjiVakufCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#GornjiVakufCard").style.top = `${event.clientY - 350}px`;
    document.querySelector("#GornjiVakufCard").style.display = "block";
})
document.querySelector("[id='Gornji Vakuf']").addEventListener("mouseleave", () => {
    document.querySelector("#GornjiVakufCard").style.display = "none";
})

document.querySelector("#Gračanica").addEventListener("mousemove", (event) => {
    document.querySelector("#GračanicaCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#GračanicaCard").style.top = `${event.clientY - 150}px`;
    document.querySelector("#GračanicaCard").style.display = "block";
})
document.querySelector("#Gračanica").addEventListener("mouseleave", () => {
    document.querySelector("#GračanicaCard").style.display = "none";
})

document.querySelector("#Mostar").addEventListener("mousemove", (event) => {
    document.querySelector("#MostarCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#MostarCard").style.top = `${event.clientY - 470}px`;
    document.querySelector("#MostarCard").style.display = "block";
})
document.querySelector("#Mostar").addEventListener("mouseleave", () => {
    document.querySelector("#MostarCard").style.display = "none";
})

document.querySelector("#Gradačac").addEventListener("mousemove", (event) => {
    document.querySelector("#GradačacCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#GradačacCard").style.top = `${event.clientY - 70}px`;
    document.querySelector("#GradačacCard").style.display = "block";
})
document.querySelector("#Gradačac").addEventListener("mouseleave", () => {
    document.querySelector("#GradačacCard").style.display = "none";
})

document.querySelector("#Gradiška").addEventListener("mousemove", (event) => {
    document.querySelector("#GradiškaCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#GradiškaCard").style.top = `${event.clientY - 70}px`;
    document.querySelector("#GradiškaCard").style.display = "block";
})
document.querySelector("#Gradiška").addEventListener("mouseleave", () => {
    document.querySelector("#GradiškaCard").style.display = "none";
})

document.querySelector("#Grude").addEventListener("mousemove", (event) => {
    document.querySelector("#GrudeCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#GrudeCard").style.top = `${event.clientY - 570}px`;
    document.querySelector("#GrudeCard").style.display = "block";
})
document.querySelector("#Grude").addEventListener("mouseleave", () => {
    document.querySelector("#GrudeCard").style.display = "none";
})

document.querySelector("#Hadžići").addEventListener("mousemove", (event) => {
    document.querySelector("#HadžićiCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#HadžićiCard").style.top = `${event.clientY - 400}px`;
    document.querySelector("#HadžićiCard").style.display = "block";
})
document.querySelector("#Hadžići").addEventListener("mouseleave", () => {
    document.querySelector("#HadžićiCard").style.display = "none";
})

document.querySelector("[id='Han Pijesak']").addEventListener("mousemove", (event) => {
    document.querySelector("#HanPijesakCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#HanPijesakCard").style.top = `${event.clientY - 350}px`;
    document.querySelector("#HanPijesakCard").style.display = "block";
})
document.querySelector("[id='Han Pijesak']").addEventListener("mouseleave", () => {
    document.querySelector("#HanPijesakCard").style.display = "none";
})

document.querySelector("#Ilidža").addEventListener("mousemove", (event) => {
    document.querySelector("#IlidžaCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#IlidžaCard").style.top = `${event.clientY - 450}px`;
    document.querySelector("#IlidžaCard").style.display = "block";
})
document.querySelector("#Ilidža").addEventListener("mouseleave", () => {
    document.querySelector("#IlidžaCard").style.display = "none";
})

document.querySelector("#Ilijaš").addEventListener("mousemove", (event) => {
    document.querySelector("#IlijašCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#IlijašCard").style.top = `${event.clientY - 400}px`;
    document.querySelector("#IlijašCard").style.display = "block";
})
document.querySelector("#Ilijaš").addEventListener("mouseleave", () => {
    document.querySelector("#IlijašCard").style.display = "none";
})

document.querySelector("[id='Istočna Ilidža']").addEventListener("mousemove", (event) => {
    document.querySelector("#IstočnaIlidžaCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#IstočnaIlidžaCard").style.top = `${event.clientY - 450}px`;
    document.querySelector("#IstočnaIlidžaCard").style.display = "block";
})
document.querySelector("[id='Istočna Ilidža']").addEventListener("mouseleave", () => {
    document.querySelector("#IstočnaIlidžaCard").style.display = "none";
})

document.querySelector("[id='Istočni Drvar']").addEventListener("mousemove", (event) => {
    document.querySelector("#IstočniDrvarCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#IstočniDrvarCard").style.top = `${event.clientY - 150}px`;
    document.querySelector("#IstočniDrvarCard").style.display = "block";
})
document.querySelector("[id='Istočni Drvar']").addEventListener("mouseleave", () => {
    document.querySelector("#IstočniDrvarCard").style.display = "none";
})

document.querySelector("[id='Istočni Mostar']").addEventListener("mousemove", (event) => {
    document.querySelector("#IstočniMostarCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#IstočniMostarCard").style.top = `${event.clientY - 550}px`;
    document.querySelector("#IstočniMostarCard").style.display = "block";
})
document.querySelector("[id='Istočni Mostar']").addEventListener("mouseleave", () => {
    document.querySelector("#IstočniMostarCard").style.display = "none";
})

document.querySelector("[id='Istočni Stari Grad']").addEventListener("mousemove", (event) => {
    document.querySelector("#IstočniStariGradCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#IstočniStariGradCard").style.top = `${event.clientY - 450}px`;
    document.querySelector("#IstočniStariGradCard").style.display = "block";
})
document.querySelector("[id='Istočni Stari Grad']").addEventListener("mouseleave", () => {
    document.querySelector("#IstočniStariGradCard").style.display = "none";
})

document.querySelector("[id='Istočno Novo Sarajevo']").addEventListener("mousemove", (event) => {
    document.querySelector("#IstočnoNovoSarajevoCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#IstočnoNovoSarajevoCard").style.top = `${event.clientY - 450}px`;
    document.querySelector("#IstočnoNovoSarajevoCard").style.display = "block";
})
document.querySelector("[id='Istočno Novo Sarajevo']").addEventListener("mouseleave", () => {
    document.querySelector("#IstočnoNovoSarajevoCard").style.display = "none";
})

document.querySelector("#Jablanica").addEventListener("mousemove", (event) => {
    document.querySelector("#JablanicaCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#JablanicaCard").style.top = `${event.clientY - 525}px`;
    document.querySelector("#JablanicaCard").style.display = "block";
})
document.querySelector("#Jablanica").addEventListener("mouseleave", () => {
    document.querySelector("#JablanicaCard").style.display = "none";
})

document.querySelector("#Jajce").addEventListener("mousemove", (event) => {
    document.querySelector("#JajceCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#JajceCard").style.top = `${event.clientY - 300}px`;
    document.querySelector("#JajceCard").style.display = "block";
})
document.querySelector("#Jajce").addEventListener("mouseleave", () => {
    document.querySelector("#JajceCard").style.display = "none";
})

document.querySelector("#Jezero").addEventListener("mousemove", (event) => {
    document.querySelector("#JezeroCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#JezeroCard").style.top = `${event.clientY - 300}px`;
    document.querySelector("#JezeroCard").style.display = "block";
})
document.querySelector("#Jezero").addEventListener("mouseleave", () => {
    document.querySelector("#JezeroCard").style.display = "none";
})

document.querySelector("#Kakanj").addEventListener("mousemove", (event) => {
    document.querySelector("#KakanjCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#KakanjCard").style.top = `${event.clientY - 365}px`;
    document.querySelector("#KakanjCard").style.display = "block";
})
document.querySelector("#Kakanj").addEventListener("mouseleave", () => {
    document.querySelector("#KakanjCard").style.display = "none";
})

document.querySelector("#Kalesija").addEventListener("mousemove", (event) => {
    document.querySelector("#KalesijaCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#KalesijaCard").style.top = `${event.clientY - 150}px`;
    document.querySelector("#KalesijaCard").style.display = "block";
})
document.querySelector("#Kalesija").addEventListener("mouseleave", () => {
    document.querySelector("#KalesijaCard").style.display = "none";
})

document.querySelector("#Kalinovik").addEventListener("mousemove", (event) => {
    document.querySelector("#KalinovikCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#KalinovikCard").style.top = `${event.clientY - 580}px`;
    document.querySelector("#KalinovikCard").style.display = "block";
})
document.querySelector("#Kalinovik").addEventListener("mouseleave", () => {
    document.querySelector("#KalinovikCard").style.display = "none";
})

document.querySelector("#Kiseljak").addEventListener("mousemove", (event) => {
    document.querySelector("#KiseljakCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#KiseljakCard").style.top = `${event.clientY - 380}px`;
    document.querySelector("#KiseljakCard").style.display = "block";
})
document.querySelector("#Kiseljak").addEventListener("mouseleave", () => {
    document.querySelector("#KiseljakCard").style.display = "none";
})

document.querySelector("#Kladanj").addEventListener("mousemove", (event) => {
    document.querySelector("#KladanjCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#KladanjCard").style.top = `${event.clientY - 300}px`;
    document.querySelector("#KladanjCard").style.display = "block";
})
document.querySelector("#Kladanj").addEventListener("mouseleave", () => {
    document.querySelector("#KladanjCard").style.display = "none";
})

document.querySelector("#Ključ").addEventListener("mousemove", (event) => {
    document.querySelector("#KljučCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#KljučCard").style.top = `${event.clientY - 200}px`;
    document.querySelector("#KljučCard").style.display = "block";
})
document.querySelector("#Ključ").addEventListener("mouseleave", () => {
    document.querySelector("#KljučCard").style.display = "none";
})

document.querySelector("#Kneževo").addEventListener("mousemove", (event) => {
    document.querySelector("#KneževoCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#KneževoCard").style.top = `${event.clientY - 100}px`;
    document.querySelector("#KneževoCard").style.display = "block";
})
document.querySelector("#Kneževo").addEventListener("mouseleave", () => {
    document.querySelector("#KneževoCard").style.display = "none";
})

document.querySelector("#Konjic").addEventListener("mousemove", (event) => {
    document.querySelector("#KonjicCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#KonjicCard").style.top = `${event.clientY - 475}px`;
    document.querySelector("#KonjicCard").style.display = "block";
})
document.querySelector("#Konjic").addEventListener("mouseleave", () => {
    document.querySelector("#KonjicCard").style.display = "none";
})

document.querySelector("#Kostajnica").addEventListener("mousemove", (event) => {
    document.querySelector("#KostajnicaCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#KostajnicaCard").style.top = `${event.clientY - 0}px`;
    document.querySelector("#KostajnicaCard").style.display = "block";
})
document.querySelector("#Kostajnica").addEventListener("mouseleave", () => {
    document.querySelector("#KostajnicaCard").style.display = "none";
})

document.querySelector("[id='Kotor Varoš']").addEventListener("mousemove", (event) => {
    document.querySelector("#KotorVarošCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#KotorVarošCard").style.top = `${event.clientY - 200}px`;
    document.querySelector("#KotorVarošCard").style.display = "block";
})
document.querySelector("[id='Kotor Varoš']").addEventListener("mouseleave", () => {
    document.querySelector("#KotorVarošCard").style.display = "none";
})

document.querySelector("[id='Kozarska Dubica']").addEventListener("mousemove", (event) => {
    document.querySelector("#KozarskaDubicaCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#KozarskaDubicaCard").style.top = `${event.clientY - 50}px`;
    document.querySelector("#KozarskaDubicaCard").style.display = "block";
})
document.querySelector("[id='Kozarska Dubica']").addEventListener("mouseleave", () => {
    document.querySelector("#KozarskaDubicaCard").style.display = "none";
})

document.querySelector("#Kreševo").addEventListener("mousemove", (event) => {
    document.querySelector("#KreševoCard").style.left = `${event.clientX - 420}px`;
    document.querySelector("#KreševoCard").style.top = `${event.clientY - 400}px`;
    document.querySelector("#KreševoCard").style.display = "block";
})
document.querySelector("#Kreševo").addEventListener("mouseleave", () => {
    document.querySelector("#KreševoCard").style.display = "none";
})

document.querySelector("[id='Krupa na Uni']").addEventListener("mousemove", (event) => {
    document.querySelector("#KrupaNaUniCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#KrupaNaUniCard").style.top = `${event.clientY - 100}px`;
    document.querySelector("#KrupaNaUniCard").style.display = "block";
})
document.querySelector("[id='Krupa na Uni']").addEventListener("mouseleave", () => {
    document.querySelector("#KrupaNaUniCard").style.display = "none";
})

document.querySelector("[id='Kupres (FBIH)']").addEventListener("mousemove", (event) => {
    document.querySelector("#KupresFBIHCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#KupresFBIHCard").style.top = `${event.clientY - 365}px`;
    document.querySelector("#KupresFBIHCard").style.display = "block";
})
document.querySelector("[id='Kupres (FBIH)']").addEventListener("mouseleave", () => {
    document.querySelector("#KupresFBIHCard").style.display = "none";
})

document.querySelector("[id='Kupres (RS)']").addEventListener("mousemove", (event) => {
    document.querySelector("#KupresRSCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#KupresRSCard").style.top = `${event.clientY - 365}px`;
    document.querySelector("#KupresRSCard").style.display = "block";
})
document.querySelector("[id='Kupres (RS)']").addEventListener("mouseleave", () => {
    document.querySelector("#KupresRSCard").style.display = "none";
})
















// CANTON CARDS
document.querySelector("#TK").addEventListener("mousemove", (event) => {
    document.querySelector("#TKCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#TKCard").style.top = `${event.clientY - 270}px`;
    document.querySelector("#TKCard").style.display = "block";
})
document.querySelector("#TK").addEventListener("mouseleave", () => {
    document.querySelector("#TKCard").style.display = "none";
})

document.querySelector("#ZDK").addEventListener("mousemove", (event) => {
    document.querySelector("#ZDKCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#ZDKCard").style.top = `${event.clientY - 350}px`;
    document.querySelector("#ZDKCard").style.display = "block";
})
document.querySelector("#ZDK").addEventListener("mouseleave", () => {
    document.querySelector("#ZDKCard").style.display = "none";
})

document.querySelector("#KS").addEventListener("mousemove", (event) => {
    document.querySelector("#KSCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#KSCard").style.top = `${event.clientY - 450}px`;
    document.querySelector("#KSCard").style.display = "block";
})
document.querySelector("#KS").addEventListener("mouseleave", () => {
    document.querySelector("#KSCard").style.display = "none";
})

document.querySelector("#SBK").addEventListener("mousemove", (event) => {
    document.querySelector("#SBKCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#SBKCard").style.top = `${event.clientY - 400}px`;
    document.querySelector("#SBKCard").style.display = "block";
})
document.querySelector("#SBK").addEventListener("mouseleave", () => {
    document.querySelector("#SBKCard").style.display = "none";
})

document.querySelector("#USK").addEventListener("mousemove", (event) => {
    document.querySelector("#USKCard").style.left = `${event.clientX + 50}px`;
    document.querySelector("#USKCard").style.top = `${event.clientY - 200}px`;
    document.querySelector("#USKCard").style.display = "block";
})
document.querySelector("#USK").addEventListener("mouseleave", () => {
    document.querySelector("#USKCard").style.display = "none";
})

document.querySelector("#K10").addEventListener("mousemove", (event) => {
    document.querySelector("#K10Card").style.left = `${event.clientX + 20}px`;
    document.querySelector("#K10Card").style.top = `${event.clientY - 400}px`;
    document.querySelector("#K10Card").style.display = "block";
})
document.querySelector("#K10").addEventListener("mouseleave", () => {
    document.querySelector("#K10Card").style.display = "none";
})

document.querySelector("#ZHK").addEventListener("mousemove", (event) => {
    document.querySelector("#ZHKCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#ZHKCard").style.top = `${event.clientY - 550}px`;
    document.querySelector("#ZHKCard").style.display = "block";
})
document.querySelector("#ZHK").addEventListener("mouseleave", () => {
    document.querySelector("#ZHKCard").style.display = "none";
})

document.querySelector("#BPK").addEventListener("mousemove", (event) => {
    document.querySelector("#BPKCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#BPKCard").style.top = `${event.clientY - 500}px`;
    document.querySelector("#BPKCard").style.display = "block";
})
document.querySelector("#BPK").addEventListener("mouseleave", () => {
    document.querySelector("#BPKCard").style.display = "none";
})

document.querySelector("#HNK").addEventListener("mousemove", (event) => {
    document.querySelector("#HNKCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#HNKCard").style.top = `${event.clientY - 600}px`;
    document.querySelector("#HNKCard").style.display = "block";
})
document.querySelector("#HNK").addEventListener("mouseleave", () => {
    document.querySelector("#HNKCard").style.display = "none";
})

document.querySelector("#PK").addEventListener("mousemove", (event) => {
    document.querySelector("#PKCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#PKCard").style.top = `${event.clientY - 50}px`;
    document.querySelector("#PKCard").style.display = "block";
})
document.querySelector("#PK").addEventListener("mouseleave", () => {
    document.querySelector("#PKCard").style.display = "none";
})


// REGIONS
document.querySelector("[id='Regija Bijeljina']").addEventListener("mousemove", (event) => {
    document.querySelector("#RegijaBijeljinaCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#RegijaBijeljinaCard").style.top = `${event.clientY - 150}px`;
    document.querySelector("#RegijaBijeljinaCard").style.display = "block";
})
document.querySelector("[id='Regija Bijeljina']").addEventListener("mouseleave", () => {
    document.querySelector("#RegijaBijeljinaCard").style.display = "none";
})

document.querySelector("[id='Regija Doboj']").addEventListener("mousemove", (event) => {
    document.querySelector("#RegijaDobojCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#RegijaDobojCard").style.top = `${event.clientY - 50}px`;
    document.querySelector("#RegijaDobojCard").style.display = "block";
})
document.querySelector("[id='Regija Doboj']").addEventListener("mouseleave", () => {
    document.querySelector("#RegijaDobojCard").style.display = "none";
})

document.querySelector("[id='Regija Istočno Sarajevo']").addEventListener("mousemove", (event) => {
    document.querySelector("#RegijaIstočnoSarajevoCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#RegijaIstočnoSarajevoCard").style.top = `${event.clientY - 350}px`;
    document.querySelector("#RegijaIstočnoSarajevoCard").style.display = "block";
})
document.querySelector("[id='Regija Istočno Sarajevo']").addEventListener("mouseleave", () => {
    document.querySelector("#RegijaIstočnoSarajevoCard").style.display = "none";
})

document.querySelector("[id='Regija Banja Luka']").addEventListener("mousemove", (event) => {
    document.querySelector("#RegijaBanjaLukaCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#RegijaBanjaLukaCard").style.top = `${event.clientY - 50}px`;
    document.querySelector("#RegijaBanjaLukaCard").style.display = "block";
})
document.querySelector("[id='Regija Banja Luka']").addEventListener("mouseleave", () => {
    document.querySelector("#RegijaBanjaLukaCard").style.display = "none";
})

document.querySelector("[id='Regija Prijedor']").addEventListener("mousemove", (event) => {
    document.querySelector("#RegijaPrijedorCard").style.left = `${event.clientX + 20}px`;
    document.querySelector("#RegijaPrijedorCard").style.top = `${event.clientY - 50}px`;
    document.querySelector("#RegijaPrijedorCard").style.display = "block";
})
document.querySelector("[id='Regija Prijedor']").addEventListener("mouseleave", () => {
    document.querySelector("#RegijaPrijedorCard").style.display = "none";
})

document.querySelector("[id='Regija Trebinje']").addEventListener("mousemove", (event) => {
    document.querySelector("#RegijaTrebinjeCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#RegijaTrebinjeCard").style.top = `${event.clientY - 550}px`;
    document.querySelector("#RegijaTrebinjeCard").style.display = "block";
})
document.querySelector("[id='Regija Trebinje']").addEventListener("mouseleave", () => {
    document.querySelector("#RegijaTrebinjeCard").style.display = "none";
})


// BRČKO DISTRICT CANTON/REGION
document.querySelector("#BrčkoDistriktCantonRegion").addEventListener("mousemove", (event) => {
    document.querySelector("#BrčkoDistriktCantonRegionCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#BrčkoDistriktCantonRegionCard").style.top = `${event.clientY - 100}px`;
    document.querySelector("#BrčkoDistriktCantonRegionCard").style.display = "block";
})
document.querySelector("#BrčkoDistriktCantonRegion").addEventListener("mouseleave", () => {
    document.querySelector("#BrčkoDistriktCantonRegionCard").style.display = "none";
})


// ENTITY CARDS
document.querySelector("#FBIH").addEventListener("mousemove", (event) => {
    document.querySelector("#FBIHCard").style.left = `${event.clientX - 480}px`;
    document.querySelector("#FBIHCard").style.top = `${event.clientY - 400}px`;
    document.querySelector("#FBIHCard").style.display = "block";
})
document.querySelector("#FBIH").addEventListener("mouseleave", () => {
    document.querySelector("#FBIHCard").style.display = "none";
})

document.querySelector("#RS").addEventListener("mousemove", (event) => {
    document.querySelector("#RSCard").style.left = `${event.clientX - 480}px`;
    document.querySelector("#RSCard").style.top = `${event.clientY - 400}px`;
    document.querySelector("#RSCard").style.display = "block";
})
document.querySelector("#RS").addEventListener("mouseleave", () => {
    document.querySelector("#RSCard").style.display = "none";
})


// BRČKO DISTRICT ENTITY
document.querySelector("#BrčkoDistriktEntity").addEventListener("mousemove", (event) => {
    document.querySelector("#BrčkoDistriktEntityCard").style.left = `${event.clientX - 500}px`;
    document.querySelector("#BrčkoDistriktEntityCard").style.top = `${event.clientY - 100}px`;
    document.querySelector("#BrčkoDistriktEntityCard").style.display = "block";
})
document.querySelector("#BrčkoDistriktEntity").addEventListener("mouseleave", () => {
    document.querySelector("#BrčkoDistriktEntityCard").style.display = "none";
})


// BOSNIA AND HERZEGOVINA
document.querySelector("#BosniaAndHerzegovina").addEventListener("mousemove", (event) => {
    document.querySelector("#BosniaAndHerzegovinaCard").style.left = `${event.clientX - 600}px`;
    document.querySelector("#BosniaAndHerzegovinaCard").style.top = `${event.clientY - 400}px`;
    document.querySelector("#BosniaAndHerzegovinaCard").style.display = "block";
    document.querySelector("#BosniaAndHerzegovinaVideo").play();
})
document.querySelector("#BosniaAndHerzegovina").addEventListener("mouseleave", () => {
    document.querySelector("#BosniaAndHerzegovinaCard").style.display = "none";
    document.querySelector("#BosniaAndHerzegovinaVideo").currentTime = 0;
})