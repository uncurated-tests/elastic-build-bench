'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1076<T> = T extends (infer U)[]
  ? DeepReadonlyArray1076<U>
  : T extends object
  ? DeepReadonlyObject1076<T>
  : T;

interface DeepReadonlyArray1076<T> extends ReadonlyArray<DeepReadonly1076<T>> {}

type DeepReadonlyObject1076<T> = {
  readonly [P in keyof T]: DeepReadonly1076<T[P]>;
};

type UnionToIntersection1076<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1076<T> = UnionToIntersection1076<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1076<T extends unknown[], V> = [...T, V];

type TuplifyUnion1076<T, L = LastOf1076<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1076<TuplifyUnion1076<Exclude<T, L>>, L>;

type DeepPartial1076<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1076<T[P]> }
  : T;

type Paths1076<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1076<K, Paths1076<T[K], Prev1076[D]>> : never }[keyof T]
  : never;

type Prev1076 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1076<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1076 {
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

type ConfigPaths1076 = Paths1076<NestedConfig1076>;

interface HeavyProps1076 {
  config: DeepPartial1076<NestedConfig1076>;
  path?: ConfigPaths1076;
}

const HeavyComponent1076 = memo(function HeavyComponent1076({ config }: HeavyProps1076) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1076) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1076 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1076: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1076.displayName = 'HeavyComponent1076';
export default HeavyComponent1076;
