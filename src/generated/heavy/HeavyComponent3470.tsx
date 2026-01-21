'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3470<T> = T extends (infer U)[]
  ? DeepReadonlyArray3470<U>
  : T extends object
  ? DeepReadonlyObject3470<T>
  : T;

interface DeepReadonlyArray3470<T> extends ReadonlyArray<DeepReadonly3470<T>> {}

type DeepReadonlyObject3470<T> = {
  readonly [P in keyof T]: DeepReadonly3470<T[P]>;
};

type UnionToIntersection3470<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3470<T> = UnionToIntersection3470<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3470<T extends unknown[], V> = [...T, V];

type TuplifyUnion3470<T, L = LastOf3470<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3470<TuplifyUnion3470<Exclude<T, L>>, L>;

type DeepPartial3470<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3470<T[P]> }
  : T;

type Paths3470<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3470<K, Paths3470<T[K], Prev3470[D]>> : never }[keyof T]
  : never;

type Prev3470 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3470<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3470 {
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

type ConfigPaths3470 = Paths3470<NestedConfig3470>;

interface HeavyProps3470 {
  config: DeepPartial3470<NestedConfig3470>;
  path?: ConfigPaths3470;
}

const HeavyComponent3470 = memo(function HeavyComponent3470({ config }: HeavyProps3470) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3470) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3470 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3470: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3470.displayName = 'HeavyComponent3470';
export default HeavyComponent3470;
