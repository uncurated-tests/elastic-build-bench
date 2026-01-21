'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1523<T> = T extends (infer U)[]
  ? DeepReadonlyArray1523<U>
  : T extends object
  ? DeepReadonlyObject1523<T>
  : T;

interface DeepReadonlyArray1523<T> extends ReadonlyArray<DeepReadonly1523<T>> {}

type DeepReadonlyObject1523<T> = {
  readonly [P in keyof T]: DeepReadonly1523<T[P]>;
};

type UnionToIntersection1523<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1523<T> = UnionToIntersection1523<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1523<T extends unknown[], V> = [...T, V];

type TuplifyUnion1523<T, L = LastOf1523<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1523<TuplifyUnion1523<Exclude<T, L>>, L>;

type DeepPartial1523<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1523<T[P]> }
  : T;

type Paths1523<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1523<K, Paths1523<T[K], Prev1523[D]>> : never }[keyof T]
  : never;

type Prev1523 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1523<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1523 {
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

type ConfigPaths1523 = Paths1523<NestedConfig1523>;

interface HeavyProps1523 {
  config: DeepPartial1523<NestedConfig1523>;
  path?: ConfigPaths1523;
}

const HeavyComponent1523 = memo(function HeavyComponent1523({ config }: HeavyProps1523) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1523) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1523 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1523: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1523.displayName = 'HeavyComponent1523';
export default HeavyComponent1523;
