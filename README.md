# tubit-bigez-frontend
This repository is the frontend part of a project developed in 2017 Getir Hackathon by the `tübit` team. The project aims to help people find travel buddies by using google maps technologies and mongodb geospatial queries. Main functionality is implemented using `markers` and `polylines` to select a route of travel. The person then selects a time range to create a record of his travel plan, and he can see other people who have a similar plan with him. He can then decide to connect with these people by a click of button!

## Technology Stack for Frontend
We opted to go with a React boilerplate as a team, because our near future work will be based on this technology. This project was taken from a Mobx + React boilerplate project. The boilerplate project was coded to be an isomorphic solution to web development. However, since we wanted to separate frontend and backend completely, we have deleted the server side routes which weren't about filling up state in server side. So it is still isomorphic, but doesn't have very much server side logic.

## How to run
The project requires Node 6+ installed on your computer and needs to point to a valid backend server which is configured in the [config.js](./src/config.js). The backend side of the project runs fully on Docker and integrating the frontend into the backend test/deployment cycle via Docker is planned.

In the meanwhile, you can run the project with `npm run dev` and `npm run prod` commands on your local machine.
