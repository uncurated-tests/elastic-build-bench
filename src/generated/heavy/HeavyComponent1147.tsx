'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1147<T> = T extends (infer U)[]
  ? DeepReadonlyArray1147<U>
  : T extends object
  ? DeepReadonlyObject1147<T>
  : T;

interface DeepReadonlyArray1147<T> extends ReadonlyArray<DeepReadonly1147<T>> {}

type DeepReadonlyObject1147<T> = {
  readonly [P in keyof T]: DeepReadonly1147<T[P]>;
};

type UnionToIntersection1147<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1147<T> = UnionToIntersection1147<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1147<T extends unknown[], V> = [...T, V];

type TuplifyUnion1147<T, L = LastOf1147<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1147<TuplifyUnion1147<Exclude<T, L>>, L>;

type DeepPartial1147<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1147<T[P]> }
  : T;

type Paths1147<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1147<K, Paths1147<T[K], Prev1147[D]>> : never }[keyof T]
  : never;

type Prev1147 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1147<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1147 {
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

type ConfigPaths1147 = Paths1147<NestedConfig1147>;

interface HeavyProps1147 {
  config: DeepPartial1147<NestedConfig1147>;
  path?: ConfigPaths1147;
}

const HeavyComponent1147 = memo(function HeavyComponent1147({ config }: HeavyProps1147) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1147) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1147 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1147: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1147.displayName = 'HeavyComponent1147';
export default HeavyComponent1147;
