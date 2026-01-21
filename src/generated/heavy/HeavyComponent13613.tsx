'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13613<T> = T extends (infer U)[]
  ? DeepReadonlyArray13613<U>
  : T extends object
  ? DeepReadonlyObject13613<T>
  : T;

interface DeepReadonlyArray13613<T> extends ReadonlyArray<DeepReadonly13613<T>> {}

type DeepReadonlyObject13613<T> = {
  readonly [P in keyof T]: DeepReadonly13613<T[P]>;
};

type UnionToIntersection13613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13613<T> = UnionToIntersection13613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13613<T extends unknown[], V> = [...T, V];

type TuplifyUnion13613<T, L = LastOf13613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13613<TuplifyUnion13613<Exclude<T, L>>, L>;

type DeepPartial13613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13613<T[P]> }
  : T;

type Paths13613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13613<K, Paths13613<T[K], Prev13613[D]>> : never }[keyof T]
  : never;

type Prev13613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13613 {
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

type ConfigPaths13613 = Paths13613<NestedConfig13613>;

interface HeavyProps13613 {
  config: DeepPartial13613<NestedConfig13613>;
  path?: ConfigPaths13613;
}

const HeavyComponent13613 = memo(function HeavyComponent13613({ config }: HeavyProps13613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13613.displayName = 'HeavyComponent13613';
export default HeavyComponent13613;
