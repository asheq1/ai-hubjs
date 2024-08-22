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
                <h2 class="card-title">Features</h2>
                <div>
                    <ul>
                        <ol><span>1. </span>${tech?.features[0] || 'No data avaiable'}</ol>
                        <ol><span>2. </span>${tech?.features[1] || 'No data avaiable'}</ol>
                        <ol><span>3. </span>${tech?.features[2] || 'No data avaiable'}</ol>
                    </ul>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                <h2 class="text-2xl font-bold">${tech.name}</h2>
                <div class="flex">
                    <img src="frame.png" alt="" />
                    <p class='ml-2'>${tech.published_in}</p>
                    <a href="" class="text-blue-600 visited:text-purple-600 ...">
                        <img src="direction.png" alt="" />
                    </a>
                </div>
            </div>
        `;
        container.appendChild(div)
    })

}

loadAI()