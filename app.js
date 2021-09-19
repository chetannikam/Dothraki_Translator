var input=document.querySelector("#input_text_area")
var btn=document.querySelector("#translate-btn")
var output=document.querySelector("#output_text_area")

function construct_URL(input_text,serverURL)
{
return serverURL+"?"+"text="+input_text
}
function processing()
{
    var input_text=input.value
    var serverURL="https://api.funtranslations.com/translate/pirate.json"
    // var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
    final_url=construct_URL(input_text,serverURL)
    console.log(final_url)
    fetch(final_url).then(response=>response.json()).then(json=>{
        var op=json.contents.translated;
        output.innerText=op;
    })
};

btn.addEventListener("click",processing)

