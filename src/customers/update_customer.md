# Update Customer

Update a customer's information.

## Request

```rust
use dodopayments_rust::{models::PatchCustomerRequest, to_pretty_json, DodoPaymentsClientBuilder};

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
        .update()
        .body(PatchCustomerRequest {
            name: Some("Updated Name".to_string()),
            ..Default::default()
        })
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

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `email` | `object` |  |
| `metadata` | `object` |  |
| `name` | `object` |  |
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