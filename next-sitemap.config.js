const siteUrl = "https://www.careervyas.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap-0.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};
