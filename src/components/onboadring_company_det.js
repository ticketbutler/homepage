import React from "react";
import { styles } from "../layouts/style";
import { makeTranslations } from "mini-trans";

const translations = {
  da: {
    "Company / organization name*": "Navn på virksomhed / organisation*",
    "optional fields": "Valgfri felter",
    "CVR-number and address are needed for your customers to reimburse the ticket costs.":
      "CVR-nummer og adresse er nødvendigt for at virksomhedsgæster har nødvendig information til sit bogholderi.",
    "official organization street": "Officiel adresse på organisation",
    "zip code": "Postnummer",
    city: "by",
    "bank account nr.": "Bank kontonummer"
  }
};

export class CompanyDetails extends React.Component {
  t = makeTranslations(translations, this.props.locale);

  render() {
    return (
      <div>
        <form onSubmit={this.props.submitForm}>
          <div css={{ maxWidth: "444px" }}>
            <label css={styles.label}>
              {this.t("Company / organization name*")}
            </label>
            <input
              required
              css={styles.input}
              type="text"
              value={this.props.values.business_name}
              onChange={e => {
                this.props.updateForm({
                  business_name: e.target.value
                });
              }}
            />

            <h2
              css={{
                ...styles.h2,
                color: "#89909B",
                marginTop: "30px",
                marginBottom: "5px"
              }}
            >
              {this.t("optional fields")}
            </h2>
            <h3
              css={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#89909B"
              }}
            >
              {this.t(
                "CVR-number and address are needed for your customers to reimburse the ticket costs."
              )}
            </h3>
            <label css={styles.label}>CVR</label>
            <input
              type="text"
              css={{ ...styles.input, marginBottom: "20px" }}
              value={this.props.values.cvr}
              onChange={e => {
                this.props.updateForm({ cvr: e.target.value });
              }}
            />
            <label css={styles.label}>
              {this.t("official organization street")}{" "}
            </label>
            <input
              type="text"
              css={styles.input}
              value={this.props.values.street}
              onChange={e => {
                this.props.updateForm({ street: e.target.value });
              }}
            />
            <div css={{ marginTop: "5px" }}>
              <div css={{ display: "inline-flex", width: "100%" }}>
                <div>
                  <label css={styles.label}>{this.t("zip code")}</label>
                  <input
                    type="number"
                    css={{ ...styles.input, width: "112px" }}
                    value={this.props.values.postcode}
                    onChange={e => {
                      this.props.updateForm({ postcode: e.target.value });
                    }}
                  />
                </div>
                <div css={{ marginLeft: "20px", width: "100%" }}>
                  <label css={styles.label}>{this.t("city")}</label>
                  <input
                    type=""
                    css={{
                      ...styles.input,
                      maxWidth: "312px",
                      width: "100%"
                    }}
                    value={this.props.values.city}
                    onChange={e => {
                      this.props.updateForm({ city: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div
                css={{
                  display: "inline-flex",
                  marginTop: "20px",
                  width: "100%"
                }}
              >
                <div>
                  <label css={styles.label}>bank reg. nr.</label>
                  <input
                    type="number"
                    css={{ ...styles.input, width: "112px" }}
                    value={this.props.values.registration_number}
                    onChange={e => {
                      this.props.updateForm({
                        registration_number: e.target.value
                      });
                    }}
                  />
                </div>
                <div css={{ marginLeft: "20px", width: "100%" }}>
                  <label css={styles.label}>{this.t("bank account nr.")}</label>
                  <input
                    type="number"
                    css={{
                      ...styles.input,
                      width: "100%",
                      maxWidth: "312px"
                    }}
                    value={this.props.values.account_number}
                    onChange={e => {
                      this.props.updateForm({
                        account_number: e.target.value
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
