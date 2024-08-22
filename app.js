async function loadAI(){
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await res.json()
    const datum = data.data.tools;
    showAI(datum)

}

const showAI = (techs) =>{
    const container = document.getElementById('container')

    techs = techs.slice(0, 6);
    
    techs.forEach(tech =>{
        console.log(tech)
        const div = document.createElement('div');
        div.classList = `card card-compact bg-base-100 shadow-xl`
        div.innerHTML = `
        <figure>
                <img
                src="${tech.image}"
                alt="" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
        container.appendChild(div)

    })

}

loadAI()