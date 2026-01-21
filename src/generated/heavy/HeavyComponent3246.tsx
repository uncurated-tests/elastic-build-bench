'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3246<T> = T extends (infer U)[]
  ? DeepReadonlyArray3246<U>
  : T extends object
  ? DeepReadonlyObject3246<T>
  : T;

interface DeepReadonlyArray3246<T> extends ReadonlyArray<DeepReadonly3246<T>> {}

type DeepReadonlyObject3246<T> = {
  readonly [P in keyof T]: DeepReadonly3246<T[P]>;
};

type UnionToIntersection3246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3246<T> = UnionToIntersection3246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3246<T extends unknown[], V> = [...T, V];

type TuplifyUnion3246<T, L = LastOf3246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3246<TuplifyUnion3246<Exclude<T, L>>, L>;

type DeepPartial3246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3246<T[P]> }
  : T;

type Paths3246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3246<K, Paths3246<T[K], Prev3246[D]>> : never }[keyof T]
  : never;

type Prev3246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3246 {
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

type ConfigPaths3246 = Paths3246<NestedConfig3246>;

interface HeavyProps3246 {
  config: DeepPartial3246<NestedConfig3246>;
  path?: ConfigPaths3246;
}

const HeavyComponent3246 = memo(function HeavyComponent3246({ config }: HeavyProps3246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3246.displayName = 'HeavyComponent3246';
export default HeavyComponent3246;
