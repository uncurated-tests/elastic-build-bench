'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13509<T> = T extends (infer U)[]
  ? DeepReadonlyArray13509<U>
  : T extends object
  ? DeepReadonlyObject13509<T>
  : T;

interface DeepReadonlyArray13509<T> extends ReadonlyArray<DeepReadonly13509<T>> {}

type DeepReadonlyObject13509<T> = {
  readonly [P in keyof T]: DeepReadonly13509<T[P]>;
};

type UnionToIntersection13509<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13509<T> = UnionToIntersection13509<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13509<T extends unknown[], V> = [...T, V];

type TuplifyUnion13509<T, L = LastOf13509<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13509<TuplifyUnion13509<Exclude<T, L>>, L>;

type DeepPartial13509<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13509<T[P]> }
  : T;

type Paths13509<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13509<K, Paths13509<T[K], Prev13509[D]>> : never }[keyof T]
  : never;

type Prev13509 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13509<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13509 {
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

type ConfigPaths13509 = Paths13509<NestedConfig13509>;

interface HeavyProps13509 {
  config: DeepPartial13509<NestedConfig13509>;
  path?: ConfigPaths13509;
}

const HeavyComponent13509 = memo(function HeavyComponent13509({ config }: HeavyProps13509) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13509) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13509 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13509: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13509.displayName = 'HeavyComponent13509';
export default HeavyComponent13509;
