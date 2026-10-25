// Run from the project root: node scripts/generate-og.mjs
// Sharp is provided by Next.js. The PNG is committed, so serving it needs no renderer.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

async function main() {
  const logo = await fs.readFile("public/logo/rustam-logo.svg", "utf8");
  const mark = logo.match(/<svg[^>]*>([\s\S]*?)<\/svg>/)[1];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.75" fill="#fff" fill-opacity="0.08"/>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="#111111"/>
    <rect width="1200" height="630" fill="url(#dots)"/>
    <svg x="80" y="65" width="48" height="55" viewBox="0 0 36 41">${mark}</svg>
    <g font-family="Arial, Helvetica, sans-serif">
      <text x="76" y="303" font-size="116" font-weight="700" letter-spacing="-5" fill="#f7f7f7">RUSTAM</text>
      <text x="80" y="365" font-size="38" fill="#f7f7f7">Web Designer</text>
      <path d="M80 421H1120" stroke="#383838"/>
      <text x="80" y="478" font-size="27" fill="#b7b7b7">Independent web designer creating digital experiences,</text>
      <text x="80" y="518" font-size="27" fill="#b7b7b7">websites and visual systems.</text>
    </g>
  </svg>`;

  const output = "public/images/og/rustam-portfolio-v1.png";
  await fs.mkdir(path.dirname(output), { recursive: true });
  await sharp(Buffer.from(svg)).png().toFile(output);
  console.log(await sharp(output).metadata());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
