'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1007<T> = T extends (infer U)[]
  ? DeepReadonlyArray1007<U>
  : T extends object
  ? DeepReadonlyObject1007<T>
  : T;

interface DeepReadonlyArray1007<T> extends ReadonlyArray<DeepReadonly1007<T>> {}

type DeepReadonlyObject1007<T> = {
  readonly [P in keyof T]: DeepReadonly1007<T[P]>;
};

type UnionToIntersection1007<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1007<T> = UnionToIntersection1007<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1007<T extends unknown[], V> = [...T, V];

type TuplifyUnion1007<T, L = LastOf1007<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1007<TuplifyUnion1007<Exclude<T, L>>, L>;

type DeepPartial1007<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1007<T[P]> }
  : T;

type Paths1007<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1007<K, Paths1007<T[K], Prev1007[D]>> : never }[keyof T]
  : never;

type Prev1007 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1007<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1007 {
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

type ConfigPaths1007 = Paths1007<NestedConfig1007>;

interface HeavyProps1007 {
  config: DeepPartial1007<NestedConfig1007>;
  path?: ConfigPaths1007;
}

const HeavyComponent1007 = memo(function HeavyComponent1007({ config }: HeavyProps1007) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1007) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1007 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1007: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1007.displayName = 'HeavyComponent1007';
export default HeavyComponent1007;
