'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3481<T> = T extends (infer U)[]
  ? DeepReadonlyArray3481<U>
  : T extends object
  ? DeepReadonlyObject3481<T>
  : T;

interface DeepReadonlyArray3481<T> extends ReadonlyArray<DeepReadonly3481<T>> {}

type DeepReadonlyObject3481<T> = {
  readonly [P in keyof T]: DeepReadonly3481<T[P]>;
};

type UnionToIntersection3481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3481<T> = UnionToIntersection3481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3481<T extends unknown[], V> = [...T, V];

type TuplifyUnion3481<T, L = LastOf3481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3481<TuplifyUnion3481<Exclude<T, L>>, L>;

type DeepPartial3481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3481<T[P]> }
  : T;

type Paths3481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3481<K, Paths3481<T[K], Prev3481[D]>> : never }[keyof T]
  : never;

type Prev3481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3481 {
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

type ConfigPaths3481 = Paths3481<NestedConfig3481>;

interface HeavyProps3481 {
  config: DeepPartial3481<NestedConfig3481>;
  path?: ConfigPaths3481;
}

const HeavyComponent3481 = memo(function HeavyComponent3481({ config }: HeavyProps3481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3481.displayName = 'HeavyComponent3481';
export default HeavyComponent3481;
