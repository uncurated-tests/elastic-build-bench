'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1473<T> = T extends (infer U)[]
  ? DeepReadonlyArray1473<U>
  : T extends object
  ? DeepReadonlyObject1473<T>
  : T;

interface DeepReadonlyArray1473<T> extends ReadonlyArray<DeepReadonly1473<T>> {}

type DeepReadonlyObject1473<T> = {
  readonly [P in keyof T]: DeepReadonly1473<T[P]>;
};

type UnionToIntersection1473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1473<T> = UnionToIntersection1473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1473<T extends unknown[], V> = [...T, V];

type TuplifyUnion1473<T, L = LastOf1473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1473<TuplifyUnion1473<Exclude<T, L>>, L>;

type DeepPartial1473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1473<T[P]> }
  : T;

type Paths1473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1473<K, Paths1473<T[K], Prev1473[D]>> : never }[keyof T]
  : never;

type Prev1473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1473 {
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

type ConfigPaths1473 = Paths1473<NestedConfig1473>;

interface HeavyProps1473 {
  config: DeepPartial1473<NestedConfig1473>;
  path?: ConfigPaths1473;
}

const HeavyComponent1473 = memo(function HeavyComponent1473({ config }: HeavyProps1473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1473.displayName = 'HeavyComponent1473';
export default HeavyComponent1473;
