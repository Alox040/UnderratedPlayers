"use client";

import { useActionState } from "react";
import { FormSuccess } from "@/components/forms/form-success";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitBewerbung } from "@/features/bewerbung/actions";
import { initialBewerbungFormState } from "@/features/bewerbung/types";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export function BewerbungForm() {
  const [state, formAction, isPending] = useActionState(
    submitBewerbung,
    initialBewerbungFormState,
  );

  if (state.ok) {
    return <FormSuccess message={state.message} />;
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="bewerbung-name" className="text-sm font-medium text-neutral-800">
          Name
        </label>
        <Input id="bewerbung-name" name="name" required autoComplete="name" className="mt-1" />
        <FieldError message={state.fieldErrors?.name?.[0]} />
      </div>
      <div>
        <label htmlFor="bewerbung-email" className="text-sm font-medium text-neutral-800">
          E-Mail
        </label>
        <Input
          id="bewerbung-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1"
        />
        <FieldError message={state.fieldErrors?.email?.[0]} />
      </div>
      <div>
        <label htmlFor="bewerbung-geburtsjahr" className="text-sm font-medium text-neutral-800">
          Geburtsjahr
        </label>
        <Input
          id="bewerbung-geburtsjahr"
          name="geburtsjahr"
          type="number"
          inputMode="numeric"
          required
          min={1990}
          max={new Date().getFullYear() - 10}
          className="mt-1"
        />
        <FieldError message={state.fieldErrors?.geburtsjahr?.[0]} />
      </div>
      <div>
        <label htmlFor="bewerbung-position" className="text-sm font-medium text-neutral-800">
          Position
        </label>
        <Input id="bewerbung-position" name="position" required className="mt-1" />
        <FieldError message={state.fieldErrors?.position?.[0]} />
      </div>
      <div>
        <label htmlFor="bewerbung-nachricht" className="text-sm font-medium text-neutral-800">
          Nachricht (optional)
        </label>
        <textarea
          id="bewerbung-nachricht"
          name="nachricht"
          rows={4}
          className={cn(fieldClass, "mt-1")}
        />
        <FieldError message={state.fieldErrors?.nachricht?.[0]} />
      </div>
      {state.message && !state.ok ? (
        <p className="text-sm text-red-600" role="alert">
          {state.message}
        </p>
      ) : null}
      <Button type="submit" disabled={isPending}>
        {isPending ? "Senden …" : "Bewerbung absenden"}
      </Button>
    </form>
  );
}
