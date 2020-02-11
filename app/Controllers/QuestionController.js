import QuestionService from "../Services/QuestionService.js"
import _store from "../store.js";

//Private
function _draw() {
  let questions = _store.State.questions
  let template = "";
 template += questions
 document.getElementById("questions").innerHTML = template;
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