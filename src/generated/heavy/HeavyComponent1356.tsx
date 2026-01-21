'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1356<T> = T extends (infer U)[]
  ? DeepReadonlyArray1356<U>
  : T extends object
  ? DeepReadonlyObject1356<T>
  : T;

interface DeepReadonlyArray1356<T> extends ReadonlyArray<DeepReadonly1356<T>> {}

type DeepReadonlyObject1356<T> = {
  readonly [P in keyof T]: DeepReadonly1356<T[P]>;
};

type UnionToIntersection1356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1356<T> = UnionToIntersection1356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1356<T extends unknown[], V> = [...T, V];

type TuplifyUnion1356<T, L = LastOf1356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1356<TuplifyUnion1356<Exclude<T, L>>, L>;

type DeepPartial1356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1356<T[P]> }
  : T;

type Paths1356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1356<K, Paths1356<T[K], Prev1356[D]>> : never }[keyof T]
  : never;

type Prev1356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1356 {
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

type ConfigPaths1356 = Paths1356<NestedConfig1356>;

interface HeavyProps1356 {
  config: DeepPartial1356<NestedConfig1356>;
  path?: ConfigPaths1356;
}

const HeavyComponent1356 = memo(function HeavyComponent1356({ config }: HeavyProps1356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1356.displayName = 'HeavyComponent1356';
export default HeavyComponent1356;
