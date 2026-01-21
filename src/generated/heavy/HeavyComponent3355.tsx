'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3355<T> = T extends (infer U)[]
  ? DeepReadonlyArray3355<U>
  : T extends object
  ? DeepReadonlyObject3355<T>
  : T;

interface DeepReadonlyArray3355<T> extends ReadonlyArray<DeepReadonly3355<T>> {}

type DeepReadonlyObject3355<T> = {
  readonly [P in keyof T]: DeepReadonly3355<T[P]>;
};

type UnionToIntersection3355<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3355<T> = UnionToIntersection3355<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3355<T extends unknown[], V> = [...T, V];

type TuplifyUnion3355<T, L = LastOf3355<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3355<TuplifyUnion3355<Exclude<T, L>>, L>;

type DeepPartial3355<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3355<T[P]> }
  : T;

type Paths3355<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3355<K, Paths3355<T[K], Prev3355[D]>> : never }[keyof T]
  : never;

type Prev3355 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3355<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3355 {
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

type ConfigPaths3355 = Paths3355<NestedConfig3355>;

interface HeavyProps3355 {
  config: DeepPartial3355<NestedConfig3355>;
  path?: ConfigPaths3355;
}

const HeavyComponent3355 = memo(function HeavyComponent3355({ config }: HeavyProps3355) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3355) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3355 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3355: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3355.displayName = 'HeavyComponent3355';
export default HeavyComponent3355;
