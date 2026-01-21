'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13692<T> = T extends (infer U)[]
  ? DeepReadonlyArray13692<U>
  : T extends object
  ? DeepReadonlyObject13692<T>
  : T;

interface DeepReadonlyArray13692<T> extends ReadonlyArray<DeepReadonly13692<T>> {}

type DeepReadonlyObject13692<T> = {
  readonly [P in keyof T]: DeepReadonly13692<T[P]>;
};

type UnionToIntersection13692<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13692<T> = UnionToIntersection13692<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13692<T extends unknown[], V> = [...T, V];

type TuplifyUnion13692<T, L = LastOf13692<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13692<TuplifyUnion13692<Exclude<T, L>>, L>;

type DeepPartial13692<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13692<T[P]> }
  : T;

type Paths13692<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13692<K, Paths13692<T[K], Prev13692[D]>> : never }[keyof T]
  : never;

type Prev13692 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13692<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13692 {
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

type ConfigPaths13692 = Paths13692<NestedConfig13692>;

interface HeavyProps13692 {
  config: DeepPartial13692<NestedConfig13692>;
  path?: ConfigPaths13692;
}

const HeavyComponent13692 = memo(function HeavyComponent13692({ config }: HeavyProps13692) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13692) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13692 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13692: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13692.displayName = 'HeavyComponent13692';
export default HeavyComponent13692;
