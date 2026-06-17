import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import {
  AppLink,
  Button,
  Checkbox,
  ErrorText,
  Field,
  HelpText,
  Label,
  RadioGroup,
  TextInput,
  Heading,
  Paragraph
} from ".";

const headingMarkup = renderToStaticMarkup(<Heading level={2}>Heading</Heading>);
assert.match(headingMarkup, /^<h2/);

const paragraphMarkup = renderToStaticMarkup(<Paragraph>Body copy</Paragraph>);
assert.match(paragraphMarkup, /^<p/);

const linkMarkup = renderToStaticMarkup(<AppLink href="/about">About</AppLink>);
assert.match(linkMarkup, /href="\/about"/);

const buttonMarkup = renderToStaticMarkup(<Button disabled>Continue</Button>);
assert.match(buttonMarkup, /<button/);
assert.match(buttonMarkup, /disabled=""/);
assert.match(buttonMarkup, /type="button"/);

const fieldMarkup = renderToStaticMarkup(
  <Field>
    <Label htmlFor="email">Email</Label>
    <HelpText id="email-help">Use a valid address.</HelpText>
    <ErrorText id="email-error">Enter an email address.</ErrorText>
    <TextInput
      describedBy="email-help email-error"
      id="email"
      invalid
      type="email"
    />
  </Field>
);
assert.match(fieldMarkup, /for="email"/);
assert.match(fieldMarkup, /aria-describedby="email-help email-error"/);
assert.match(fieldMarkup, /aria-invalid="true"/);

const checkboxMarkup = renderToStaticMarkup(
  <Checkbox id="updates" label="Send me updates" name="updates" />
);
assert.match(checkboxMarkup, /type="checkbox"/);
assert.match(checkboxMarkup, /for="updates"/);

const radioMarkup = renderToStaticMarkup(
  <RadioGroup
    legend="Preference"
    name="preference"
    options={[
      { label: "Email", value: "email" },
      { label: "Phone", value: "phone" }
    ]}
  />
);
assert.match(radioMarkup, /<fieldset/);
assert.match(radioMarkup, /<legend/);
assert.match(radioMarkup, /type="radio"/);

console.log("Primitive validation passed.");
