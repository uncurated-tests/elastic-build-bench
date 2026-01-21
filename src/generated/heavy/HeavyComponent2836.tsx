'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2836<T> = T extends (infer U)[]
  ? DeepReadonlyArray2836<U>
  : T extends object
  ? DeepReadonlyObject2836<T>
  : T;

interface DeepReadonlyArray2836<T> extends ReadonlyArray<DeepReadonly2836<T>> {}

type DeepReadonlyObject2836<T> = {
  readonly [P in keyof T]: DeepReadonly2836<T[P]>;
};

type UnionToIntersection2836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2836<T> = UnionToIntersection2836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2836<T extends unknown[], V> = [...T, V];

type TuplifyUnion2836<T, L = LastOf2836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2836<TuplifyUnion2836<Exclude<T, L>>, L>;

type DeepPartial2836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2836<T[P]> }
  : T;

type Paths2836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2836<K, Paths2836<T[K], Prev2836[D]>> : never }[keyof T]
  : never;

type Prev2836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2836 {
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

type ConfigPaths2836 = Paths2836<NestedConfig2836>;

interface HeavyProps2836 {
  config: DeepPartial2836<NestedConfig2836>;
  path?: ConfigPaths2836;
}

const HeavyComponent2836 = memo(function HeavyComponent2836({ config }: HeavyProps2836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2836.displayName = 'HeavyComponent2836';
export default HeavyComponent2836;
