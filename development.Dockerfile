FROM node:6.10.1

# Install the related global node modules
RUN npm install -g webpack
RUN npm install -g cross-env
RUN npm install -g nodemon

# Create the work directory for npm installation
WORKDIR /application

# Add package.json and npm install
ADD package.json .
RUN npm install

# Create a place to link the code from your fs to docker
VOLUME /application/code
CMD cd /application/code && npm run dev
