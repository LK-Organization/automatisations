// src/components/Stepper.tsx
import React, { useState, Children, useRef, useLayoutEffect } from "react";
import type {
  HTMLAttributes,
  ReactNode,
  ButtonHTMLAttributes,
  SVGProps,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  stepCircleContainerClassName?: string;
  stepContainerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  backButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  nextButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  backButtonText?: string;
  nextButtonText?: string;
  disableStepIndicators?: boolean;
  renderStepIndicator?: (props: {
    step: number;
    currentStep: number;
    onStepClick: (clicked: number) => void;
  }) => ReactNode;
}

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const [direction, setDirection] = useState<number>(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) onFinalStepCompleted();
    else onStepChange(newStep);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };
  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };
  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <div className="flex flex-col items-center p-4" {...rest}>
      <div className="flex items-center mb-6">
        {stepsArray.map((_, idx) => {
          const num = idx + 1;
          const status =
            currentStep > num
              ? "complete"
              : currentStep === num
                ? "active"
                : "inactive";
          const circle = (
            <motion.div
              key={num}
              onClick={() => {
                if (!disableStepIndicators && num !== currentStep) {
                  setDirection(num > currentStep ? 1 : -1);
                  updateStep(num);
                }
              }}
              animate={status}
              initial={false}
              variants={{
                inactive: { backgroundColor: "#ccc" },
                active: { backgroundColor: "#0070f3" },
                complete: { backgroundColor: "#0070f3" },
              }}
              className="h-8 w-8 rounded-full flex items-center justify-center cursor-pointer"
            >
              {status === "complete" ? "✓" : num}
            </motion.div>
          );
          return (
            <React.Fragment key={num}>
              {renderStepIndicator
                ? renderStepIndicator({
                    step: num,
                    currentStep,
                    onStepClick: updateStep,
                  })
                : circle}
              {idx < totalSteps - 1 && (
                <motion.div
                  className="flex-1 h-1 mx-2"
                  animate={currentStep > num ? { width: "100%" } : { width: 0 }}
                  initial={false}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="w-full max-w-md mb-6 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            {stepsArray[currentStep - 1]}
          </motion.div>
        </AnimatePresence>
      </div>

      {!isCompleted && (
        <div className="flex w-full max-w-md justify-between">
          {currentStep > 1 ? (
            <button onClick={handleBack} {...backButtonProps}>
              {backButtonText}
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={isLastStep ? handleComplete : handleNext}
            {...nextButtonProps}
          >
            {isLastStep ? "Complete" : nextButtonText}
          </button>
        </div>
      )}
    </div>
  );
}

interface SlideTransitionProps {
  children: ReactNode;
  direction: number;
  onHeightReady: (h: number) => void;
}
function StepContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,
  className = "",
}: {
  isCompleted: boolean;
  currentStep: number;
  direction: number;
  children: ReactNode;
  className?: string;
}) {
  const [height, setHeight] = useState(0);
  return (
    <motion.div
      style={{
        overflow: "hidden",
        position: "relative",
        height: isCompleted ? 0 : height,
      }}
      transition={{ type: "spring", duration: 0.4 }}
      className={className}
    >
      <AnimatePresence initial={false} custom={direction}>
        {!isCompleted && (
          <motion.div
            key={currentStep}
            custom={direction}
            variants={{
              enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            ref={(el) => el && setHeight(el.offsetHeight)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Step({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

interface StepIndicatorProps {
  step: number;
  currentStep: number;
  onClickStep: (n: number) => void;
  disableStepIndicators?: boolean;
}
function StepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators = false,
}: StepIndicatorProps) {
  // ... implementation if needed
  return null;
}

interface StepConnectorProps {
  isComplete: boolean;
}
function StepConnector({ isComplete }: StepConnectorProps) {
  return <div className="flex-1 h-1 mx-2 bg-gray-300" />;
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.1,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
