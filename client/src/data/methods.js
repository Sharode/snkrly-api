const snkrsAttrs = [
    {
        _id: 0,
        attr: "id",
        _obj: "string",
        text: "Unique identifier for the object."
    },
    {
        _id: 1,
        attr: "colorWay",
        _obj: "Array",
        text: "An Array of colors that are associated with the sneaker design."
    },
    {
        _id: 2,
        attr: "name",
        _obj: "string",
        text: "The name of the sneaker"
    },
    {
        _id: 3,
        attr: "releaseDate",
        _obj: "timeStamp",
        text: "The date the sneaker was release"
    },
    {
        _id:5,
        attr: "retro",
        _obj: "boolean",
        text: "Has the value true if this sneaker and colorway was previously released."
    },
    {
        _id: 4,
        attr: "tech",
        _obj: "string",
        text: "The technology used to make the cushion for the sneaker"
    }
]

const methodAttr = [
    {
        id:0,
        method: 'GET',
        route: "/api/snkrs"
    },
    {
        id:1,
        method: 'POST',
        route: "/api/snkrs"
    },
    {
        id:2,
        method: 'PUT',
        route: "/api/snkrs/:id"
    },
]

const objAttr = [
    {
        id: 1,
        output: `"id": "5d6a1039d17fdf416cxx0f71",`
    },
    {
        id: 2,
        output: `"colorWay": ["Sail", "Obsidian-University Blue"],`
    },
    {
        id: 3,
        output: `"name": "Air Jordan 1 Retro High OG 'Obsidian'",`
    },
    {
        id: 4,
        output: `"releaseDate": 2019-09-01,`
    },
    {
        id: 6,
        output: `"retro": false`
    },
    {
        id: 5,
        output: `"tech": "Air"`
    },
]


    
        
    

export function attrs(){
    return snkrsAttrs
}

export function getMethod(){
    return methodAttr
}

export function getObj(){
    return objAttr
}