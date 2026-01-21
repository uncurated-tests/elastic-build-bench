'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1997<T> = T extends (infer U)[]
  ? DeepReadonlyArray1997<U>
  : T extends object
  ? DeepReadonlyObject1997<T>
  : T;

interface DeepReadonlyArray1997<T> extends ReadonlyArray<DeepReadonly1997<T>> {}

type DeepReadonlyObject1997<T> = {
  readonly [P in keyof T]: DeepReadonly1997<T[P]>;
};

type UnionToIntersection1997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1997<T> = UnionToIntersection1997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1997<T extends unknown[], V> = [...T, V];

type TuplifyUnion1997<T, L = LastOf1997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1997<TuplifyUnion1997<Exclude<T, L>>, L>;

type DeepPartial1997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1997<T[P]> }
  : T;

type Paths1997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1997<K, Paths1997<T[K], Prev1997[D]>> : never }[keyof T]
  : never;

type Prev1997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1997 {
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

type ConfigPaths1997 = Paths1997<NestedConfig1997>;

interface HeavyProps1997 {
  config: DeepPartial1997<NestedConfig1997>;
  path?: ConfigPaths1997;
}

const HeavyComponent1997 = memo(function HeavyComponent1997({ config }: HeavyProps1997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1997.displayName = 'HeavyComponent1997';
export default HeavyComponent1997;
