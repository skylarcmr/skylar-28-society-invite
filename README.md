Skylar 28 — The Society Invite Replacement
This package replaces the old newspaper index.html while keeping the existing send.html workflow in the GitHub repo.

What the guest sees
The Press Me lion screen.
Guest taps the actual call-button hotspot.
Your finished Google Flow video plays with its audio.
When the video ends, the site switches to your exact You’re Invited to The Society card.
Guest taps Flip the card.
The card flips to your exact Join Us artwork.
A CLICK ME hotspot appears on the cherry at the top.
That opens the matching burgundy/gold acceptance form.
Guest submits Full Name, Email, Phone Number.
The site confirms: You’re In. Further correspondence will arrive privately.
The later map/tasks invitation is intentionally NOT included in this build.

1 — Upload to GitHub
In skylarcmr/skylar-28-invite:

Replace the existing root index.html with the index.html in this package.
Upload/replace the files inside this package's assets/ folder into the repo's assets/ folder.
Keep your existing send.html. It already creates personalized URLs using ?n=Name&e=email&p=phone, and this replacement reads those same values.
Recommended final structure:

skylar-28-invite/
  index.html                  <- replace
  send.html                   <- keep existing
  assets/
    press-poster.jpg          <- add
    intro.mp4                 <- add
    card-front.png            <- add
    card-back.png             <- add
    form-art.png              <- add
video-last-frame.jpg is included only for reference and is not required by the live page.

2 — Connect the acceptance form to Google Sheets
The included google-apps-script.gs is already configured for the Google Sheet:

Skylar 28 Society Acceptances

Create the web endpoint
Go to script.google.com.
Choose New project.
Delete the starter code.
Paste the full contents of google-apps-script.gs.
Save the project as Skylar 28 Society Acceptances.
Choose setupHeaders from the function dropdown and click Run once.
Approve the Google permissions when asked.
Click Deploy → New deployment.
Click the gear icon and choose Web app.
Set Execute as: Me.
Set Who has access: Anyone.
Click Deploy.
Copy the Web App URL ending in /exec.
Put the endpoint into the website
Open index.html and find:

const APPS_SCRIPT_URL = 'PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE';
Replace only the text inside the quotes with your /exec URL.

Before that URL is added, the invite intentionally runs in Preview Mode and saves a test acceptance only to the browser's local storage. It will clearly say so on the confirmation screen.

3 — Test the personalized flow
After GitHub Pages redeploys, open a test URL like:

https://skylarcmr.github.io/skylar-28-invite/?n=Skylar%20Test&e=test@example.com&p=3125550101
Confirm all of these:

Pressing the lion starts the video with sound.
The video stays inline on mobile instead of opening the native video player.
The exact Society card appears after the video.
Flip animation works.
Cherry CLICK ME hotspot opens the form.
Name/email/phone are prefilled from the personalized URL.
Submission creates a new row in the Google Sheet.
Notes
The intro video was web-compressed from ~14 MB to ~2.5 MB while keeping 720×1280 H.264/AAC playback for faster mobile loading.
The three card/form PNGs are your supplied originals; they were not regenerated.
The page honors reduced-motion browser settings for the UI transitions. The guest-triggered intro video still plays as supplied.
