# Get Customer Credit Grants

List credit grants for a customer under a specific credit entitlement.

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
    let customer_id = "cus_xxxxxxxxxx";

    let resp = client
        .credit_entitlements()
        .id(entitlement_id)
        .customer_id(customer_id)
        .list_customer_grants()
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter               | Type     | Description             |
| :---------------------- | :------- | :---------------------- |
| `credit_entitlement_id` | `string` | `Credit Entitlement ID` |
| `customer_id`           | `string` | `Customer ID`           |

## Responses

### 200 Status

| Field   | Type                         | Description |
| :------ | :--------------------------- | :---------- |
| `items` | `array<CreditGrantResponse>` |             |

List of customer grants

### 404 Status

Credit entitlement not found

### 500 Status

Something went wrong :(