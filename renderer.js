import { faro } from '@grafana/faro-web-sdk';

// ...
// initialize faro as shown in the previous examples
// ...

// will be captured automatically
console.info('hello world');

// push log explicitly
faro.api.pushLog(['hello world']);

// will be captured automatically
throw new Error('oh no');

// push error manually
faro.api.pushError(new Error('oh no'));

// push a RUM event
faro.api.pushEvent('click_sign_up_button')
