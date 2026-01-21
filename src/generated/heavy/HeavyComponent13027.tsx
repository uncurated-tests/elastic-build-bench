'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13027<T> = T extends (infer U)[]
  ? DeepReadonlyArray13027<U>
  : T extends object
  ? DeepReadonlyObject13027<T>
  : T;

interface DeepReadonlyArray13027<T> extends ReadonlyArray<DeepReadonly13027<T>> {}

type DeepReadonlyObject13027<T> = {
  readonly [P in keyof T]: DeepReadonly13027<T[P]>;
};

type UnionToIntersection13027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13027<T> = UnionToIntersection13027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13027<T extends unknown[], V> = [...T, V];

type TuplifyUnion13027<T, L = LastOf13027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13027<TuplifyUnion13027<Exclude<T, L>>, L>;

type DeepPartial13027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13027<T[P]> }
  : T;

type Paths13027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13027<K, Paths13027<T[K], Prev13027[D]>> : never }[keyof T]
  : never;

type Prev13027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13027 {
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

type ConfigPaths13027 = Paths13027<NestedConfig13027>;

interface HeavyProps13027 {
  config: DeepPartial13027<NestedConfig13027>;
  path?: ConfigPaths13027;
}

const HeavyComponent13027 = memo(function HeavyComponent13027({ config }: HeavyProps13027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13027.displayName = 'HeavyComponent13027';
export default HeavyComponent13027;
