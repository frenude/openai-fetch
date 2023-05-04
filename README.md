这是一个用来请求openai接口的库(可用于Node, Browser等多种环境)

Usage:

```javascript
import { OpenAiAPI } from 'openai-fetch-browser'
const configuration = new Configuration({
  apiKey: 'your key of open-ai',
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
})
}
```
