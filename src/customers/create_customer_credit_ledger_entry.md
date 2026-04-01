# Create Customer Credit Ledger Entry

Add or deduct monetary funds in a customer's wallet using entry_type 'credit' or 'debit'.

## Request

```rust
use dodopayments_rust::{
    models::{CreateLedgerEntryRequest, LedgerEntryType},
    to_pretty_json, DodoPaymentsClientBuilder,
};

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
        .create_customer_ledger_entry()
        .body(CreateLedgerEntryRequest {
            amount: "100".to_string(),
            entry_type: LedgerEntryType::Credit,
            reason: None,
            idempotency_key: None,
            expires_at: None,
            metadata: None,
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
| `customer_id` | `string` | `Customer ID` |

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `amount` | `integer` |  |
| `currency` | `Currency` | Currency of the wallet to adjust |
| `entry_type` | `CustomerLedgerEntryType` | Type of ledger entry - credit or debit |
| `idempotency_key` | `object` | Optional idempotency key to prevent duplicate entries |
| `reason` | `object` |  |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `balance` | `integer` |  |
| `created_at` | `string` |  |
| `currency` | `Currency` |  |
| `customer_id` | `string` |  |
| `updated_at` | `string` |  |

### 400 Status

Insufficient balance for debit

### 422 Status

Invalid Request Object or Parameters

### 500 Status

Something went wrong :(