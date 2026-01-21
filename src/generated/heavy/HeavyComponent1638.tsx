'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1638<T> = T extends (infer U)[]
  ? DeepReadonlyArray1638<U>
  : T extends object
  ? DeepReadonlyObject1638<T>
  : T;

interface DeepReadonlyArray1638<T> extends ReadonlyArray<DeepReadonly1638<T>> {}

type DeepReadonlyObject1638<T> = {
  readonly [P in keyof T]: DeepReadonly1638<T[P]>;
};

type UnionToIntersection1638<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1638<T> = UnionToIntersection1638<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1638<T extends unknown[], V> = [...T, V];

type TuplifyUnion1638<T, L = LastOf1638<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1638<TuplifyUnion1638<Exclude<T, L>>, L>;

type DeepPartial1638<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1638<T[P]> }
  : T;

type Paths1638<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1638<K, Paths1638<T[K], Prev1638[D]>> : never }[keyof T]
  : never;

type Prev1638 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1638<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1638 {
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

type ConfigPaths1638 = Paths1638<NestedConfig1638>;

interface HeavyProps1638 {
  config: DeepPartial1638<NestedConfig1638>;
  path?: ConfigPaths1638;
}

const HeavyComponent1638 = memo(function HeavyComponent1638({ config }: HeavyProps1638) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1638) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1638 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1638: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1638.displayName = 'HeavyComponent1638';
export default HeavyComponent1638;
