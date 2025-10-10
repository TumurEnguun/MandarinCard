# Profiles Directory

Every individual NFC card profile lives under `profiles/<slug>/`. Each profile folder should contain everything it needs (HTML, CSS, images, contact card, etc.) so it can be deployed as a standalone page at `/profiles/<slug>/`.

## Create a new profile

1. Copy the existing `profiles/temuujin` folder and rename the copy to your new slug (for example, `profiles/bolor`).
2. Replace the photo (`profile.png`) with the card owner's portrait, keeping the same filename or updating the `img` tag if you change it.
3. Update the contact card (`temuujin-odgerel-contact.vcf`) or replace it with a new `.vcf` file. Make sure the download link in `index.html` matches the filename.
4. Edit the text content inside `index.html` (name, role, services, CTA buttons, social links, etc.). The CSS file already handles layout, so you only need to change the words, links, and optional colors.
5. Adjust `style.css` if this profile needs different accent colors or additional styling overrides. Otherwise it can stay as-is.
6. Commit the new folder and push. Once deployed, the profile is available at `https://<your-domain>/profiles/<slug>/`.

Tip: keep slugs lowercase with dashes (e.g., `odgerel-temuujin`) so URLs stay consistent and readable.
