'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13845<T> = T extends (infer U)[]
  ? DeepReadonlyArray13845<U>
  : T extends object
  ? DeepReadonlyObject13845<T>
  : T;

interface DeepReadonlyArray13845<T> extends ReadonlyArray<DeepReadonly13845<T>> {}

type DeepReadonlyObject13845<T> = {
  readonly [P in keyof T]: DeepReadonly13845<T[P]>;
};

type UnionToIntersection13845<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13845<T> = UnionToIntersection13845<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13845<T extends unknown[], V> = [...T, V];

type TuplifyUnion13845<T, L = LastOf13845<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13845<TuplifyUnion13845<Exclude<T, L>>, L>;

type DeepPartial13845<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13845<T[P]> }
  : T;

type Paths13845<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13845<K, Paths13845<T[K], Prev13845[D]>> : never }[keyof T]
  : never;

type Prev13845 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13845<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13845 {
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

type ConfigPaths13845 = Paths13845<NestedConfig13845>;

interface HeavyProps13845 {
  config: DeepPartial13845<NestedConfig13845>;
  path?: ConfigPaths13845;
}

const HeavyComponent13845 = memo(function HeavyComponent13845({ config }: HeavyProps13845) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13845) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13845 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13845: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13845.displayName = 'HeavyComponent13845';
export default HeavyComponent13845;
