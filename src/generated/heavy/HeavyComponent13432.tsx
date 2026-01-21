'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13432<T> = T extends (infer U)[]
  ? DeepReadonlyArray13432<U>
  : T extends object
  ? DeepReadonlyObject13432<T>
  : T;

interface DeepReadonlyArray13432<T> extends ReadonlyArray<DeepReadonly13432<T>> {}

type DeepReadonlyObject13432<T> = {
  readonly [P in keyof T]: DeepReadonly13432<T[P]>;
};

type UnionToIntersection13432<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13432<T> = UnionToIntersection13432<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13432<T extends unknown[], V> = [...T, V];

type TuplifyUnion13432<T, L = LastOf13432<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13432<TuplifyUnion13432<Exclude<T, L>>, L>;

type DeepPartial13432<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13432<T[P]> }
  : T;

type Paths13432<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13432<K, Paths13432<T[K], Prev13432[D]>> : never }[keyof T]
  : never;

type Prev13432 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13432<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13432 {
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

type ConfigPaths13432 = Paths13432<NestedConfig13432>;

interface HeavyProps13432 {
  config: DeepPartial13432<NestedConfig13432>;
  path?: ConfigPaths13432;
}

const HeavyComponent13432 = memo(function HeavyComponent13432({ config }: HeavyProps13432) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13432) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13432 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13432: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13432.displayName = 'HeavyComponent13432';
export default HeavyComponent13432;
