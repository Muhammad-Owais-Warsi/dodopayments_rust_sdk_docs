# Create Customer Portal Session

Create a session of the Customer Portal for a specific customer.

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

    let resp = client
        .customers()
        .id(customer_id)
        .create_customer_portal()
        .send()
        .await?;

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
| `link` | `string` |  |

Successfully send email to customer (if they exist)

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(