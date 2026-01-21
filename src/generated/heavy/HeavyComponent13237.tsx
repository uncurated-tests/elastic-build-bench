'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13237<T> = T extends (infer U)[]
  ? DeepReadonlyArray13237<U>
  : T extends object
  ? DeepReadonlyObject13237<T>
  : T;

interface DeepReadonlyArray13237<T> extends ReadonlyArray<DeepReadonly13237<T>> {}

type DeepReadonlyObject13237<T> = {
  readonly [P in keyof T]: DeepReadonly13237<T[P]>;
};

type UnionToIntersection13237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13237<T> = UnionToIntersection13237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13237<T extends unknown[], V> = [...T, V];

type TuplifyUnion13237<T, L = LastOf13237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13237<TuplifyUnion13237<Exclude<T, L>>, L>;

type DeepPartial13237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13237<T[P]> }
  : T;

type Paths13237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13237<K, Paths13237<T[K], Prev13237[D]>> : never }[keyof T]
  : never;

type Prev13237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13237 {
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

type ConfigPaths13237 = Paths13237<NestedConfig13237>;

interface HeavyProps13237 {
  config: DeepPartial13237<NestedConfig13237>;
  path?: ConfigPaths13237;
}

const HeavyComponent13237 = memo(function HeavyComponent13237({ config }: HeavyProps13237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13237.displayName = 'HeavyComponent13237';
export default HeavyComponent13237;
