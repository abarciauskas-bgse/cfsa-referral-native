import React, { Component } from 'react';
import { createStore } from 'redux';
import { ActivityIndicator, Alert, Button, ListView, Text, View } from 'react-native';

import questionsGraph from './questionsGraph';
import translation from './translation';

const initialState = {
  currentQuestionId: 1,
  futureQuestionIds: [],
  responses: {}
}
const SELECT_ANSWER = 'SELECT_ANSWER';

function answers(state = initialState, action) {
  switch(action.type) {
    case SELECT_ANSWER: {
      const {answer, questionId, nextQuestionIds} = action;
      console.log('\n\n');
      console.log('nextQuestionIds: ' + nextQuestionIds);
      const allFutureQuestionIds = [...state.futureQuestionIds, ...nextQuestionIds];
      console.log('currentQuestion: ' + allFutureQuestionIds[0]);
      console.log('futureQuestions: ' + allFutureQuestionIds.slice(1));
      return {
        ...state,
        currentQuestionId: allFutureQuestionIds[0],
        futureQuestionIds: allFutureQuestionIds.slice(1),
        responses: {
          ...state.responses,
          [questionId]: answer}
        }
      }
    default:
      return state;
  }
}

let store = createStore(answers);

store.subscribe(() =>
  console.log(store.getState())
)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      isLoading: true,
      currentQuestionId: null
    }
  }

  componentDidMount() {
    this.setState({isLoading: false});
    return;
  }

  _onPressButton(answer, questionId) {
    const nextQuestionIds = questionsGraph[questionId].continueRules[answer ? "true" : "false"];
    store.dispatch({type: SELECT_ANSWER, answer, questionId, nextQuestionIds});
    this.setState({currentQuestionId: store.getState().futureQuestionIds[0]});
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    if (this.state.done) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <Text>Done!</Text>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, paddingTop: 20}}>

          <Text>{translation.t(questionsGraph[store.getState().currentQuestionId].question)}</Text>
          <Button onPress={() => this._onPressButton(true, store.getState().currentQuestionId)} title='Yes'/>
          <Button onPress={() => this._onPressButton(false, store.getState().currentQuestionId)} title='No'/>
        </View>
      );      
    }
  }
}
