'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1039<T> = T extends (infer U)[]
  ? DeepReadonlyArray1039<U>
  : T extends object
  ? DeepReadonlyObject1039<T>
  : T;

interface DeepReadonlyArray1039<T> extends ReadonlyArray<DeepReadonly1039<T>> {}

type DeepReadonlyObject1039<T> = {
  readonly [P in keyof T]: DeepReadonly1039<T[P]>;
};

type UnionToIntersection1039<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1039<T> = UnionToIntersection1039<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1039<T extends unknown[], V> = [...T, V];

type TuplifyUnion1039<T, L = LastOf1039<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1039<TuplifyUnion1039<Exclude<T, L>>, L>;

type DeepPartial1039<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1039<T[P]> }
  : T;

type Paths1039<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1039<K, Paths1039<T[K], Prev1039[D]>> : never }[keyof T]
  : never;

type Prev1039 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1039<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1039 {
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

type ConfigPaths1039 = Paths1039<NestedConfig1039>;

interface HeavyProps1039 {
  config: DeepPartial1039<NestedConfig1039>;
  path?: ConfigPaths1039;
}

const HeavyComponent1039 = memo(function HeavyComponent1039({ config }: HeavyProps1039) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1039) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1039 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1039: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1039.displayName = 'HeavyComponent1039';
export default HeavyComponent1039;
