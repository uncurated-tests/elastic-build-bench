'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1961<T> = T extends (infer U)[]
  ? DeepReadonlyArray1961<U>
  : T extends object
  ? DeepReadonlyObject1961<T>
  : T;

interface DeepReadonlyArray1961<T> extends ReadonlyArray<DeepReadonly1961<T>> {}

type DeepReadonlyObject1961<T> = {
  readonly [P in keyof T]: DeepReadonly1961<T[P]>;
};

type UnionToIntersection1961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1961<T> = UnionToIntersection1961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1961<T extends unknown[], V> = [...T, V];

type TuplifyUnion1961<T, L = LastOf1961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1961<TuplifyUnion1961<Exclude<T, L>>, L>;

type DeepPartial1961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1961<T[P]> }
  : T;

type Paths1961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1961<K, Paths1961<T[K], Prev1961[D]>> : never }[keyof T]
  : never;

type Prev1961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1961 {
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

type ConfigPaths1961 = Paths1961<NestedConfig1961>;

interface HeavyProps1961 {
  config: DeepPartial1961<NestedConfig1961>;
  path?: ConfigPaths1961;
}

const HeavyComponent1961 = memo(function HeavyComponent1961({ config }: HeavyProps1961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1961.displayName = 'HeavyComponent1961';
export default HeavyComponent1961;
