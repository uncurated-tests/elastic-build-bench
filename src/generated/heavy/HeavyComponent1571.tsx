'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1571<T> = T extends (infer U)[]
  ? DeepReadonlyArray1571<U>
  : T extends object
  ? DeepReadonlyObject1571<T>
  : T;

interface DeepReadonlyArray1571<T> extends ReadonlyArray<DeepReadonly1571<T>> {}

type DeepReadonlyObject1571<T> = {
  readonly [P in keyof T]: DeepReadonly1571<T[P]>;
};

type UnionToIntersection1571<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1571<T> = UnionToIntersection1571<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1571<T extends unknown[], V> = [...T, V];

type TuplifyUnion1571<T, L = LastOf1571<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1571<TuplifyUnion1571<Exclude<T, L>>, L>;

type DeepPartial1571<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1571<T[P]> }
  : T;

type Paths1571<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1571<K, Paths1571<T[K], Prev1571[D]>> : never }[keyof T]
  : never;

type Prev1571 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1571<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1571 {
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

type ConfigPaths1571 = Paths1571<NestedConfig1571>;

interface HeavyProps1571 {
  config: DeepPartial1571<NestedConfig1571>;
  path?: ConfigPaths1571;
}

const HeavyComponent1571 = memo(function HeavyComponent1571({ config }: HeavyProps1571) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1571) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1571 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1571: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1571.displayName = 'HeavyComponent1571';
export default HeavyComponent1571;
