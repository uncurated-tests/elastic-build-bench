'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3872<T> = T extends (infer U)[]
  ? DeepReadonlyArray3872<U>
  : T extends object
  ? DeepReadonlyObject3872<T>
  : T;

interface DeepReadonlyArray3872<T> extends ReadonlyArray<DeepReadonly3872<T>> {}

type DeepReadonlyObject3872<T> = {
  readonly [P in keyof T]: DeepReadonly3872<T[P]>;
};

type UnionToIntersection3872<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3872<T> = UnionToIntersection3872<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3872<T extends unknown[], V> = [...T, V];

type TuplifyUnion3872<T, L = LastOf3872<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3872<TuplifyUnion3872<Exclude<T, L>>, L>;

type DeepPartial3872<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3872<T[P]> }
  : T;

type Paths3872<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3872<K, Paths3872<T[K], Prev3872[D]>> : never }[keyof T]
  : never;

type Prev3872 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3872<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3872 {
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

type ConfigPaths3872 = Paths3872<NestedConfig3872>;

interface HeavyProps3872 {
  config: DeepPartial3872<NestedConfig3872>;
  path?: ConfigPaths3872;
}

const HeavyComponent3872 = memo(function HeavyComponent3872({ config }: HeavyProps3872) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3872) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3872 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3872: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3872.displayName = 'HeavyComponent3872';
export default HeavyComponent3872;
