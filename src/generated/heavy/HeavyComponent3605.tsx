'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3605<T> = T extends (infer U)[]
  ? DeepReadonlyArray3605<U>
  : T extends object
  ? DeepReadonlyObject3605<T>
  : T;

interface DeepReadonlyArray3605<T> extends ReadonlyArray<DeepReadonly3605<T>> {}

type DeepReadonlyObject3605<T> = {
  readonly [P in keyof T]: DeepReadonly3605<T[P]>;
};

type UnionToIntersection3605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3605<T> = UnionToIntersection3605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3605<T extends unknown[], V> = [...T, V];

type TuplifyUnion3605<T, L = LastOf3605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3605<TuplifyUnion3605<Exclude<T, L>>, L>;

type DeepPartial3605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3605<T[P]> }
  : T;

type Paths3605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3605<K, Paths3605<T[K], Prev3605[D]>> : never }[keyof T]
  : never;

type Prev3605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3605 {
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

type ConfigPaths3605 = Paths3605<NestedConfig3605>;

interface HeavyProps3605 {
  config: DeepPartial3605<NestedConfig3605>;
  path?: ConfigPaths3605;
}

const HeavyComponent3605 = memo(function HeavyComponent3605({ config }: HeavyProps3605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3605.displayName = 'HeavyComponent3605';
export default HeavyComponent3605;
