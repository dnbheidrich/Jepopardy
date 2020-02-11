 export default class Question{
   constructor(data) {
this.question = data.question 
this.answer = data.answer
this.id = data.id
this.value = data.value     
   }
   get Template() {
    return `<li>${this.question}</li>`;
  }
 }