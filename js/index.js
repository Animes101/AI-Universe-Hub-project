//all data fetch api

const allDAta= async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data=await res.json();

    const fullDAta=data.data.tools;

    cardsShowDisplay(fullDAta);


}

//fullDATa show display cards container

const cardsShowDisplay=(data)=>{

    data.forEach(item => {

        //console.log(item);
        const cardContainer=document.getElementById('card-container');
        //create a div
        const div=document.createElement('div');
        div.className='card card-compact w-96 bg-base-100 shadow-xl';
        div.innerHTML=`
        <figure><img class='h-[200px]' src="${item.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${item.name}</h2>
                      <ol class="list-decimal
                      ">
                        <li>${item.features[0]}</li>
                        <li>${item.features[1]}</li>
                        <li>${item.features[2]}</li>
                      </ol>
                      <hr>
                      <div class="flex justify-between">
                        <div>
                            <h1>ChatGPT</h1>
                            <span><img src="img/Vector.png" alt="">${item.published_in}</span>
                        </div>
                        <button onClick="handleDetails('${item.id}') ,my_modal_3.showModal()" class="btn"><img src="img/Frame.png" alt=""></button>
                      </div>
                    </div>

        
        `
        cardContainer.appendChild(div);
        
    });

}

//handle details

const handleDetails= async(id)=>{
    //single cards

    const res=await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data=await res.json();

    const daitls=data.data;
    showDaitls(daitls);

}
 //show details

 const showDaitls=(daitls)=>{

    console.log(daitls.features['1'].feature_name);

    //create daitls div
    const daitlsContainer=document.querySelector('.modal')

    const div=document.createElement('div');
    div.className='modal-box';
    div.innerHTML=`
    <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div class="flex">
                        <div class="w-1/2 space-y-4">
                            <p>${daitls.description}</p>
                            <div class="grid grid-cols-3">
                                <button class="btn btn-lg text-sm bg-gray-600 text-white font-thin">${daitls.pricing[0]?.price}<span>${daitls.pricing[0]?.plan}</span></button>
                                <button class="btn btn-lg text-sm bg-gray-600 text-white font-thin">${daitls.pricing[1]?.price}<span>${daitls.pricing[1]?.plan}</span></button>
                                <button class="btn btn-lg text-sm bg-gray-600 text-white font-thin">${daitls.pricing[2]?.price}<span>${daitls.pricing[2]?.plan}</span></button>
                            </div>
                            <div class="flex">
                                <div class='w-1/2'>
                                    <h2 class="text-xl font-bold">Features</h2>
                                    <ul class="list-disc">
                                        <li class="text-sm font-thin">${daitls.features['1'].feature_name}</li>
                                        <li class="text-sm font-thin">${daitls.features['2'].feature_name}</li>
                                        <li class="text-sm font-thin">${daitls.features['3'].feature_name}</li>
                                    </ul>
                                </div>
                                <div class='w-1/2'>
                                    <h2 class="text-xl font-bold">Features</h2>
                                    <ul class="list-disc">
                                        <li class="text-sm font-thin">${daitls.integrations[0]}</li>
                                        <li class="text-sm font-thin">${daitls.integrations[1]}</li>
                                        <li class="text-sm font-thin">${daitls.integrations[2]}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2 relative">
                            <img class='mt-4 h-[200px]' src="${daitls.image_link[0]}" alt="">
                            <h2>${daitls.input_output_examples[0].input}</h2>
                            <p>${daitls.input_output_examples[0].output}</p>
                            <div class="w-[100px] h-[100px] absolute right-4 top-0">
                                <h1 class='bg-green-300 p-2 rounded-md'>accuracy</h1>
                            </div>
                        </div>
                    </div>
    
    `
    daitlsContainer.appendChild(div);


 }
allDAta();