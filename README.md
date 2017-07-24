# Nest Away Assist

This project is a reaction to an annoying issue with the Nest Thermostat mobile app software. The Away / Assist functionality on Android is broken. Unless you open the Android app every few days then it will forget you exist initially and not turn your heating off at all. Eventually it forgets you completely and only uses other members of the household's locations.

So the plan is to use a combination of [Life360](https://www.life360.com/) (an app that while not flawless actually monitors your location without needing to be openned constantly), and [IFTTT](https://ifttt.com/) to post HTTP calls to the API hosted in AWS. It will be a serverless utilising AWS Gateway and Lambda.

## Contributing

If you wish to contribute then after checkout run:-

    git config --local commit.template .gitmessage
