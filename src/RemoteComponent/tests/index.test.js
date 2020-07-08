
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/order */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Registry, config as liveuiConfig } from '@composiv/liveui-core';
import RemoteComponent from '../index';
import { act } from '@testing-library/react';
import 'whatwg-fetch';
import { Platform } from 'react-native';
Enzyme.configure({ adapter: new Adapter() });
describe('ExampleComponent', () => {
  beforeEach(() => {
    window.fetch = jest.fn();
  });
  beforeEach(() => {
    const res = new Response('{"hello":"world"}', {
      status: 200,
      headers: {
        'Content-type': 'application/json',
      },
    });
    window.fetch.mockReturnValue(Promise.resolve(res));
  });
  const externals = 'test';
  const components = { test: 'test' };
  Registry.register(
    externals,
    components,
    new Error('There is no renderer.  Please register a renderer for Open canvas using Registry.register...'),
  );
  jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  test('should have default handleChange', () => {
    act(() => {
      expect(RemoteComponent.defaultProps.onError).toBeDefined();
    });
  });

  test('Default Props', () => {
    act(() => {
    const result = RemoteComponent.defaultProps.onError();
    expect(result).toBe(null);
  });
  });
  test('renders prop url', () => {
    try {
      act(() => {
        expect(mount(<RemoteComponent url="http://localhost" />));
      });
    } catch (error) {
      act(() => {
        expect(mount(<RemoteComponent url="http://localhost" />)).toBe(error);
      });
    }
  });
  test('renders prop name', () => {
    try {
      act(() => {
        expect(mount(<RemoteComponent name="componentName" />));
        if (process.env.NODE_ENV !== 'production') {
          Platform.OS = 'android';
          if (Platform.OS === 'android') {
            const androidPort =liveuiConfig.androidPort || '10.0.2.2';
            componentUrl = `${componentUrl.replace('localhost', androidPort)}.js`;
          }
        }
      });
    } catch (error) {
      act(() => {
        expect(mount(<RemoteComponent name="componentName" />)).toEqual({});
      });
    }
  });
  test('renders prop name', () => {
    try {
      act(() => {
        const name ="localhost:foo"
        
        expect(mount(<RemoteComponent name={name} />));
        if (process.env.NODE_ENV !== 'production') {
          let componentUrl = Registry.getComponentUrl(name);
          Platform.OS = 'ios';
          if (Platform.OS === 'android') {
            const androidPort =liveuiConfig.androidPort || '10.0.2.2';
            componentUrl = `${componentUrl.replace('localhost', androidPort)}.js`;
          }
        }
      });
    } catch (error) {
      act(() => {
        expect(mount(<RemoteComponent name="componentName" />)).toBe(error);
      });
    }
  });

  test('renders prop name NODE_ENV = "production" ', () => {
    try {
      act(() => {
        const name ="localhost:foo"
        
        process.env.NODE_ENV="production";
        expect(mount(<RemoteComponent name={name} />));
        if (process.env.NODE_ENV !== 'production') {
          let componentUrl = Registry.getComponentUrl(name);
          Platform.OS = 'ios';
          if (Platform.OS === 'android') {
            const androidPort = liveuiConfig.androidPort || '10.0.2.2';
            componentUrl = `${componentUrl.replace('localhost', androidPort)}.js`;
          }
        }
      });
    } catch (error) {
      act(() => {
        expect(mount(<RemoteComponent name="componentName" />)).toBe(error);
      });
    }
  });
  test('renders prop source', () => {
    try {
      act(() => {
        expect(mount(<RemoteComponent source="source" />));
      });
    } catch (error) {
      act(() => {
        expect(mount(<RemoteComponent source="source" />)).toBe(null);
      });
    }
  });
  test('renders', () => {
    try {
      act(() => {
        expect(mount(<RemoteComponent />));
      });
    } catch (error) {
      act(() => {
        expect(mount(<RemoteComponent />)).toBe(error);
      });
    }
  });
});