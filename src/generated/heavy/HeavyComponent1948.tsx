'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1948<T> = T extends (infer U)[]
  ? DeepReadonlyArray1948<U>
  : T extends object
  ? DeepReadonlyObject1948<T>
  : T;

interface DeepReadonlyArray1948<T> extends ReadonlyArray<DeepReadonly1948<T>> {}

type DeepReadonlyObject1948<T> = {
  readonly [P in keyof T]: DeepReadonly1948<T[P]>;
};

type UnionToIntersection1948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1948<T> = UnionToIntersection1948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1948<T extends unknown[], V> = [...T, V];

type TuplifyUnion1948<T, L = LastOf1948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1948<TuplifyUnion1948<Exclude<T, L>>, L>;

type DeepPartial1948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1948<T[P]> }
  : T;

type Paths1948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1948<K, Paths1948<T[K], Prev1948[D]>> : never }[keyof T]
  : never;

type Prev1948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1948 {
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

type ConfigPaths1948 = Paths1948<NestedConfig1948>;

interface HeavyProps1948 {
  config: DeepPartial1948<NestedConfig1948>;
  path?: ConfigPaths1948;
}

const HeavyComponent1948 = memo(function HeavyComponent1948({ config }: HeavyProps1948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1948.displayName = 'HeavyComponent1948';
export default HeavyComponent1948;
