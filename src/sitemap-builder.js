import router from "./src/Router";
import siteMapBuilder, { getSites } from "react-router-sitemap-builder";

getSites(router);
/*
 [ '/',
  '/test',
  '/posts',
  '/posts/*',
  '/article/*',
  '/tags/*',
  '/tags/pages',
  '/tags/pages/*',
  '/archive',
  '/archive/*' ]
 */
/* router, prefix, save_to_where */
sitemapBuilder(router, "https://www.talirecorderlessons.com", __dirname + "/sitemap.txt");
/* return true of false */
