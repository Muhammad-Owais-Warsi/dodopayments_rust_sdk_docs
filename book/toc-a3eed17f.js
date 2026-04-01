// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="quick_start.html"><strong aria-hidden="true">2.</strong> Quick Start</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="addons/index.html"><strong aria-hidden="true">3.</strong> Addons</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="addons/create_addon.html"><strong aria-hidden="true">3.1.</strong> Create Addon</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="addons/get_addon_detail.html"><strong aria-hidden="true">3.2.</strong> Get Addon Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="addons/get_addons.html"><strong aria-hidden="true">3.3.</strong> Get Addons</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="addons/update_addon.html"><strong aria-hidden="true">3.4.</strong> Update Addon</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="addons/update_addon_image.html"><strong aria-hidden="true">3.5.</strong> Update Addon Image</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="balance_ledger/index.html"><strong aria-hidden="true">4.</strong> Balance Ledger</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="balance_ledger/get_balance_ledger_entries.html"><strong aria-hidden="true">4.1.</strong> Get Balance Ledger Entries</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="brands/index.html"><strong aria-hidden="true">5.</strong> Brands</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="brands/create_brand.html"><strong aria-hidden="true">5.1.</strong> Create Brand</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="brands/get_brand_detail.html"><strong aria-hidden="true">5.2.</strong> Get Brand Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="brands/get_brands.html"><strong aria-hidden="true">5.3.</strong> Get Brands</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="brands/update_brand.html"><strong aria-hidden="true">5.4.</strong> Update Brand</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="brands/update_brand_image.html"><strong aria-hidden="true">5.5.</strong> Update Brand Image</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="checkout_sessions/index.html"><strong aria-hidden="true">6.</strong> Checkout Sessions</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="checkout_sessions/create_checkout_session.html"><strong aria-hidden="true">6.1.</strong> Create Checkout Session</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="checkout_sessions/preview_checkout_session.html"><strong aria-hidden="true">6.2.</strong> Preview Checkout Session</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="checkout_sessions/retrieve_checkout_session.html"><strong aria-hidden="true">6.3.</strong> Retrieve Checkout Session</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credit_entitlements/index.html"><strong aria-hidden="true">7.</strong> Credit Entitlements</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credit_entitlements/create_credit_entitlement.html"><strong aria-hidden="true">7.1.</strong> Create Credit Entitlement</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credit_entitlements/delete_credit_entitlement.html"><strong aria-hidden="true">7.2.</strong> Delete Credit Entitlement</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credit_entitlements/get_credit_entitlement_detail.html"><strong aria-hidden="true">7.3.</strong> Get Credit Entitlement Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credit_entitlements/get_credit_entitlements.html"><strong aria-hidden="true">7.4.</strong> Get Credit Entitlements</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credit_entitlements/get_customer_credit_balance.html"><strong aria-hidden="true">7.5.</strong> Get Customer Credit Balance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credit_entitlements/get_customer_credit_grants.html"><strong aria-hidden="true">7.6.</strong> Get Customer Credit Grants</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credit_entitlements/get_customer_credit_ledger.html"><strong aria-hidden="true">7.7.</strong> Get Customer Credit Ledger</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credit_entitlements/undelete_credit_entitlement.html"><strong aria-hidden="true">7.8.</strong> Undelete Credit Entitlement</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credit_entitlements/update_credit_entitlement.html"><strong aria-hidden="true">7.9.</strong> Update Credit Entitlement</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="customers/index.html"><strong aria-hidden="true">8.</strong> Customers</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="customers/create_customer.html"><strong aria-hidden="true">8.1.</strong> Create Customer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="customers/create_customer_credit_ledger_entry.html"><strong aria-hidden="true">8.2.</strong> Create Customer Credit Ledger Entry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="customers/create_customer_portal_session.html"><strong aria-hidden="true">8.3.</strong> Create Customer Portal Session</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="customers/get_customer_detail.html"><strong aria-hidden="true">8.4.</strong> Get Customer Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="customers/get_customer_wallet_ledger_entries.html"><strong aria-hidden="true">8.5.</strong> Get Customer Wallet Ledger Entries</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="customers/get_customer_wallets.html"><strong aria-hidden="true">8.6.</strong> Get Customer Wallets</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="customers/get_customers.html"><strong aria-hidden="true">8.7.</strong> Get Customers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="customers/update_customer.html"><strong aria-hidden="true">8.8.</strong> Update Customer</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="discounts/index.html"><strong aria-hidden="true">9.</strong> Discounts</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="discounts/create_discount.html"><strong aria-hidden="true">9.1.</strong> Create Discount</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="discounts/delete_discount.html"><strong aria-hidden="true">9.2.</strong> Delete Discount</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="discounts/get_discount_by_code.html"><strong aria-hidden="true">9.3.</strong> Get Discount By Code</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="discounts/get_discount_detail.html"><strong aria-hidden="true">9.4.</strong> Get Discount Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="discounts/get_discounts.html"><strong aria-hidden="true">9.5.</strong> Get Discounts</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="discounts/update_discount.html"><strong aria-hidden="true">9.6.</strong> Update Discount</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="disputes/index.html"><strong aria-hidden="true">10.</strong> Disputes</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="disputes/get_dispute_detail.html"><strong aria-hidden="true">10.1.</strong> Get Dispute Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="disputes/get_disputes.html"><strong aria-hidden="true">10.2.</strong> Get Disputes</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="events/index.html"><strong aria-hidden="true">11.</strong> Events</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="events/get_event_deatils.html"><strong aria-hidden="true">11.1.</strong> Get Event Details</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="events/get_events.html"><strong aria-hidden="true">11.2.</strong> Get Events</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="events/ingest_event.html"><strong aria-hidden="true">11.3.</strong> Ingest Event</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="licenses/index.html"><strong aria-hidden="true">12.</strong> Licenses</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="licenses/activate_license.html"><strong aria-hidden="true">12.1.</strong> Activate License</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="licenses/deactivate_license.html"><strong aria-hidden="true">12.2.</strong> Deactivate License</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="licenses/get_license_key.html"><strong aria-hidden="true">12.3.</strong> Get License Key</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="licenses/get_license_key_instance.html"><strong aria-hidden="true">12.4.</strong> Get License Key Instance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="licenses/get_license_key_instances.html"><strong aria-hidden="true">12.5.</strong> Get License Key Instances</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="licenses/get_licenses.html"><strong aria-hidden="true">12.6.</strong> Get Licenses</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="licenses/update_license_key.html"><strong aria-hidden="true">12.7.</strong> Update License Key</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="licenses/update_license_key_instance.html"><strong aria-hidden="true">12.8.</strong> Update License Key Instance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="licenses/validate_license.html"><strong aria-hidden="true">12.9.</strong> Validate License</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="meters/index.html"><strong aria-hidden="true">13.</strong> Meters</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="meters/archive_meter.html"><strong aria-hidden="true">13.1.</strong> Archive Meter</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="meters/create_meter.html"><strong aria-hidden="true">13.2.</strong> Create Meter</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="meters/get_meter_details.html"><strong aria-hidden="true">13.3.</strong> Get Meter Details</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="meters/get_meters.html"><strong aria-hidden="true">13.4.</strong> Get Meters</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="meters/unarchive_meter.html"><strong aria-hidden="true">13.5.</strong> Unarchive Meter</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="misc/index.html"><strong aria-hidden="true">14.</strong> Misc</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="misc/get_supported_countries.html"><strong aria-hidden="true">14.1.</strong> Get Supported Countries</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="payments/index.html"><strong aria-hidden="true">15.</strong> Payments</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="payments/create_payment.html"><strong aria-hidden="true">15.1.</strong> Create Payment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="payments/get_payment_detail.html"><strong aria-hidden="true">15.2.</strong> Get Payment Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="payments/get_payment_invoice.html"><strong aria-hidden="true">15.3.</strong> Get Payment Invoice</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="payments/get_payment_line_items.html"><strong aria-hidden="true">15.4.</strong> Get Payment Line Items</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="payments/get_payments.html"><strong aria-hidden="true">15.5.</strong> Get Payments</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="payouts/index.html"><strong aria-hidden="true">16.</strong> Payouts</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="payouts/get_payouts.html"><strong aria-hidden="true">16.1.</strong> Get Payouts</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="products/index.html"><strong aria-hidden="true">17.</strong> Products</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="products/create_product.html"><strong aria-hidden="true">17.1.</strong> Create Product</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="products/create_product_short_link.html"><strong aria-hidden="true">17.2.</strong> Create Product Short Link</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="products/delete_product.html"><strong aria-hidden="true">17.3.</strong> Delete Product</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="products/get_product_detail.html"><strong aria-hidden="true">17.4.</strong> Get Product Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="products/get_product_short_links.html"><strong aria-hidden="true">17.5.</strong> Get Product Short Links</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="products/get_products.html"><strong aria-hidden="true">17.6.</strong> Get Products</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="products/unarchive_product.html"><strong aria-hidden="true">17.7.</strong> Unarchive Product</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="products/update_product.html"><strong aria-hidden="true">17.8.</strong> Update Product</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="products/update_product_file.html"><strong aria-hidden="true">17.9.</strong> Update Product File</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="products/update_product_image.html"><strong aria-hidden="true">17.10.</strong> Update Product Image</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="refunds/index.html"><strong aria-hidden="true">18.</strong> Refunds</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="refunds/create_refund.html"><strong aria-hidden="true">18.1.</strong> Create Refund</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="refunds/get_refund_detail.html"><strong aria-hidden="true">18.2.</strong> Get Refund Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="refunds/get_refunds.html"><strong aria-hidden="true">18.3.</strong> Get Refunds</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="subscriptions/index.html"><strong aria-hidden="true">19.</strong> Subscriptions</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="subscriptions/change_subscription_plan.html"><strong aria-hidden="true">19.1.</strong> Change Subscription Plan</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="subscriptions/create_subscription.html"><strong aria-hidden="true">19.2.</strong> Create Subscription</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="subscriptions/create_subscription_charge.html"><strong aria-hidden="true">19.3.</strong> Create Subscription Charge</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="subscriptions/get_subscription_detail.html"><strong aria-hidden="true">19.4.</strong> Get Subscription Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="subscriptions/get_subscription_usage_history.html"><strong aria-hidden="true">19.5.</strong> Get Subscription Usage History</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="subscriptions/get_subscriptions.html"><strong aria-hidden="true">19.6.</strong> Get Subscriptions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="subscriptions/update_subscription.html"><strong aria-hidden="true">19.7.</strong> Update Subscription</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="webhooks/index.html"><strong aria-hidden="true">20.</strong> Webhooks</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="webhooks/create_webhook.html"><strong aria-hidden="true">20.1.</strong> Create Webhook</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="webhooks/delete_webhook.html"><strong aria-hidden="true">20.2.</strong> Delete Webhook</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="webhooks/get_webhook_detail.html"><strong aria-hidden="true">20.3.</strong> Get Webhook Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="webhooks/get_webhook_headers.html"><strong aria-hidden="true">20.4.</strong> Get Webhook Headers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="webhooks/get_webhook_signing_secret.html"><strong aria-hidden="true">20.5.</strong> Get Webhook Signing Secret</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="webhooks/get_webhooks.html"><strong aria-hidden="true">20.6.</strong> Get Webhooks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="webhooks/update_webhook.html"><strong aria-hidden="true">20.7.</strong> Update Webhook</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="webhooks/update_webhook_headers.html"><strong aria-hidden="true">20.8.</strong> Update Webhook Headers</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

