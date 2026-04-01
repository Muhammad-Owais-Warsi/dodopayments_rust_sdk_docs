# Unarchive Meter

Unarchive a meter by its ID.

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

    let meter_id = "meter_xxxxxxxxxx";

    let resp = client.meters().id(meter_id).unarchive().send().await?;

    println!("Meter unarchived successfully");

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | `Meter ID` |
## Responses

### 200 Status

Meter Unarchived Successfully

### 500 Status

Something went wrong :(