'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6486<T> = T extends (infer U)[]
  ? DeepReadonlyArray6486<U>
  : T extends object
  ? DeepReadonlyObject6486<T>
  : T;

interface DeepReadonlyArray6486<T> extends ReadonlyArray<DeepReadonly6486<T>> {}

type DeepReadonlyObject6486<T> = {
  readonly [P in keyof T]: DeepReadonly6486<T[P]>;
};

type UnionToIntersection6486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6486<T> = UnionToIntersection6486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6486<T extends unknown[], V> = [...T, V];

type TuplifyUnion6486<T, L = LastOf6486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6486<TuplifyUnion6486<Exclude<T, L>>, L>;

type DeepPartial6486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6486<T[P]> }
  : T;

type Paths6486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6486<K, Paths6486<T[K], Prev6486[D]>> : never }[keyof T]
  : never;

type Prev6486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6486 {
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

type ConfigPaths6486 = Paths6486<NestedConfig6486>;

interface HeavyProps6486 {
  config: DeepPartial6486<NestedConfig6486>;
  path?: ConfigPaths6486;
}

const HeavyComponent6486 = memo(function HeavyComponent6486({ config }: HeavyProps6486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6486.displayName = 'HeavyComponent6486';
export default HeavyComponent6486;
