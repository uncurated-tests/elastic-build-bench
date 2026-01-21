'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3666<T> = T extends (infer U)[]
  ? DeepReadonlyArray3666<U>
  : T extends object
  ? DeepReadonlyObject3666<T>
  : T;

interface DeepReadonlyArray3666<T> extends ReadonlyArray<DeepReadonly3666<T>> {}

type DeepReadonlyObject3666<T> = {
  readonly [P in keyof T]: DeepReadonly3666<T[P]>;
};

type UnionToIntersection3666<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3666<T> = UnionToIntersection3666<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3666<T extends unknown[], V> = [...T, V];

type TuplifyUnion3666<T, L = LastOf3666<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3666<TuplifyUnion3666<Exclude<T, L>>, L>;

type DeepPartial3666<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3666<T[P]> }
  : T;

type Paths3666<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3666<K, Paths3666<T[K], Prev3666[D]>> : never }[keyof T]
  : never;

type Prev3666 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3666<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3666 {
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

type ConfigPaths3666 = Paths3666<NestedConfig3666>;

interface HeavyProps3666 {
  config: DeepPartial3666<NestedConfig3666>;
  path?: ConfigPaths3666;
}

const HeavyComponent3666 = memo(function HeavyComponent3666({ config }: HeavyProps3666) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3666) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3666 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3666: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3666.displayName = 'HeavyComponent3666';
export default HeavyComponent3666;
