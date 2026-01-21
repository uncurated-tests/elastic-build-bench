'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13857<T> = T extends (infer U)[]
  ? DeepReadonlyArray13857<U>
  : T extends object
  ? DeepReadonlyObject13857<T>
  : T;

interface DeepReadonlyArray13857<T> extends ReadonlyArray<DeepReadonly13857<T>> {}

type DeepReadonlyObject13857<T> = {
  readonly [P in keyof T]: DeepReadonly13857<T[P]>;
};

type UnionToIntersection13857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13857<T> = UnionToIntersection13857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13857<T extends unknown[], V> = [...T, V];

type TuplifyUnion13857<T, L = LastOf13857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13857<TuplifyUnion13857<Exclude<T, L>>, L>;

type DeepPartial13857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13857<T[P]> }
  : T;

type Paths13857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13857<K, Paths13857<T[K], Prev13857[D]>> : never }[keyof T]
  : never;

type Prev13857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13857 {
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

type ConfigPaths13857 = Paths13857<NestedConfig13857>;

interface HeavyProps13857 {
  config: DeepPartial13857<NestedConfig13857>;
  path?: ConfigPaths13857;
}

const HeavyComponent13857 = memo(function HeavyComponent13857({ config }: HeavyProps13857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13857.displayName = 'HeavyComponent13857';
export default HeavyComponent13857;
