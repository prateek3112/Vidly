export const genres =[
    {_id : "s4d5f6g7h8j9k" ,
     name : "Action"
    },
    {_id : "z3w4e5r6ty7uni" ,
     name : "Fantasy"
    },
    {_id : "s4d5f4esdrftg" ,
     name : "Romantic"
    }
];

export function getGenres() {
    return genres.filter(g =>g)
}