'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3560<T> = T extends (infer U)[]
  ? DeepReadonlyArray3560<U>
  : T extends object
  ? DeepReadonlyObject3560<T>
  : T;

interface DeepReadonlyArray3560<T> extends ReadonlyArray<DeepReadonly3560<T>> {}

type DeepReadonlyObject3560<T> = {
  readonly [P in keyof T]: DeepReadonly3560<T[P]>;
};

type UnionToIntersection3560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3560<T> = UnionToIntersection3560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3560<T extends unknown[], V> = [...T, V];

type TuplifyUnion3560<T, L = LastOf3560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3560<TuplifyUnion3560<Exclude<T, L>>, L>;

type DeepPartial3560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3560<T[P]> }
  : T;

type Paths3560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3560<K, Paths3560<T[K], Prev3560[D]>> : never }[keyof T]
  : never;

type Prev3560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3560 {
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

type ConfigPaths3560 = Paths3560<NestedConfig3560>;

interface HeavyProps3560 {
  config: DeepPartial3560<NestedConfig3560>;
  path?: ConfigPaths3560;
}

const HeavyComponent3560 = memo(function HeavyComponent3560({ config }: HeavyProps3560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3560.displayName = 'HeavyComponent3560';
export default HeavyComponent3560;
