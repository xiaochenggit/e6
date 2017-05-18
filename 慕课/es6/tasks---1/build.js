// 关联任务

import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; // 任务的先后顺序

gulp.task('build', gulpSequence('clean','css','pages','scripts',['browser','serve']));