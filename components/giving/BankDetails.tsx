// components/giving/BankDetails.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";
import { Building2, Copy, Check, CreditCard, Landmark } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

export function BankDetails() {
  const t = useTranslations("giving");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const bankAccounts = [
    {
      bank: "Afriland First Bank",
      accountName: "GGM Cameroun",
      accountNumber: "12345678901",
      swift: "CCEICMCX",
      currency: "XAF",
    },
    {
      bank: "Société Générale Cameroun",
      accountName: "GGM Cameroun",
      accountNumber: "98765432109",
      swift: "SGCMCMCX",
      currency: "XAF",
    },
  ];

  return (
    <section className="bg-muted py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t("bank.subtitle")}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t("bank.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            {t("bank.description")}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
          {bankAccounts.map((account, index) => (
            <motion.div
              key={account.accountNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" as const }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Landmark className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {account.bank}
                </h3>
              </div>

              <div className="space-y-4">
                {/* Account Name */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t("bank.accountName")}
                  </p>
                  <p className="mt-1 font-semibold text-foreground">{account.accountName}</p>
                </div>

                {/* Account Number */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t("bank.accountNumber")}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <p className="font-mono text-lg font-bold text-foreground">
                      {account.accountNumber}
                    </p>
                    <button
                      onClick={() => copyToClipboard(account.accountNumber, `account-${index}`)}
                      className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-accent transition-colors"
                      aria-label="Copy account number"
                    >
                      {copiedField === `account-${index}` ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* SWIFT & Currency */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      SWIFT
                    </p>
                    <p className="mt-1 font-mono text-sm font-semibold text-foreground">
                      {account.swift}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {t("bank.currency")}
                    </p>
                    <p className="mt-1 font-semibold text-foreground">{account.currency}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}