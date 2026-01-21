'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1874<T> = T extends (infer U)[]
  ? DeepReadonlyArray1874<U>
  : T extends object
  ? DeepReadonlyObject1874<T>
  : T;

interface DeepReadonlyArray1874<T> extends ReadonlyArray<DeepReadonly1874<T>> {}

type DeepReadonlyObject1874<T> = {
  readonly [P in keyof T]: DeepReadonly1874<T[P]>;
};

type UnionToIntersection1874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1874<T> = UnionToIntersection1874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1874<T extends unknown[], V> = [...T, V];

type TuplifyUnion1874<T, L = LastOf1874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1874<TuplifyUnion1874<Exclude<T, L>>, L>;

type DeepPartial1874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1874<T[P]> }
  : T;

type Paths1874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1874<K, Paths1874<T[K], Prev1874[D]>> : never }[keyof T]
  : never;

type Prev1874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1874 {
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

type ConfigPaths1874 = Paths1874<NestedConfig1874>;

interface HeavyProps1874 {
  config: DeepPartial1874<NestedConfig1874>;
  path?: ConfigPaths1874;
}

const HeavyComponent1874 = memo(function HeavyComponent1874({ config }: HeavyProps1874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1874.displayName = 'HeavyComponent1874';
export default HeavyComponent1874;
