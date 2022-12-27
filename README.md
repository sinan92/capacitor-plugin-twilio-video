# capacitor-plugin-twilio-video

Twilio video plugin

## Install

```bash
npm install capacitor-plugin-twilio-video
npx cap sync
```

## API

<docgen-index>

* [`openRoom(...)`](#openroom)
* [`closeRoom()`](#closeroom)
* [`getRoom()`](#getroom)
* [`hasRequiredPermissions()`](#hasrequiredpermissions)
* [`requestPermissions()`](#requestpermissions)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### openRoom(...)

```typescript
openRoom(token: string, roomName: string, config?: TwilioVideoAppConfig | undefined, onEvent?: ((event: TwilioVideoAppEvent) => void) | undefined) => Promise<any>
```

It opens a native Twilio Video controller and tries to start the videocall with the provided
configuration. All native videocall UI controls will be positioned above the current web view
by using a transparent native layout. In this way, we can put our own controls from the web
application that uses this plugin.

| Param          | Type                                                                                      | Description                                                                            |
| -------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **`token`**    | <code>string</code>                                                                       |                                                                                        |
| **`roomName`** | <code>string</code>                                                                       |                                                                                        |
| **`config`**   | <code><a href="#twiliovideoappconfig">TwilioVideoAppConfig</a></code>                     | - (Optional) Videocall configuration.                                                  |
| **`onEvent`**  | <code>((event: <a href="#twiliovideoappevent">TwilioVideoAppEvent</a>) =&gt; void)</code> | - (Optional) It will be fired any time that a videocall event is sent from the plugin. |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### closeRoom()

```typescript
closeRoom() => Promise<void>
```

It closes the videocall room if it is running

--------------------


### getRoom()

```typescript
getRoom() => Promise<TwilioVideoAppRoom>
```

It returns basic info of the running twilio video room

**Returns:** <code>Promise&lt;<a href="#twiliovideoapproom">TwilioVideoAppRoom</a>&gt;</code>

--------------------


### hasRequiredPermissions()

```typescript
hasRequiredPermissions() => Promise<boolean>
```

Check if the user granted all required permissions (Camera and Microphone)

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### requestPermissions()

```typescript
requestPermissions() => Promise<boolean>
```

Request required permissions (Camera and Microphone)

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### Interfaces


#### TwilioVideoAppConfig

| Prop                    | Type                 | Description                                                                                                                                                                                          |
| ----------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`primaryColor`**      | <code>string</code>  | Hex primary brand color for your project. It will be used to customize the videocall experience.                                                                                                     |
| **`secondaryColor`**    | <code>string</code>  | Hex secondary brand color for your project. It will be used to customize the videocall experience.                                                                                                   |
| **`hangUpInApp`**       | <code>boolean</code> | (Default = false) Flag to handle videocall close from web side by explicitly calling 'closeRoom'. Example: Useful when it is needed to invoke a backend service before closing the Twilio videocall. |
| **`disableBackButton`** | <code>boolean</code> | (Only Android) (Default = false) Flag to disable back button while the videocall is running.                                                                                                         |


#### TwilioVideoAppEvent

| Prop          | Type                                                                                                                                                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`eventId`** | <code>'BAD_CONNECTION_REQUEST' \| 'OPENED' \| 'CONNECTED' \| 'CONNECT_FAILURE' \| 'DISCONNECTED' \| 'DISCONNECTED_WITH_ERROR' \| 'RECONNECTING' \| 'RECONNECTED' \| 'PARTICIPANT_CONNECTED' \| 'PARTICIPANT_DISCONNECTED' \| 'REMOTE_VIDEO_TRACK_ADDED' \| 'REMOTE_VIDEO_TRACK_REMOVED' \| 'HANG_UP' \| 'CLOSED' \| 'PERMISSIONS_REQUIRED'</code> |
| **`room`**    | <code><a href="#twiliovideoapproom">TwilioVideoAppRoom</a></code>                                                                                                                                                                                                                                                                                 |
| **`error`**   | <code><a href="#twiliovideoapperror">TwilioVideoAppError</a></code>                                                                                                                                                                                                                                                                               |


#### TwilioVideoAppRoom

| Prop                     | Type                                                                            | Description                                 |
| ------------------------ | ------------------------------------------------------------------------------- | ------------------------------------------- |
| **`sid`**                | <code>string</code>                                                             |                                             |
| **`localParticipant`**   | <code><a href="#twiliovideoappparticipant">TwilioVideoAppParticipant</a></code> |                                             |
| **`remoteParticipants`** | <code>TwilioVideoAppParticipant[]</code>                                        |                                             |
| **`state`**              | <code>string \| number</code>                                                   | (Android) It's a string (iOS) It's a number |


#### TwilioVideoAppParticipant

| Prop                      | Type                                    | Description                                 |
| ------------------------- | --------------------------------------- | ------------------------------------------- |
| **`sid`**                 | <code>string</code>                     |                                             |
| **`networkQualityLevel`** | <code>string \| number</code>           | (Android) It's a string (iOS) It's a number |
| **`state`**               | <code>string \| number</code>           | (Android) It's a string (iOS) It's a number |
| **`audioTracks`**         | <code>TwilioVideoAppAudioTrack[]</code> |                                             |
| **`videoTracks`**         | <code>TwilioVideoAppVideoTrack[]</code> |                                             |


#### TwilioVideoAppAudioTrack

| Prop                 | Type                           | Description                                 |
| -------------------- | ------------------------------ | ------------------------------------------- |
| **`isAudioEnabled`** | <code>number \| boolean</code> | (Android) It's a string (iOS) It's a number |


#### TwilioVideoAppVideoTrack

| Prop                 | Type                           | Description                                 |
| -------------------- | ------------------------------ | ------------------------------------------- |
| **`isVideoEnabled`** | <code>number \| boolean</code> | (Android) It's a string (iOS) It's a number |


#### TwilioVideoAppError

| Prop          | Type                |
| ------------- | ------------------- |
| **`code`**    | <code>number</code> |
| **`message`** | <code>string</code> |

</docgen-api>
