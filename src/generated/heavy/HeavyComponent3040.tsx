'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3040<T> = T extends (infer U)[]
  ? DeepReadonlyArray3040<U>
  : T extends object
  ? DeepReadonlyObject3040<T>
  : T;

interface DeepReadonlyArray3040<T> extends ReadonlyArray<DeepReadonly3040<T>> {}

type DeepReadonlyObject3040<T> = {
  readonly [P in keyof T]: DeepReadonly3040<T[P]>;
};

type UnionToIntersection3040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3040<T> = UnionToIntersection3040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3040<T extends unknown[], V> = [...T, V];

type TuplifyUnion3040<T, L = LastOf3040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3040<TuplifyUnion3040<Exclude<T, L>>, L>;

type DeepPartial3040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3040<T[P]> }
  : T;

type Paths3040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3040<K, Paths3040<T[K], Prev3040[D]>> : never }[keyof T]
  : never;

type Prev3040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3040 {
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

type ConfigPaths3040 = Paths3040<NestedConfig3040>;

interface HeavyProps3040 {
  config: DeepPartial3040<NestedConfig3040>;
  path?: ConfigPaths3040;
}

const HeavyComponent3040 = memo(function HeavyComponent3040({ config }: HeavyProps3040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3040.displayName = 'HeavyComponent3040';
export default HeavyComponent3040;
