export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    tourPath: string
    locale: string
    enableMock: boolean
}

const appConfig: AppConfig = {
    apiPrefix: 'http://localhost:3943',
    authenticatedEntryPath: '/main',
    unAuthenticatedEntryPath: '/main',
    tourPath: '/',
    locale: 'en',
    enableMock: false,
}

export default appConfig
