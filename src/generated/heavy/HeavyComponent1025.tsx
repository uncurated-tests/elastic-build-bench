'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1025<T> = T extends (infer U)[]
  ? DeepReadonlyArray1025<U>
  : T extends object
  ? DeepReadonlyObject1025<T>
  : T;

interface DeepReadonlyArray1025<T> extends ReadonlyArray<DeepReadonly1025<T>> {}

type DeepReadonlyObject1025<T> = {
  readonly [P in keyof T]: DeepReadonly1025<T[P]>;
};

type UnionToIntersection1025<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1025<T> = UnionToIntersection1025<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1025<T extends unknown[], V> = [...T, V];

type TuplifyUnion1025<T, L = LastOf1025<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1025<TuplifyUnion1025<Exclude<T, L>>, L>;

type DeepPartial1025<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1025<T[P]> }
  : T;

type Paths1025<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1025<K, Paths1025<T[K], Prev1025[D]>> : never }[keyof T]
  : never;

type Prev1025 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1025<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1025 {
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

type ConfigPaths1025 = Paths1025<NestedConfig1025>;

interface HeavyProps1025 {
  config: DeepPartial1025<NestedConfig1025>;
  path?: ConfigPaths1025;
}

const HeavyComponent1025 = memo(function HeavyComponent1025({ config }: HeavyProps1025) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1025) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1025 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1025: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1025.displayName = 'HeavyComponent1025';
export default HeavyComponent1025;
