## Aplicação para testar websocket criado com SIGNALR com Azure Functions

Aplicação que recebe a rota de conexão do SignalR e uma rota post.

Um campo de texto para enviar o corpo da requisição e ao lado
as atualizações do websocket.

Essa aplicação se baseia [no seguinte arquivo](https://github.com/Azure-Samples/signalr-service-quickstart-serverless-chat/blob/master/docs/demo/chat-v2/index.html) utilizado na [documentação do SignalR com Azure Functions](https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-quickstart-azure-functions-javascript#clone-the-sample-application_). Também baseado [neste gist](https://gist.github.com/thecopy/5874375).

[Documentação Microsoft](https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-quickstart-rest-api)

## Azure Function com SignalR

Essa deve ser a configuração do `HOST` no arquivo `local.settings.json ` do AZURE FUNCTIONS que está situado as rotas websocket com SignalR

`"Host": { "LocalHttpPort": 7071, "CORS": "http://localhost:3000,https://azure-samples.github.io", "CORSCredentials": true }`
