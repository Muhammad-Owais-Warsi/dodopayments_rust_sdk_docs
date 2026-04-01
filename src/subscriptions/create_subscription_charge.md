# Create Subscription Charge

Create an on-demand charge for a subscription.

## Request

```rust
use dodopayments_rust::{
    models::CreateSubscriptionChargeRequest, to_pretty_json, DodoPaymentsClientBuilder,
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
        .charge()
        .body(CreateSubscriptionChargeRequest {
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
| `adaptive_currency_fees_inclusive` | `object` | Whether adaptive currency fees should be included in the product_price (true) or added on top (false). This field is ignored if adaptive pricing is not enabled for the business. |
| `customer_balance_config` | `object` |  |
| `metadata` | `object` |  |
| `product_currency` | `object` |  |
| `product_description` | `object` | Optional product description override for billing and line items. If not specified, the stored description of the product will be used. |
| `product_price` | `integer` | The product price. Represented in the lowest denomination of the currency (e.g., cents for USD). For example, to charge $1.00, pass `100`. |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `payment_id` | `string` |  |

Subscription Charge successfully created

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(