# Change Subscription Plan

Preview the effects of a subscription plan change before committing to it.

## Request

```rust
use dodopayments_rust::{
    models::UpdateSubscriptionPlanReq, to_pretty_json, DodoPaymentsClientBuilder,
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
        .change_plan()
        .body(UpdateSubscriptionPlanReq {
            product_id: "prod_xxxxxxxxxx".to_string(),
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
| `addons` | `object` | Addons for the new plan. Note : Leaving this empty would remove any existing addons |
| `discount_code` | `object` | Optional discount code to apply to the new plan. If provided, validates and applies the discount to the plan change. If not provided and the subscription has an existing discount with `preserve_on_plan_change=true`, the existing discount will be preserved (if applicable to the new product). |
| `effective_at` | `EffectiveAt` | When to apply the plan change. - `immediately` (default): Apply the plan change right away - `next_billing_date`: Schedule the change for the next billing date |
| `metadata` | `object` |  |
| `on_payment_failure` | `object` |  |
| `product_id` | `string` | Unique identifier of the product to subscribe to |
| `proration_billing_mode` | `ProrationBillingMode` | Proration Billing Mode |
| `quantity` | `integer` | Number of units to subscribe for. Must be at least 1. |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `immediate_charge` | `ImmediateCharge` |  |
| `new_plan` | `SubscriptionResponse` |  |

Preview of subscription plan change

### 500 Status

Something went wrong :(