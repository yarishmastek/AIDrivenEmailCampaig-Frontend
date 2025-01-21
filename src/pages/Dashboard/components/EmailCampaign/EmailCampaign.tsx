import { Select, Textarea } from "@mantine/core";
import { useState } from "react";
import PrimaryButton from "../../../../components/PrimaryButton";
import { showToast } from "../../../../utils/toast";

const dropdownOptions = [
  "All Users",
  "Internal Marketing Team",
  "Segment 1",
  "Segment 2",
  "Segment 3",
];

const EmailCampaign = () => {
  const fakeEmailContent = `Dear [Recipient Name],\n\nThank you for being a part of our community. We are excited to share some updates with you about our latest offerings. Stay tuned for more!\n\nBest regards,\n[Your Company Name]`;
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
  const [genericEmail, setGenericEmail] = useState<string>(fakeEmailContent);
  const [isEmailCustomized, setIsEmailCustomized] = useState(false);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedSegment || !genericEmail) {
      showToast("Please complete all fields before submitting.", "error");
      return;
    }
    setGenericEmail("");
    setSelectedSegment(null);
    showToast("Email campaign customized successfully!", "success");
    setIsEmailCustomized(true);
  };

  return (
    <div>
      {isEmailCustomized ? (
        <div className="space-y-4 max-w-[500px] m-10">
          <Textarea
            label="Customized email"
            placeholder="Generated email text"
            rows={7}
            value={`Dear [Recipient Name],\n\nYour customized email content will appear here. Adjust as needed before sending.\n\nBest regards,\n[Your Team]`}
          />
          <PrimaryButton
            text="Send"
            className="float-right"
            type="button"
            variant="filled"
          />
        </div>
      ) : (
        <form
          onSubmit={handleSubmitForm}
          className="space-y-4 max-w-[500px] m-10"
        >
          <Select
            label="Segment"
            onChange={(value) => setSelectedSegment(value)}
            placeholder="Select Segment"
            value={selectedSegment}
            data={dropdownOptions}
          />
          <Textarea
            label="Generic email"
            onChange={(e) => setGenericEmail(e.currentTarget.value)}
            value={genericEmail}
            placeholder="Enter generic email"
            rows={7}
          />
          <PrimaryButton
            text="Customize Email"
            className="float-right"
            type="submit"
            variant="filled"
          />
        </form>
      )}
    </div>
  );
};

export default EmailCampaign;
