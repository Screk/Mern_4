/**
 * @vitest-environment jsdom
 */


import { describe, test } from "vitest";
import { render, screen, waitFor } from 'testing-library/react'
import userEvent from "@testing-library/user-event";

import App from "./App";
import { expect } from "vitest/dist";

describe('App', () => {
    test('should render', () => {
        render(<App />)

        expect(screen.getByTextiId('Header')).toBeInTheDocument()
    })
})