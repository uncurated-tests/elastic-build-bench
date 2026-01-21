'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2805<T> = T extends (infer U)[]
  ? DeepReadonlyArray2805<U>
  : T extends object
  ? DeepReadonlyObject2805<T>
  : T;

interface DeepReadonlyArray2805<T> extends ReadonlyArray<DeepReadonly2805<T>> {}

type DeepReadonlyObject2805<T> = {
  readonly [P in keyof T]: DeepReadonly2805<T[P]>;
};

type UnionToIntersection2805<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2805<T> = UnionToIntersection2805<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2805<T extends unknown[], V> = [...T, V];

type TuplifyUnion2805<T, L = LastOf2805<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2805<TuplifyUnion2805<Exclude<T, L>>, L>;

type DeepPartial2805<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2805<T[P]> }
  : T;

type Paths2805<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2805<K, Paths2805<T[K], Prev2805[D]>> : never }[keyof T]
  : never;

type Prev2805 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2805<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2805 {
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

type ConfigPaths2805 = Paths2805<NestedConfig2805>;

interface HeavyProps2805 {
  config: DeepPartial2805<NestedConfig2805>;
  path?: ConfigPaths2805;
}

const HeavyComponent2805 = memo(function HeavyComponent2805({ config }: HeavyProps2805) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2805) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2805 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2805: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2805.displayName = 'HeavyComponent2805';
export default HeavyComponent2805;
