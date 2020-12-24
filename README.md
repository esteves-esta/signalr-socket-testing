## Aplicação para testar websocket criado com SIGNALR com Azure Functions

Aplicação que recebe a rota de conexão do SignalR e uma rota post.
Possui um campo de texto para enviar o corpo da requisição e ao lado as atualizações do websocket.

### Passos para rodar aplicação

1. `npm i`
2. `npm start`
3. Abrir aplicação no browser em `localhost:3000`
4. Será pedido a url base da sua api para começar a conexão do websocket

Essa aplicação se baseia [no seguinte arquivo](https://github.com/Azure-Samples/signalr-service-quickstart-serverless-chat/blob/master/docs/demo/chat-v2/index.html) utilizado na [documentação do SignalR com Azure Functions](https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-quickstart-azure-functions-javascript#clone-the-sample-application_). Também baseado [neste gist](https://gist.github.com/thecopy/5874375).

[Documentação Microsoft](https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-quickstart-rest-api)

[API do signalr do pacote @microsoft](https://docs.microsoft.com/en-us/javascript/api/@microsoft/signalr/?view=signalr-js-latest)

[API do signalr do pacote @aspnet (usado neste repo)](https://docs.microsoft.com/en-us/javascript/api/@aspnet/signalr/?view=signalr-js-latest)

[Repo com exemplo com Azure Functions e SignalR e aplicado em um WebChat](https://github.com/Azure/azure-functions-signalrservice-extension/blob/dev/samples/simple-chat/js/functionapp/messages/function.json)

[Exemplo de conexão com o signalR com url e options](https://github.com/Azure/azure-functions-signalrservice-extension/blob/dev/samples/simple-chat/content/index.html#L142-#L147)

## Azure Function com SignalR

Essa deve ser a configuração do `HOST` no arquivo `local.settings.json ` do AZURE FUNCTIONS que está situado as rotas websocket com SignalR

`"Host": { "LocalHttpPort": 7071, "CORS": "http://localhost:3000,https://azure-samples.github.io", "CORSCredentials": true }`
