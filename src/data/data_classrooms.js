const DATACLASSROOMS = [
      {
        id: 1,
        name: 'Miss Smith',
        parent_student: {
            1: {parents: ['John Smith', 'Sarah Smith'], student: 'Tim Smith'},
            2: {parents: ['Jane Paul', 'Paul Paul'], student: 'Steven Paul'},
            3: {parents: ['Teodor Cotter', 'Mary Cotter'], student: 'Madison Cotter'},
            4: {parents: ['Bryan Barret', 'Lindsay Smithe'], student: 'Karen Barret'},
            5: {parents: ['Viktor Holt', 'Mancy Watkins'], student: 'Kathy Holt'}
        }
      },

      {
        id: 2,
        name: 'Mr Johnson',
        parent_student: {
            1: {parents: ['Adam Sturm', 'Chris Hardy'], student: 'Fred Sturm-Hardy'},
            2: {parents: ['Vivian Glass', 'Ivo Glass'], student: 'Karen Glass'},
            3: {parents: ['Luka Stern', 'Taryn Stern'], student: 'Piers Smythe'},
            4: {parents: ['Felix Hoover', 'Mary Kartensen'], student: 'Mike Kartensen'},
            5: {parents: ['Brenna Pierce', 'Brook Pierce'], student: 'Victoria Pierce'}
        }
      }
]

export default DATACLASSROOMS;
