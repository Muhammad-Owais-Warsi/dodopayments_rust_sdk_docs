# Get Balance Ledger Entries

List all customer balances for a specific credit entitlement.

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

    let resp = client.balance_ledgers_entries().list().send().await?;
    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `credit_entitlement_id` | `string` | `Credit Entitlement ID` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `items` | `array<CustomerCreditBalanceResponse>` |  |

List of customer balances

### 404 Status

Credit entitlement not found

### 500 Status

Something went wrong :(