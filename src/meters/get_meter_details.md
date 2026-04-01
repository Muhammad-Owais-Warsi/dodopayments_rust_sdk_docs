# Get Meter Details

Retrieve a meter by its ID.

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

    let resp = client.meters().id(meter_id).retrieve().send().await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | `Meter ID` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `aggregation` | `MeterAggregation` |  |
| `business_id` | `string` |  |
| `created_at` | `string` |  |
| `description` | `object` |  |
| `event_name` | `string` |  |
| `filter` | `object` |  |
| `id` | `string` |  |
| `measurement_unit` | `string` |  |
| `name` | `string` |  |
| `updated_at` | `string` |  |

Meter details

### 404 Status

Meter not found

### 500 Status

Something went wrong :(