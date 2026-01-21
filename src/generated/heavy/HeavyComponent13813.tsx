'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13813<T> = T extends (infer U)[]
  ? DeepReadonlyArray13813<U>
  : T extends object
  ? DeepReadonlyObject13813<T>
  : T;

interface DeepReadonlyArray13813<T> extends ReadonlyArray<DeepReadonly13813<T>> {}

type DeepReadonlyObject13813<T> = {
  readonly [P in keyof T]: DeepReadonly13813<T[P]>;
};

type UnionToIntersection13813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13813<T> = UnionToIntersection13813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13813<T extends unknown[], V> = [...T, V];

type TuplifyUnion13813<T, L = LastOf13813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13813<TuplifyUnion13813<Exclude<T, L>>, L>;

type DeepPartial13813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13813<T[P]> }
  : T;

type Paths13813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13813<K, Paths13813<T[K], Prev13813[D]>> : never }[keyof T]
  : never;

type Prev13813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13813 {
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

type ConfigPaths13813 = Paths13813<NestedConfig13813>;

interface HeavyProps13813 {
  config: DeepPartial13813<NestedConfig13813>;
  path?: ConfigPaths13813;
}

const HeavyComponent13813 = memo(function HeavyComponent13813({ config }: HeavyProps13813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13813.displayName = 'HeavyComponent13813';
export default HeavyComponent13813;
