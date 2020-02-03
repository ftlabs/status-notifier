# Channel Status Notifier
CSN (Channel Status Notifier) is a small node script, running on AWS Lambda (+ CloudWatch, for cron jobs). It fetches all the members of a specified Slack Channel, analyses their status (based on keyword first, then emoji), and produces an absence report for the day.

Absence categories include:
- On holiday
- Out of office (e.g. conference, training, etc.)
- Off sick
- Work from home
- On parental leave

Note: this report is dependent on members of the channel updating their Slack status regularly; and before the alert is triggered.


## Development setup
1. Clone the repo, `npm install`, make sure you have the environment variables set up.
2. Make sure `isTest` is set to `true` in index.js, otherwise you'll spam the live channel!
3. `npm run locally`: This script is necessary to run with the Lambda handler

## Deployment
1. Zip up all files, including node_modules/, but excluding DOTfiles and Readme
2. Upload the zip file in the Lambda GUI. Change `isTest` to false in the Lambda code editor (don't forget to hit Save)
3. Add any new environment variables.

## TODO
Todos are listed in the project doc.