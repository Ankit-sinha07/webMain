import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function MentorShipForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);
  return (
    <Cal
      calLink="careervyas/mentorshipsession"
      style={{ maxWidth: "767px", margin: "0px auto" }}
    />
  );
}
