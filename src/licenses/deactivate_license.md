# Deactivate License

Deactivate a license for the user.

## Request

```rust
use dodopayments_rust::{
    models::DeactivateLicenseKeyRequest, to_pretty_json, DodoPaymentsClientBuilder,
};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let resp = client
        .licenses()
        .deactivate()
        .body(DeactivateLicenseKeyRequest {
            license_key: "lic_xxxxxxxxxx".to_string(),
            license_key_instance_id: "lki_xxxxxxxxxx".to_string(),
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
| `license_key` | `string` |  |
| `license_key_instance_id` | `string` |  |
## Responses

### 200 Status

License key instance deactivated successfully

### 403 Status

License key instance not found or does not belong to this license key

### 404 Status

License key not found

### 500 Status

Something went wrong :(