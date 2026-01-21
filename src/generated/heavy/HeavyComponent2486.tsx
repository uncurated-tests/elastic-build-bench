'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2486<T> = T extends (infer U)[]
  ? DeepReadonlyArray2486<U>
  : T extends object
  ? DeepReadonlyObject2486<T>
  : T;

interface DeepReadonlyArray2486<T> extends ReadonlyArray<DeepReadonly2486<T>> {}

type DeepReadonlyObject2486<T> = {
  readonly [P in keyof T]: DeepReadonly2486<T[P]>;
};

type UnionToIntersection2486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2486<T> = UnionToIntersection2486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2486<T extends unknown[], V> = [...T, V];

type TuplifyUnion2486<T, L = LastOf2486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2486<TuplifyUnion2486<Exclude<T, L>>, L>;

type DeepPartial2486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2486<T[P]> }
  : T;

type Paths2486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2486<K, Paths2486<T[K], Prev2486[D]>> : never }[keyof T]
  : never;

type Prev2486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2486 {
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

type ConfigPaths2486 = Paths2486<NestedConfig2486>;

interface HeavyProps2486 {
  config: DeepPartial2486<NestedConfig2486>;
  path?: ConfigPaths2486;
}

const HeavyComponent2486 = memo(function HeavyComponent2486({ config }: HeavyProps2486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2486.displayName = 'HeavyComponent2486';
export default HeavyComponent2486;
