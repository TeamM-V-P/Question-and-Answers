var people = ['Benny', 'Jimmy', 'Dorithy', 'Harold','Carol', 'borkus bobulous', 'Ken', 'Fernando', 'Portia', 'spongeBob', 'Helga', 'Otis'];

var sentences = ['Duis gravida sollicitudin tortor gravida tristique. Nam porttitor auctor cursus. Praesent sed purus quis turpis convallis tristique eu vel sem. Donec dictum erat nec semper condimentum. Donec porta varius enim.', 'Morbi sagittis, massa non aliquet sodales, mi libero aliquam dui, nec pretium augue erat at nunc. Nullam dictum tempus neque vitae fringilla. Curabitur gravida purus non arcu bibendum, id tincidunt.', 'Pellentesque pharetra sapien pulvinar massa egestas blandit. Vestibulum in tellus blandit, aliquam est sit amet, fringilla nulla. Sed rhoncus mi ipsum, commodo rhoncus ante placerat quis. Morbi vitae tempus nulla.', 'Maecenas sed eros ligula. Suspendisse enim orci, cursus quis libero et, mollis lobortis justo. Vivamus augue dui, semper ac posuere nec, vulputate nec enim. Cras a nisl semper, mollis urna.', 'Ut et volutpat diam. Etiam luctus sodales erat, ac auctor odio condimentum sed. Nunc ullamcorper tortor a mauris mollis, ac venenatis neque laoreet. Donec convallis dolor at tortor pretium sodales.', 'Curabitur nec faucibus elit. Sed tellus magna, sagittis id velit ut, pulvinar viverra urna. Donec venenatis gravida tortor ac dignissim. Sed viverra, lorem id venenatis egestas, est nunc dictum mauris.'];

// var date = new Date(2020, 5, 25).toDateString()
// console.log(date)

var dates = [new Date(2020, 5, 21), new Date(2019, 8, 3), new Date(2006, 3, 15), new Date(2020, 10, 11), new Date(2020, 9, 27), new Date(2020, 3, 30)]



// for(var i = 0; i < 5; i++) {
//   console.log({
//     question: sentences[Math.floor(Math.random() * 6)],
//     author: people[Math.floor(Math.random() * 12)],
//     dateWritten: dates[Math.floor(Math.random() * 5)].toDateString(),
//     questionId: i,
//     itemId: Math.floor(Math.random() * 100)
//   });
// };

for(var i = 0; i < 5; i++) {
  console.log({
    answer: sentences[Math.floor(Math.random() * 6)],
    author: people[Math.floor(Math.random() * 12)],
    helpful: Math.floor(Math.random() * 5),
    notHelpful: Math.floor(Math.random() * 5),
    reported: Math.floor(Math.random() * 5),
    expertSupport: Boolean(Math.round(Math.random())),
    dateWritten:dates[Math.floor(Math.random() * 5)].toDateString(),
    questionId: i
  })
}


