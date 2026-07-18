"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { staggerContainer, fadeInUp } from "@/lib/motion/variants";

export interface InquiryTypeOption {
  value: string;
  label: string;
}

export interface ContactFormProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  inquiryTypeOptions?: InquiryTypeOption[];
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
}

const defaultInquiryTypeOptions: InquiryTypeOption[] = [
  { value: "business-partnership", label: "Business Partnership" },
  { value: "project-discussion", label: "Project Discussion" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "technology-solutions", label: "Technology Solutions" },
  { value: "ai-automation", label: "AI & Automation" },
  { value: "creative-studio", label: "Creative & Studio" },
  { value: "careers", label: "Careers" },
  { value: "general-enquiry", label: "General Enquiry" },
];

/**
 * Field values are strings only today; this shape is deliberately flat so
 * it can be posted as-is once a real backend exists. Future-ready for
 * CRM integration, file attachments, reCAPTCHA, multi-step flows, and
 * form analytics — none of that is implemented yet, only structured for
 * it via this single source-of-truth field list.
 */
interface FormValues {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  inquiryType: string;
  subject: string;
  message: string;
}

const initialValues: FormValues = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  industry: "",
  inquiryType: "",
  subject: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s+().-]{7,}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.industry.trim()) errors.industry = "Please enter your industry.";

  if (!values.inquiryType) errors.inquiryType = "Please select an inquiry type.";

  if (!values.subject.trim()) errors.subject = "Please enter a subject.";

  if (!values.message.trim()) {
    errors.message = "Please enter your message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Your message should be at least 10 characters.";
  }

  return errors;
}

const inputClasses =
  "border-input bg-background text-foreground placeholder:text-muted-foreground rounded-input duration-fast ease-standard w-full border px-4 py-2.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const errorInputClasses = "border-destructive focus-visible:ring-destructive";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-foreground text-sm font-medium">
        {label}
        {optional ? (
          <span className="text-muted-foreground font-normal"> (Optional)</span>
        ) : (
          <span aria-hidden="true"> *</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-destructive text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm({
  eyebrow = "Get In Touch",
  heading = "Send Us a Message",
  description = "Tell us about your business, project, or enquiry. Our team will review your message and get back to you as soon as possible.",
  inquiryTypeOptions = defaultInquiryTypeOptions,
  primaryCtaLabel = "Send Message",
  secondaryCtaLabel = "Schedule a Consultation",
}: ContactFormProps) {
  const shouldReduceMotion = useReducedMotion();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function handleReset() {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <Section
      id="contact-form"
      aria-label="Send Us a Message"
      tone="muted"
      spacing="xl"
      containerSize="lg"
    >
      <m.div
        className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <m.span
          variants={fadeInUp}
          className="border-border bg-accent text-accent-foreground inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
        >
          {eyebrow}
        </m.span>
        <m.div variants={fadeInUp}>
          <Heading level={2}>{heading}</Heading>
        </m.div>
        <m.div variants={fadeInUp}>
          <Text variant="lead" className="text-muted-foreground text-pretty">
            {description}
          </Text>
        </m.div>
      </m.div>

      <m.div
        className="mx-auto mt-12 max-w-3xl lg:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
      >
        <Card className="p-8 sm:p-10">
          {submitted ? (
            <m.div
              className="flex flex-col items-center gap-4 py-8 text-center"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span
                aria-hidden="true"
                className="bg-success/15 text-success flex size-14 items-center justify-center rounded-full"
              >
                <CheckCircle2 className="size-7" strokeWidth={1.75} />
              </span>
              <Heading level={3} className="text-xl">
                Message Sent
              </Heading>
              <Text variant="body" className="text-muted-foreground max-w-md text-pretty">
                Thank you for reaching out. Our team will review your message and get back to you as
                soon as possible.
              </Text>
              <Button variant="outline" onClick={handleReset} className="mt-2">
                Send Another Message
              </Button>
            </m.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field id="fullName" label="Full Name" error={errors.fullName}>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={values.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className={`${inputClasses} ${errors.fullName ? errorInputClasses : ""}`}
                  />
                </Field>
                <Field id="companyName" label="Company Name" optional>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    autoComplete="organization"
                    value={values.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    className={inputClasses}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field id="email" label="Email Address" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`${inputClasses} ${errors.email ? errorInputClasses : ""}`}
                  />
                </Field>
                <Field id="phone" label="Phone Number" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`${inputClasses} ${errors.phone ? errorInputClasses : ""}`}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field id="industry" label="Industry" error={errors.industry}>
                  <input
                    id="industry"
                    name="industry"
                    type="text"
                    value={values.industry}
                    onChange={(e) => updateField("industry", e.target.value)}
                    aria-invalid={Boolean(errors.industry)}
                    aria-describedby={errors.industry ? "industry-error" : undefined}
                    className={`${inputClasses} ${errors.industry ? errorInputClasses : ""}`}
                  />
                </Field>
                <Field id="inquiryType" label="Inquiry Type" error={errors.inquiryType}>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={values.inquiryType}
                    onChange={(e) => updateField("inquiryType", e.target.value)}
                    aria-invalid={Boolean(errors.inquiryType)}
                    aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}
                    className={`${inputClasses} ${errors.inquiryType ? errorInputClasses : ""}`}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {inquiryTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="subject" label="Subject" error={errors.subject}>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={(e) => updateField("subject", e.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={`${inputClasses} ${errors.subject ? errorInputClasses : ""}`}
                />
              </Field>

              <Field id="message" label="Message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${inputClasses} ${errors.message ? errorInputClasses : ""} resize-none`}
                />
              </Field>

              <div className="mt-2 flex flex-col gap-4 sm:flex-row">
                <Button type="submit" size="lg" className="sm:flex-1">
                  {primaryCtaLabel}
                </Button>
                <Button type="submit" size="lg" variant="outline" className="sm:flex-1">
                  {secondaryCtaLabel}
                </Button>
              </div>
            </form>
          )}
        </Card>
      </m.div>
    </Section>
  );
}
