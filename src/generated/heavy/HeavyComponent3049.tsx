'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3049<T> = T extends (infer U)[]
  ? DeepReadonlyArray3049<U>
  : T extends object
  ? DeepReadonlyObject3049<T>
  : T;

interface DeepReadonlyArray3049<T> extends ReadonlyArray<DeepReadonly3049<T>> {}

type DeepReadonlyObject3049<T> = {
  readonly [P in keyof T]: DeepReadonly3049<T[P]>;
};

type UnionToIntersection3049<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3049<T> = UnionToIntersection3049<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3049<T extends unknown[], V> = [...T, V];

type TuplifyUnion3049<T, L = LastOf3049<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3049<TuplifyUnion3049<Exclude<T, L>>, L>;

type DeepPartial3049<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3049<T[P]> }
  : T;

type Paths3049<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3049<K, Paths3049<T[K], Prev3049[D]>> : never }[keyof T]
  : never;

type Prev3049 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3049<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3049 {
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

type ConfigPaths3049 = Paths3049<NestedConfig3049>;

interface HeavyProps3049 {
  config: DeepPartial3049<NestedConfig3049>;
  path?: ConfigPaths3049;
}

const HeavyComponent3049 = memo(function HeavyComponent3049({ config }: HeavyProps3049) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3049) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3049 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3049: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3049.displayName = 'HeavyComponent3049';
export default HeavyComponent3049;
