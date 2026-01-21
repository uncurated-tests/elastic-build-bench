'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13156<T> = T extends (infer U)[]
  ? DeepReadonlyArray13156<U>
  : T extends object
  ? DeepReadonlyObject13156<T>
  : T;

interface DeepReadonlyArray13156<T> extends ReadonlyArray<DeepReadonly13156<T>> {}

type DeepReadonlyObject13156<T> = {
  readonly [P in keyof T]: DeepReadonly13156<T[P]>;
};

type UnionToIntersection13156<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13156<T> = UnionToIntersection13156<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13156<T extends unknown[], V> = [...T, V];

type TuplifyUnion13156<T, L = LastOf13156<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13156<TuplifyUnion13156<Exclude<T, L>>, L>;

type DeepPartial13156<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13156<T[P]> }
  : T;

type Paths13156<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13156<K, Paths13156<T[K], Prev13156[D]>> : never }[keyof T]
  : never;

type Prev13156 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13156<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13156 {
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

type ConfigPaths13156 = Paths13156<NestedConfig13156>;

interface HeavyProps13156 {
  config: DeepPartial13156<NestedConfig13156>;
  path?: ConfigPaths13156;
}

const HeavyComponent13156 = memo(function HeavyComponent13156({ config }: HeavyProps13156) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13156) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13156 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13156: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13156.displayName = 'HeavyComponent13156';
export default HeavyComponent13156;
