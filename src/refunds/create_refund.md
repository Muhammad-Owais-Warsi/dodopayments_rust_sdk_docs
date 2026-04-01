# Create Refund

Create a refund for a payment.

## Request

```rust
use dodopayments_rust::{models::CreateRefundRequest, to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .refunds()
        .create()
        .body(CreateRefundRequest {
            payment_id: "pay_xxxxxxxxxx".to_string(),
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
| `items` | `object` | Partially Refund an Individual Item |
| `metadata` | `Metadata` | Additional metadata associated with the refund. |
| `payment_id` | `string` | The unique identifier of the payment to be refunded. |
| `reason` | `object` | The reason for the refund, if any. Maximum length is 3000 characters. Optional. |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `amount` | `object` | The refunded amount. |
| `business_id` | `string` | The unique identifier of the business issuing the refund. |
| `created_at` | `string` | The timestamp of when the refund was created in UTC. |
| `currency` | `object` |  |
| `customer` | `CustomerLimitedDetailsResponse` | Details about the customer for this refund (from the associated payment) |
| `is_partial` | `boolean` | If true the refund is a partial refund |
| `metadata` | `Metadata` | Additional metadata stored with the refund. |
| `payment_id` | `string` | The unique identifier of the payment associated with the refund. |
| `reason` | `object` | The reason provided for the refund, if any. Optional. |
| `refund_id` | `string` | The unique identifier of the refund. |
| `status` | `RefundStatus` | The current status of the refund. |

Refund successfully initiated

### 400 Status

Invalid Request Parameters

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(