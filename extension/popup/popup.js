const btnPrompt1 = document.querySelector("#btn-prompt")
const btnPrompt2 = document.querySelector("#btn-render")
const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true }); //stores current tab information into object currentTab. 
//[currentTab] is equivalent to selecting first element in array

btnPrompt1.addEventListener("click", async () => {
    await chrome.tabs.sendMessage(currentTab.id, { action: "PROMPT1" }); //send message to the current tab open
    
})

btnPrompt2.addEventListener("click", async () => {
    await chrome.tabs.sendMessage(currentTab.id, { action: "PROMPT2" }); //send message to the current tab open
})