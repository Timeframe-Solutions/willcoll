<script setup lang="ts">
const { services } = useServices();

useHead({
  title: "Contact Us | Willcoll Agencies",
  meta: [
    {
      name: "description",
      content:
        "Book a free consultation with Willcoll Agencies advisory team in Nairobi, Kenya.",
    },
  ],
});

const route = useRoute();

const form = reactive({
  fullName: "",
  company: "",
  email: "",
  phone: "",
  service: typeof route.query.service === "string" ? route.query.service : "",
  message: "",
});

const isSubmitting = ref(false);

const status = ref<{
  type: "success" | "error";
  message: string;
} | null>(null);

const messageError = ref("");

const MIN_MESSAGE_WORDS = 6;

const wordCount = (value: string) =>
  value.trim().length === 0
    ? 0
    : value.trim().split(/\s+/).filter(Boolean).length;

const validateMessage = (value: string) => {
  if (!value.trim()) {
    return ""; // don't show "too short" before they've typed anything
  }
  const words = wordCount(value);
  if (words < MIN_MESSAGE_WORDS) {
    return `Please write at least ${MIN_MESSAGE_WORDS} words describing your enquiry (currently ${words}).`;
  }
  return "";
};

watch(
  () => form.message,
  (value) => {
    messageError.value = validateMessage(value);
  },
);

const submit = async () => {
  status.value = null;

  // Client-side validation, mirrors the server's Zod min-word rule
  const currentMessageError = validateMessage(form.message);
  if (currentMessageError) {
    messageError.value = currentMessageError;
    status.value = {
      type: "error",
      message: "Please fix the highlighted field before sending.",
    };
    return;
  }

  isSubmitting.value = true;

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: {
        fullName: form.fullName.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service || "",
        message: form.message.trim(),
      },
    });

    status.value = {
      type: "success",
      message: "Thank you. Our advisory team will be in touch shortly.",
    };

    Object.assign(form, {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    messageError.value = "";
  } catch (err: any) {
    console.error(err);

    // Surface a server-side Zod field error if one comes back, e.g.
    // { data: { fieldErrors: { message: ["Message is too short"] } } }
    if (err?.data?.fieldErrors?.message?.length) {
      messageError.value = err.data.fieldErrors.message[0];
    }

    status.value = {
      type: "error",
      message:
        err?.data?.statusMessage ||
        err?.statusMessage ||
        err?.message ||
        "Unable to send your enquiry. Please try again.",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="Start a conversation"
      title="Let's Talk About Your Business"
      subtitle="Book a free initial consultation and speak directly with our advisory team about the problem you are facing."
    />
    <section id="booking" class="py-16 lg:py-24 bg-gray-50 scroll-mt-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
        <aside
          class="lg:col-span-2 bg-ink-900 text-white rounded-3xl p-8 lg:p-10"
        >
          <p
            class="text-orange-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Contact details
          </p>
          <h2 class="text-3xl text-white mb-8">
            A practical next step starts with a conversation.
          </h2>
          <div class="space-y-7 text-gray-300">
            <div class="flex gap-4">
              <Icon
                name="lucide:map-pin"
                class="w-5 h-5 text-orange-400 shrink-0 mt-1"
              />
              <p>
                10th Floor, Pension Towers<br />Loita Street, Nairobi, Kenya<br />P.O.
                Box 24799 - 00502
              </p>
            </div>
            <a href="tel:0722550893" class="flex gap-4 hover:text-white"
              ><Icon
                name="lucide:phone"
                class="w-5 h-5 text-orange-400 shrink-0"
              /><span>0722 550 893</span></a
            >

            <a
              href="mailto:info@willcoll.co.ke"
              class="flex gap-4 hover:text-white"
            >
              <Icon
                name="lucide:mail"
                class="w-5 h-5 text-orange-400 shrink-0"
              />
              <span>info@willcoll.co.ke</span>
            </a>
          </div>
        </aside>
        <form
          class="lg:col-span-3 bg-white rounded-3xl border border-gray-100 p-7 lg:p-10 grid sm:grid-cols-2 gap-5"
          @submit.prevent="submit"
        >
          <div>
            <label
              for="name"
              class="block text-sm font-semibold text-ink-900 mb-2"
              >Full Name</label
            ><input
              id="name"
              v-model.trim="form.fullName"
              required
              type="text"
              autocomplete="name"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>
          <div>
            <label
              for="company"
              class="block text-sm font-semibold text-ink-900 mb-2"
              >Company Name</label
            ><input
              id="company"
              v-model.trim="form.company"
              type="text"
              autocomplete="organization"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-sm font-semibold text-ink-900 mb-2"
              >Email</label
            ><input
              id="email"
              v-model.trim="form.email"
              required
              type="email"
              autocomplete="email"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>
          <div>
            <label
              for="phone"
              class="block text-sm font-semibold text-ink-900 mb-2"
              >Phone</label
            ><input
              id="phone"
              v-model.trim="form.phone"
              type="tel"
              autocomplete="tel"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="service"
              class="block text-sm font-semibold text-ink-900 mb-2"
              >Service of Interest</label
            ><select
              id="service"
              v-model="form.service"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            >
              <option value="">Select a practice area</option>
              <option
                v-for="service in services"
                :key="service.id"
                :value="service.id"
              >
                {{ service.name }}
              </option>
            </select>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm font-semibold text-ink-900 mb-2"
              >Tell us a little about the challenge</label
            ><textarea
              id="message"
              v-model.trim="form.message"
              required
              rows="5"
              :aria-invalid="!!messageError"
              aria-describedby="message-error"
              class="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2"
              :class="
                messageError
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                  : 'border-gray-300 focus:border-orange-500 focus:ring-orange-100'
              "
            />
            <p
              v-if="messageError"
              id="message-error"
              class="text-sm text-red-600 mt-2"
              role="alert"
            >
              {{ messageError }}
            </p>
          </div>
          <div class="sm:col-span-2">
            <SharedButton
              type="submit"
              size="lg"
              :disabled="isSubmitting || !!messageError"
              >{{ isSubmitting ? "Sending…" : "Send Message" }}</SharedButton
            >
            <p
              v-if="status"
              class="text-sm mt-3 rounded-lg px-3 py-2"
              :class="
                status.type === 'success'
                  ? 'text-green-700 bg-green-50'
                  : 'text-red-700 bg-red-50'
              "
              role="status"
            >
              {{ status.message }}
            </p>
            <p class="text-xs text-gray-500 mt-3">
              We will use your details only to respond to this enquiry.
            </p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
