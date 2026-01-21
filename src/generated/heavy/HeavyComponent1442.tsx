'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1442<T> = T extends (infer U)[]
  ? DeepReadonlyArray1442<U>
  : T extends object
  ? DeepReadonlyObject1442<T>
  : T;

interface DeepReadonlyArray1442<T> extends ReadonlyArray<DeepReadonly1442<T>> {}

type DeepReadonlyObject1442<T> = {
  readonly [P in keyof T]: DeepReadonly1442<T[P]>;
};

type UnionToIntersection1442<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1442<T> = UnionToIntersection1442<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1442<T extends unknown[], V> = [...T, V];

type TuplifyUnion1442<T, L = LastOf1442<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1442<TuplifyUnion1442<Exclude<T, L>>, L>;

type DeepPartial1442<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1442<T[P]> }
  : T;

type Paths1442<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1442<K, Paths1442<T[K], Prev1442[D]>> : never }[keyof T]
  : never;

type Prev1442 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1442<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1442 {
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

type ConfigPaths1442 = Paths1442<NestedConfig1442>;

interface HeavyProps1442 {
  config: DeepPartial1442<NestedConfig1442>;
  path?: ConfigPaths1442;
}

const HeavyComponent1442 = memo(function HeavyComponent1442({ config }: HeavyProps1442) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1442) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1442 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1442: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1442.displayName = 'HeavyComponent1442';
export default HeavyComponent1442;
