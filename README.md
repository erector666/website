# HealthAI Website with AI Chatbot

A modern healthcare AI website with an integrated chatbot that connects to your AI service via a secure settings interface.

## Features

- **Professional Healthcare AI Website**: Modern design with healthcare-focused styling
- **AI Chatbot Integration**: Interactive chatbot widget with settings configuration
- **Secure Configuration**: Settings stored locally in browser (localStorage)
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **No Hardcoded Secrets**: All API configuration done through UI

## Quick Start

1. **Open the website**: Simply open `public/index.html` in your web browser
2. **Configure the chatbot**: Click the chatbot icon, then click the settings gear (⚙️)
3. **Enter your API details**: Add your AI service endpoint and API key
4. **Start chatting**: The chatbot is now ready to use!

## Chatbot Configuration

To enable the chatbot functionality:

1. Click the floating chat icon in the bottom-right corner
2. Click the settings button (⚙️) in the chatbot header
3. Fill in the required settings:
   - **API Endpoint URL**: Your AI service URL (e.g., `https://your-service.ngrok-free.app`)
   - **API Key**: Your authentication key
   - **Model**: Choose your AI model (GPT-3.5, GPT-4, etc.)
   - **Max Tokens**: Maximum response length (default: 500)
   - **Temperature**: Response creativity (0.0-2.0, default: 0.7)
   - **System Prompt**: Define the AI's behavior and personality

## Security Features

- **No Secrets in Code**: All API keys and endpoints are stored securely in your browser
- **localStorage**: Settings persist between sessions but remain local to your device
- **No Server Required**: Pure client-side configuration
- **Safe Defaults**: Placeholder values that prevent accidental exposure

## File Structure

```
public/
├── index.html          # Main website with chatbot widget
├── styles.css          # Complete styling including chatbot and settings
├── script.js           # Website functionality and chatbot logic
README.md              # This documentation
```

## Chatbot Features

- **Smart Conversations**: Maintains conversation history for context
- **Professional UI**: Clean, modern chat interface with animations
- **Settings Management**: Easy configuration through UI
- **Error Handling**: Graceful fallbacks when AI service is unavailable
- **Mobile Responsive**: Optimized for all screen sizes
- **Typing Indicators**: Visual feedback during AI responses

## Customization

### Chatbot Behavior
Customize the AI's personality by modifying the "System Prompt" in the settings modal.

### Styling
All chatbot and website styles are in `public/styles.css`. Key sections:
- **Chatbot Styles**: Lines for chatbot widget appearance
- **Settings Modal**: Configuration dialog styling
- **Responsive Design**: Mobile-friendly adjustments

### API Integration
The chatbot works with OpenAI-compatible APIs. For different API formats, modify the `callAI` method in `script.js`.

## Troubleshooting

### Chatbot Shows "Please configure settings first"
1. Click the settings button (⚙️) in the chatbot header
2. Enter your API endpoint URL and key
3. Click "Save Settings"

### "Error connecting to AI service"
1. Verify your API endpoint is accessible
2. Check that your API key is correct
3. Ensure your API service is running
4. Check browser console for detailed error messages

### Settings Not Saving
1. Ensure your browser allows localStorage
2. Try refreshing the page
3. Check that both API URL and key are provided

## Running Locally

### Option 1: Direct File Access
Simply open `public/index.html` in your web browser.

### Option 2: Local Server
```bash
# Using Python
cd public
python -m http.server 8000

# Using Node.js
npx http-server public

# Using PHP
cd public
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Production Deployment

For production:

1. **Static Hosting**: Deploy the `public/` folder to any static host (Netlify, Vercel, GitHub Pages)
2. **HTTPS**: Ensure your site uses HTTPS for security
3. **API Endpoints**: Use secure, production-ready API endpoints
4. **Rate Limiting**: Consider implementing rate limiting on your AI service

## Browser Compatibility

- Chrome60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

To modify or extend the chatbot:

1. **Settings**: Modify the `SettingsManager` class in `script.js`
2. **UI**: Update the settings modal HTML in `index.html`
3. **Styling**: Adjust the CSS in `styles.css`
4. **AI Integration**: Modify the `callAI` method for different APIs

## License

Open source - feel free to modify and use for your projects!
