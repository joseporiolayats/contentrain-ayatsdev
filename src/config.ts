import type { NavItems } from './types'
import configData from './data/contentrain/config/config.json'
const data = configData[0]
const items = data.navItems.map(x => {
    return {
        [x.title]: {
            title: x.title,
            path: x.path
        }
    }
})
export const NAV_ITEMS: NavItems = Object.assign({}, ...items)

export const SITE = {
    // Your site's detail?
    name: data.site.name,
    title: data.site.title,
    description: data.site.description,
    url: data.site.url,
    githubUrl: data.site.githubUrl,
    listDrafts: data.site.listDrafts
    // description ?
}

export const PAGE_SIZE = data.pageSize
export const LOGO = data.logo.split('public/')[1]
