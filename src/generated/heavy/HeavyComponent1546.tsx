'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1546<T> = T extends (infer U)[]
  ? DeepReadonlyArray1546<U>
  : T extends object
  ? DeepReadonlyObject1546<T>
  : T;

interface DeepReadonlyArray1546<T> extends ReadonlyArray<DeepReadonly1546<T>> {}

type DeepReadonlyObject1546<T> = {
  readonly [P in keyof T]: DeepReadonly1546<T[P]>;
};

type UnionToIntersection1546<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1546<T> = UnionToIntersection1546<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1546<T extends unknown[], V> = [...T, V];

type TuplifyUnion1546<T, L = LastOf1546<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1546<TuplifyUnion1546<Exclude<T, L>>, L>;

type DeepPartial1546<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1546<T[P]> }
  : T;

type Paths1546<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1546<K, Paths1546<T[K], Prev1546[D]>> : never }[keyof T]
  : never;

type Prev1546 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1546<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1546 {
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

type ConfigPaths1546 = Paths1546<NestedConfig1546>;

interface HeavyProps1546 {
  config: DeepPartial1546<NestedConfig1546>;
  path?: ConfigPaths1546;
}

const HeavyComponent1546 = memo(function HeavyComponent1546({ config }: HeavyProps1546) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1546) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1546 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1546: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1546.displayName = 'HeavyComponent1546';
export default HeavyComponent1546;
