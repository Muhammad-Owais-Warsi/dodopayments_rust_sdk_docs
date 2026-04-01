# Get Customer Wallets

Retrieve monetary wallet balances associated with a specific customer. Wallets hold real funds (USD, EUR, etc.).

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
        .list_customer_wallets()
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `customer_id` | `string` | `Customer ID` |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `items` | `array<CustomerWalletResponse>` |  |
| `total_balance_usd` | `integer` | Sum of all wallet balances converted to USD (in smallest unit) |

### 500 Status

Something went wrong :(