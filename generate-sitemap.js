import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

// Your site base URL
const BASE_URL = "https://pranavjoseph.github.io/pranav_dev/";

// List your routes here
const pages = [
    { url: "", changefreq: "monthly", priority: 1.0 },
    { url: "./contact", changefreq: "monthly", priority: 0.8 },
];

async function generateSitemap() {
    const stream = new SitemapStream({ hostname: BASE_URL });

    pages.forEach(page => {
        stream.write(page);
    });

    stream.end();

    const sitemap = await streamToPromise(stream).then(sm => sm.toString());

    // Save to public/sitemap.xml
    writeFileSync("./public/sitemap.xml", sitemap);
    console.log("✅ Sitemap generated at public/sitemap.xml");
}

generateSitemap();