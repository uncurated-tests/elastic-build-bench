'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1254<T> = T extends (infer U)[]
  ? DeepReadonlyArray1254<U>
  : T extends object
  ? DeepReadonlyObject1254<T>
  : T;

interface DeepReadonlyArray1254<T> extends ReadonlyArray<DeepReadonly1254<T>> {}

type DeepReadonlyObject1254<T> = {
  readonly [P in keyof T]: DeepReadonly1254<T[P]>;
};

type UnionToIntersection1254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1254<T> = UnionToIntersection1254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1254<T extends unknown[], V> = [...T, V];

type TuplifyUnion1254<T, L = LastOf1254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1254<TuplifyUnion1254<Exclude<T, L>>, L>;

type DeepPartial1254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1254<T[P]> }
  : T;

type Paths1254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1254<K, Paths1254<T[K], Prev1254[D]>> : never }[keyof T]
  : never;

type Prev1254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1254 {
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

type ConfigPaths1254 = Paths1254<NestedConfig1254>;

interface HeavyProps1254 {
  config: DeepPartial1254<NestedConfig1254>;
  path?: ConfigPaths1254;
}

const HeavyComponent1254 = memo(function HeavyComponent1254({ config }: HeavyProps1254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1254.displayName = 'HeavyComponent1254';
export default HeavyComponent1254;
