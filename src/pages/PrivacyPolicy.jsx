import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
      <h3 className="text-[#283d50] text-center font-semibold text-4xl mb-5 pt-10 pb-5 border-b border-b-[#0000001a]">
        Privacy Policy wintub
      </h3>
      <div className="text-xl">
        <p className="mb-5">
          At wintub, accessible from &nbsp;
          <a href="https://wintub.com/">https://wintub.com</a>, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by wintub and how we use it.
        </p>
        <p className="mb-5">
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through email at
          Contact@wintub.com
        </p>
        <h4 className="mb-5 pb-5 pt-10 font-medium text-3xl border-b border-b-[#0000001a]">
          Privacy Policies
        </h4>
        <p className="mb-5 pt-5">
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of wintub.
        </p>
        <p className="mb-5">
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on wintub, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>
        <p className="mb-5">
          Note that wintub has no access to or control over these cookies that
          are used by third-party advertisers.
        </p>
        <h4 className="mb-5 pt-10 font-medium text-3xl">
          Third Party Privacy Policies
        </h4>
        <p className="mb-5">
          wintub Privacy Policy does not apply to other advertisers or websites.
          Thus, we are advising you to consult the respective Privacy Policies
          of these third-party ad servers for more detailed information. It may
          include their practices and instructions about how to opt-out of
          certain options. You may find a complete list of these Privacy
          Policies and their links here: Privacy Policy Links.
        </p>
        <p className="mb-5">
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites. What Are Cookies?
        </p>
        <h4 className="mb-5 pt-10 font-medium text-3xl">
          Children's Information
        </h4>
        <p className="mb-5">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <p className="mb-5">
          wintub does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
        <h4 className="mb-5 pt-10 font-medium text-3xl">
          Online Privacy Policy Only
        </h4>
        <p className="mb-5">
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in wintub. This policy is not applicable to any
          information collected offline or via channels other than this website.
        </p>
        <h4 className="mb-5 pt-10 font-medium text-3xl">
          Consent
        </h4>
        <p className="mb-5">
          By using our website, you hereby consent to our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link> and agree to its{" "}
          <Link to="/terms-of-service">Terms and Conditions</Link>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
