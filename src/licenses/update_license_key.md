# Update License Key

Update a license key by its ID.

## Request

```rust
use dodopayments_rust::{
    models::PatchLicenseKeyRequest, to_pretty_json, DodoPaymentsClientBuilder,
};

#[tokio::main]

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api_key = std::env::var("DODO_API_KEY")?;

    let client = DodoPaymentsClientBuilder::new()
        .bearer_token(&api_key)
        .enviroment("test_mode")
        .build()?;

    let license_key_id = "lic_xxxxxxxxxx";

    let resp = client
        .licenses()
        .license_keys()
        .id(license_key_id)
        .update()
        .body(PatchLicenseKeyRequest {
            activations_limit: Some(10),
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
| `id` | `string` | `License key ID` |

## Body

| Field | Type | Description |
| :--- | :--- | :--- |
| `activations_limit` | `object` | The updated activation limit for the license key. Use `null` to remove the limit, or omit this field to leave it unchanged. |
| `disabled` | `object` | Indicates whether the license key should be disabled. A value of `true` disables the key, while `false` enables it. Omit this field to leave it unchanged. |
| `expires_at` | `object` | The updated expiration timestamp for the license key in UTC. Use `null` to remove the expiration date, or omit this field to leave it unchanged. |
## Responses

### 200 Status

| Field | Type | Description |
| :--- | :--- | :--- |
| `activations_limit` | `object` | The maximum number of activations allowed for this license key. |
| `business_id` | `string` | The unique identifier of the business associated with the license key. |
| `created_at` | `string` | The timestamp indicating when the license key was created, in UTC. |
| `customer_id` | `string` | The unique identifier of the customer associated with the license key. |
| `expires_at` | `object` | The timestamp indicating when the license key expires, in UTC. |
| `id` | `string` | The unique identifier of the license key. |
| `instances_count` | `integer` | The current number of instances activated for this license key. |
| `key` | `string` | The license key string. |
| `payment_id` | `string` | The unique identifier of the payment associated with the license key. |
| `product_id` | `string` | The unique identifier of the product associated with the license key. |
| `status` | `LicenseKeyStatus` | The current status of the license key (e.g., active, inactive, expired). |
| `subscription_id` | `object` | The unique identifier of the subscription associated with the license key, if any. |

License key updated successfully

### 400 Status

Cannot set expiry for subscription-based license

### 404 Status

License key not found

### 422 Status

New activation limit is less than current instances count

### 500 Status

Something went wrong :(