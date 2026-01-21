'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1053<T> = T extends (infer U)[]
  ? DeepReadonlyArray1053<U>
  : T extends object
  ? DeepReadonlyObject1053<T>
  : T;

interface DeepReadonlyArray1053<T> extends ReadonlyArray<DeepReadonly1053<T>> {}

type DeepReadonlyObject1053<T> = {
  readonly [P in keyof T]: DeepReadonly1053<T[P]>;
};

type UnionToIntersection1053<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1053<T> = UnionToIntersection1053<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1053<T extends unknown[], V> = [...T, V];

type TuplifyUnion1053<T, L = LastOf1053<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1053<TuplifyUnion1053<Exclude<T, L>>, L>;

type DeepPartial1053<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1053<T[P]> }
  : T;

type Paths1053<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1053<K, Paths1053<T[K], Prev1053[D]>> : never }[keyof T]
  : never;

type Prev1053 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1053<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1053 {
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

type ConfigPaths1053 = Paths1053<NestedConfig1053>;

interface HeavyProps1053 {
  config: DeepPartial1053<NestedConfig1053>;
  path?: ConfigPaths1053;
}

const HeavyComponent1053 = memo(function HeavyComponent1053({ config }: HeavyProps1053) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1053) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1053 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1053: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1053.displayName = 'HeavyComponent1053';
export default HeavyComponent1053;
