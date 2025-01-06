import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineItem,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { EXPERIENCE } from "../utils/experienceItems";
import "../styles/experience.css";
import { buttonPrincipal } from "../components/buttonPrincipal";

export default function Timelineexperiences() {
  return (
    <Timeline
      position="right"
      sx={{
        m: 0,
        p: 0,
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {EXPERIENCE.map((experience) => (
        <TimelineItem
          key={experience.title}
          sx={{ paddingLeft: { xs: "0px", md: "3.2rem" } }}
        >
          <TimelineOppositeContent
            sx={{ display: "none" }}
            align="right"
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector
              sx={{ backgroundColor: "var(--text-color)", opacity: "0.1" }}
            />
            <TimelineDot
              sx={{ bgcolor: "var(--interactive-color)" }}
            ></TimelineDot>
            <TimelineConnector
              sx={{ backgroundColor: "var(--text-color)", opacity: "0.1" }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ py: 4, fontFamily: "SFpro" }}>
            <p className="experience__date">{experience.date}</p>
            <h3 className="text__interactive">{experience.title}</h3>
            <p className="text text__mb">{experience.description}</p>
            {buttonPrincipal(experience.link, "", experience.linkText, true)}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
