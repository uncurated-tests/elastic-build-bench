'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1541<T> = T extends (infer U)[]
  ? DeepReadonlyArray1541<U>
  : T extends object
  ? DeepReadonlyObject1541<T>
  : T;

interface DeepReadonlyArray1541<T> extends ReadonlyArray<DeepReadonly1541<T>> {}

type DeepReadonlyObject1541<T> = {
  readonly [P in keyof T]: DeepReadonly1541<T[P]>;
};

type UnionToIntersection1541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1541<T> = UnionToIntersection1541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1541<T extends unknown[], V> = [...T, V];

type TuplifyUnion1541<T, L = LastOf1541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1541<TuplifyUnion1541<Exclude<T, L>>, L>;

type DeepPartial1541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1541<T[P]> }
  : T;

type Paths1541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1541<K, Paths1541<T[K], Prev1541[D]>> : never }[keyof T]
  : never;

type Prev1541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1541 {
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

type ConfigPaths1541 = Paths1541<NestedConfig1541>;

interface HeavyProps1541 {
  config: DeepPartial1541<NestedConfig1541>;
  path?: ConfigPaths1541;
}

const HeavyComponent1541 = memo(function HeavyComponent1541({ config }: HeavyProps1541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1541.displayName = 'HeavyComponent1541';
export default HeavyComponent1541;
