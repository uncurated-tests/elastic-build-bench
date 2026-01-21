'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13632<T> = T extends (infer U)[]
  ? DeepReadonlyArray13632<U>
  : T extends object
  ? DeepReadonlyObject13632<T>
  : T;

interface DeepReadonlyArray13632<T> extends ReadonlyArray<DeepReadonly13632<T>> {}

type DeepReadonlyObject13632<T> = {
  readonly [P in keyof T]: DeepReadonly13632<T[P]>;
};

type UnionToIntersection13632<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13632<T> = UnionToIntersection13632<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13632<T extends unknown[], V> = [...T, V];

type TuplifyUnion13632<T, L = LastOf13632<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13632<TuplifyUnion13632<Exclude<T, L>>, L>;

type DeepPartial13632<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13632<T[P]> }
  : T;

type Paths13632<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13632<K, Paths13632<T[K], Prev13632[D]>> : never }[keyof T]
  : never;

type Prev13632 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13632<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13632 {
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

type ConfigPaths13632 = Paths13632<NestedConfig13632>;

interface HeavyProps13632 {
  config: DeepPartial13632<NestedConfig13632>;
  path?: ConfigPaths13632;
}

const HeavyComponent13632 = memo(function HeavyComponent13632({ config }: HeavyProps13632) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13632) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13632 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13632: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13632.displayName = 'HeavyComponent13632';
export default HeavyComponent13632;
