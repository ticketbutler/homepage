const path = require("path");
const locales = require("./data/locales");
const topMenu = require("./data/top-menu");
const footerMenu = require("./data/footer_menu");
const pages = require("./data/pages");
const metaData = require("./data/metaData");

function normalizeTranslatedKeys(obj, local) {
  let normalizedObj = obj;
  Object.keys(obj).forEach(key => {
    let identifier = "_" + local;
    if (key.includes(identifier)) {
      let normalizedKey = key.replace(identifier, "");
      normalizedObj = {
        ...normalizedObj,
        [normalizedKey]: obj[key]
      };
    }
  });

  return normalizedObj;
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  locales.forEach(local => {
    let component = path.resolve("src/layouts/cms_page.js");

    let nav = {
      topMenu: topMenu.map(item => normalizeTranslatedKeys(item, local.id)),
      footerMenu: footerMenu.map(footerItem => ({
        ...normalizeTranslatedKeys(footerItem, local.id),
        items: footerItem.items.map(it => normalizeTranslatedKeys(it, local.id))
      }))
    };
    let localMetaData = normalizeTranslatedKeys(metaData, local.id);
    pages.forEach(page => {
      let localPage = {
        ...normalizeTranslatedKeys(page, local.id),
        sections: page.sections.map(section => {
          section = {
            ...section,
            ...normalizeTranslatedKeys(section, local.id)
          };
          Object.keys(section).forEach(key => {
            if (Array.isArray(section[key])) {
              section = {
                ...section,
                [key]: section[key].map(item =>
                  normalizeTranslatedKeys(item, local.id)
                )
              };
            }
          });
          return section;
        })
      };

      createPage({
        path: localPage.path,
        title: localPage.title,
        component: component,
        // layout: null,
        context: {
          nav,
          meta_description: localPage.meta_description,
          title: localPage.title,
          metaData: localMetaData,
          sections: localPage.sections,
          currentLocale: local,
          locales: locales.map(locale => ({
            ...locale,
            currentPageUrl: page["path_" + locale.id]
          })),
          pages
        }
      });
    });
  });
};
