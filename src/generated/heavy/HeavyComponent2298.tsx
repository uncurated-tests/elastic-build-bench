'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2298<T> = T extends (infer U)[]
  ? DeepReadonlyArray2298<U>
  : T extends object
  ? DeepReadonlyObject2298<T>
  : T;

interface DeepReadonlyArray2298<T> extends ReadonlyArray<DeepReadonly2298<T>> {}

type DeepReadonlyObject2298<T> = {
  readonly [P in keyof T]: DeepReadonly2298<T[P]>;
};

type UnionToIntersection2298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2298<T> = UnionToIntersection2298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2298<T extends unknown[], V> = [...T, V];

type TuplifyUnion2298<T, L = LastOf2298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2298<TuplifyUnion2298<Exclude<T, L>>, L>;

type DeepPartial2298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2298<T[P]> }
  : T;

type Paths2298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2298<K, Paths2298<T[K], Prev2298[D]>> : never }[keyof T]
  : never;

type Prev2298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2298 {
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

type ConfigPaths2298 = Paths2298<NestedConfig2298>;

interface HeavyProps2298 {
  config: DeepPartial2298<NestedConfig2298>;
  path?: ConfigPaths2298;
}

const HeavyComponent2298 = memo(function HeavyComponent2298({ config }: HeavyProps2298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2298.displayName = 'HeavyComponent2298';
export default HeavyComponent2298;
