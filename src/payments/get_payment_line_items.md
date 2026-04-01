# Get Payment Line Items

Retrieve line items for a specific payment.

## Request

```rust
use dodopayments_rust::{to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let payment_id = "pay_xxxxxxxxxx";

    let resp = client.payments().id(payment_id).line_items().send().await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payment_id` | `string` | `Payment Id` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `currency` | `Currency` |  |
| `items` | `array<PaymentLineItem>` |  |