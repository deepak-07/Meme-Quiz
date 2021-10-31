 const data = [{
         id: 1,
         question: "Which Actor is a Meme Lord ?",
         img: "",
         answers: [{
                 text: "Akshay Kumar",
                 correct: true,
             },
             {
                 text: "Salman Khan",
                 correct: false,
             },
             {
                 text: "Paresh Rawal",
                 correct: false,
             },
             {
                 text: "Pankaj Tripathi",
                 correct: false,
             },
         ],
     },
     {
         id: 2,
         question: " What is the nickname of Shardul Thakur?",
         img: "",
         answers: [{
                 text: "Sir",
                 correct: false,
             },
             {
                 text: "God",
                 correct: false,
             },
             {
                 text: "Lord ",
                 correct: true,
             },
             {
                 text: "Thakur",
                 correct: false,
             },
         ],
     },
     {
         id: 3,
         question: 'Who narrated "Wahh!! Kya scene hai" ?',
         img: "",
         answers: [{
                 text: "Munna bhaiya",
                 correct: false,
             },
             {
                 text: "Narendra Modi",
                 correct: true,
             },
             {
                 text: "Rahul Gandhi",
                 correct: false,
             },
             {
                 text: "Akshay Kumar",
                 correct: false,
             },
         ],
     },
     {
         id: 4,
         question: "MIRACLE! MIRACLE!- is from which movie ? ",
         img: "",
         answers: [{
                 text: "Golmaal",
                 correct: false,
             },
             {
                 text: "Housefull",
                 correct: false,
             },
             {
                 text: "Hera Pheri ",
                 correct: false,
             },
             {
                 text: "Welcome",
                 correct: true,
             },
         ],
     },
     {
         id: 5,
         question: "Which dialogue is related to the character ?",
         img: "./questionImage/qus5.jpg",
         answers: [{
                 text: "Budhhi bahot tez hai tumhari",
                 correct: false,
             },
             {
                 text: "Yeh karlo pehle",
                 correct: false,
             },
             {
                 text: "Toh rehne do phir",
                 correct: false,
             },
             {
                 text: "Yeh bhi theek hai",
                 correct: true,
             },
         ],
     },
     {
         id: 6,
         question: "Complete it - Ye hee! raha nhi jata ...",
         img: "",
         answers: [{
                 text: "Tadap hi aeshi hai",
                 correct: true,
             },
             {
                 text: "It's ok It's ok ",
                 correct: false,
             },
             {
                 text: "Kuch karna padega ",
                 correct: false,
             },
             {
                 text: "Bilkul nahi",
                 correct: false,
             },
         ],
     },
     {
         id: 7,
         question: "Buddy apke father aaye hain - Who said this ?",
         img: "",
         answers: [{
                 text: "Abhishek Upmanyu",
                 correct: false,
             },
             {
                 text: "Anubhav Singh Bassi",
                 correct: true,
             },
             {
                 text: "Harsh Gujral ",
                 correct: false,
             },
             {
                 text: "Rahul Dua",
                 correct: false,
             },
         ],
     },
     {
         id: 8,
         question: "If you know it, you know it",
         img: "./questionImage/qus8.jpg",
         answers: [{
                 text: "Koi aur rasta hai tere pass",
                 correct: false,
             },
             {
                 text: "Aye te chup reh re, tereko kuch maloom nahi",
                 correct: true,
             },
             {
                 text: "Yeh Baburao ka style hai ",
                 correct: false,
             },
             {
                 text: "Devmanush nikla re!",
                 correct: false,
             },
         ],
     },
 ];
 export default data.sort(() => Math.random() - 0.5);