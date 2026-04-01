# Get Customer Detail

Get detailed information about a specific customer.

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

    let customer_id = "cus_xxxxxxxxxx";

    let resp = client.customers().id(customer_id).retrieve().send().await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `customer_id` | `string` | `Customer Id` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `business_id` | `string` |  |
| `created_at` | `string` |  |
| `customer_id` | `string` |  |
| `email` | `string` |  |
| `metadata` | `Metadata` | Additional metadata for the customer |
| `name` | `string` |  |
| `phone_number` | `object` |  |

### 500 Status

Something went wrong :(