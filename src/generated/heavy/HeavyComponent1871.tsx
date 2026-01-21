'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1871<T> = T extends (infer U)[]
  ? DeepReadonlyArray1871<U>
  : T extends object
  ? DeepReadonlyObject1871<T>
  : T;

interface DeepReadonlyArray1871<T> extends ReadonlyArray<DeepReadonly1871<T>> {}

type DeepReadonlyObject1871<T> = {
  readonly [P in keyof T]: DeepReadonly1871<T[P]>;
};

type UnionToIntersection1871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1871<T> = UnionToIntersection1871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1871<T extends unknown[], V> = [...T, V];

type TuplifyUnion1871<T, L = LastOf1871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1871<TuplifyUnion1871<Exclude<T, L>>, L>;

type DeepPartial1871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1871<T[P]> }
  : T;

type Paths1871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1871<K, Paths1871<T[K], Prev1871[D]>> : never }[keyof T]
  : never;

type Prev1871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1871 {
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

type ConfigPaths1871 = Paths1871<NestedConfig1871>;

interface HeavyProps1871 {
  config: DeepPartial1871<NestedConfig1871>;
  path?: ConfigPaths1871;
}

const HeavyComponent1871 = memo(function HeavyComponent1871({ config }: HeavyProps1871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1871.displayName = 'HeavyComponent1871';
export default HeavyComponent1871;
