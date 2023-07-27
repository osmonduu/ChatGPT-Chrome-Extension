


class ChatGPTExtension {
    constructor() {
        this.handleRequest()
    }
    handleRequest() {
        chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
            if (request.action == "PROMPT1") this.promptToChatGPT(this.prompt1)
            if (request.action == "PROMPT2") this.promptToChatGPT(this.prompt2)
            console.log(request)
        })        
    }

    promptToChatGPT(prompt) {
        console.log("we are prompting to chatgpt")

        const input = document.querySelector("textarea")
        input.value = prompt
        document.querySelector("textarea~button").click()
    } 

    prompt1 = "insert into textbox here"
    prompt2 = "second prompt to insert into textbox here"

}

const CGPTExtension = new ChatGPTExtension()