'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13177<T> = T extends (infer U)[]
  ? DeepReadonlyArray13177<U>
  : T extends object
  ? DeepReadonlyObject13177<T>
  : T;

interface DeepReadonlyArray13177<T> extends ReadonlyArray<DeepReadonly13177<T>> {}

type DeepReadonlyObject13177<T> = {
  readonly [P in keyof T]: DeepReadonly13177<T[P]>;
};

type UnionToIntersection13177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13177<T> = UnionToIntersection13177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13177<T extends unknown[], V> = [...T, V];

type TuplifyUnion13177<T, L = LastOf13177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13177<TuplifyUnion13177<Exclude<T, L>>, L>;

type DeepPartial13177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13177<T[P]> }
  : T;

type Paths13177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13177<K, Paths13177<T[K], Prev13177[D]>> : never }[keyof T]
  : never;

type Prev13177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13177 {
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

type ConfigPaths13177 = Paths13177<NestedConfig13177>;

interface HeavyProps13177 {
  config: DeepPartial13177<NestedConfig13177>;
  path?: ConfigPaths13177;
}

const HeavyComponent13177 = memo(function HeavyComponent13177({ config }: HeavyProps13177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13177.displayName = 'HeavyComponent13177';
export default HeavyComponent13177;
