 export default class Question{
   constructor(data) {
this.id = data.id
this.answer = data.answer
this.question = data.question 
this.value = data.value 

   }
   get Template() {
    return `<li>${this.question}</li>
    <li>${this.answer}</li>
    <li>${this.id}</li>
    <li>${this.value}</li>`;
  }
 }