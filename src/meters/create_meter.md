# Create Meter

Create a new meter.

## Request

```rust
use dodopayments_rust::{models::CreateMeterRequest, to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .meters()
        .create()
        .body(CreateMeterRequest {
            name: "API Calls".to_string(),
            event_name: "api_call".to_string(),
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
| `aggregation` | `MeterAggregation` | Aggregation configuration for the meter |
| `description` | `object` | Optional description of the meter |
| `event_name` | `string` | Event name to track |
| `filter` | `object` |  |
| `measurement_unit` | `string` | measurement unit |
| `name` | `string` | Name of the meter |
## Responses

### 201 Status

Meter created successfully

| Field | Type | Description |
| :--- | :--- | :--- |
| `aggregation` | `object` | - |
| `business_id` | `string` | - |
| `created_at` | `string` | - |
| `description` | `object` | - |
| `event_name` | `string` | - |
| `filter` | `object` | - |
| `id` | `string` | - |
| `measurement_unit` | `string` | - |
| `name` | `string` | - |
| `updated_at` | `string` | - |

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(