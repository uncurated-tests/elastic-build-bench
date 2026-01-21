'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1120<T> = T extends (infer U)[]
  ? DeepReadonlyArray1120<U>
  : T extends object
  ? DeepReadonlyObject1120<T>
  : T;

interface DeepReadonlyArray1120<T> extends ReadonlyArray<DeepReadonly1120<T>> {}

type DeepReadonlyObject1120<T> = {
  readonly [P in keyof T]: DeepReadonly1120<T[P]>;
};

type UnionToIntersection1120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1120<T> = UnionToIntersection1120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1120<T extends unknown[], V> = [...T, V];

type TuplifyUnion1120<T, L = LastOf1120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1120<TuplifyUnion1120<Exclude<T, L>>, L>;

type DeepPartial1120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1120<T[P]> }
  : T;

type Paths1120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1120<K, Paths1120<T[K], Prev1120[D]>> : never }[keyof T]
  : never;

type Prev1120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1120 {
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

type ConfigPaths1120 = Paths1120<NestedConfig1120>;

interface HeavyProps1120 {
  config: DeepPartial1120<NestedConfig1120>;
  path?: ConfigPaths1120;
}

const HeavyComponent1120 = memo(function HeavyComponent1120({ config }: HeavyProps1120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1120.displayName = 'HeavyComponent1120';
export default HeavyComponent1120;
