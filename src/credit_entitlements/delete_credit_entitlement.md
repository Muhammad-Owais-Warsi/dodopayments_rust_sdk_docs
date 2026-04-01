# Delete Credit Entitlement

Soft-delete a credit entitlement by its ID.

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

    let entitlement_id = "ent_xxxxxxxxxx";

    let resp = client
        .credit_entitlements()
        .id(entitlement_id)
        .delete()
        .send()
        .await?;

    println!("Credit entitlement deleted successfully");

    Ok(())
}

```

## Path Parameters

| Parameter | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `id`      | `string` | `Credit Entitlement ID` |

## Responses

### 200 Status

Credit entitlement deleted successfully

### 404 Status

Credit entitlement not found

### 410 Status

Credit entitlement is already deleted

### 500 Status

Something went wrong :(