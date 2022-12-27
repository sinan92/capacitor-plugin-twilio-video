import { WebPlugin } from '@capacitor/core';

import type { TwilioVideoPlugin } from './definitions';

export class TwilioVideoWeb extends WebPlugin implements TwilioVideoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
