# What image do you want to start building on?
FROM node:12-alpine

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/Reviews

# Tell your container where your app's source code will live
WORKDIR /src/Reviews

# What source code do you what to copy, and where to put it?
COPY . /src/Reviews

# Does your app have any dependencies that should be installed?
# add the actual commands that setup the server and app
RUN npm install

# What port will the container talk to the outside world with once created?
# update the corresponding ports
EXPOSE 3003

# How do you start your app?
# start script
CMD ["npm", "start"]

