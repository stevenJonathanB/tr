// just an object variable

var myhouse =
{
    rooms: 4,
    livingrooms:1,
    garden: "Yes",
    price: 20.000,
}

console.log(myhouse);


// the following is a class that is instantiated without start values. 
// There is no argument in the constructor function.

class Song {
	constructor() {
		this.name;
		this.author;
	}
	play() {
		console.log('Song is playing...!');
	}
}

const mySong = new Song();
mySong.play();

class book{
    constructor(mystartvalue)
    {
        this.title = mystartvalue.title;
        this.pages = mystartvalue.pages;
        this.averagewordsperpage = mystartvalue.averagewordsperpage;
        this.yearpublished = mystartvalue.yearpublished;
    }
    gettitle()
    {
        console.log(this.title)
    }
    averagewordcount()
    {
            return (this.pages* this.averagewordsperpage)
    }
}

const mybook = new book({
title : "The old Man and the Sea",
pages : 100,
averagewordsperpage : 200,
yearpublished :1999,
}
)

class paragraph extends book {
    constructor(mystartvalue)
    {
    super(mystartvalue);
    this.paragraphtitle = mystartvalue.paragraphtitle;
    }

}

const myparagraph = new paragraph({
    title : "The old Man and the Sea",
    pages : 100,
    averagewordsperpage : 200,
    yearpublished :1999,
    paragraphtitle : "Fishing",
    }
    )

mybook.gettitle();
console.log(mybook.averagewordcount());
console.log(myparagraph);