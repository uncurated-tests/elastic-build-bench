'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3609<T> = T extends (infer U)[]
  ? DeepReadonlyArray3609<U>
  : T extends object
  ? DeepReadonlyObject3609<T>
  : T;

interface DeepReadonlyArray3609<T> extends ReadonlyArray<DeepReadonly3609<T>> {}

type DeepReadonlyObject3609<T> = {
  readonly [P in keyof T]: DeepReadonly3609<T[P]>;
};

type UnionToIntersection3609<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3609<T> = UnionToIntersection3609<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3609<T extends unknown[], V> = [...T, V];

type TuplifyUnion3609<T, L = LastOf3609<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3609<TuplifyUnion3609<Exclude<T, L>>, L>;

type DeepPartial3609<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3609<T[P]> }
  : T;

type Paths3609<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3609<K, Paths3609<T[K], Prev3609[D]>> : never }[keyof T]
  : never;

type Prev3609 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3609<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3609 {
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

type ConfigPaths3609 = Paths3609<NestedConfig3609>;

interface HeavyProps3609 {
  config: DeepPartial3609<NestedConfig3609>;
  path?: ConfigPaths3609;
}

const HeavyComponent3609 = memo(function HeavyComponent3609({ config }: HeavyProps3609) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3609) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3609 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3609: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3609.displayName = 'HeavyComponent3609';
export default HeavyComponent3609;
