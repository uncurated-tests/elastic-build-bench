'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1669<T> = T extends (infer U)[]
  ? DeepReadonlyArray1669<U>
  : T extends object
  ? DeepReadonlyObject1669<T>
  : T;

interface DeepReadonlyArray1669<T> extends ReadonlyArray<DeepReadonly1669<T>> {}

type DeepReadonlyObject1669<T> = {
  readonly [P in keyof T]: DeepReadonly1669<T[P]>;
};

type UnionToIntersection1669<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1669<T> = UnionToIntersection1669<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1669<T extends unknown[], V> = [...T, V];

type TuplifyUnion1669<T, L = LastOf1669<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1669<TuplifyUnion1669<Exclude<T, L>>, L>;

type DeepPartial1669<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1669<T[P]> }
  : T;

type Paths1669<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1669<K, Paths1669<T[K], Prev1669[D]>> : never }[keyof T]
  : never;

type Prev1669 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1669<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1669 {
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

type ConfigPaths1669 = Paths1669<NestedConfig1669>;

interface HeavyProps1669 {
  config: DeepPartial1669<NestedConfig1669>;
  path?: ConfigPaths1669;
}

const HeavyComponent1669 = memo(function HeavyComponent1669({ config }: HeavyProps1669) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1669) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1669 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1669: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1669.displayName = 'HeavyComponent1669';
export default HeavyComponent1669;
