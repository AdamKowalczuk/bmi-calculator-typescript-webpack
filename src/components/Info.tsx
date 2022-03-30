import React from "react";
import Graduation from "../icons/Graduation.svg";
import Lock from "../icons/Lock.svg";
import Share from "../icons/Share.svg";
import "../styles/info.scss";
import Nav2 from "./Nav2";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const Info = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Nav2 text="Info" />
      <div className="info-container">
        <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <img src={Graduation} alt="graduation" />
            <h3>What is BMI?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              BMI is a way of measuring a person's weight relative to his or her height. BMI expresses how thick or thin a person is in simple numeric
              terms, and allows doctors and other health professionals to discuss weight objectively on a standardized scale.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <img src={Lock} alt="lock" />
            <h3>BMI formula</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>weight (kg) / [height (m)]^2</p>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <img src={Share} alt="share" />
            <h3>BMI weight categories</h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                <b>Underweight: Less than 18.5</b>
                <br />
                Underweight could be a sign you're not eating enough or you may be ill. If you're underweight, a GP can help.
              </p>
              <p>
                <b>Normal: 18.5 to 24.9</b>
                <br />
                Keep up the good work! For tips on maintaining a healthy weight.
              </p>
              <p>
                <b>Overweight: 25 to 29.9</b>
                <br />
                The best way to lose weight if you're overweight is through a combination of diet and exercise.
              </p>
              <p>
                <b>Obese: 30 and above</b>
                <br />
                The best way to lose weight if you're obese is through a combination of diet and exercise, and, in some cases, medicines. See a GP for
                help and advice.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Info;
