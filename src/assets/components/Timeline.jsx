import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineItem
} from "@mui/lab";
import { achievementsDetails } from "../utils/achievementsItems";

export default function TimelineAchievements() {
  return (
    <Timeline
      position="right"
      sx={{m: 0, p: 0}}
    >
      {achievementsDetails.map((achievement) => (
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <p className="text"> {achievement.date}</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: "#80574e" }}>
              {achievement.icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: 4}}>
            <h3 className="text">{achievement.title}</h3>
            <p className="text">{achievement.description}</p>
            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                className="text who__link text__interactive"
              >
                View certificate
              </a>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}