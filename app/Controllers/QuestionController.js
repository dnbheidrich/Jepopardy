import QuestionService from "../Services/QuestionService.js"
import _store from "../store.js";

//Private
// dot notation wont work here but bracket does
function _draw() {
  let questions = _store.State.questions['Template']
  // let template = "";
//  template += questions
 document.getElementById("questions").innerHTML = questions;
}

//Public
export default class QuestionController {
  constructor() {
    _store.subscribe("questions", _draw);
  }

  getApiQuestion() {
    QuestionService.getApiQuestion();
  }
}