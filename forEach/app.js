


var main = document.getElementById('main');


var fruits = [
    {
        name: "Mango",
        title: "Phalon ka badshah",
        types: ["Chounsa", "Sindhri", "Langra", "Anwaratol"],
        desc: "Its form is oval, round, heart-shaped, kidney-shaped, or long and slender.",
        image:
            "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ298ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Watermelon",
        title: "Garmi ka dushman",
        types: ["Red Melon", "Green Melon"],
        desc: "Watermelon is grown in favorable climates from tropical to temperate regions.",
        image:
            "https://images.unsplash.com/photo-1621583441131-c8c190794970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Peach",
        title: "Juicy Peach",
        types: ["Swat Wala", "Quetta Wala"],
        desc: "A peach is a very sweet, juicy fruit with an edible peel hard pit in the middle. ",
        image:
            "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Cherry",
        title: "Khoon banane wali",
        types: ["Black Cherry", "Red Cherry"],
        desc: "The perfect Cherry is rounded with a slight heart shape dimple at its stem end. ",
        image:
            "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
    },
    {
        name: "Banana",
        title: "Muscle banane wali",
        types: ["Sindh Wala", "Import", "Export"],
        desc: "A banana is a curved, yellow fruit with a thick skin and soft sweet flesh. ",
        image:
            "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww",
    },
    {
        name: "Orange",
        title: "BP Controller",
        types: ["Orange", "Red Malta", "Khoon wala"],
        desc: "Oranges are citrus fruits with fragrant, leathery skin and juicy flesh. ",
        image:
            "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JhbmdlfGVufDB8fDB8fHww",
    },
    {
        name: "Orange",
        title: "BP Controller",
        types: ["Orange", "Red Malta", "Khoon wala"],
        desc: "Oranges are citrus fruits with fragrant, leathery skin and juicy flesh. ",
        image:
            "https://images.unsplash.com/photo-1600659090872-74ca5ca1023a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VhdmF8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Orange",
        title: "BP Controller",
        types: ["Orange", "Red Malta", "Khoon wala"],
        desc: "Oranges are citrus fruits with fragrant, leathery skin and juicy flesh. ",
        image:
            "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGVzfGVufDB8fDB8fHww",
    },
    {
        name: "Orange",
        title: "BP Controller",
        types: ["Orange", "Red Malta", "Khoon wala"],
        desc: "Oranges are citrus fruits with fragrant, leathery skin and juicy flesh. ",
        image:
            "https://images.unsplash.com/photo-1602920806537-38a10c952b69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvbWVncmFuYXRlfGVufDB8fDB8fHww",
    },
];







fruits.forEach(function (data, ind) {
    var element = `
      <div id="abc" class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative">
                        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${data.image}">
                        <div id="${ind}" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">${data.name}</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.title}</h1>
                            <p class="leading-relaxed">${data.types.join()}</p>
                            <p class="leading-relaxed">${data.desc}</p>
                            <button style="border: 2px solid black; padding:6px; border-radius: 12px;" onclick="updateDesc(this)">Edit</button>
                            <button style="border: 2px solid black; padding:6px; border-radius: 12px;" onclick="deleteDesc(this)">Delete</button>
                        </div>
                    </div>
                </div>`;


    main.innerHTML += element;

});



function updateDesc(element) {
    var index = element.parentElement.id;
    fruits[index].desc = prompt("Description");
    main.innerHTML = "";
    fruits.forEach(function (data, ind) {
        var element = `
      <div class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative">
                        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${data.image}">
                        <div id="${ind}" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">${data.name}</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.title}</h1>
                            <p class="leading-relaxed">${data.types.join(" , ")}</p>
                            <p class="leading-relaxed">${data.desc}</p>
                            <button style="border: 2px solid black; padding:6px; border-radius: 12px;" onclick="updateDesc(this)">Edit</button>
                            <button style="border: 2px solid black; padding:6px; border-radius: 12px;" onclick="deleteDesc(this)">Delete</button>
                        </div>
                    </div>
                </div>`;


        main.innerHTML += element;

    });




};



function deleteDesc(element) {
    var index = element.parentElement.parentElement.parentElement.id;
    console.log(index);
    fruits.splice(index, 1, );
    main.innerHTML = "";
    fruits.forEach(function (data, ind) {
        var element = `
      <div class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative">
                        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${data.image}">
                        <div id="${ind}" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">${data.name}</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.title}</h1>
                            <p class="leading-relaxed">${data.types.join(" , ")}</p>
                            <p class="leading-relaxed">${data.desc}</p>
                            <button style="border: 2px solid black; padding:6px; border-radius: 12px;" onclick="updateDesc(this)">Edit</button>
                            <button style="border: 2px solid black; padding:6px; border-radius: 12px;" onclick="deleteDesc(this)">Delete</button>
                        </div>
                    </div>
                </div>`;


        main.innerHTML += element;


    })
};