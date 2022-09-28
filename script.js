const url = "https://opentdb.com/api.php?amount=10&type=multiple"

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
}

getQuestions()
