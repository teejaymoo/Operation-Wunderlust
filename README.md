### wunderlust-API

Welcome to Wunderlust!


### The Objective

This API lets users communicate with the wunderlust database, allowing user to create a user account and a landmark.

Various technologies will be used to make this possible; Express.js, mongoDB/mongoose, Javascript and Node.js

## Client-side link
https://github.com/teejaymoo/Landmarker-client

Landmarker-client repo is where the front-end lies.
Landmarker allow users to communicate with wunderlust-API to CRUD (create-read-update-delete)
their landmarks and their user accounts.



### Design/Blueprint

Schema will look something along the lines of this

Landmark = {
  name: ,
  city: ,
  country: ,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comment:
}

Tackling the Landmark Schema first then onto the curl-script for landmark.

### Unsolved problems

No unsolved problems.

Scope version 2.0

Add comment subdoc Schema.



## ERD
![fullStack4](https://media.git.generalassemb.ly/user/33542/files/d9d3c980-7cc1-11eb-9584-a8f25c69ea53)
