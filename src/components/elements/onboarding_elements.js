import React from "react";

export class Button extends React.Component {
  static defaultProps = {
    arrow: true,
    outline: false,
    buttonProps: {},
    style: {},
    buttonStyle: {}
  };
  state = {
    hovered: false
  };
  renderButton() {
    return (
      <button
        onMouseOver={() => {
          this.setState({ hovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ hovered: false });
        }}
        css={{
          color: "white",
          fontWeight: "bold",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          cursor: "pointer",
          border: "2px solid transparent",
          transition: "2s all",
          ...(this.props.small
            ? {
                maxWidth: 150,
                padding: "10px 15px",
                fontSize: 15
              }
            : {
                maxWidth: 300,
                padding: "20px 30px",
                fontSize: 18
              }),
          ...(this.props.outline && !this.state.hovered
            ? {
                background:
                  "linear-gradient( to right, rgba(40, 216, 167, 0), rgba(29, 201, 202, 0) )",
                color: "white",
                border: "2px solid #1dc9ca"
              }
            : {
                background:
                  "linear-gradient( to right, rgba(40, 216, 167, 1), rgba(29, 201, 202, 1) )"
              }),
          ...this.props.style,
          ...this.props.buttonStyle
        }}
        {...this.props.buttonProps}
      >
        {this.props.children}
        {this.props.arrow && (
          <span
            style={{
              transition: "300ms all",
              ...(this.state.hovered
                ? {
                    opacity: 1,
                    marginLeft: 10
                  }
                : {
                    opacity: 0,
                    marginLeft: 0
                  })
            }}
          >
            »
          </span>
        )}
      </button>
    );
  }
  render() {
    return this.props.to ? (
      <a href={this.props.to} style={{ textDecoration: "none" }}>
        {this.renderButton()}
      </a>
    ) : (
      this.renderButton()
    );
  }
}
/*//////////////////// MAGIC FORMS//////////////////////*/
type FormStates = "ACTIVE" | "SUBMITTING" | "SUBMITTED" | "ERROR";

type FormState = {
  formState: FormStates,
  values: { [string]: any },
  validationErrors: null | { [string]: any },
  requestError: null | string
};

type UpdateForm = (value: { [string]: any }) => void;

export class Form extends React.Component<
  {
    url: string,
    validateFields?: Array<{
      id: string,
      validate: "exists" // TODO: | "phone" | "email"
    }>,
    defaultValues?: { [string]: any },
    onChange?: ({ [string]: any }) => void,
    beforePost?: ({ [string]: any }) => { [string]: any },
    onResponse?: ({ [string]: any }) => void,
    valuesReducer?: ({ [string]: any }, UpdateForm) => { [string]: any },
    children: (
      FormState & {
        updateForm: UpdateForm,
        submitForm: (SyntheticEvent<*>) => void
      }
    ) => React.Element<*>
  },
  FormState
> {
  state = {
    formState: "ACTIVE",
    values: {},
    validationErrors: null,
    requestError: null
  };
  conditions = {
    exists: value => value && value.length > 0,
    isNumber: value => !isNaN(parseInt(value))
  };
  messages = {
    exists: "This field is required",
    isNumber: "This must be a number"
  };
  getValidationErrors = values => {
    let { validateFields } = this.props;
    if (validateFields) {
      return Object.keys(validateFields).reduce((errorMessages, key) => {
        let value = values[key];
        let conditionKey = validateFields[key];
        let conditionCheck = this.conditions[conditionKey];
        if (conditionCheck) {
          let errorMessage = this.messages[conditionKey];
          if (errorMessage) {
            if (!value) {
              errorMessages[key] = errorMessage;
            } else {
              let valid = conditionCheck(value);
              if (!valid) {
                errorMessages[key] = errorMessage;
              }
            }
          } else {
            console.warn("There is no error message for " + conditionKey);
          }
        } else {
          console.warn("There is no validation check for " + conditionKey);
        }
        return errorMessages;
      }, {});
    } else return {};
  };
  postForm = async (values: any) => {
    let validationErrors = this.getValidationErrors(values);
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ validationErrors, formState: "ERROR" });
    } else {
      this.setState({ formState: "SUBMITTING" });
      try {
        let req = await fetch(this.props.url, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Cache: "no-cache",
            "X-CSRFToken": Cookie.get("csrftoken")
          },
          credentials: "include",
          method: "POST",
          body: JSON.stringify(values)
        });
        let res = await req.json();
        if (this.props.onResponse) this.props.onResponse(res);
        if (this.props.valuesReducer) {
          this.props.valuesReducer(res, this.updateForm);
        }
        await this.setState({ formState: "SUBMITTED" });
      } catch (e) {
        console.error(e);
        this.setState({
          formState: "ERROR",
          requestError: "There was an error. Please try again."
        });
      }
    }
  };
  updateForm = (newValues: { [string]: any }) => {
    this.setState(
      ({ values, validationErrors }) => {
        // Remove validation errors only for changed values
        if (validationErrors) {
          let newValueKeys = Object.keys(newValues);
          validationErrors = Object.keys(validationErrors).reduce(
            (persistingErrors, key) => {
              if (!newValueKeys.includes(key)) {
                persistingErrors[key] = validationErrors[key];
              }
              return persistingErrors;
            },
            {}
          );
        }
        return {
          values: { ...values, ...newValues },
          validationErrors,
          formState: "ACTIVE",
          requestError: null // Reset request error
        };
      },
      () => {
        if (this.props.onChange) this.props.onChange(this.state.values);
      }
    );
  };
  render() {
    return this.props.children({
      ...this.state,
      updateForm: arg =>
        typeof arg === "function"
          ? this.updateForm(arg(this.state.values))
          : this.updateForm(arg),
      submitForm: async e => {
        e.preventDefault();
        let cleanedValues = this.props.beforePost
          ? this.props.beforePost(this.state.values)
          : this.state.values;
        this.postForm(cleanedValues);
      }
    });
  }
}
