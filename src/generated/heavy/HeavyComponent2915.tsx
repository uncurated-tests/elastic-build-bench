'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2915<T> = T extends (infer U)[]
  ? DeepReadonlyArray2915<U>
  : T extends object
  ? DeepReadonlyObject2915<T>
  : T;

interface DeepReadonlyArray2915<T> extends ReadonlyArray<DeepReadonly2915<T>> {}

type DeepReadonlyObject2915<T> = {
  readonly [P in keyof T]: DeepReadonly2915<T[P]>;
};

type UnionToIntersection2915<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2915<T> = UnionToIntersection2915<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2915<T extends unknown[], V> = [...T, V];

type TuplifyUnion2915<T, L = LastOf2915<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2915<TuplifyUnion2915<Exclude<T, L>>, L>;

type DeepPartial2915<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2915<T[P]> }
  : T;

type Paths2915<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2915<K, Paths2915<T[K], Prev2915[D]>> : never }[keyof T]
  : never;

type Prev2915 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2915<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2915 {
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

type ConfigPaths2915 = Paths2915<NestedConfig2915>;

interface HeavyProps2915 {
  config: DeepPartial2915<NestedConfig2915>;
  path?: ConfigPaths2915;
}

const HeavyComponent2915 = memo(function HeavyComponent2915({ config }: HeavyProps2915) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2915) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2915 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2915: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2915.displayName = 'HeavyComponent2915';
export default HeavyComponent2915;
