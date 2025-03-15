import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";

type StyledFormGroupProps = {
  paddingtop?: number;
}

export const StyledFormGroup = styled(FormGroup, {
  name: "StyledFormGroup",
  slot: "Wrapper",
  skipSx: true
})<StyledFormGroupProps>(
  (props) => ({
    padding: props.theme.spacing(2), 
    // không thể trup cập vào theme một cách thông thương 
    //
    paddingTop: props.paddingtop,
    justifyContent: "space-between"
  })
)