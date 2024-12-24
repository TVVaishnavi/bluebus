const Sleeper={
    totalseat:48,
      busType:'Sleeper',
      seats:{
        upper: {
          first: [3,4,7,8,11,12,15,16,19,20,23,24,27,28,31,32],
          second: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        lower: {
          first: [1,2,5,6,9,10,13,14,17,18,21,22,25,26,29,30],
          second: [1, 2, 3, 4, 5, 6, 7, 8]
        }
      }
}

const Setter={
    totalseat:40,
    busType:'Setter',
    seats:{
          lower: {
            first: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            ,
            second:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      
          }
    }
}

const doubleSetter={
    totalseat:80,
    busType:'doubleSetter',
    seats:{
        upper: {
            first: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            ,
            second: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
          },
          lower: {
            first: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            ,
            second:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      
          }
    }
}



export default {doubleSetter,Sleeper,Setter}