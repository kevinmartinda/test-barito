const wordBreak = word => {
  const dictionary = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
  let tmp_result = []
  let result = []

  const search = (word) => {
    if (word.length === 0){
      result.push([...tmp_result])
      return
    }

    dictionary.map(dict => {
      if (word.indexOf(dict) === 0){
        tmp_result.push(dict)
        search(word.slice(dict.length))
        tmp_result.pop()
      }
    })
  }

  search(word)
  return result
}

console.log(wordBreak('programit'))
console.log(wordBreak('programmerit'))