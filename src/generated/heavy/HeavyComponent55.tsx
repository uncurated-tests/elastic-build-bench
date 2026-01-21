'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly55<T> = T extends (infer U)[]
  ? DeepReadonlyArray55<U>
  : T extends object
  ? DeepReadonlyObject55<T>
  : T;

interface DeepReadonlyArray55<T> extends ReadonlyArray<DeepReadonly55<T>> {}

type DeepReadonlyObject55<T> = {
  readonly [P in keyof T]: DeepReadonly55<T[P]>;
};

type UnionToIntersection55<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf55<T> = UnionToIntersection55<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push55<T extends unknown[], V> = [...T, V];

type TuplifyUnion55<T, L = LastOf55<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push55<TuplifyUnion55<Exclude<T, L>>, L>;

type DeepPartial55<T> = T extends object
  ? { [P in keyof T]?: DeepPartial55<T[P]> }
  : T;

type Paths55<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join55<K, Paths55<T[K], Prev55[D]>> : never }[keyof T]
  : never;

type Prev55 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join55<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig55 {
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

type ConfigPaths55 = Paths55<NestedConfig55>;

interface HeavyProps55 {
  config: DeepPartial55<NestedConfig55>;
  path?: ConfigPaths55;
}

const HeavyComponent55 = memo(function HeavyComponent55({ config }: HeavyProps55) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 55) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-55 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H55: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent55.displayName = 'HeavyComponent55';
export default HeavyComponent55;
