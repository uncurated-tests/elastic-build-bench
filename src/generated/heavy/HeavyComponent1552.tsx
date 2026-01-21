'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1552<T> = T extends (infer U)[]
  ? DeepReadonlyArray1552<U>
  : T extends object
  ? DeepReadonlyObject1552<T>
  : T;

interface DeepReadonlyArray1552<T> extends ReadonlyArray<DeepReadonly1552<T>> {}

type DeepReadonlyObject1552<T> = {
  readonly [P in keyof T]: DeepReadonly1552<T[P]>;
};

type UnionToIntersection1552<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1552<T> = UnionToIntersection1552<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1552<T extends unknown[], V> = [...T, V];

type TuplifyUnion1552<T, L = LastOf1552<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1552<TuplifyUnion1552<Exclude<T, L>>, L>;

type DeepPartial1552<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1552<T[P]> }
  : T;

type Paths1552<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1552<K, Paths1552<T[K], Prev1552[D]>> : never }[keyof T]
  : never;

type Prev1552 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1552<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1552 {
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

type ConfigPaths1552 = Paths1552<NestedConfig1552>;

interface HeavyProps1552 {
  config: DeepPartial1552<NestedConfig1552>;
  path?: ConfigPaths1552;
}

const HeavyComponent1552 = memo(function HeavyComponent1552({ config }: HeavyProps1552) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1552) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1552 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1552: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1552.displayName = 'HeavyComponent1552';
export default HeavyComponent1552;
