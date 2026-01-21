'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1097<T> = T extends (infer U)[]
  ? DeepReadonlyArray1097<U>
  : T extends object
  ? DeepReadonlyObject1097<T>
  : T;

interface DeepReadonlyArray1097<T> extends ReadonlyArray<DeepReadonly1097<T>> {}

type DeepReadonlyObject1097<T> = {
  readonly [P in keyof T]: DeepReadonly1097<T[P]>;
};

type UnionToIntersection1097<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1097<T> = UnionToIntersection1097<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1097<T extends unknown[], V> = [...T, V];

type TuplifyUnion1097<T, L = LastOf1097<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1097<TuplifyUnion1097<Exclude<T, L>>, L>;

type DeepPartial1097<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1097<T[P]> }
  : T;

type Paths1097<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1097<K, Paths1097<T[K], Prev1097[D]>> : never }[keyof T]
  : never;

type Prev1097 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1097<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1097 {
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

type ConfigPaths1097 = Paths1097<NestedConfig1097>;

interface HeavyProps1097 {
  config: DeepPartial1097<NestedConfig1097>;
  path?: ConfigPaths1097;
}

const HeavyComponent1097 = memo(function HeavyComponent1097({ config }: HeavyProps1097) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1097) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1097 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1097: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1097.displayName = 'HeavyComponent1097';
export default HeavyComponent1097;
