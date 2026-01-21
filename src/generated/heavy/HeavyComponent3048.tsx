'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3048<T> = T extends (infer U)[]
  ? DeepReadonlyArray3048<U>
  : T extends object
  ? DeepReadonlyObject3048<T>
  : T;

interface DeepReadonlyArray3048<T> extends ReadonlyArray<DeepReadonly3048<T>> {}

type DeepReadonlyObject3048<T> = {
  readonly [P in keyof T]: DeepReadonly3048<T[P]>;
};

type UnionToIntersection3048<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3048<T> = UnionToIntersection3048<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3048<T extends unknown[], V> = [...T, V];

type TuplifyUnion3048<T, L = LastOf3048<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3048<TuplifyUnion3048<Exclude<T, L>>, L>;

type DeepPartial3048<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3048<T[P]> }
  : T;

type Paths3048<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3048<K, Paths3048<T[K], Prev3048[D]>> : never }[keyof T]
  : never;

type Prev3048 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3048<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3048 {
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

type ConfigPaths3048 = Paths3048<NestedConfig3048>;

interface HeavyProps3048 {
  config: DeepPartial3048<NestedConfig3048>;
  path?: ConfigPaths3048;
}

const HeavyComponent3048 = memo(function HeavyComponent3048({ config }: HeavyProps3048) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3048) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3048 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3048: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3048.displayName = 'HeavyComponent3048';
export default HeavyComponent3048;
