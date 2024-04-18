class Dog {
    constructor(name) {
      this._name = name;  
    }
    
    introduce() { 
      console.log('This is ' + this._name + ' !');  
    }
    
    // A static method
    static bark() {
      console.log('Woof!');  
    }
  }
  
  const myDog = new Dog("BoB");
  myDog.introduce();
  myDog._name = "Raju";
  // Calling the static method
  Dog.bark();
  myDog.introduce();


// ........................

class Song {
    constructor() {
      this.title;
      this.author;
    }
    
    play() {
      console.log('Song playing!');
    }
  }
  
  const mySong = new Song();
  mySong.play();

  //...........................................

  class Song {
    constructor(title, artist) {
      this.title = title;
      this.artist = artist;
    }
  }
  
  const Song2 = new Song('tum hi ho', 'ASingh');
  console.log(mySong.title);
  
// ..............................................

// Parent class
class Media {
    constructor(info) {
      this.publishDate = info.publishDate;
      this.name = info.name;
    }
  }
  
  // Child class
  class Song extends Media {
    constructor(songData) {
      super(songData);
      this.artist = songData.artist;
    }
  }
  
  const Song3 = new Song({ 
    artist: 'Queen', 
    name: 'Bohemian Rhapsody', 
    publishDate: 1975
  });
  

  