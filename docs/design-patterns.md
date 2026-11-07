# Design pattern recipes

The example app includes nine interactive recipes built from JEETK shared components. They are intentionally local-only: sample values live in widget state, are not transmitted, and no real account is created.

1. **Authentication:** local-only email/password validation and success/failure feedback; it is not connected to an identity provider.
2. **CRUD:** create, read, edit, and delete in-memory sample records. Changes reset when the preview is closed or restarted.
3. **Search and filtering:** filter the local records and choose a sample category.
4. **Forms:** validate required fields and email-shaped input before showing a local result.
5. **Lists:** select one local record and show the selected state.
6. **Dashboard:** display counts derived from the local records and current query.
7. **Notifications:** toggle a simulated preference and show a sample in-app notification.
8. **Error handling:** show a local error and retry a short simulated recovery.
9. **Permissions:** simulate granted and denied states; no operating-system permission prompt is requested.

## Flow guidelines

- Keep authentication status and recovery actions explicit; never imply a real session in a mock flow.
- Validate forms near the relevant fields and preserve entered values while correcting errors.
- Keep CRUD mutations reversible in the sample and make the affected record clear.
- Make search and filters compose against the same data set; provide an empty result state.
- Derive dashboard metrics from the visible sample data.
- Distinguish a notification preference from device authorization.
- Present errors with a clear recovery action and distinguish retrying from completed recovery.
- Request real permissions only at the point a feature needs them, explain why, and handle denial gracefully. The recipe only demonstrates these states.

Open the patterns icon from the example app foundations screen to try all nine recipes.
