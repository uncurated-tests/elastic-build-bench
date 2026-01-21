'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13970<T> = T extends (infer U)[]
  ? DeepReadonlyArray13970<U>
  : T extends object
  ? DeepReadonlyObject13970<T>
  : T;

interface DeepReadonlyArray13970<T> extends ReadonlyArray<DeepReadonly13970<T>> {}

type DeepReadonlyObject13970<T> = {
  readonly [P in keyof T]: DeepReadonly13970<T[P]>;
};

type UnionToIntersection13970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13970<T> = UnionToIntersection13970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13970<T extends unknown[], V> = [...T, V];

type TuplifyUnion13970<T, L = LastOf13970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13970<TuplifyUnion13970<Exclude<T, L>>, L>;

type DeepPartial13970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13970<T[P]> }
  : T;

type Paths13970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13970<K, Paths13970<T[K], Prev13970[D]>> : never }[keyof T]
  : never;

type Prev13970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13970 {
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

type ConfigPaths13970 = Paths13970<NestedConfig13970>;

interface HeavyProps13970 {
  config: DeepPartial13970<NestedConfig13970>;
  path?: ConfigPaths13970;
}

const HeavyComponent13970 = memo(function HeavyComponent13970({ config }: HeavyProps13970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13970.displayName = 'HeavyComponent13970';
export default HeavyComponent13970;
