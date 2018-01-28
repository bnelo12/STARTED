<img src="https://i.imgur.com/c0FyhkB.png"/>

# [STARTED](https://www.start-ed.eu)

The official website for Edinburgh Entrepreneurs 2018 START|ED conference. The website was initially deployed using the Express web framework, but as this is a simple static site, there is a simple node command that builds the html page from the pug files and puts all the relevant files into a static directory.

I am using [netlify](https://www.netlify.com/) to deploy the website. Creating a pull requesst to master will create a sub domain on the start-ed.eu domain and can be used for testing. For testing locally, you can either run the web server using `npm start` or build the static site by running `npm run build`.
