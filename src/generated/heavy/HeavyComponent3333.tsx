'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3333<T> = T extends (infer U)[]
  ? DeepReadonlyArray3333<U>
  : T extends object
  ? DeepReadonlyObject3333<T>
  : T;

interface DeepReadonlyArray3333<T> extends ReadonlyArray<DeepReadonly3333<T>> {}

type DeepReadonlyObject3333<T> = {
  readonly [P in keyof T]: DeepReadonly3333<T[P]>;
};

type UnionToIntersection3333<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3333<T> = UnionToIntersection3333<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3333<T extends unknown[], V> = [...T, V];

type TuplifyUnion3333<T, L = LastOf3333<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3333<TuplifyUnion3333<Exclude<T, L>>, L>;

type DeepPartial3333<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3333<T[P]> }
  : T;

type Paths3333<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3333<K, Paths3333<T[K], Prev3333[D]>> : never }[keyof T]
  : never;

type Prev3333 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3333<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3333 {
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

type ConfigPaths3333 = Paths3333<NestedConfig3333>;

interface HeavyProps3333 {
  config: DeepPartial3333<NestedConfig3333>;
  path?: ConfigPaths3333;
}

const HeavyComponent3333 = memo(function HeavyComponent3333({ config }: HeavyProps3333) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3333) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3333 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3333: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3333.displayName = 'HeavyComponent3333';
export default HeavyComponent3333;
