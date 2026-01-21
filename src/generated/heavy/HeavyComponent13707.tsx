'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13707<T> = T extends (infer U)[]
  ? DeepReadonlyArray13707<U>
  : T extends object
  ? DeepReadonlyObject13707<T>
  : T;

interface DeepReadonlyArray13707<T> extends ReadonlyArray<DeepReadonly13707<T>> {}

type DeepReadonlyObject13707<T> = {
  readonly [P in keyof T]: DeepReadonly13707<T[P]>;
};

type UnionToIntersection13707<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13707<T> = UnionToIntersection13707<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13707<T extends unknown[], V> = [...T, V];

type TuplifyUnion13707<T, L = LastOf13707<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13707<TuplifyUnion13707<Exclude<T, L>>, L>;

type DeepPartial13707<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13707<T[P]> }
  : T;

type Paths13707<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13707<K, Paths13707<T[K], Prev13707[D]>> : never }[keyof T]
  : never;

type Prev13707 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13707<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13707 {
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

type ConfigPaths13707 = Paths13707<NestedConfig13707>;

interface HeavyProps13707 {
  config: DeepPartial13707<NestedConfig13707>;
  path?: ConfigPaths13707;
}

const HeavyComponent13707 = memo(function HeavyComponent13707({ config }: HeavyProps13707) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13707) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13707 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13707: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13707.displayName = 'HeavyComponent13707';
export default HeavyComponent13707;
