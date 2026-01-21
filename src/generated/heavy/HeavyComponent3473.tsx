'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3473<T> = T extends (infer U)[]
  ? DeepReadonlyArray3473<U>
  : T extends object
  ? DeepReadonlyObject3473<T>
  : T;

interface DeepReadonlyArray3473<T> extends ReadonlyArray<DeepReadonly3473<T>> {}

type DeepReadonlyObject3473<T> = {
  readonly [P in keyof T]: DeepReadonly3473<T[P]>;
};

type UnionToIntersection3473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3473<T> = UnionToIntersection3473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3473<T extends unknown[], V> = [...T, V];

type TuplifyUnion3473<T, L = LastOf3473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3473<TuplifyUnion3473<Exclude<T, L>>, L>;

type DeepPartial3473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3473<T[P]> }
  : T;

type Paths3473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3473<K, Paths3473<T[K], Prev3473[D]>> : never }[keyof T]
  : never;

type Prev3473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3473 {
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

type ConfigPaths3473 = Paths3473<NestedConfig3473>;

interface HeavyProps3473 {
  config: DeepPartial3473<NestedConfig3473>;
  path?: ConfigPaths3473;
}

const HeavyComponent3473 = memo(function HeavyComponent3473({ config }: HeavyProps3473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3473.displayName = 'HeavyComponent3473';
export default HeavyComponent3473;
