import _store from "../store.js"
import Question from "../Models/Question.js"

const _api = axios.create({
  baseURL: "http://jservice.io/api/random",
  timeout: 13000
});

class QuestionService {
  constructor(){

  }
  getApiQuestion(){
    _api.get("")
    .then(response =>{

      let question = new Question(response.data[0]);
      
      _store.commit("questions", question)
    })
    .catch(error => {
      console.error(error);
    })
  }
}

const SERVICE = new QuestionService();
export default SERVICE;


