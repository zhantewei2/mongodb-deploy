dir_name=$1

if [ -n "$dir_name" ];then
  echo "dirname: $dir_name"
else
  echo "dirname must be special"
  exit
fi

mkdir $dir_name/log
mkdir $dir_name/data
chmod 777 $dir_name/log
chmod 777 $dir_name/data

chmod 400 $dir_name/keyfile
chown 999 $dir_name/keyfile
