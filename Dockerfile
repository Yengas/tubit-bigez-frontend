FROM node:6.10.1

# we only need webpack
RUN npm install -g webpack

# Create a workdir
WORKDIR /application/code
ADD . /application/code

# npm install
RUN npm install

# run in prod
CMD ["npm", "run", "prod"]