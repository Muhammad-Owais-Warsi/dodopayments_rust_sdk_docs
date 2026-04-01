# Get Refund Detail

Get detailed information about a specific refund.

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

    let refund_id = "ref_xxxxxxxxxx";

    let resp = client.refunds().id(refund_id).retrieve().send().await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `refund_id` | `string` | `Refund Id` |
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

### 500 Status

Something went wrong :(