import React from "react";
import { styles } from "../../layouts/style";
import { makeTranslations } from "mini-trans";
import ButlerLogo from "../../../static/img/Butler.png";

import { CancelIcon } from "../elements/icons";

export class Button extends React.Component {
  static defaultProps = {
    arrow: true,
    outline: false,
    style: {}
  };
  state = {
    hovered: false
  };
  renderButton() {
    let { small, outline, style, arrow, children, to, ...rest } = this.props;
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
          ...(small
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
          ...(outline && !this.state.hovered
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
          ...style
        }}
        {...rest}
      >
        {children}
        {arrow && (
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
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(values)
        });
        let res = await req.json();
        console.log(res);
        if (this.props.onResponse) this.props.onResponse(res);
        if (this.props.valuesReducer) {
          this.props.valuesReducer(res, this.updateForm);
        }
        this.setState({ formState: "SUBMITTED" });
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
export const LogInContainer = ({
  langCode,

  children
}: {
  langCode: string,
  showBack: boolean
}) => {
  let t = makeTranslations(
    {
      da: {
        "I don't have an account": "Jeg har ikke en konto"
      }
    },
    langCode
  );
  return (
    <div>
      <div
        css={{
          width: "100%",
          maxWidth: "600px",
          margin: "80px auto",
          "@media(max-width: 420px)": {
            margin: "0 auto",
            padding: "10px"
          }
        }}
      >
        <div
          css={{
            width: "40px",
            float: "right"
          }}
        >
          <a href="https://ticketbutler.io/">
            <CancelIcon />
          </a>
        </div>
        <div
          css={{
            paddingTop: "40px",
            "@media(max-width: 420px)": {
              paddingTop: "60px"
            }
          }}
        >
          <img
            src={ButlerLogo}
            css={{
              width: "50px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block"
            }}
          />
        </div>

        {children}

        <a css={{ textDecoration: "none" }} href="/onboarding_brand">
          <p
            css={{
              ...styles.label,
              color: "#333F53",
              fontWeight: "500",
              letterSpacing: "1.2px",
              lineHeight: "21px",
              textAlign: "center",
              margin: "1em",
              fontSize: "14px"
            }}
          >
            {t("I don't have an account")}
          </p>
        </a>
      </div>
    </div>
  );
};
