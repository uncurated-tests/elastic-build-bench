'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1052<T> = T extends (infer U)[]
  ? DeepReadonlyArray1052<U>
  : T extends object
  ? DeepReadonlyObject1052<T>
  : T;

interface DeepReadonlyArray1052<T> extends ReadonlyArray<DeepReadonly1052<T>> {}

type DeepReadonlyObject1052<T> = {
  readonly [P in keyof T]: DeepReadonly1052<T[P]>;
};

type UnionToIntersection1052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1052<T> = UnionToIntersection1052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1052<T extends unknown[], V> = [...T, V];

type TuplifyUnion1052<T, L = LastOf1052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1052<TuplifyUnion1052<Exclude<T, L>>, L>;

type DeepPartial1052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1052<T[P]> }
  : T;

type Paths1052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1052<K, Paths1052<T[K], Prev1052[D]>> : never }[keyof T]
  : never;

type Prev1052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1052 {
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

type ConfigPaths1052 = Paths1052<NestedConfig1052>;

interface HeavyProps1052 {
  config: DeepPartial1052<NestedConfig1052>;
  path?: ConfigPaths1052;
}

const HeavyComponent1052 = memo(function HeavyComponent1052({ config }: HeavyProps1052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1052.displayName = 'HeavyComponent1052';
export default HeavyComponent1052;
