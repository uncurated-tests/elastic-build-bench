'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13142<T> = T extends (infer U)[]
  ? DeepReadonlyArray13142<U>
  : T extends object
  ? DeepReadonlyObject13142<T>
  : T;

interface DeepReadonlyArray13142<T> extends ReadonlyArray<DeepReadonly13142<T>> {}

type DeepReadonlyObject13142<T> = {
  readonly [P in keyof T]: DeepReadonly13142<T[P]>;
};

type UnionToIntersection13142<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13142<T> = UnionToIntersection13142<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13142<T extends unknown[], V> = [...T, V];

type TuplifyUnion13142<T, L = LastOf13142<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13142<TuplifyUnion13142<Exclude<T, L>>, L>;

type DeepPartial13142<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13142<T[P]> }
  : T;

type Paths13142<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13142<K, Paths13142<T[K], Prev13142[D]>> : never }[keyof T]
  : never;

type Prev13142 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13142<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13142 {
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

type ConfigPaths13142 = Paths13142<NestedConfig13142>;

interface HeavyProps13142 {
  config: DeepPartial13142<NestedConfig13142>;
  path?: ConfigPaths13142;
}

const HeavyComponent13142 = memo(function HeavyComponent13142({ config }: HeavyProps13142) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13142) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13142 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13142: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13142.displayName = 'HeavyComponent13142';
export default HeavyComponent13142;
