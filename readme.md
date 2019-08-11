#SlackLog

Slack Log is a log system that uses a Slack API to show user iteractions on specific slack workspace.

##Getting Started

To run the product you'll need the mongoDB database, to see instructions click on these links below:

* [mac](https://docs.mongodb.com/manual/administration/install-on-linux/)
* [windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
* [linux](https://docs.mongodb.com/manual/administration/install-on-linux/)

You have to create a `.env` file on your project to specify the path to your mongo Database. If you have any questions you just need to check the `.env.example` file.

NodeJs:

* [nodejs](nodejs.org)

###Slack Permissions

You also have to create an app on Slack and config the permissions on Slack to `user_change` and `team_join` events.

