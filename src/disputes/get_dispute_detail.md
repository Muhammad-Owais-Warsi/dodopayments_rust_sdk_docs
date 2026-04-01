# Get Dispute Detail

Get detailed information about a specific dispute.

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

    let dispute_id = "dispute_xxxxxxxxxx";

    let resp = client.disputes().id(dispute_id).retrieve().send().await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `dispute_id` | `string` | `Dispute Id` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `amount` | `string` | The amount involved in the dispute, represented as a string to accommodate precision. |
| `business_id` | `string` | The unique identifier of the business involved in the dispute. |
| `created_at` | `string` | The timestamp of when the dispute was created, in UTC. |
| `currency` | `string` | The currency of the disputed amount, represented as an ISO 4217 currency code. |
| `customer` | `CustomerLimitedDetailsResponse` | The customer who filed the dispute |
| `dispute_id` | `string` | The unique identifier of the dispute. |
| `dispute_stage` | `DisputeStage` | The current stage of the dispute process. |
| `dispute_status` | `DisputeStatus` | The current status of the dispute. |
| `is_resolved_by_rdr` | `object` | Whether the dispute was resolved by Rapid Dispute Resolution |
| `payment_id` | `string` | The unique identifier of the payment associated with the dispute. |
| `reason` | `object` | Reason for the dispute |
| `remarks` | `object` | Remarks |

### 500 Status

Something went wrong :(