import _ from 'underscore';
import React from 'react';
import {withCurrentUserPersonalDetailsPropTypes, withCurrentUserPersonalDetailsDefaultProps} from '../components/withCurrentUserPersonalDetails';
import ScreenWrapper from '../components/ScreenWrapper';
import HeaderWithCloseButton from '../components/HeaderWithCloseButton';
import withLocalize, {withLocalizePropTypes} from '../components/withLocalize';
import ROUTES from '../ROUTES';
import styles from '../styles/styles';
import Navigation from '../libs/Navigation/Navigation';
import OptionsSelector from '../components/OptionsSelector';
import themeColors from '../styles/themes/default';
import * as Expensicons from '../components/Icon/Expensicons';

const greenCheckmark = {src: Expensicons.Checkmark, color: themeColors.success};

const propTypes = {
    ...withLocalizePropTypes,
    ...withCurrentUserPersonalDetailsPropTypes,
};

const defaultProps = {
    ...withCurrentUserPersonalDetailsDefaultProps,
};

class YearPickerPage extends React.Component {
    constructor(props) {
        super(props);

        const {params} = props.route;
        const minYear = Number(params.min);
        const maxYear = Number(params.max);
        const currentYear = Number(params.year);

        this.yearList = _.map(Array.from({length: (maxYear - minYear) + 1}, (k, v) => v + minYear), (value, index) => ({
            text: value.toString(),
            value,
            keyForList: index.toString(),

            // Include the green checkmark icon to indicate the currently selected value
            customIcon: value === currentYear ? greenCheckmark : undefined,

            // This property will make the currently selected value have bold text
            boldStyle: value === currentYear,
        }));

        this.updateYearOfBirth = this.updateYearOfBirth.bind(this);
        this.filterYearList = this.filterYearList.bind(this);

        this.state = {
            inputText: '',
            yearOptions: this.yearList,
        };
    }

    /**
     * Function called on selection of the year, to take user back to the previous screen
     *
     * @param {String} selectedYear
     */
    updateYearOfBirth(selectedYear) {
        // we have to navigate using concatenation here as it is not possible to pass function as route param
        Navigation.navigate(`${this.props.route.params.backTo}?year=${selectedYear}`);
    }

    /**
     * Function filtering the list of the items when using search input
     * @param {String} text
     */
    filterYearList(text) {
        this.setState({
            inputText: text,
            yearOptions: _.filter(this.yearList, (year => year.text.includes(text.trim()))),
        });
    }

    render() {
        return (
            <ScreenWrapper includeSafeAreaPaddingBottom={false}>
                <HeaderWithCloseButton
                    title={this.props.translate('yearPickerPage.year')}
                    shouldShowBackButton
                    onBackButtonPress={() => Navigation.navigate(this.props.route.params.backTo || ROUTES.HOME)}
                    onCloseButtonPress={() => Navigation.dismissModal(true)}
                />
                <OptionsSelector
                    textInputLabel={this.props.translate('yearPickerPage.selectYear')}
                    onChangeText={this.filterYearList}
                    value={this.state.inputText}
                    sections={[{data: this.state.yearOptions}]}
                    onSelectRow={option => this.updateYearOfBirth(option.value)}
                    hideSectionHeaders
                    optionHoveredStyle={styles.hoveredComponentBG}
                    shouldHaveOptionSeparator
                    contentContainerStyles={[styles.ph5]}
                />
            </ScreenWrapper>
        );
    }
}

YearPickerPage.propTypes = propTypes;
YearPickerPage.defaultProps = defaultProps;

export default withLocalize(YearPickerPage);
