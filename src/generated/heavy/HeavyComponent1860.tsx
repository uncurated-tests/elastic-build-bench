'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1860<T> = T extends (infer U)[]
  ? DeepReadonlyArray1860<U>
  : T extends object
  ? DeepReadonlyObject1860<T>
  : T;

interface DeepReadonlyArray1860<T> extends ReadonlyArray<DeepReadonly1860<T>> {}

type DeepReadonlyObject1860<T> = {
  readonly [P in keyof T]: DeepReadonly1860<T[P]>;
};

type UnionToIntersection1860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1860<T> = UnionToIntersection1860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1860<T extends unknown[], V> = [...T, V];

type TuplifyUnion1860<T, L = LastOf1860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1860<TuplifyUnion1860<Exclude<T, L>>, L>;

type DeepPartial1860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1860<T[P]> }
  : T;

type Paths1860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1860<K, Paths1860<T[K], Prev1860[D]>> : never }[keyof T]
  : never;

type Prev1860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1860 {
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

type ConfigPaths1860 = Paths1860<NestedConfig1860>;

interface HeavyProps1860 {
  config: DeepPartial1860<NestedConfig1860>;
  path?: ConfigPaths1860;
}

const HeavyComponent1860 = memo(function HeavyComponent1860({ config }: HeavyProps1860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1860.displayName = 'HeavyComponent1860';
export default HeavyComponent1860;
