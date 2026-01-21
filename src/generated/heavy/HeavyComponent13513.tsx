'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13513<T> = T extends (infer U)[]
  ? DeepReadonlyArray13513<U>
  : T extends object
  ? DeepReadonlyObject13513<T>
  : T;

interface DeepReadonlyArray13513<T> extends ReadonlyArray<DeepReadonly13513<T>> {}

type DeepReadonlyObject13513<T> = {
  readonly [P in keyof T]: DeepReadonly13513<T[P]>;
};

type UnionToIntersection13513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13513<T> = UnionToIntersection13513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13513<T extends unknown[], V> = [...T, V];

type TuplifyUnion13513<T, L = LastOf13513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13513<TuplifyUnion13513<Exclude<T, L>>, L>;

type DeepPartial13513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13513<T[P]> }
  : T;

type Paths13513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13513<K, Paths13513<T[K], Prev13513[D]>> : never }[keyof T]
  : never;

type Prev13513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13513 {
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

type ConfigPaths13513 = Paths13513<NestedConfig13513>;

interface HeavyProps13513 {
  config: DeepPartial13513<NestedConfig13513>;
  path?: ConfigPaths13513;
}

const HeavyComponent13513 = memo(function HeavyComponent13513({ config }: HeavyProps13513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13513.displayName = 'HeavyComponent13513';
export default HeavyComponent13513;
