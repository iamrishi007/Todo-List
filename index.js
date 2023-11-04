let form = document.querySelector('form')
let task = document.getElementById('task')
let priority = document.getElementById('priority')
let tbody = document.querySelector('tbody')


let list = []

form.addEventListener('submit', function (e) {
          e.preventDefault()

          let obj = {}
          obj.task = task.value
          obj.priority = priority.value

          list.push(obj)
          tbody.innerText = null


          list.map((elm) => {
                    let row = document.createElement('tr')
                    let td1 = document.createElement('td')
                    let td2 = document.createElement('td')
                    td1.innerText = elm.task
                    td2.innerText = elm.priority

                    row.append(td1, td2)
                    tbody.append(row)


                    // console.log(elm)

                    if (elm.priority === "High") {
                              row.style.backgroundColor = "red";
                    } else {
                              row.style.backgroundColor = "green";
                    }


          })


          // Change
})
