import { WebPlugin } from '@capacitor/core';

import type { TwilioVideoAppConfig, TwilioVideoAppEvent, TwilioVideoAppRoom, TwilioVideoPlugin } from './definitions';

export class TwilioVideoWeb extends WebPlugin implements TwilioVideoPlugin {
    openRoom(token: string, roomName: string, config?: TwilioVideoAppConfig | null, onEvent?: ((event: TwilioVideoAppEvent) => void) | undefined): Promise<any> {
        return new Promise((resolve, _) => {
            console.log("Twilio video event fired: ");
            onEvent;
            resolve([
                null,
                "TwillioVideoPlugin",
                "openRoom",
                [token, roomName, config]
            ])
        })
    }
    closeRoom(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    getRoom(): Promise<TwilioVideoAppRoom> {
        throw new Error('Method not implemented.');
    }
    hasRequiredPermissions(): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    requestPermissions(): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    async echo(options: { value: string }): Promise<{ value: string }> {
        console.log('ECHO', options);
        return options;
    }
}
