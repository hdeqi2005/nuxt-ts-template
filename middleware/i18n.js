export default function({ isHMR, app, store, route, params, error, redirect }) {
  //debugger
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  //if (isHMR) return
   if (isHMR) { // ignore if called from hot module replacement
      return;
    } // if url does not have language, redirect to english
    else if (!params.lang &&route.fullPath!=='/' && route.fullPath.indexOf('/cn')==-1) {
      return redirect('/cn'+route.fullPath);
    }
  // Get locale from params
  const locale = params.lang || defaultLocale
  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  // If route is /<defaultLocale>/... -> redirect to /...
  //debugger
  if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
    const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    // return redirect(
    //   route.fullPath.replace(re, '/')
    // )
  }
}

// /*
//  * 1. sets i18n.locale and state.locale if possible
//  * 2. redirects if not with locale
//  */
// export default function ({
//     isHMR, app, store, route, params, error, redirect
//   }) {
//     if (isHMR) { // ignore if called from hot module replacement
//       return;
//     } // if url does not have language, redirect to english
//     else if (!params.lang) {
//       return redirect('/cn'+route.fullPath);
//     }
//     // based on directory structure _lang/xxxx, en/about has params.lang as "en"
//     const locale = params.lang || 'cn';
//     store.commit('SET_LANG', locale); // set store
//     app.i18n.locale = store.state.locale;
//   }