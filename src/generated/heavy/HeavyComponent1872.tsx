'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1872<T> = T extends (infer U)[]
  ? DeepReadonlyArray1872<U>
  : T extends object
  ? DeepReadonlyObject1872<T>
  : T;

interface DeepReadonlyArray1872<T> extends ReadonlyArray<DeepReadonly1872<T>> {}

type DeepReadonlyObject1872<T> = {
  readonly [P in keyof T]: DeepReadonly1872<T[P]>;
};

type UnionToIntersection1872<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1872<T> = UnionToIntersection1872<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1872<T extends unknown[], V> = [...T, V];

type TuplifyUnion1872<T, L = LastOf1872<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1872<TuplifyUnion1872<Exclude<T, L>>, L>;

type DeepPartial1872<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1872<T[P]> }
  : T;

type Paths1872<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1872<K, Paths1872<T[K], Prev1872[D]>> : never }[keyof T]
  : never;

type Prev1872 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1872<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1872 {
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

type ConfigPaths1872 = Paths1872<NestedConfig1872>;

interface HeavyProps1872 {
  config: DeepPartial1872<NestedConfig1872>;
  path?: ConfigPaths1872;
}

const HeavyComponent1872 = memo(function HeavyComponent1872({ config }: HeavyProps1872) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1872) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1872 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1872: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1872.displayName = 'HeavyComponent1872';
export default HeavyComponent1872;
