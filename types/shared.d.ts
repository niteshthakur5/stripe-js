import {StripeConstructorOptions, Stripe} from './stripe-js';

export const loadStripe: (
  publishableKey: string,
  options?: StripeConstructorOptions | undefined
) => Promise<Stripe | null>;

export const loadCustomStripeInExtensions: (
  stripePromise: Promise<null>,
  publishableKey: string,
  options?: StripeConstructorOptions | undefined
) => Promise<Stripe | null>;
