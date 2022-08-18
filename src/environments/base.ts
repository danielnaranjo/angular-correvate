export const base = {
    salt: '',
    env: 'dev',
    sentryDSN: '',
    googleAnalyticsKey: '',
    apiUrl: {
        //url: 'https://petstore.swagger.io/v2',
        url: '/api',
        isRequiredHeader: false,
        requiredHeader: {
            'special-key': '1234567890',
        }
    },
    integrationUrl: '',
    cloudinaryApi: '',
    branding: 'boilerplate',
    jsonBinKey: '',
    webSocketServer: {
        // wss://socketsbay.com/wss/v2/[ChannelId]/[ApiKey]/
        // Copy the WebSocket server URL below, replace CHANNEL_ID (it can be any positive integer) and API_KEY
        url: 'wss://socketsbay.com/wss/v2',
        channel: '',
        key: ''
    },
    emailService: {
        provider: '',
        publicKey: ''
    }
}