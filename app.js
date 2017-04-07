function BasicCard(front, back) {

	this.front = front;
	this.back = back;
}


function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;

  this.fullText = function() {
    return this.text + this.cloze;
  }
}

// TEST

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front);

console.log(firstPresident.back);



var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze);

console.log(firstPresidentCloze.text);

console.log(firstPresidentCloze.fullText);
