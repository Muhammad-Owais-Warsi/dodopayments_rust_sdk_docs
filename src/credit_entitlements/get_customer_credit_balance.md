# Get Customer Credit Balance

Get a specific customer's balance for a credit entitlement.

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
        .retrieve_customer_balance()
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

| Field                   | Type     | Description |
| :---------------------- | :------- | :---------- |
| `balance`               | `string` |             |
| `created_at`            | `string` |             |
| `credit_entitlement_id` | `string` |             |
| `customer_id`           | `string` |             |
| `id`                    | `string` |             |
| `last_transaction_at`   | `object` |             |
| `overage`               | `string` |             |
| `updated_at`            | `string` |             |

Customer balance details

### 404 Status

Credit entitlement or balance not found

### 500 Status

Something went wrong :(