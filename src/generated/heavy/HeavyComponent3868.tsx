'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3868<T> = T extends (infer U)[]
  ? DeepReadonlyArray3868<U>
  : T extends object
  ? DeepReadonlyObject3868<T>
  : T;

interface DeepReadonlyArray3868<T> extends ReadonlyArray<DeepReadonly3868<T>> {}

type DeepReadonlyObject3868<T> = {
  readonly [P in keyof T]: DeepReadonly3868<T[P]>;
};

type UnionToIntersection3868<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3868<T> = UnionToIntersection3868<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3868<T extends unknown[], V> = [...T, V];

type TuplifyUnion3868<T, L = LastOf3868<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3868<TuplifyUnion3868<Exclude<T, L>>, L>;

type DeepPartial3868<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3868<T[P]> }
  : T;

type Paths3868<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3868<K, Paths3868<T[K], Prev3868[D]>> : never }[keyof T]
  : never;

type Prev3868 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3868<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3868 {
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

type ConfigPaths3868 = Paths3868<NestedConfig3868>;

interface HeavyProps3868 {
  config: DeepPartial3868<NestedConfig3868>;
  path?: ConfigPaths3868;
}

const HeavyComponent3868 = memo(function HeavyComponent3868({ config }: HeavyProps3868) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3868) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3868 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3868: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3868.displayName = 'HeavyComponent3868';
export default HeavyComponent3868;
