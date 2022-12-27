export interface TwilioVideoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
