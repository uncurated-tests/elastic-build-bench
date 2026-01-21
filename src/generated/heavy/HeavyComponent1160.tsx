'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1160<T> = T extends (infer U)[]
  ? DeepReadonlyArray1160<U>
  : T extends object
  ? DeepReadonlyObject1160<T>
  : T;

interface DeepReadonlyArray1160<T> extends ReadonlyArray<DeepReadonly1160<T>> {}

type DeepReadonlyObject1160<T> = {
  readonly [P in keyof T]: DeepReadonly1160<T[P]>;
};

type UnionToIntersection1160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1160<T> = UnionToIntersection1160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1160<T extends unknown[], V> = [...T, V];

type TuplifyUnion1160<T, L = LastOf1160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1160<TuplifyUnion1160<Exclude<T, L>>, L>;

type DeepPartial1160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1160<T[P]> }
  : T;

type Paths1160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1160<K, Paths1160<T[K], Prev1160[D]>> : never }[keyof T]
  : never;

type Prev1160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1160 {
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

type ConfigPaths1160 = Paths1160<NestedConfig1160>;

interface HeavyProps1160 {
  config: DeepPartial1160<NestedConfig1160>;
  path?: ConfigPaths1160;
}

const HeavyComponent1160 = memo(function HeavyComponent1160({ config }: HeavyProps1160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1160.displayName = 'HeavyComponent1160';
export default HeavyComponent1160;
