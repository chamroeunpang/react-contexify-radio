import React from "react";
import { Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
const onClick = ({ event, props }) => console.log(event, props);

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    marginRight: 0
  }
}));
// create your menu first
const MyAwesomeMenu = ({ isChecked, setCheck, classes }) => (
  <Menu id="menu_id">
    <Submenu label="Foobar">
      <Item
        onClick={e => {
          e.event.stopPropagation();
          setCheck(!isChecked);
        }}
      >
        <FormControlLabel
          value="female"
          onClick={e => e.stopPropagation()}
          classes={{
            root: classes.root
          }}
          control={
            <Radio
              checked={!isChecked === true ? true : false}
              onClick={e => {
                e.stopPropagation();
                setCheck(!isChecked);
              }}
            />
          }
          label="Female"
        />
      </Item>
      <Item onClick={onClick}>Foo</Item>
      <Item onClick={onClick}>Bar</Item>
      <Item>
        <>
          <Radio
            checked={isChecked === true ? true : false}
            onClick={e => {
              e.stopPropagation();
              //return false;
              //e.preventDefault();
              //e.stopImmediatePropagation();
              //e.stopPropagation();
              setCheck(!isChecked);
              //alert("Radio");
            }}
          />
          <label
            onClick={e => {
              //e.preventDefault();
              //return;
              //return false;
              e.stopPropagation();
              setCheck(!isChecked);
            }}
          >
            Hello Test
          </label>
        </>
      </Item>
      <Item>
        <FormControlLabel
          value="male"
          control={
            <Radio
              checked={isChecked === true ? true : false}
              onClick={e => {
                e.stopPropagation();
                //e.stopImmediatePropagation();
                //e.stopPropagation();
                setCheck(!isChecked);
                //alert("Radio");
              }}
            />
          }
          label="Male"
        />
      </Item>
      <Item>
        <FormControlLabel
          value="female"
          onClick={e => e.stopPropagation()}
          control={
            <Radio
              checked={!isChecked === true ? true : false}
              onClick={e => {
                e.stopPropagation();
                //e.stopImmediatePropagation();
                //e.stopPropagation();
                setCheck(!isChecked);
                //alert("Radio");
              }}
            />
          }
          label="Female"
        />
      </Item>
      <Item>Hello</Item>
      <Item>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            //value={value}
            //onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={
                <Radio
                  checked={!isChecked === true ? true : false}
                  onClick={e => {
                    e.stopPropagation();
                    //e.stopImmediatePropagation();
                    //e.stopPropagation();
                    setCheck(!isChecked);
                    //alert("Radio");
                  }}
                />
              }
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={
                <Radio
                  checked={isChecked === true ? true : false}
                  onClick={e => {
                    e.stopPropagation();
                    //e.stopImmediatePropagation();
                    //e.stopPropagation();
                    setCheck(!isChecked);
                    //alert("Radio");
                  }}
                />
              }
              label="Male"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
      </Item>
    </Submenu>
  </Menu>
);

const App = () => {
  const [isChecked, setCheck] = React.useState(false);
  const classes = useStyles();
  return (
    <div>
      <br />
      <br />
      <br />
      <MenuProvider
        id="menu_id"
        style={{ border: "1px solid purple", display: "inline-block" }}
      >
        Right click me...
      </MenuProvider>
      <br />
      <br />
      <MyAwesomeMenu
        isChecked={isChecked}
        setCheck={setCheck}
        classes={classes}
      />
    </div>
  );
};
export default App;
