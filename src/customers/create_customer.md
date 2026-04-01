# Create Customer

Create a new customer in your Dodo Payments account.

## Request

```rust
use dodopayments_rust::{models::CreateCustomerRequest, to_pretty_json, DodoPaymentsClientBuilder};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .customers()
        .create()
        .body(CreateCustomerRequest {
            email: "customer@example.com".to_string(),
            name: "John Doe".to_string(),
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
| `email` | `string` |  |
| `metadata` | `Metadata` | Additional metadata for the customer |
| `name` | `string` |  |
| `phone_number` | `object` |  |
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

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(