const snkrsAttrs = [
    {
        _id: 0,
        attr: "id",
        _obj: "string",
        text: ""
    },
    {
        _id: 1,
        attr: "colorWay",
        _obj: "Array",
        text: ""
    },
    {
        _id: 2,
        attr: "name",
        _obj: "string",
        text: ""
    },
    {
        _id: 3,
        attr: "releaseDate",
        _obj: "timeStamp",
        text: ""
    },
    {
        _id: 4,
        attr: "tech",
        _obj: "string",
        text: ""
    }
]

const methodAttr = [
    {
        id:1,
        method: 'GET',
        route: "/api/snkrs"
    },
    {
        id:2,
        method: 'POST',
        route: "/api/snkrs"
    },
    {
        id:3,
        method: 'PUT',
        route: "/api/snkrs/:id"
    },
]

const objAttr = `{
    {"id": "38773e93bfbdf"},
    {"id": "38773e93bfbdf"},
    {"id": "38773e93bfbdf"},
    {"id": "38773e93bfbdf"},
    {"id": "38773e93bfbdf"}
 }`
    
        
    

export function attrs(){
    return snkrsAttrs
}

export function getMethod(){
    return methodAttr
}

export function getObj(){
    return objAttr
}