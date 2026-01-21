'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6090<T> = T extends (infer U)[]
  ? DeepReadonlyArray6090<U>
  : T extends object
  ? DeepReadonlyObject6090<T>
  : T;

interface DeepReadonlyArray6090<T> extends ReadonlyArray<DeepReadonly6090<T>> {}

type DeepReadonlyObject6090<T> = {
  readonly [P in keyof T]: DeepReadonly6090<T[P]>;
};

type UnionToIntersection6090<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6090<T> = UnionToIntersection6090<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6090<T extends unknown[], V> = [...T, V];

type TuplifyUnion6090<T, L = LastOf6090<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6090<TuplifyUnion6090<Exclude<T, L>>, L>;

type DeepPartial6090<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6090<T[P]> }
  : T;

type Paths6090<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6090<K, Paths6090<T[K], Prev6090[D]>> : never }[keyof T]
  : never;

type Prev6090 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6090<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6090 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths6090 = Paths6090<NestedConfig6090>;

interface HeavyProps6090 {
  config: DeepPartial6090<NestedConfig6090>;
  path?: ConfigPaths6090;
}

const HeavyComponent6090 = memo(function HeavyComponent6090({ config }: HeavyProps6090) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6090) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6090 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6090: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6090.displayName = 'HeavyComponent6090';
export default HeavyComponent6090;
