# Validate License

Validate a license for the user.

## Request

```rust
use dodopayments_rust::{
    models::ValidateLicenseKeyRequest, to_pretty_json, DodoPaymentsClientBuilder,
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
        .validate()
        .body(ValidateLicenseKeyRequest {
            license_key: "lic_xxxxxxxxxx".to_string(),
            ..Default::default()
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
| `license_key_instance_id` | `object` |  |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `valid` | `boolean` |  |

License key validation result

### 422 Status

Invalid request format

### 500 Status

Something went wrong :(