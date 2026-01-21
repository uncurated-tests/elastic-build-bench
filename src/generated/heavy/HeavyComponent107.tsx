'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly107<T> = T extends (infer U)[]
  ? DeepReadonlyArray107<U>
  : T extends object
  ? DeepReadonlyObject107<T>
  : T;

interface DeepReadonlyArray107<T> extends ReadonlyArray<DeepReadonly107<T>> {}

type DeepReadonlyObject107<T> = {
  readonly [P in keyof T]: DeepReadonly107<T[P]>;
};

type UnionToIntersection107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf107<T> = UnionToIntersection107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push107<T extends unknown[], V> = [...T, V];

type TuplifyUnion107<T, L = LastOf107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push107<TuplifyUnion107<Exclude<T, L>>, L>;

type DeepPartial107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial107<T[P]> }
  : T;

type Paths107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join107<K, Paths107<T[K], Prev107[D]>> : never }[keyof T]
  : never;

type Prev107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig107 {
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

type ConfigPaths107 = Paths107<NestedConfig107>;

interface HeavyProps107 {
  config: DeepPartial107<NestedConfig107>;
  path?: ConfigPaths107;
}

const HeavyComponent107 = memo(function HeavyComponent107({ config }: HeavyProps107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent107.displayName = 'HeavyComponent107';
export default HeavyComponent107;
