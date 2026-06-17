import {
  Button,
  Checkbox,
  ErrorText,
  Field,
  Fieldset,
  HelpText,
  Label,
  Legend,
  RadioGroup,
  Select,
  Textarea,
  TextInput
} from ".";

const meta = {
  title: "Primitives/Form",
  component: TextInput
};

export default meta;

export function TextControls() {
  return (
    <form className="max-w-xl space-y-5">
      <Field>
        <Label htmlFor="name">Name</Label>
        <HelpText id="name-help">Use the name you prefer to be called.</HelpText>
        <TextInput describedBy="name-help" id="name" name="name" />
      </Field>

      <Field>
        <Label htmlFor="question">Question</Label>
        <Textarea id="question" name="question" />
      </Field>

      <Field>
        <Label htmlFor="topic">Topic</Label>
        <Select id="topic" name="topic">
          <option value="">Choose a topic</option>
          <option value="access">Access</option>
          <option value="cost">Cost</option>
        </Select>
      </Field>

      <div className="flex gap-3">
        <Button type="submit">Submit</Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </form>
  );
}

export function InvalidState() {
  return (
    <Field>
      <Label htmlFor="email">Email</Label>
      <HelpText id="email-help">We use this only to respond to your request.</HelpText>
      <ErrorText id="email-error">Enter an email address.</ErrorText>
      <TextInput
        describedBy="email-help email-error"
        id="email"
        invalid
        name="email"
        type="email"
      />
    </Field>
  );
}

export function ChoiceControls() {
  return (
    <div className="max-w-xl space-y-6">
      <Checkbox
        hint="You can unsubscribe at any time."
        id="updates"
        label="Send me updates"
        name="updates"
      />

      <Fieldset>
        <Legend>Contact preference</Legend>
        <RadioGroup
          hint="Choose one option."
          legend="Preferred contact method"
          name="contact-method"
          options={[
            { hint: "Fastest for short updates.", label: "Email", value: "email" },
            { label: "Phone", value: "phone" },
            { disabled: true, label: "SMS unavailable", value: "sms" }
          ]}
        />
      </Fieldset>
    </div>
  );
}
