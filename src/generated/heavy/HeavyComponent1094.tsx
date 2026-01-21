'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1094<T> = T extends (infer U)[]
  ? DeepReadonlyArray1094<U>
  : T extends object
  ? DeepReadonlyObject1094<T>
  : T;

interface DeepReadonlyArray1094<T> extends ReadonlyArray<DeepReadonly1094<T>> {}

type DeepReadonlyObject1094<T> = {
  readonly [P in keyof T]: DeepReadonly1094<T[P]>;
};

type UnionToIntersection1094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1094<T> = UnionToIntersection1094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1094<T extends unknown[], V> = [...T, V];

type TuplifyUnion1094<T, L = LastOf1094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1094<TuplifyUnion1094<Exclude<T, L>>, L>;

type DeepPartial1094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1094<T[P]> }
  : T;

type Paths1094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1094<K, Paths1094<T[K], Prev1094[D]>> : never }[keyof T]
  : never;

type Prev1094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1094 {
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

type ConfigPaths1094 = Paths1094<NestedConfig1094>;

interface HeavyProps1094 {
  config: DeepPartial1094<NestedConfig1094>;
  path?: ConfigPaths1094;
}

const HeavyComponent1094 = memo(function HeavyComponent1094({ config }: HeavyProps1094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1094.displayName = 'HeavyComponent1094';
export default HeavyComponent1094;
