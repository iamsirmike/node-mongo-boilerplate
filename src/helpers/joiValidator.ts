import Joi from "joi";

export const joiValidator = (
  joiSchema: Joi.ObjectSchema<any>,
  paramsToValidate: any
): string | null => {
  const { error } = joiSchema.validate(paramsToValidate, {
    errors: {
      wrap: {
        label: "",
      },
    },
    abortEarly: true,
  });

  return error ? error.details[0].message : null;
};
