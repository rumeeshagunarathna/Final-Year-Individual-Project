import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Report from '@/pages/report'

describe('Report page', () => {
      it('Should render properly', () => {
            render(<Report />);

            const button = screen.getAllByRole('button');
            const buttonText = "Delete";

            expect(button).toHaveTextContent(buttonText);
      });
});