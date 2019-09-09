#### React Week 6 - Redux Thunk, etc.

# What is a thunk?
nonstandard past and past participle of think.

"who would've thunk it?" :smile: 

https://github.com/reduxjs/redux-thunk

A thunk is a function that wraps an expression to delay its evaluation.

https://daveceddia.com/what-is-a-thunk/

Without `redux-thunk`, a redux action creator must return an object:

```javascript
export const addApiError = apiError => {
  try {
    const respData = apiError.response ? apiError.response.data : '';
    toast.error(
      `${apiError.message} ${apiError.config.url} (${
        apiError.config.method
      }) ${respData}`
    );
  } catch {
    toast.error(apiError.toString());
  }
  return {
    type: 'ADD_API_ERROR',
    apiError,
  };
}; // .addApiError
```

The above code displays an api error message in a toast message via [react-toastify](https://fkhadra.github.io/react-toastify/) and also adds the apiError object to the redux store.

Example usage:
```javascript
  // set title, getCsvDefinitionAndValueSets
  useEffect(() => {
    document.title = 'Edit Records | DPRP Data Submission Portal | CDC';
    if (csvDefinition === null) {
      // only get the csvDefinition once since this doesn't change
      setGettingCsvDefinition(true);
      getCsvDefinitionAndValueSets(CSV_DEFINITION_NAME, CSV_DEFINITION_VERSION)
        .then(
          axios.spread((valueSetsResp, csvDefinitionResp) => {
            // console.log('valueSetsResp', valueSetsResp);
            // console.log('csvDefinitionResp', csvDefinitionResp);
            dispatch(
              setCSVDefinition(
                buildCsvDefinitionObj(
                  valueSetsResp.data,
                  csvDefinitionResp.data
                )
              )
            );
          })
        )
        .catch(err => {
          console.log('getCsvDefinitionAndValueSets error', err);
          dispatch(addApiError(err));
        }); // .getCsvDefinitionAndValueSets
    }
    setGettingCsvDefinition(false);
  }, [dispatch, csvDefinition]);
```


Suppose we later want to enhance `addApiError` to add error logging to a slack channel, including some context information that is stored in redux. Adding `redux-thunk` lets an action creator return a function which receives `dispatch` and `getState` as parameters:

```javascript
export const addApiError = apiError => {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_API_ERROR',
      apiError,
    });
    let message = '';
    try {
      const respData = apiError.response ? apiError.response.data : '';
      message = `${apiError.message} ${apiError.request.responseURL} (${
        apiError.config.method
      }) ${respData}`;
    } catch {
      message = apiError.toString();
    }
    toast.error(message);
    const state = getState();
    const orgCode = state.user ? state.user.orgcode : '?';
    LogErrorToSlack(message, orgCode)
      // .then(resp => {
      //   console.log('LogErrorToSlack resp', resp);
      // })
      .catch(err => {
        console.log('LogErrorToSlack err', err);
      });
  };
}; // .addApiError
```

The existing code that uses the `addApiError` action can be used without modification, a great benefit when `addApiError` is already used many times.

[from inline-edit-ui-dprp](https://git.cdc.gov/eSurveillance/dprp/inline-edit-ui-dprp/blob/master/src/redux/actions/index.js)


# Demo of DPRP application
[DPRP Dev](https://dataportal-dprp.services-dev.cdc.gov/)

The DPRP is composed with 3 micro-UI's:

[User - jquery](https://git.cdc.gov/eSurveillance/dprp/user-ui-dprp)

[bluebox - react](https://git.cdc.gov/eSurveillance/dprp/bluebox-ui-dprp)

[inline editor - react](https://git.cdc.gov/eSurveillance/dprp/inline-edit-ui-dprp)

# Q&A

# Next steps?

