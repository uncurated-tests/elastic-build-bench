'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly412<T> = T extends (infer U)[]
  ? DeepReadonlyArray412<U>
  : T extends object
  ? DeepReadonlyObject412<T>
  : T;

interface DeepReadonlyArray412<T> extends ReadonlyArray<DeepReadonly412<T>> {}

type DeepReadonlyObject412<T> = {
  readonly [P in keyof T]: DeepReadonly412<T[P]>;
};

type UnionToIntersection412<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf412<T> = UnionToIntersection412<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push412<T extends unknown[], V> = [...T, V];

type TuplifyUnion412<T, L = LastOf412<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push412<TuplifyUnion412<Exclude<T, L>>, L>;

type DeepPartial412<T> = T extends object
  ? { [P in keyof T]?: DeepPartial412<T[P]> }
  : T;

type Paths412<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join412<K, Paths412<T[K], Prev412[D]>> : never }[keyof T]
  : never;

type Prev412 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join412<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig412 {
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

type ConfigPaths412 = Paths412<NestedConfig412>;

interface HeavyProps412 {
  config: DeepPartial412<NestedConfig412>;
  path?: ConfigPaths412;
}

const HeavyComponent412 = memo(function HeavyComponent412({ config }: HeavyProps412) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 412) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-412 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H412: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent412.displayName = 'HeavyComponent412';
export default HeavyComponent412;
