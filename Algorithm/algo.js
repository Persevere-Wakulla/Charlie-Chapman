// const words = 'this is another test'
// const words2 = 'welcome to the jungle'

// function change(str){
//     const split = str.split(' ')
//     const flip = split.map(w =>{
//         if (w.length >= 5){
//             return w.split('').reverse().join('')
//         } else {
//             return w
//         }
//     })
//     return flip
// }

// console.log(change(words2))


const whoLikesIt = (arr,i) => {
  const like = []
  if(arr.length === 0){
    console.log('no one likes this');
  }else{
    console.log(`${arr[i]}`);
  }
}
 whoLikesIt()