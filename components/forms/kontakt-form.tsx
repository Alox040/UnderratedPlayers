"use client";

import { useActionState } from "react";
import { FormSuccess } from "@/components/forms/form-success";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitKontakt } from "@/features/kontakt/actions";
import { initialKontaktFormState } from "@/features/kontakt/types";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export function KontaktForm() {
  const [state, formAction, isPending] = useActionState(
    submitKontakt,
    initialKontaktFormState,
  );

  if (state.ok) {
    return <FormSuccess message={state.message} />;
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="kontakt-name" className="text-sm font-medium text-neutral-800">
          Name
        </label>
        <Input id="kontakt-name" name="name" required autoComplete="name" className="mt-1" />
        <FieldError message={state.fieldErrors?.name?.[0]} />
      </div>
      <div>
        <label htmlFor="kontakt-email" className="text-sm font-medium text-neutral-800">
          E-Mail
        </label>
        <Input
          id="kontakt-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1"
        />
        <FieldError message={state.fieldErrors?.email?.[0]} />
      </div>
      <div>
        <label htmlFor="kontakt-betreff" className="text-sm font-medium text-neutral-800">
          Betreff
        </label>
        <Input id="kontakt-betreff" name="betreff" required className="mt-1" />
        <FieldError message={state.fieldErrors?.betreff?.[0]} />
      </div>
      <div>
        <label htmlFor="kontakt-nachricht" className="text-sm font-medium text-neutral-800">
          Nachricht
        </label>
        <textarea id="kontakt-nachricht" name="nachricht" rows={5} required className={cn(fieldClass, "mt-1")} />
        <FieldError message={state.fieldErrors?.nachricht?.[0]} />
      </div>
      {state.message && !state.ok ? (
        <p className="text-sm text-red-600" role="alert">
          {state.message}
        </p>
      ) : null}
      <Button type="submit" disabled={isPending}>
        {isPending ? "Senden …" : "Nachricht senden"}
      </Button>
    </form>
  );
}
