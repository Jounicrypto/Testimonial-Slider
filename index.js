const testimonials = [
    {
        name:"Nicolea N",
        photoUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        text:"Thanks to recruiting, we've just launched our 5th website! The service was excellent. Thanks guys, keep up the good work!"
    },
    {
        name:"Anallese R.",
        photoUrl:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        text:"It's really wonderful. I could probably go into sales for you. This is simply unbelievable! Nice work on your recruiting."
    },
    {
        name:"Marko X.",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        text:"Recruiting is the most valuable business resource we have EVER purchased. Definitely worth the investment. You guys rock!"
    },
    {
        name:"Aron Y.",
        photoUrl:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        text:"I don't always clop, but when I do, it's because of recruiting. We can't understand how we've been living without recruiting. I would gladly pay over 600 dollars for recruiting."
    }
];

let idx = 0;

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

updateTestimonial()

function updateTestimonial(){
    const{name, photoUrl, text} =
    testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 8000)
}