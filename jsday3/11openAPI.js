
document.getElementById('search').addEventListener('click', function(){
    const query = document.getElementById('query').value
    const page= document.getElementById('page').value
    const size = document.getElementById('size').value
    let sort = document.getElementById('query').checked
    if(sort == true)sort = 'accuracy'
    else sort= 'recency'

    alert(`query=${query}&page=${page}&size=${size}&sort{sort}`)
    search(query,page,size,sort)
})

const search = function(v1,v2,v3,v4){
    

    
        const xhr = new XMLHttpRequest();

        xhr.open("GET", "https://dapi.kako.com/v2/search/vclip?query=${v1}&page=${v2}&size=${v3}&sort=${v4}");
        xhr.setRequestHeader("Autohrization","KakoAK 4bd09a188b7e8e97758f1e397a7bde52");
        xhr.send();
        xhr.onload = function(){
            document.getElementById('result').innerHTML=xhr.response

            let $response = JSON.parse(xhr.response)
            let result = $response.document
            result.forEach(element => {
                
                const $ul = document.createElement('ul')
                const temp = `<li>${element.author}</li>
                <li>${element.title}</li> 
                <li>${element.datetime}</li> 
                <li>${element.playtime}</li>
                <li> <a heref> </li>`

                
                $ul.innerHTML = temp
                document.getElementById('list').appendChild($ul)
            });

        }
    }
    search('twice',1,10,'accuracy')