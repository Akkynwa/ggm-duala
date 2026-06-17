// app/[locale]/prayer-request/page.tsx
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/shared/Container";
import { PrayerRequestForm } from "@/components/forms/PrayerRequestForm";

export default function PrayerRequestPage() {
  return (
    <>
      <PageHeader
        subtitle="Prayer"
        title="Submit a Prayer Request"
        description="We believe in the power of prayer. Our prayer team is ready to stand with you."
      />
      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            <PrayerRequestForm />
          </div>
        </Container>
      </section>
    </>
  );
}