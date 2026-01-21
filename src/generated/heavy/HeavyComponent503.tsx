'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly503<T> = T extends (infer U)[]
  ? DeepReadonlyArray503<U>
  : T extends object
  ? DeepReadonlyObject503<T>
  : T;

interface DeepReadonlyArray503<T> extends ReadonlyArray<DeepReadonly503<T>> {}

type DeepReadonlyObject503<T> = {
  readonly [P in keyof T]: DeepReadonly503<T[P]>;
};

type UnionToIntersection503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf503<T> = UnionToIntersection503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push503<T extends unknown[], V> = [...T, V];

type TuplifyUnion503<T, L = LastOf503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push503<TuplifyUnion503<Exclude<T, L>>, L>;

type DeepPartial503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial503<T[P]> }
  : T;

type Paths503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join503<K, Paths503<T[K], Prev503[D]>> : never }[keyof T]
  : never;

type Prev503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig503 {
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

type ConfigPaths503 = Paths503<NestedConfig503>;

interface HeavyProps503 {
  config: DeepPartial503<NestedConfig503>;
  path?: ConfigPaths503;
}

const HeavyComponent503 = memo(function HeavyComponent503({ config }: HeavyProps503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent503.displayName = 'HeavyComponent503';
export default HeavyComponent503;
