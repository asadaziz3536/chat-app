<script>
import Label from "../../components/atoms/Label.vue";
import Text from "../atoms/Text.vue";
export default {
  components: {
    Label,
    Text,
  },
};
</script>
<template>
  <!-- User Detail Body -->
  <div class="tabs-wrapper d-flex align-items-start flex-column">
    <div
      class="nav custom-tabs nav-pills w-100"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <button
        class="nav-link active clr-lighter fs-14 flex-grow-1"
        id="v-pills-overview-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-overview"
        type="button"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
      >
        Overview
      </button>
      <button
        class="nav-link clr-lighter fs-14 flex-grow-1"
        id="v-pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-profile"
        type="button"
        role="tab"
        aria-controls="v-pills-profile"
        aria-selected="false"
      >
        Contact History
      </button>
    </div>
    <div class="tab-content w-100" id="v-pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-pills-overview"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        <div
          class="accordion custom-accordion accordion-flush"
          id="accordionFlushExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                User Detail
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <Label
                  class="fs-14 d-block fw-medium clr-lighter"
                  content="Email Address: "
                />
                <Text
                  class="d-block pb-3 fs-14 clr-dark fw-medium"
                  content="sophie.okonedo@company.com"
                />
                <Label
                  class="fs-14 d-block fw-medium clr-lighter"
                  content="Alternative Email: "
                />
                <Text
                  class="d-block pb-3 fs-14 clr-dark fw-medium"
                  content="sophie887@gmail.com"
                />
                <Label
                  class="fs-14 d-block fw-medium clr-lighter"
                  content="Date of Birth: "
                />
                <Text
                  class="d-block pb-3 fs-14 clr-dark fw-medium"
                  content="29 Jul, 1990"
                />
                <Label
                  class="fs-14 d-block fw-medium clr-lighter"
                  content="Country: "
                />
                <Text
                  class="d-block pb-3 fs-14 clr-dark fw-medium"
                  content="Canada"
                />
                <Label
                  class="fs-14 d-block fw-medium clr-lighter"
                  content="State: "
                />
                <Text
                  class="d-block pb-3 fs-14 clr-dark fw-medium"
                  content="Alberta"
                />
                <Label
                  class="fs-14 d-block fw-medium clr-lighter"
                  content="City: "
                />
                <Text
                  class="d-block pb-3 fs-14 clr-dark fw-medium"
                  content="Edmonton"
                />
                <Label
                  class="fs-14 d-block fw-medium clr-lighter"
                  content="Postal Code: "
                />
                <Text
                  class="d-block pb-3 fs-14 clr-dark fw-medium"
                  content="987909"
                />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Tags (5)
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-profile"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
      ></div>
    </div>
  </div>
</template>
<style scoped>
.custom-tabs .nav-link.active {
  background: transparent;
  border-bottom: 2px solid var(--clr-primary);
  color: var(--clr-primary);
  border-radius: 0;
}
.custom-accordion .accordion-button {
  padding: 14px 16px;
}
.custom-accordion .accordion-button:not(.collapsed) {
  box-shadow: none;
  background: none;
  color: var(--clr-primary);
}
.custom-accordion .accordion-button:focus {
  box-shadow: none;
}
</style>