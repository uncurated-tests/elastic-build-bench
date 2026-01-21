'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6181<T> = T extends (infer U)[]
  ? DeepReadonlyArray6181<U>
  : T extends object
  ? DeepReadonlyObject6181<T>
  : T;

interface DeepReadonlyArray6181<T> extends ReadonlyArray<DeepReadonly6181<T>> {}

type DeepReadonlyObject6181<T> = {
  readonly [P in keyof T]: DeepReadonly6181<T[P]>;
};

type UnionToIntersection6181<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6181<T> = UnionToIntersection6181<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6181<T extends unknown[], V> = [...T, V];

type TuplifyUnion6181<T, L = LastOf6181<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6181<TuplifyUnion6181<Exclude<T, L>>, L>;

type DeepPartial6181<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6181<T[P]> }
  : T;

type Paths6181<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6181<K, Paths6181<T[K], Prev6181[D]>> : never }[keyof T]
  : never;

type Prev6181 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6181<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6181 {
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

type ConfigPaths6181 = Paths6181<NestedConfig6181>;

interface HeavyProps6181 {
  config: DeepPartial6181<NestedConfig6181>;
  path?: ConfigPaths6181;
}

const HeavyComponent6181 = memo(function HeavyComponent6181({ config }: HeavyProps6181) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6181) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6181 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6181: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6181.displayName = 'HeavyComponent6181';
export default HeavyComponent6181;
