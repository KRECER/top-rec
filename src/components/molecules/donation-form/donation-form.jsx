import React, {useState} from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";

import { Column, EnhancedButton, EnhancedReactSVG, Row } from "@/components/styled-components/";

import { AppInput } from '@/components/';

import arrowRightIcon from './arrow-right.svg';

const Wrapper = styled.div`
  max-width: 350px;
`;

const Header = styled.header`
  padding: 25px 35px;
  color: #fff;
  text-align: center;
  font-weight: 700;
  background: #A074FF;
`;

const Content = styled.div`
  padding: 20px;
`;

const ProgressWrap = styled.div`
  height: 6px;
  margin-bottom: 30px;
  background: #FFFFFF;
  border-radius: 1000px;
`;

const Progress = styled.div`
  width: ${({width}) => `${width}%`};
  height: 100%;
  background: #A074FF;
  transition: width 0.3s ease-out;
`;

const Inner = styled.div`
  margin-bottom: 50px;
  box-shadow: -16px -16px 40px rgba(255, 255, 255, 0.8), 4px 16px 64px rgba(18, 61, 101, 0.2), inset -8px -6px 80px rgba(255, 255, 255, 0.18);
  border-radius: 4px;
`;

const useStyles = makeStyles((theme) => ({

  contentTitle: {
    marginBottom: 20,
    fontWeight: 700,
    color: theme.palette.primary.dark,
  },

  contentText: {
    marginBottom: 30,
  },

  textQuestion: {
    color: theme.palette.primary.dark,
    fontStyle: 'italic',
    letterSpacing: '-0.03em'
  }

}));

const DonationForm = () => {
  const [amount, setAmount] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const classes = useStyles();

  const handleInputChange = (evt) => {
    const max = 1000;
    const val = parseInt(evt.target.value);
    const newVal = Math.min(Math.max(val, 0), max);
    const percentage = Math.floor(newVal / max * 100);
    setAmount(newVal);
    setPercentage(percentage);
  };

  return <Wrapper>
    <Inner>
      <Header>
        <Typography variant="body1">$167 still needed for this profect</Typography>
      </Header>
      <Content>
        <ProgressWrap>
          <Progress width={percentage} />
        </ProgressWrap>
        <Typography variant="body1" className={classes.contentTitle}>
          Only 3 days left to fund this project.
        </Typography>
        <Typography variant="body2" className={classes.contentText}>
          Join the 42 other donors who have alreade supported this profect. Every dollar helps.
        </Typography>
        <Row m={[0, -15, 20, -15]}>
          <Column width={6}>
            <NumberFormat customInput={AppInput} name={'amount'} value={amount}  onChange={handleInputChange} format={'####'}/>
          </Column>
          <Column width={6}>
            <EnhancedButton fullWidth>Give now</EnhancedButton>
          </Column>
        </Row>
        <Typography variant="body2" className={classes.textQuestion}>
          Why give ${amount}?
        </Typography>
      </Content>
    </Inner>
    <Row>
      <Column w={6}>
        <EnhancedButton fullWidth endIcon={<EnhancedReactSVG src={arrowRightIcon} />}>Save for later</EnhancedButton>
      </Column>
      <Column w={6}>
        <EnhancedButton fullWidth>Tell your friends</EnhancedButton>
      </Column>
    </Row>
  </Wrapper>
};

export default DonationForm;
