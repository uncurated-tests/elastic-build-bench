'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1535<T> = T extends (infer U)[]
  ? DeepReadonlyArray1535<U>
  : T extends object
  ? DeepReadonlyObject1535<T>
  : T;

interface DeepReadonlyArray1535<T> extends ReadonlyArray<DeepReadonly1535<T>> {}

type DeepReadonlyObject1535<T> = {
  readonly [P in keyof T]: DeepReadonly1535<T[P]>;
};

type UnionToIntersection1535<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1535<T> = UnionToIntersection1535<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1535<T extends unknown[], V> = [...T, V];

type TuplifyUnion1535<T, L = LastOf1535<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1535<TuplifyUnion1535<Exclude<T, L>>, L>;

type DeepPartial1535<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1535<T[P]> }
  : T;

type Paths1535<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1535<K, Paths1535<T[K], Prev1535[D]>> : never }[keyof T]
  : never;

type Prev1535 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1535<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1535 {
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

type ConfigPaths1535 = Paths1535<NestedConfig1535>;

interface HeavyProps1535 {
  config: DeepPartial1535<NestedConfig1535>;
  path?: ConfigPaths1535;
}

const HeavyComponent1535 = memo(function HeavyComponent1535({ config }: HeavyProps1535) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1535) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1535 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1535: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1535.displayName = 'HeavyComponent1535';
export default HeavyComponent1535;
