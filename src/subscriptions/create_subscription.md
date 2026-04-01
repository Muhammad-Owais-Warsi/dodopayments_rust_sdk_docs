# Create Subscription

Create a subscription for a customer.

## Request

```rust
use dodopayments_rust::{
    models::CreateSubscriptionRequest, to_pretty_json, DodoPaymentsClientBuilder,
};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .subscriptions()
        .create()
        .body(CreateSubscriptionRequest {
            product_id: "prod_xxxxxxxxxx".to_string(),

            ..Default::default()
        })
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `addons` | `object` | Attach addons to this subscription |
| `allowed_payment_method_types` | `object` | List of payment methods allowed during checkout. Customers will **never** see payment methods that are **not** in this list. However, adding a method here **does not guarantee** customers will see it. Availability still depends on other factors (e.g., customer location, merchant settings). |
| `billing` | `BillingAddress` | Billing address information for the subscription |
| `billing_currency` | `object` |  |
| `customer` | `CustomerRequest` | Customer details for the subscription |
| `discount_code` | `object` | Discount Code to apply to the subscription |
| `force_3ds` | `object` | Override merchant default 3DS behaviour for this subscription |
| `metadata` | `Metadata` | Additional metadata for the subscription Defaults to empty if not specified |
| `on_demand` | `object` |  |
| `one_time_product_cart` | `object` | List of one time products that will be bundled with the first payment for this subscription |
| `payment_link` | `object` | If true, generates a payment link. Defaults to false if not specified. |
| `payment_method_id` | `object` | Optional payment method ID to use for this subscription. If provided, customer_id must also be provided (via AttachExistingCustomer). The payment method will be validated for eligibility with the subscription's currency. |
| `product_id` | `string` | Unique identifier of the product to subscribe to |
| `quantity` | `integer` | Number of units to subscribe for. Must be at least 1. |
| `redirect_immediately` | `boolean` | If true, redirects the customer immediately after payment completion False by default |
| `return_url` | `object` | Optional URL to redirect after successful subscription creation |
| `short_link` | `object` | If true, returns a shortened payment link. Defaults to false if not specified. |
| `show_saved_payment_methods` | `boolean` | Display saved payment methods of a returning customer False by default |
| `tax_id` | `object` | Tax ID in case the payment is B2B. If tax id validation fails the payment creation will fail |
| `trial_period_days` | `object` | Optional trial period in days If specified, this value overrides the trial period set in the product's price Must be between 0 and 10000 days |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `addons` | `array<AddonCartResponseItem>` | Addons associated with this subscription |
| `client_secret` | `object` | Client secret used to load Dodo checkout SDK NOTE : Dodo checkout SDK will be coming soon |
| `customer` | `CustomerLimitedDetailsResponse` | Customer details associated with this subscription |
| `discount_id` | `object` | The discount id if discount is applied |
| `expires_on` | `object` | Expiry timestamp of the payment link |
| `metadata` | `Metadata` | Additional metadata associated with the subscription |
| `one_time_product_cart` | `object` | One time products associated with the purchase of subscription |
| `payment_id` | `string` | First payment id for the subscription |
| `payment_link` | `object` | URL to checkout page |
| `recurring_pre_tax_amount` | `integer` | Tax will be added to the amount and charged to the customer on each billing cycle |
| `subscription_id` | `string` | Unique identifier for the subscription |

Subscription successfully initiated

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(