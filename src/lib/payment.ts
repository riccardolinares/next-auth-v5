import { loadStripe } from "@stripe/stripe-js";

const loadPortal = async () => {
  // const { data } = await axios.get("/api/payment/customer-portal");
  await fetch("/api/payment/customer-portal", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => (window.location.href = data.url))
    .catch((err) => console.log(err));
};

const processSubscription = async (priceId: string) => {
  console.log("PRICE ID: ", priceId);
  const stripe = await loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
  );
  // const { data } = await axios.get(`/api/payment/subscription/${priceId}`);
  const data = await fetch("/api/payment/subscription/", {
    method: "POST",
    body: JSON.stringify({ priceId }),
  }).then((res) => res.json());

  await stripe!.redirectToCheckout({ sessionId: data.id });
};

const updateSubscription = async (subscriptionId: string, priceId: string) => {
  const data = await fetch("/api/payment/update-subscription/", {
    method: "POST",
    body: JSON.stringify({ subscriptionId, priceId }),
  }).then((res) => res.json());

  console.log("SUBSCRIPTION UPDATE: ", data);
};

const processPayment = async (priceId: string) => {
  const stripe = await loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
  );
  // const { data } = await axios.get(`/api/payment/product/${priceId}`);
  const data = await fetch("/api/payment/product/", {
    method: "POST",
    body: JSON.stringify({ priceId }),
  }).then((res) => res.json());
  await stripe!.redirectToCheckout({ sessionId: data.id });
};

const processPaymentApplication = async (
  priceId: string,
  metadata: Record<string, string>
) => {
  const stripe = await loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
  );
  const data = await fetch("/api/payment/application/", {
    method: "POST",
    body: JSON.stringify({ priceId: priceId, metadata: metadata }),
  }).then((res) => res.json());
  await stripe!.redirectToCheckout({ sessionId: data.id });
};

export {
  loadPortal,
  processSubscription,
  processPayment,
  updateSubscription,
  processPaymentApplication,
};
