<?php

/**
 * @author Alan Taylor <alan@bytaylordesign.com>
 * @license Proprietary
 */
$phpVersion = '7.4.0';

$strictType = true;

$docHeader = <<<'HEADER'
    @author Alan Taylor <alan@bytaylordesign.com>
    @license Proprietary
    HEADER;

// Paths
// =============================================================================
$fw = __DIR__;
$finder = PhpCsFixer\Finder::create()
    // Exclude General
    ->exclude('.git')
    ->exclude('.svn')
    ->exclude('node_modules')
    ->exclude('vendor')
    ->exclude('var')
    // Sage
    ->exclude('dist')
    ->exclude('resources')
    ->exclude('storage')
    ->notPath('index.php')
    // In
    ->in($fw)
;

// Command Line Config
// =============================================================================
// Pass --allow-risky=yes on the command line to enable risky rules.
$risky = isset($_SERVER['argv'])
    && in_array('--allow-risky=yes', $_SERVER['argv'], 1)
;

// Rules
// =============================================================================
$rules = [
    '@Symfony' => true,
    '@DoctrineAnnotation' => true,
    '@PHP71Migration' => true,

    // 'header_comment' => [
    //     'comment_type' => 'PHPDoc',
    //     'location' => 'after_open',
    //     'header' => $docHeader,
    // ],

    'align_multiline_comment' => ['comment_type' => 'phpdocs_only'],
    'array_indentation' => true,
    'backtick_to_shell_exec' => true,
    'blank_line_before_statement' => true,
    'combine_consecutive_issets' => true,
    'combine_consecutive_unsets' => true,
    'concat_space' => ['spacing' => 'one'],
    'escape_implicit_backslashes' => true,
    'explicit_indirect_variable' => true,
    'explicit_string_variable' => true,
    'fully_qualified_strict_types' => true,
    'heredoc_to_nowdoc' => true,
    'linebreak_after_opening_tag' => true,
    'list_syntax' => ['syntax' => 'short'],
    'method_argument_space' => ['on_multiline' => 'ensure_fully_multiline'],
    'method_chaining_indentation' => true,
    'multiline_comment_opening_closing' => true,
    'multiline_whitespace_before_semicolons' => ['strategy' => 'new_line_for_chained_calls'],
    'no_alternative_syntax' => false,
    'no_binary_string' => true,
    'no_extra_blank_lines' => ['tokens' => [
        'break',
        'continue',
        'curly_brace_block',
        'extra',
        'parenthesis_brace_block',
        'return',
        'square_brace_block',
        'throw',
        'use',
    ]],
    'no_null_property_initialization' => true,
    'echo_tag_syntax' => ['format' => 'short', 'shorten_simple_statements_only' => false],
    'no_superfluous_elseif' => true,
    'no_superfluous_phpdoc_tags' => false,
    'no_unset_cast' => true,
    'no_useless_else' => true,
    'no_useless_return' => true,
    'ordered_class_elements' => true,
    'ordered_imports' => ['imports_order' => ['class', 'function', 'const']],
    'php_unit_internal_class' => true,
    'php_unit_method_casing' => true,
    'php_unit_test_class_requires_covers' => true,
    'phpdoc_add_missing_param_annotation' => ['only_untyped' => false],
    'phpdoc_no_empty_return' => false,
    'phpdoc_order' => true,
    'phpdoc_order_by_value' => ['annotations' => ['covers']],
    // 'phpdoc_tag_type' => [
    //     'tags' => [
    //         // 'inheritDoc' => 'annotation',
    //     ],
    // ],
    'phpdoc_types_order' => ['null_adjustment' => 'always_last', 'sort_algorithm' => 'alpha'],
    'phpdoc_var_annotation_correct_order' => true,
    'protected_to_private' => true,
    'return_assignment' => true,
    'simple_to_complex_string_variable' => true,
    'single_line_comment_style' => true,
    'single_line_throw' => false,

    // I don't like YODA comparisons.
    'yoda_style' => false,

    // Disabled to make it easier to debug larger blocks of code.
    'no_empty_comment' => false,

    // WP add_action/add_filter
    'phpdoc_to_comment' => false,
];

// Risky Rules
// =============================================================================
$rulesRisky = [
    '@Symfony:risky' => true,
    '@PHP71Migration:risky' => true,
    '@PHPUnit84Migration:risky' => true,

    'declare_strict_types' => $strictType,

    'comment_to_phpdoc' => true,
    'final_internal_class' => true,
    'logical_operators' => true,
    'mb_str_functions' => true,
    'no_php4_constructor' => true,
    'no_unreachable_default_argument_value' => true,
    'no_unset_on_property' => true,
    'php_unit_set_up_tear_down_visibility' => true,
    'php_unit_strict' => true,
    'php_unit_test_annotation' => true,
    'php_unit_test_case_static_method_calls' => true,
    'ordered_interfaces' => true,
    'simplified_null_return' => true,
    'strict_comparison' => true,
    'strict_param' => true,
    'string_line_ending' => true,
];

// PHP 7.3 Rules
// =============================================================================
$rules73 = [
    '@PHP73Migration' => true,
];

// PHP 7.3 Risky Rules
// =============================================================================
$rules73Risky = [
];

// PHP 7.4 Rules
// =============================================================================
$rules74 = [
    '@PHP74Migration' => true,
];

// PHP 7.4 Risky Rules
// =============================================================================
$rules74Risky = [
    '@PHP74Migration:risky' => true,
];

// PHP 8.0 Rules
// =============================================================================
$rules80 = [
    '@PHP80Migration' => true,
];

// PHP 8.0 Risky Rules
// =============================================================================
$rules80Risky = [
    '@PHP80Migration:risky' => true,
];

// Merged Rules
// =============================================================================
if (version_compare($phpVersion, '7.3.0', '>=') === true) {
    $rules = array_merge($rules, $rules73);
    $rulesRisky = array_merge($rulesRisky, $rules73Risky);
}

if (version_compare($phpVersion, '7.4.0', '>=') === true) {
    $rules = array_merge($rules, $rules74);
    $rulesRisky = array_merge($rulesRisky, $rules74Risky);
}

if (version_compare($phpVersion, '8.0.0', '>=') === true) {
    $rules = array_merge($rules, $rules80);
    $rulesRisky = array_merge($rulesRisky, $rules80Risky);
}

if ($risky === true) {
    $rules = array_merge($rules, $rulesRisky);
}

ksort($rules);

// Configuration
// =============================================================================
$config = new PhpCsFixer\Config();
$config
    ->setUsingCache(true)
    ->setRiskyAllowed($risky)
    ->setRules($rules)
    ->setFinder($finder)
;

return $config;
