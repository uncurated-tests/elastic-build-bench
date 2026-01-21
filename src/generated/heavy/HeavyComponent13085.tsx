'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13085<T> = T extends (infer U)[]
  ? DeepReadonlyArray13085<U>
  : T extends object
  ? DeepReadonlyObject13085<T>
  : T;

interface DeepReadonlyArray13085<T> extends ReadonlyArray<DeepReadonly13085<T>> {}

type DeepReadonlyObject13085<T> = {
  readonly [P in keyof T]: DeepReadonly13085<T[P]>;
};

type UnionToIntersection13085<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13085<T> = UnionToIntersection13085<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13085<T extends unknown[], V> = [...T, V];

type TuplifyUnion13085<T, L = LastOf13085<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13085<TuplifyUnion13085<Exclude<T, L>>, L>;

type DeepPartial13085<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13085<T[P]> }
  : T;

type Paths13085<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13085<K, Paths13085<T[K], Prev13085[D]>> : never }[keyof T]
  : never;

type Prev13085 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13085<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13085 {
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

type ConfigPaths13085 = Paths13085<NestedConfig13085>;

interface HeavyProps13085 {
  config: DeepPartial13085<NestedConfig13085>;
  path?: ConfigPaths13085;
}

const HeavyComponent13085 = memo(function HeavyComponent13085({ config }: HeavyProps13085) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13085) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13085 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13085: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13085.displayName = 'HeavyComponent13085';
export default HeavyComponent13085;
