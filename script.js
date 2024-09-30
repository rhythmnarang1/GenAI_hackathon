// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    const chatBox = document.getElementById('chat-box');

    if (userInput !== "") {
        // Add the user's message to the chat box
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);

        // Clear the input field after sending the message
        document.getElementById('user-input').value = "";

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;

        // Add a bot response after a short delay
        setTimeout(() => {
            generateBotResponse(userInput, chatBox);
        }, 1000); // 1 second delay for a more realistic feel
    }
}

// Function to generate a basic bot response
function generateBotResponse(userInput, chatBox) {
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';

    // Basic bot response logic
    const response = getBotResponse(userInput);
    botMessage.textContent = response;

    // Add the bot's message to the chat box
    chatBox.appendChild(botMessage);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to generate bot responses based on user input
function getBotResponse(userInput) {
    // Basic predefined responses
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (lowerCaseInput.includes("sad") || lowerCaseInput.includes("feeling down")) {
        return "I'm sorry you're feeling this way. It's okay to have tough days. I'm here to listen.";
    } else if (lowerCaseInput.includes("stress") || lowerCaseInput.includes("anxious")) {
        return "It sounds like you're feeling overwhelmed. Would you like some tips to help manage stress?";
    } else if (lowerCaseInput.includes("help") || lowerCaseInput.includes("support")) {
        return "I'm here to support you. Please share more about what's on your mind.";
    } else {
        return "Thank you for sharing. How can I assist you further?";
    }
}
