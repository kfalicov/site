This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## CI/CD

This repo is configured with a GitHub Actions pipeline courtesy of [Firebase GitHub Integration](https://firebase.google.com/docs/hosting/github-integration). This automatically builds and deploys the React site.

## Database Integration

This site fetches data stored on the Realtime Database. I update the database from time to time, and the live site reflects those changes.

## Data Visualization

This project uses [D3](https://d3js.org/) to visualize the data. I had to use some DOM render trickery to configure the drag-n-drop behavior that the page has, and I'm happy with the result! It uses a headless `force-simulation` graph by default, and I map the graph's data to the rendered elements on the page.
