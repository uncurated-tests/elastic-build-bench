'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13974<T> = T extends (infer U)[]
  ? DeepReadonlyArray13974<U>
  : T extends object
  ? DeepReadonlyObject13974<T>
  : T;

interface DeepReadonlyArray13974<T> extends ReadonlyArray<DeepReadonly13974<T>> {}

type DeepReadonlyObject13974<T> = {
  readonly [P in keyof T]: DeepReadonly13974<T[P]>;
};

type UnionToIntersection13974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13974<T> = UnionToIntersection13974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13974<T extends unknown[], V> = [...T, V];

type TuplifyUnion13974<T, L = LastOf13974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13974<TuplifyUnion13974<Exclude<T, L>>, L>;

type DeepPartial13974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13974<T[P]> }
  : T;

type Paths13974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13974<K, Paths13974<T[K], Prev13974[D]>> : never }[keyof T]
  : never;

type Prev13974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13974 {
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

type ConfigPaths13974 = Paths13974<NestedConfig13974>;

interface HeavyProps13974 {
  config: DeepPartial13974<NestedConfig13974>;
  path?: ConfigPaths13974;
}

const HeavyComponent13974 = memo(function HeavyComponent13974({ config }: HeavyProps13974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13974.displayName = 'HeavyComponent13974';
export default HeavyComponent13974;
