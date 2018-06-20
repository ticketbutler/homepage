# Ticketbulter marketing homepage

## Set up & development

- Ensure you have Node.js, npm and yarn installed
  - `brew install node`
  - `npm install npm@latest -g`
  - `npm install yarn -g
- Run the development server

  - `yarn develop`
  - Open `localhost:8000`

- Build the static site
  - `yarn build`
  - `serve public/`

## Contributing

_Impotant_! commits to `master` will cue Netlify to deploy!

To contribute,

- Check out to master `git checkout master`
- Create a new branch `git checkout -b feature/my-new-feature`
- Develop your feature and commit to your new branch
- Submit a PR [here](https://github.com/ticketbutler/homepage/pulls)
- Request a reviewer.

## Deployment

Committing to the `master` branch will automatically cue Netlify build and deploy the static site.

## CMS (Editing website content)

Website content is managed in the NetlifyCMS admin which is configured in `static/admin/config.yml`.

Content in the admin is stored in markdown files in the `content/` folder and _are version controlled_.

This is how the NetlifyCMS file system works - admins make changes and Netlify updates and commits the source files in `content/`

For developers, you can update content locally at `localhost:8000/admin/`

For marketing changes on the live website, the admin can be accessed at `ticketbutler.io/admin/`

### Add new CMS users

CMS users must have a Github account with access to the master branch.
