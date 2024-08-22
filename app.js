async function loadAI(seeMore){
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await res.json()
    const datum = data.data.tools;
    showAI(datum, seeMore)

}

const showAI = (techs, seeMore) =>{
    const container = document.getElementById('container')
    container.textContent = '';

    // see more btn hidden
    const see_more = document.getElementById('see-more');
    if(techs.length > 6 && !seeMore){
        see_more.classList.remove('hidden')
    } else{
        see_more.classList.add('hidden')
    }

    if(!seeMore){
        techs = techs.slice(0, 6);
    }

    // date array
    let divsDates = []
    techs.forEach(tech =>{
        // console.log(tech)
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

                    <button onclick="showDetails('${tech.id}')" class="text-blue-600 visited:text-purple-600 flex items-center ml-2">
                        <img src="direction.png" alt="" />
                    </button>
                </div>
            </div>
        `;
        container.appendChild(div)

        // store the div published date
        divsDates.push({div: div, date: new Date(tech.published_in)})
       
    });
    
    // sorting by date 
    document.getElementById('sortByDate').addEventListener('click', () =>{

        container.innerHTML = '';
        // sorrt the array by date
        divsDates.sort((a, b) => a.date - b.date);

        // append the sorted divs 
        divsDates.forEach(item => container.appendChild(item.div))
    });

}


// see more functionality
const seeMore = () =>{
    loadAI(true)
}

// modal functionality 
async function showDetails(id){
    console.log(id)
    const res =await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json();
    displayDetails(data.data)
    
    my_modal_3.showModal()
}

const displayDetails = (details) =>{
    console.log(details)
    const left_container = document.getElementById('modal-left');
    left_container.innerHTML = `
        <p>${details.description}</p>
        <div class="flex">
            <div>
                ${details.pricing[0].plan || 'No data available'}
                ${details.pricing[0].price || 'No data available'}
            </div>
            <div>
                ${details.pricing[1].plan || 'No data available'}
                ${details.pricing[1].price || 'No data available'}
            </div> 
            <div>
                ${details.pricing[2].plan || 'No data available'}
                ${details.pricing[2].price || 'No data available'}
            </div>    
        </div> 
    `     
}



loadAI()