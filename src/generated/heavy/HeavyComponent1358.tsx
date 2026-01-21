'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1358<T> = T extends (infer U)[]
  ? DeepReadonlyArray1358<U>
  : T extends object
  ? DeepReadonlyObject1358<T>
  : T;

interface DeepReadonlyArray1358<T> extends ReadonlyArray<DeepReadonly1358<T>> {}

type DeepReadonlyObject1358<T> = {
  readonly [P in keyof T]: DeepReadonly1358<T[P]>;
};

type UnionToIntersection1358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1358<T> = UnionToIntersection1358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1358<T extends unknown[], V> = [...T, V];

type TuplifyUnion1358<T, L = LastOf1358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1358<TuplifyUnion1358<Exclude<T, L>>, L>;

type DeepPartial1358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1358<T[P]> }
  : T;

type Paths1358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1358<K, Paths1358<T[K], Prev1358[D]>> : never }[keyof T]
  : never;

type Prev1358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1358 {
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

type ConfigPaths1358 = Paths1358<NestedConfig1358>;

interface HeavyProps1358 {
  config: DeepPartial1358<NestedConfig1358>;
  path?: ConfigPaths1358;
}

const HeavyComponent1358 = memo(function HeavyComponent1358({ config }: HeavyProps1358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1358.displayName = 'HeavyComponent1358';
export default HeavyComponent1358;
