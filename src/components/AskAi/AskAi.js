import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  CircularProgress,
  useMediaQuery,
} from "@mui/material"; // Updated import for MUI v5
import AddIcon from "@mui/icons-material/Add"; // Updated icon import
import RemoveIcon from "@mui/icons-material/Remove"; // Updated icon import
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDU3IBV4vTVGC6FKk8ZGK904RmMm8ps_bo");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

import ExploreIcon from "@mui/icons-material/Explore"; // Updated icon import for MUI v5
import DateRangeIcon from "@mui/icons-material/DateRange"; // Updated icon import for MUI v5
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Updated icon import for MUI v5
import MoodIcon from "@mui/icons-material/Mood"; // Updated icon import for MUI v5
import ChatIcon from "@mui/icons-material/Chat"; // Updated icon import for MUI v5
import "./askAi.css"; // Import CSS for styling

function formatResponseText(text) {
  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Bold text
    .replace(/\* \*\*(.*?):\*\*/g, "» <b>$1:</b>") // Bold label with "»"
    .replace(/\* (.*?)/g, "• $1") // Bullet points with "•"
    .replace(/(?:\r\n|\r|\n)/g, "<br>"); // Newlines to <br>

  // Format code blocks enclosed in triple backticks
  formattedText = formattedText.replace(/```([\s\S]*?)```/g, (match, p1) => {
    return `<pre><code>${p1}</code></pre>`; // Wrap code block in <pre><code> tags
  });

  return formattedText;
}

const steps = [
  {
    label: "City Name",
    icon: <ExploreIcon />,
    description: "Where do you want to go?",
  },
  {
    label: "Days",
    icon: <DateRangeIcon />,
    description: "How many days will you stay?",
  },
  {
    label: "Budget",
    icon: <AttachMoneyIcon />,
    description: "What is your budget level?",
  },
  {
    label: "Features",
    icon: <MoodIcon />,
    description: "Enter the features you like:",
    options: [
      {
        label: "Chill 🏖️",
        description: "We will loosen the trip schedule as much as possible.",
      },
      {
        label: "Nature 🏞️",
        description: "We will embrace attractions in natural settings.",
      },
      {
        label: "Urban 🏙️",
        description: "We will prioritize attractions in downtown areas.",
      },
    ],
  },
  {
    label: "AI Recommendation",
    icon: <ChatIcon />,
    description: "Loading AI Recommendation...",
  },
];

const AskAI = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [city, setCity] = useState("");
  const [days, setDays] = useState(1);
  const [budget, setBudget] = useState("");
  const [mood, setMood] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBackMain = () => {
    setActiveStep(0);
    setCity("");
    setDays(1);
    setBudget("");
    setMood("");
    setResponse("");
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const prompt = `Plan a ${days}-day trip to ${city} with a ${budget} budget (in Indian Rs.). Focus on ${mood} activities.`;
      const result = await model.generateContent(prompt);
      const aiResponse = await result.response.text();
      const formatedResponse = formatResponseText(aiResponse);
      setResponse(formatedResponse);
    } catch (error) {
      setResponse("Failed to get AI recommendation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleIncrementDays = () => {
    setDays((prevDays) => prevDays + 1);
  };

  const handleDecrementDays = () => {
    if (days > 1) {
      setDays((prevDays) => prevDays - 1);
    }
  };

  const isNextButtonDisabled = () => {
    switch (activeStep) {
      case 0:
        return city.trim() === "";
      case 1:
        return days < 1;
      case 2:
        return budget.trim() === "";
      case 3:
        return mood.trim() === "";
      default:
        return false;
    }
  };

  return (
    <Paper className="askai-container">
      <Typography variant="h5" gutterBottom>
        <b>Let TripEase plan your perfect trip</b>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {!isMobile && (
            <Stepper activeStep={activeStep} className="askai-stepper">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>
                    <Box className="askai-step-label">
                      {step.icon}
                      {step.label}
                    </Box>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          )}
        </Grid>
        <Grid item xs={12}>
          {/* Render the appropriate step UI */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AskAI;
