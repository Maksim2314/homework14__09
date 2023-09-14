const ThreeArray = [
    {
        name: "maksim"
    },
    {
        name: "Dmitriy"
    },
    {
        name: "Kirill"
    }
]

function fn(names) {
    for(i = 0; i < names.length; i = i + 1) {
        console.log(names[i].name)
    }
}

fn(ThreeArray)

