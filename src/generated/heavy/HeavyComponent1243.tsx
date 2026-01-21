'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1243<T> = T extends (infer U)[]
  ? DeepReadonlyArray1243<U>
  : T extends object
  ? DeepReadonlyObject1243<T>
  : T;

interface DeepReadonlyArray1243<T> extends ReadonlyArray<DeepReadonly1243<T>> {}

type DeepReadonlyObject1243<T> = {
  readonly [P in keyof T]: DeepReadonly1243<T[P]>;
};

type UnionToIntersection1243<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1243<T> = UnionToIntersection1243<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1243<T extends unknown[], V> = [...T, V];

type TuplifyUnion1243<T, L = LastOf1243<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1243<TuplifyUnion1243<Exclude<T, L>>, L>;

type DeepPartial1243<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1243<T[P]> }
  : T;

type Paths1243<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1243<K, Paths1243<T[K], Prev1243[D]>> : never }[keyof T]
  : never;

type Prev1243 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1243<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1243 {
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

type ConfigPaths1243 = Paths1243<NestedConfig1243>;

interface HeavyProps1243 {
  config: DeepPartial1243<NestedConfig1243>;
  path?: ConfigPaths1243;
}

const HeavyComponent1243 = memo(function HeavyComponent1243({ config }: HeavyProps1243) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1243) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1243 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1243: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1243.displayName = 'HeavyComponent1243';
export default HeavyComponent1243;
