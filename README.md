# Envoy Drive

## TODO

- [x] Set up database and data model
- [x] Move folder open state to URL
- [x] Add auth (Clerk)
- [x] Add file uploding (uploadthing)
- [x] Add analytics (posthog)
- [x] Make sure sort order is consistent
- [x] Add delete
- [] Real homepage + onboarding

## Note 4-23-2025

Just finished up connecting database, next steps:

- [x] Update Schema to show files and folders
- [x] Manually insert examples
- [x] Render schemas in the UI
- [x] Push and make sure all works as expected

## Note 4-25-2025

- [x] Change folders to link components, remove all client state
- [x] Clean up the database and data fetching patterns

## Note 4-26-2025

- [x] Add "Ownership" to files and folders
- [x] Upload files to the right folder

## Some fun features to add later

### Folder Deletion

Note : Make sure to fetch all of the folders that have it as a parent, and their children too
