'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1040<T> = T extends (infer U)[]
  ? DeepReadonlyArray1040<U>
  : T extends object
  ? DeepReadonlyObject1040<T>
  : T;

interface DeepReadonlyArray1040<T> extends ReadonlyArray<DeepReadonly1040<T>> {}

type DeepReadonlyObject1040<T> = {
  readonly [P in keyof T]: DeepReadonly1040<T[P]>;
};

type UnionToIntersection1040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1040<T> = UnionToIntersection1040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1040<T extends unknown[], V> = [...T, V];

type TuplifyUnion1040<T, L = LastOf1040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1040<TuplifyUnion1040<Exclude<T, L>>, L>;

type DeepPartial1040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1040<T[P]> }
  : T;

type Paths1040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1040<K, Paths1040<T[K], Prev1040[D]>> : never }[keyof T]
  : never;

type Prev1040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1040 {
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

type ConfigPaths1040 = Paths1040<NestedConfig1040>;

interface HeavyProps1040 {
  config: DeepPartial1040<NestedConfig1040>;
  path?: ConfigPaths1040;
}

const HeavyComponent1040 = memo(function HeavyComponent1040({ config }: HeavyProps1040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1040.displayName = 'HeavyComponent1040';
export default HeavyComponent1040;
