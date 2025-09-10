
# Reality Architect — Portfolio

A responsive, interactive portfolio site for **Sounak Ghosh**, themed “Reality Architect,” featuring a subtle Three.js 3D background and smooth, modern UI.

## Structure
- `index.html` — Homepage with **Home**, **Skills**, **Projects**, **Contact** sections
- `project-*.html` — Individual project pages
- `styles.css` — Theme and responsive layout
- `script.js` — 3D background (Three.js) + card tilt interactions
- `thanks.html` — Post‑submission page for contact form

## Contact Form
This project uses **FormSubmit** to route form submissions to your email:
- Action: `https://formsubmit.co/sounaktheghosh@gmail.com`
- On first submission, FormSubmit will send a verification email. Approve it once to activate. (Free tier is fine.)

If you prefer EmailJS or your own backend, swap the form `action` and add your script as needed.

## Run Locally
Just open `index.html` in a browser. For live reload:
```bash
python -m http.server 7777
# then visit http://localhost:7777
```

## Publish on GitHub Pages
1. Create a new repo named, for example, `reality-architect-portfolio`.
2. Add these files and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Reality Architect portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/reality-architect-portfolio.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings → Pages**:
   - **Source**: select **Deploy from a branch**
   - **Branch**: choose **main** and **/root**
   - Save. Pages will build and give you a public URL in a minute.
4. (Optional) Add a custom domain under **Settings → Pages**.
5. Test the contact form once live to complete FormSubmit’s one‑time verification.

## Customization
- Colors and glow: edit CSS `:root` variables.
- Particle look: tweak `num`, size, and spread in `script.js`.
- Add logos, screenshots: drop assets in `/assets` and reference them in the HTML.

---

If it moves and inspires, ship it. 🚀
