const posts = [
    {
        "id": 1,
        "content": "Today I met a friend",
        "media": "https://media.farantube.com/img/MrBeast-e-PewDiePie-stanno-finalmente-collaborando-Le-star-di-YouTube.jpg",
        "author": {
            "name": "Felix Harvid Ulf Kjellberg | PewDiePie",
            "image": "https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png"
        },
        "likes": 419,
        "created": "2021-05-15"
    },
    {
        "id": 2,
        "content": "Can I get an HOYAAA????",
        "media": "https://www.sportszion.com/wp-content/uploads/2023/06/Jon-Jones-03042023-1000x600.jpg",
        "author": {
            "name": "Jon Jones",
            "image": "https://dmxg5wxfqgb4u.cloudfront.net/2023-03/JONES_JON_BELT_03_04.png"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Oggi continueremo con la run su Dark Souls III. Vi aspetto alla solita ora.",
        "media": "https://i.ytimg.com/vi/EKzpD09TrAo/maxresdefault.jpg",
        "author": {
            "name": "Mike of the desert (sul web)",
            "image": null
        },
        "likes": 41,
        "created": "2021-06-25"
    },
    {
        "id": 4,
        "content": "Welcome home little Björn 🐻💖",
        "media": "https://www.online-station.net/wp-content/uploads/2023/07/PewDiePie-h2.jpg",
        "author": {
            "name": "Marzia Bisognin | CutiePieMarzia",
            "image": "https://pbs.twimg.com/profile_images/1151054164446908417/s9Ezq3XL_400x400.jpg"
        },
        "likes": 668,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Oggi live su twitch alle 21:00. Siamo pronti?! Ci sarà anche un ospite...",
        "media": "https://www.drcommodore.it/wp-content/uploads/2023/02/DFmy3NSXgAAUBJT-1.jpg",
        "author": {
            "name": "Marco Gattuso | IlGattoSulTubo",
            "image": "https://yt3.googleusercontent.com/ytc/AGIKgqM2MkjsdkIyAiBT-pYDFVhb-uZmlpaC0CDdSJVTHg=s900-c-k-c0x00ffffff-no-rj"
        },
        "likes": 359,
        "created": "2021-03-05"
    }
];
//Posts container
const postsContainer = document.getElementById("container");

//Cycle forEach to print the posts
posts.forEach(singlePost => {
    console.log(singlePost);
    console.log("The names of the users");
    console.log(singlePost.author.name);
    //Print in HTML
    postsContainer.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
            <div class="post-meta__icon">
                <img class="profile-pic" src="${singlePost.author.image}" alt="User-Name">
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${singlePost.author.name}</div>
                <div class="post-meta__time">4 mesi fa</div>
            </div>
            </div>
        </div>
        <div class="post__text">${singlePost.content}</div>
        <div class="post__image">
            <img src="${singlePost.media}" alt="post-img">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="javascript:;" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${singlePost.likes}</b> persone
            </div>
            </div>
        </div>
    </div>
`
});

//Add and remove likes from the like counter
posts.forEach((obj, i) => {
    let like = document.querySelectorAll(".like-button");
    like[i].addEventListener("click", function () {
        console.log(i);
        const addRevLike = like[i].classList.toggle("like-button--liked");
        console.log(addRevLike);
        if (addRevLike === true) {
            let addlike = document.querySelectorAll("#like-counter-1");
            addlike[i].innerHTML = (obj.likes + 1);
        } else {
            let addlike = document.querySelectorAll("#like-counter-1");
            addlike[i].innerHTML = obj.likes;
        }
    })
})
