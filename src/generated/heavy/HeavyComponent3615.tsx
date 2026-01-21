'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3615<T> = T extends (infer U)[]
  ? DeepReadonlyArray3615<U>
  : T extends object
  ? DeepReadonlyObject3615<T>
  : T;

interface DeepReadonlyArray3615<T> extends ReadonlyArray<DeepReadonly3615<T>> {}

type DeepReadonlyObject3615<T> = {
  readonly [P in keyof T]: DeepReadonly3615<T[P]>;
};

type UnionToIntersection3615<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3615<T> = UnionToIntersection3615<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3615<T extends unknown[], V> = [...T, V];

type TuplifyUnion3615<T, L = LastOf3615<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3615<TuplifyUnion3615<Exclude<T, L>>, L>;

type DeepPartial3615<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3615<T[P]> }
  : T;

type Paths3615<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3615<K, Paths3615<T[K], Prev3615[D]>> : never }[keyof T]
  : never;

type Prev3615 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3615<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3615 {
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

type ConfigPaths3615 = Paths3615<NestedConfig3615>;

interface HeavyProps3615 {
  config: DeepPartial3615<NestedConfig3615>;
  path?: ConfigPaths3615;
}

const HeavyComponent3615 = memo(function HeavyComponent3615({ config }: HeavyProps3615) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3615) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3615 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3615: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3615.displayName = 'HeavyComponent3615';
export default HeavyComponent3615;
