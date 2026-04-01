# Update Subscription

Update a subscription's details.

## Request

```rust
use dodopayments_rust::{
    models::PatchSubscriptionRequest, to_pretty_json, DodoPaymentsClientBuilder,
};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let subscription_id = "sub_xxxxxxxxxx";

    let resp = client
        .subscriptions()
        .id(subscription_id)
        .update()
        .body(PatchSubscriptionRequest {
            ..Default::default()
        })
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `subscription_id` | `string` | `Subscription Id` |

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `billing` | `object` |  |
| `cancel_at_next_billing_date` | `object` | When set, the subscription will remain active until the end of billing period |
| `credit_entitlement_cart` | `object` | Update credit entitlement cart settings |
| `customer_name` | `object` |  |
| `disable_on_demand` | `object` |  |
| `metadata` | `object` |  |
| `next_billing_date` | `object` |  |
| `status` | `object` |  |
| `tax_id` | `object` |  |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `addons` | `array<AddonCartResponseItem>` | Addons associated with this subscription |
| `billing` | `BillingAddress` | Billing address details for payments |
| `cancel_at_next_billing_date` | `boolean` | Indicates if the subscription will cancel at the next billing date |
| `cancelled_at` | `object` | Cancelled timestamp if the subscription is cancelled |
| `created_at` | `string` | Timestamp when the subscription was created |
| `credit_entitlement_cart` | `array<CreditEntitlementCartResponse>` | Credit entitlement cart settings for this subscription |
| `currency` | `Currency` | Currency used for the subscription payments |
| `custom_field_responses` | `object` | Customer's responses to custom fields collected during checkout |
| `customer` | `CustomerLimitedDetailsResponse` | Customer details associated with the subscription |
| `discount_cycles_remaining` | `object` | Number of remaining discount cycles if discount is applied |
| `discount_id` | `object` | The discount id if discount is applied |
| `expires_at` | `object` | Timestamp when the subscription will expire |
| `metadata` | `Metadata` | Additional custom data associated with the subscription |
| `meter_credit_entitlement_cart` | `array<MeterCreditEntitlementCartResponse>` | Meter credit entitlement cart settings for this subscription |
| `meters` | `array<MeterCartResponseItem>` | Meters associated with this subscription (for usage-based billing) |
| `next_billing_date` | `string` | Timestamp of the next scheduled billing. Indicates the end of current billing period |
| `on_demand` | `boolean` | Wether the subscription is on-demand or not |
| `payment_frequency_count` | `integer` | Number of payment frequency intervals |
| `payment_frequency_interval` | `TimeInterval` | Time interval for payment frequency (e.g. month, year) |
| `payment_method_id` | `object` | Saved payment method id used for recurring charges |
| `previous_billing_date` | `string` | Timestamp of the last payment. Indicates the start of current billing period |
| `product_id` | `string` | Identifier of the product associated with this subscription |
| `quantity` | `integer` | Number of units/items included in the subscription |
| `recurring_pre_tax_amount` | `integer` | Amount charged before tax for each recurring payment in smallest currency unit (e.g. cents) |
| `scheduled_change` | `object` |  |
| `status` | `SubscriptionStatus` | Current status of the subscription |
| `subscription_id` | `string` | Unique identifier for the subscription |
| `subscription_period_count` | `integer` | Number of subscription period intervals |
| `subscription_period_interval` | `TimeInterval` | Time interval for the subscription period (e.g. month, year) |
| `tax_id` | `object` | Tax identifier provided for this subscription (if applicable) |
| `tax_inclusive` | `boolean` | Indicates if the recurring_pre_tax_amount is tax inclusive |
| `trial_period_days` | `integer` | Number of days in the trial period (0 if no trial) |

Subscription successfully updated

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(