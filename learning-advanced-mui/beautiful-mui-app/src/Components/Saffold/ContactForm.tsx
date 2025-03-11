import { useState } from "react";
import { Alert, AlertTitle, Button, Dialog, FormControl, FormGroup, ListItemText, MenuItem, Paper, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { contactData, FormValues } from "../../Data/ContactData";
import BeautifulAutocomplete from "./FormSubcomponents/BeautifulAutocomplete";
import BeautifulDesktopDatePicker from "./FormSubcomponents/BeautifulDesktopDatePicker";
import BeautifulSelect from "./FormSubcomponents/BeautifulSelect";
import BeautifulRadios from "./FormSubcomponents/BeautifulRadios";

export const minWidth = 300;
const skills = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];
const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];
const defaultPreference = "Work From Home";

export default function ContactForm() {
  const today = new Date();
  const getDefaultFormValues = () => {
    return { id: contactData.length + 1, name: '', role: '', skills: [], startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`, preference: defaultPreference };
  }

  const [formValues, setFormValues] = useState<FormValues>(
    getDefaultFormValues()
  );
  const [alertOpen, setAlertOpen] = useState(false);

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAutoCompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setFormValues({
      ...formValues,
      role: value || ""
    });
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<string[]>, child: React.ReactNode) => {
    const {
      target: { value }
    } = event;
    setFormValues({
      ...formValues,
      skills: typeof value === 'string' ? value.split(',') : value
    });
  };

  const handleDatePickerChange = (
    value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null,
    keyboardInputValue?: string | undefined
  ) => {
    const startDate = value as unknown as { month: () => string, date: () => string, year: () => string };
    setFormValues({
      ...formValues,
      startDate: `${startDate.month() + 1}/${startDate.date()}/${startDate.year()}`,
    });
  };

  const handleSubmit = () => {
    contactData.push(formValues);
    setAlertOpen(true);
    clearValues();
  }

  const handleClearClick = () => {
    clearValues();
  }

  const clearValues = () => {
    setFormValues({ ...getDefaultFormValues() });
  }

  const handleAlertClick = () => {
    setAlertOpen(!alertOpen);
  }

  return <>
    <Paper>
      <form>
        <FormControl >
          <FormGroup 
            row 
            sx={{
              padding: 2,
              justifyContent: 'space-between'
            }}
          >
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              sx={{ minWidth: minWidth, marginBottom: { xs: 2, md: 0 }, marginRight: { md: 2 } }}
              onChange={handleTextFieldChange}
              value={formValues.name}
            />

            <BeautifulAutocomplete
              options={roles}
              value={formValues.role || ''}
              onInputChange={handleAutoCompleteChange}
            />
          </FormGroup>
          <FormGroup 
            row 
            sx={{
              padding: 2,
              justifyContent: 'space-between'
            }}
          >
            <BeautifulSelect
              onChange={handleSelectChange}
              value={formValues.skills || ""}
              multiple
            >
              {skills.map((skillName) => {
                return (
                  <MenuItem value={skillName} key={skillName}>
                    <ListItemText primary={skillName} />
                  </MenuItem>
                )
              })}
            </BeautifulSelect>
            <BeautifulDesktopDatePicker
              value={formValues.startDate}
              onChange={handleDatePickerChange}

            />
          </FormGroup>
          <FormGroup 
            row 
            sx={{
              padding: 2,
              justifyContent: 'space-between'
            }}
          >
            <BeautifulRadios
              preference={formValues.preference}
              defaultPreference={defaultPreference}
              handleRadioChange={handleRadioChange}
            />
            <Stack >
              <Button onClick={handleSubmit}>Save</Button>
              <Button onClick={handleClearClick}>Clear</Button>
            </Stack>
          </FormGroup>
        </FormControl>
      </form>
    </Paper>
    <Dialog open={alertOpen} onClose={handleAlertClick}>
      <Alert
        onClose={() => setAlertOpen(false)}
      >
        <AlertTitle>Success!</AlertTitle>
        Form Submitted.
      </Alert>
    </Dialog>
  </>
}
