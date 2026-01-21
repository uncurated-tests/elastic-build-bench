'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3777<T> = T extends (infer U)[]
  ? DeepReadonlyArray3777<U>
  : T extends object
  ? DeepReadonlyObject3777<T>
  : T;

interface DeepReadonlyArray3777<T> extends ReadonlyArray<DeepReadonly3777<T>> {}

type DeepReadonlyObject3777<T> = {
  readonly [P in keyof T]: DeepReadonly3777<T[P]>;
};

type UnionToIntersection3777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3777<T> = UnionToIntersection3777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3777<T extends unknown[], V> = [...T, V];

type TuplifyUnion3777<T, L = LastOf3777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3777<TuplifyUnion3777<Exclude<T, L>>, L>;

type DeepPartial3777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3777<T[P]> }
  : T;

type Paths3777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3777<K, Paths3777<T[K], Prev3777[D]>> : never }[keyof T]
  : never;

type Prev3777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3777 {
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

type ConfigPaths3777 = Paths3777<NestedConfig3777>;

interface HeavyProps3777 {
  config: DeepPartial3777<NestedConfig3777>;
  path?: ConfigPaths3777;
}

const HeavyComponent3777 = memo(function HeavyComponent3777({ config }: HeavyProps3777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3777.displayName = 'HeavyComponent3777';
export default HeavyComponent3777;
