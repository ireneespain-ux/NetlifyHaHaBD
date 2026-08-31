# Ha Ha's Birthday Guestbook

A bilingual English–Vietnamese static website ready for VS Code, GitHub and Netlify.

## Open it in VS Code

1. Unzip the project.
2. Open the `birthday-guestbook` folder in VS Code.
3. Open `index.html` with Live Server, or double-click `index.html`.

## Replace the five placeholder photos

Put your final photos inside the `images` folder and keep these exact filenames:

- `photo-1.jpg`
- `photo-2.jpg`
- `photo-3.jpg`
- `photo-4.jpg`
- `photo-5.jpg`

If your files use different names, update the five image paths in `index.html`.

## Test the birthday-wish form

The form sends wishes to `irenee.spain@gmail.com` through FormSubmit.

1. Deploy the page first.
2. Send one test birthday wish.
3. FormSubmit will email an activation request to `irenee.spain@gmail.com`.
4. Click the activation link in that email.
5. Send another test wish and confirm it arrives.

## Publish with GitHub and Netlify

1. Create a new GitHub repository.
2. Upload every file and the complete `images` folder.
3. In Netlify, choose **Add new site → Import an existing project**.
4. Connect GitHub and select the repository.
5. Leave the build command empty. The publish directory is the repository root.
6. Deploy the site.

## Important privacy note

The page publicly displays the supplied Bizum number and Techcombank QR code. Remove that section from `index.html` if you later decide not to show these payment details publicly.
