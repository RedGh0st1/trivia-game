const url = "https://opentdb.com/api.php?amount=10&type=multiple"

// Getters
const question = document.querySelector("#question")
const answers = document.querySelector("#answer")
const next = document.querySelector("#next")
// console.log(question, answer, next)
let updatedResults

let index = 0

const updateQuestion = () => {
  for (let i = 0; i < 4; i++) {
    const div = document.createElement("div")
    const randomNum = Math.floor(
      Math.random() * updatedResults[index].incorrect_answers.length
    )
    div.innerHTML = updatedResults[index].incorrect_answers.splice(randomNum, 1)
    answers.append(div)
  }
}

const getQuestions = async () => {
  //   fetch(`${url}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => console.log(err))

  const qs = await fetch(`${url}`)
  const qsJson = await qs.json()
  console.log(qsJson)

  updatedResults = qsJson.results.map((quest) => {
    quest.incorrect_answers.push(quest.correct_answer)
    return quest
  })
  console.log(updatedResults)
  question.innerHTML = updatedResults[index].question
}

next.addEventListener("click", () => {
  index++
  answers.innerHTML = ""
  //   question.innerHTML = updatedResults[index].question
  updateQuestion()
})
getQuestions()
