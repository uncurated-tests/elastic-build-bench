'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1662<T> = T extends (infer U)[]
  ? DeepReadonlyArray1662<U>
  : T extends object
  ? DeepReadonlyObject1662<T>
  : T;

interface DeepReadonlyArray1662<T> extends ReadonlyArray<DeepReadonly1662<T>> {}

type DeepReadonlyObject1662<T> = {
  readonly [P in keyof T]: DeepReadonly1662<T[P]>;
};

type UnionToIntersection1662<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1662<T> = UnionToIntersection1662<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1662<T extends unknown[], V> = [...T, V];

type TuplifyUnion1662<T, L = LastOf1662<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1662<TuplifyUnion1662<Exclude<T, L>>, L>;

type DeepPartial1662<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1662<T[P]> }
  : T;

type Paths1662<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1662<K, Paths1662<T[K], Prev1662[D]>> : never }[keyof T]
  : never;

type Prev1662 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1662<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1662 {
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

type ConfigPaths1662 = Paths1662<NestedConfig1662>;

interface HeavyProps1662 {
  config: DeepPartial1662<NestedConfig1662>;
  path?: ConfigPaths1662;
}

const HeavyComponent1662 = memo(function HeavyComponent1662({ config }: HeavyProps1662) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1662) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1662 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1662: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1662.displayName = 'HeavyComponent1662';
export default HeavyComponent1662;
