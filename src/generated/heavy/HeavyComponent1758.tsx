'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1758<T> = T extends (infer U)[]
  ? DeepReadonlyArray1758<U>
  : T extends object
  ? DeepReadonlyObject1758<T>
  : T;

interface DeepReadonlyArray1758<T> extends ReadonlyArray<DeepReadonly1758<T>> {}

type DeepReadonlyObject1758<T> = {
  readonly [P in keyof T]: DeepReadonly1758<T[P]>;
};

type UnionToIntersection1758<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1758<T> = UnionToIntersection1758<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1758<T extends unknown[], V> = [...T, V];

type TuplifyUnion1758<T, L = LastOf1758<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1758<TuplifyUnion1758<Exclude<T, L>>, L>;

type DeepPartial1758<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1758<T[P]> }
  : T;

type Paths1758<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1758<K, Paths1758<T[K], Prev1758[D]>> : never }[keyof T]
  : never;

type Prev1758 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1758<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1758 {
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

type ConfigPaths1758 = Paths1758<NestedConfig1758>;

interface HeavyProps1758 {
  config: DeepPartial1758<NestedConfig1758>;
  path?: ConfigPaths1758;
}

const HeavyComponent1758 = memo(function HeavyComponent1758({ config }: HeavyProps1758) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1758) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1758 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1758: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1758.displayName = 'HeavyComponent1758';
export default HeavyComponent1758;
