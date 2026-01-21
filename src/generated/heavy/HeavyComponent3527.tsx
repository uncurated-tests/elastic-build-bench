'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3527<T> = T extends (infer U)[]
  ? DeepReadonlyArray3527<U>
  : T extends object
  ? DeepReadonlyObject3527<T>
  : T;

interface DeepReadonlyArray3527<T> extends ReadonlyArray<DeepReadonly3527<T>> {}

type DeepReadonlyObject3527<T> = {
  readonly [P in keyof T]: DeepReadonly3527<T[P]>;
};

type UnionToIntersection3527<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3527<T> = UnionToIntersection3527<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3527<T extends unknown[], V> = [...T, V];

type TuplifyUnion3527<T, L = LastOf3527<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3527<TuplifyUnion3527<Exclude<T, L>>, L>;

type DeepPartial3527<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3527<T[P]> }
  : T;

type Paths3527<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3527<K, Paths3527<T[K], Prev3527[D]>> : never }[keyof T]
  : never;

type Prev3527 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3527<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3527 {
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

type ConfigPaths3527 = Paths3527<NestedConfig3527>;

interface HeavyProps3527 {
  config: DeepPartial3527<NestedConfig3527>;
  path?: ConfigPaths3527;
}

const HeavyComponent3527 = memo(function HeavyComponent3527({ config }: HeavyProps3527) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3527) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3527 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3527: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3527.displayName = 'HeavyComponent3527';
export default HeavyComponent3527;
