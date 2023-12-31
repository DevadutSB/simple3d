function info_table(info){
    return new Promise((resolve)=>{
        let table = '<div class="overflow-x-auto"><table class="table">'
        table+=`<tbody>
                <tr>
                    <td class="font-bold text-lg mb-2 text-center" colspan="2">Information</td>
                </tr>`

        Object.keys(info).forEach(n=>{
            table += `<tr>
                        <td class="text-darkblue-600">${n}</td>
                        <td>${info[n]}</td>
                    </tr>`
        })
        
        table += '</tbody></table></div>'
    
       return resolve(table)
    })
}

module.exports = {info_table}