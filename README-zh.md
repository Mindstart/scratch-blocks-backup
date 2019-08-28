!!! 并非理想解决方案

在Windowns 10下开发，执行`npm run build`时，可能会报如下错误信息:

``` bash
Traceback (most recent call last):
  File "build.py", line 595, in <module>
    test_proc = subprocess.Popen(test_args, stdin=subprocess.PIPE, stdout=subprocess.PIPE)
  File "C:\Python27\lib\subprocess.py", line 710, in __init__
    errread, errwrite)
  File "C:\Python27\lib\subprocess.py", line 958, in _execute_child
    startupinfo)
WindowsError: [Error 2]
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! scratch-blocks@0.1.0 prepare: `python build.py && webpack`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the scratch-blocks@0.1.0 prepare script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
```

目前我使用的开发流程是：

1、 在Linux系统（我使用的是Debian）和Windows 10上同时保持这个项目的最新代码

2、 在Linux上对这个项目开发，然后`npm run build`, 把代码与Windows 10上的保持同步

3、 修改Windows 10上（Linux上不用修改）的项目中`build.py`文件中的

``` python
# Build the final args array by prepending google-closure-compiler to
# dash_args and dropping any falsy members
args = []
for group in [["google-closure-compiler"], dash_args]:
  args.extend(filter(lambda item: item, group))

proc = subprocess.Popen(args, stdin=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)
(stdout, stderr) = proc.communicate(

# Sanity check the local compiler
test_args = [closure_compiler, os.path.join("build", "test_input.js")]
test_proc = subprocess.Popen(test_args, stdin=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)
(stdout, _) = test_proc.communicate()
assert stdout == read(os.path.join("build", "test_expect.js"))
```

其实就是加上`shell=True`

4、 把Linux项目目录下的`blockly_compressed_horizontal.js`、`blockly_compressed_vertical.js`、`blockly_uncompressed_horizontal.js`、`blockly_uncompressed_vertical.js`、`blocks_compressed.js`、`blocks_compressed_horizontal.js`和`blocks_compressed_vertical.js`共7个文件拷贝并替换到Windows 10项目目录下。

5、 在Windows 10下`npm run build`