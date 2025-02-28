export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    tourPath: string
    locale: string
    enableMock: boolean
}

const appConfig: AppConfig = {
    apiPrefix: 'http://ec2-34-207-235-171.compute-1.amazonaws.com',
    authenticatedEntryPath: '/main',
    unAuthenticatedEntryPath: '/main',
    tourPath: '/',
    locale: 'en',
    enableMock: false,
}

export default appConfig
