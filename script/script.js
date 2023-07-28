
const searchInp = document.querySelector("#searchInp")

        searchInp.addEventListener("input", showResults)



function showResults() {

        // En üstteki bilgi yazısını kaldırır 
        const infoEl = document.querySelector(".info")
        if(infoEl) {
                document.body.removeChild(infoEl)

        }

        // Arama inputuna girdiğimiz şirketi, api url'inde query kısmına atar
        const value = searchInp.value

        const url = `https://api.api-ninjas.com/v1/logo?name=${value}`
        const key = "yfcsumE9vanMtCPw65dxaHG82TQbo52Z93m6nXs9"

        const options = {
                method: "GET",
                headers:
                {
                        'X-Api-Key' : key
                },
                contentType : "application/json"
        }

        getData(url,options)

        console.log(url);
}

async function getData(url,options){

        const response = await fetch(url, options)
        const data = await response.json()

                console.log(response);
                console.log(data);

        const containerEl = document.querySelector(".container")
        containerEl.innerHTML = ""

        data.map(item=>{
                containerEl.innerHTML += `
                        <div>
                                <a href="${item.image}" target="_blank">
                                        <img src="${item.image}" alt="">
                                </a>
                        </div>
                `
        })
}




