/**
 * Central place for generating internal route links.
 *
 * Keeps project data decoupled from the article URL structure — if the
 * article route ever changes (e.g. /article/:slug -> /blog/:slug), or if
 * articles get reordered/renumbered, you only need to update it here
 * instead of hunting down hardcoded strings like "/article/1" in user.js.
 */

export const getArticleLink = (articleId) => `../Portfolio/article/${articleId}`;