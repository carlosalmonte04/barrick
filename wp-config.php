<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

if(file_exists($_SERVER['DOCUMENT_ROOT'] . '/barrick/.env.php')) {
  // echo "whatos";
  define('WP_DEBUG', true);
  require_once('.env.php');
} else {
  define('WP_DEBUG', false);
}

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

define('USE_LOCAL_DB', false);

if (USE_LOCAL_DB) {
  $db = parse_url($_ENV["LOCAL_DATABASE_URL"]);
} else {
  $db = parse_url($_ENV["CLEARDB_DATABASE_URL"]);
}
  // ** MySQL settings - You can get this info from your web host ** //
  /** The name of the database for WordPress */
  define('DB_NAME', trim($db["path"],"/"));
  /** MySQL database username */
  define('DB_USER', $db["user"]);
  /** MySQL database password */
  define('DB_PASSWORD', $db["pass"]);
  /** MySQL hostname */
  define('DB_HOST', $db["host"]);
  /** Database Charset to use in creating database tables. */
  define('DB_CHARSET', 'utf8');
  /** The Database Collate type. Don't change this if in doubt. */
  define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'YT$TpMp@Ci#fRyXYZKYpaj2Xlcf/]:Qod1UZFW?R@H}wH4nPagn&Hf6=`^`!m]I_');
define('SECURE_AUTH_KEY',  'tveNiVgbq(`0c8p.D@ F*%vTI@v/G&HmG/|2vfk=OZ/0oCb(G$:,z7cI%TX8ywGG');
define('LOGGED_IN_KEY',    '[vqUZz0_X?Hjq7H(=h/^o6SGky5Z4}y9 SpZr#`i/:c#y]^eXiX57_#bCFWDVVU2');
define('NONCE_KEY',        'x?8=Yd%i2X41=wp/F8rG#my6c=Sn|!ssymo=[6&2fSIE4s+NDbfbv!R/ Trgg7$A');
define('AUTH_SALT',        'wEXxk+J2RQ*;-Fl%-6J4{6I*5Na<I@EqC$je(b9/HmAt*rxH5.2L8Lk3{{Vx5VXU');
define('SECURE_AUTH_SALT', '/m:,I)dc~MeTS;ODs`8(Vie?C[NgIcwt*a:$B3AG,)}f;R7L9^/?G6#8gPX%_K%#');
define('LOGGED_IN_SALT',   '>UIFT.~N.cdrhYff>y}9qWl*?qOm&;xE^@$f|l9bjAG7CN<FdF`!(x$yH^?_|*g#');
define('NONCE_SALT',       ':@|KC0tag5nWSxeezYE/C4z/<dy7%|A=ce[;}a[9zR:z{<3,($L&zEu<xP}Lv;zI');
define('FS_METHOD', 'direct');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */

if (WP_DEBUG) {
  define('WP_HOME','http://localhost/barrick/');
  define('WP_SITEURL','http://localhost/barrick/');
} else {
  define('WP_HOME','http://barrick.herokuapp.com');
  define('WP_SITEURL','http://barrick.herokuapp.com');
}

define( 'S3_UPLOADS_BUCKET', 'barrick-media' );
define( 'S3_UPLOADS_KEY', $_ENV["DBI_AWS_ACCESS_KEY_ID"] );
define( 'S3_UPLOADS_SECRET', $_ENV["DBI_AWS_SECRET_ACCESS_KEY"] );
define( 'S3_UPLOADS_REGION', 'us-east-2' ); // the s3 bucket region, required for Frankfurt, Beijing & Sydney.

define('ACF_TO_REST_API_REQUEST_VERSION', 3);


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
  define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
