'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1041<T> = T extends (infer U)[]
  ? DeepReadonlyArray1041<U>
  : T extends object
  ? DeepReadonlyObject1041<T>
  : T;

interface DeepReadonlyArray1041<T> extends ReadonlyArray<DeepReadonly1041<T>> {}

type DeepReadonlyObject1041<T> = {
  readonly [P in keyof T]: DeepReadonly1041<T[P]>;
};

type UnionToIntersection1041<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1041<T> = UnionToIntersection1041<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1041<T extends unknown[], V> = [...T, V];

type TuplifyUnion1041<T, L = LastOf1041<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1041<TuplifyUnion1041<Exclude<T, L>>, L>;

type DeepPartial1041<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1041<T[P]> }
  : T;

type Paths1041<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1041<K, Paths1041<T[K], Prev1041[D]>> : never }[keyof T]
  : never;

type Prev1041 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1041<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1041 {
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

type ConfigPaths1041 = Paths1041<NestedConfig1041>;

interface HeavyProps1041 {
  config: DeepPartial1041<NestedConfig1041>;
  path?: ConfigPaths1041;
}

const HeavyComponent1041 = memo(function HeavyComponent1041({ config }: HeavyProps1041) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1041) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1041 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1041: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1041.displayName = 'HeavyComponent1041';
export default HeavyComponent1041;
