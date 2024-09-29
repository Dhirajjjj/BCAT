-- This script assumes the Cybersyn Financial Package has been installed at the default location
-- https://app.snowflake.com/marketplace/listing/GZTSZAS2KF7/cybersyn-inc-cybersyn-financial-economic-essentials

-- It creates two views:
-- FROSTY_SAMPLE.CYBERSYN_FINANCIAL.FINANCIAL_ENTITY_ATTRIBUTES_LIMITED:
--    A subset of cybersyn_financial__economic_essentials.cybersyn.financial_institution_attributes:
--    Totals for assets, real estate loans, securities, deposits; % of deposits insured; total employees
-- FROSTY_SAMPLE.CYBERSYN_FINANCIAL.FINANCIAL_ENTITY_ANNUAL_TIME_SERIES:
--    A modified version of cybersyn_financial__economic_essentials.cybersyn.financial_institution_timeseries as follows:
--    - Entity and attribute metadata is joined directly
--    - Only the set of attributes from FINANCIAL_ENTITY_ATTRIBUTES_LIMITED are exposed
--    - Only the end of year metrics (YYYY-12-31) are included, and a YEAR column is provided instead of the date column

-- Create a dedicated database and schema for the new views
CREATE DATABASE IF NOT EXISTS HACKATHON;
CREATE SCHEMA IF NOT EXISTS PUBLIC.STUDENTS;

-- Create the limited attributes view
CREATE VIEW IF NOT EXISTS HACKATHON.PUBLIC.STUDENTS AS
SELECT * from HACKATHON.PUBLIC.STUDENTS
;



