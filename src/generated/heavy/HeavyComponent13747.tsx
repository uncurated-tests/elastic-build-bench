'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13747<T> = T extends (infer U)[]
  ? DeepReadonlyArray13747<U>
  : T extends object
  ? DeepReadonlyObject13747<T>
  : T;

interface DeepReadonlyArray13747<T> extends ReadonlyArray<DeepReadonly13747<T>> {}

type DeepReadonlyObject13747<T> = {
  readonly [P in keyof T]: DeepReadonly13747<T[P]>;
};

type UnionToIntersection13747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13747<T> = UnionToIntersection13747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13747<T extends unknown[], V> = [...T, V];

type TuplifyUnion13747<T, L = LastOf13747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13747<TuplifyUnion13747<Exclude<T, L>>, L>;

type DeepPartial13747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13747<T[P]> }
  : T;

type Paths13747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13747<K, Paths13747<T[K], Prev13747[D]>> : never }[keyof T]
  : never;

type Prev13747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13747 {
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

type ConfigPaths13747 = Paths13747<NestedConfig13747>;

interface HeavyProps13747 {
  config: DeepPartial13747<NestedConfig13747>;
  path?: ConfigPaths13747;
}

const HeavyComponent13747 = memo(function HeavyComponent13747({ config }: HeavyProps13747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13747.displayName = 'HeavyComponent13747';
export default HeavyComponent13747;
