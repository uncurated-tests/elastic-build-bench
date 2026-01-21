'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2065<T> = T extends (infer U)[]
  ? DeepReadonlyArray2065<U>
  : T extends object
  ? DeepReadonlyObject2065<T>
  : T;

interface DeepReadonlyArray2065<T> extends ReadonlyArray<DeepReadonly2065<T>> {}

type DeepReadonlyObject2065<T> = {
  readonly [P in keyof T]: DeepReadonly2065<T[P]>;
};

type UnionToIntersection2065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2065<T> = UnionToIntersection2065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2065<T extends unknown[], V> = [...T, V];

type TuplifyUnion2065<T, L = LastOf2065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2065<TuplifyUnion2065<Exclude<T, L>>, L>;

type DeepPartial2065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2065<T[P]> }
  : T;

type Paths2065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2065<K, Paths2065<T[K], Prev2065[D]>> : never }[keyof T]
  : never;

type Prev2065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2065 {
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

type ConfigPaths2065 = Paths2065<NestedConfig2065>;

interface HeavyProps2065 {
  config: DeepPartial2065<NestedConfig2065>;
  path?: ConfigPaths2065;
}

const HeavyComponent2065 = memo(function HeavyComponent2065({ config }: HeavyProps2065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2065.displayName = 'HeavyComponent2065';
export default HeavyComponent2065;
