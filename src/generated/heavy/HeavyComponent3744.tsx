'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3744<T> = T extends (infer U)[]
  ? DeepReadonlyArray3744<U>
  : T extends object
  ? DeepReadonlyObject3744<T>
  : T;

interface DeepReadonlyArray3744<T> extends ReadonlyArray<DeepReadonly3744<T>> {}

type DeepReadonlyObject3744<T> = {
  readonly [P in keyof T]: DeepReadonly3744<T[P]>;
};

type UnionToIntersection3744<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3744<T> = UnionToIntersection3744<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3744<T extends unknown[], V> = [...T, V];

type TuplifyUnion3744<T, L = LastOf3744<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3744<TuplifyUnion3744<Exclude<T, L>>, L>;

type DeepPartial3744<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3744<T[P]> }
  : T;

type Paths3744<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3744<K, Paths3744<T[K], Prev3744[D]>> : never }[keyof T]
  : never;

type Prev3744 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3744<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3744 {
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

type ConfigPaths3744 = Paths3744<NestedConfig3744>;

interface HeavyProps3744 {
  config: DeepPartial3744<NestedConfig3744>;
  path?: ConfigPaths3744;
}

const HeavyComponent3744 = memo(function HeavyComponent3744({ config }: HeavyProps3744) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3744) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3744 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3744: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3744.displayName = 'HeavyComponent3744';
export default HeavyComponent3744;
