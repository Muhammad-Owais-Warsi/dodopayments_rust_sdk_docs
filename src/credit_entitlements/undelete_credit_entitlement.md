# Undelete Credit Entitlement

Restore a previously deleted credit entitlement.

making it available again through standard list and get s.

# Business Logic

- Only deleted credit entitlements can be restored
- The query filters for `deleted_at IS NOT NULL`, so non-deleted entitlements will result in 0 rows affected
- If no rows are affected (entitlement doesn't exist, doesn't belong to business, or is not deleted), returns 500
- The `updated_at` timestamp is automatically updated on successful restoration
- Once restored, the entitlement becomes immediately available in the standard list and get s
- All configuration settings are preserved during delete/restore operations

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
        .undelete()
        .send()
        .await?;

    println!("{}", to_pretty_json(&resp)?);

    Ok(())
}

```

## Path Parameters

| Parameter | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `id`      | `string` | `Credit Entitlement ID` |

## Responses

### 200 Status

Credit Entitlement Restored Successfully

### 500 Status

Something went wrong :(