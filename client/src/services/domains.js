/*
 * Domain data bridge — imports the existing data files and exposes
 * them on window.DOMAINS so all React pages can access them via getDomain().
 *
 * Vite handles these as real ES modules.
 * The original data files set window.DOMAINS = [...] so we just import them.
 */

// These files assign to window.DOMAINS, window.CATEGORIES etc.
import '../../../js/data.js'
import '../../../js/data_govt.js'
import '../../../js/data_more.js'

export function getDomains() {
    return window.DOMAINS || []
}

export function getDomain(id) {
    return getDomains().find(d => d.id === id) || null
}

export function getCategories() {
    const domains = getDomains()
    const cats = [...new Set(domains.map(d => d.cat).filter(Boolean))]
    return [{ id: 'all', label: '🌐 All' }, ...cats.map(c => ({ id: c, label: c }))]
}
