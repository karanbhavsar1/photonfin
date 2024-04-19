import ApiService from './ApiService'

export async function getCompanyDetails(params:any) {
    return ApiService.fetchData({
        url: '/weekly',
        method: 'get',
        params
    })
}
export async function getCompanyGraphDetails(params:any) {
    return ApiService.fetchData({
        url: '/daily',
        method: 'get',
        params
    })
}