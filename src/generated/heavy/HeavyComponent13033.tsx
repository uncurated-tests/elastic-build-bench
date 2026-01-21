'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13033<T> = T extends (infer U)[]
  ? DeepReadonlyArray13033<U>
  : T extends object
  ? DeepReadonlyObject13033<T>
  : T;

interface DeepReadonlyArray13033<T> extends ReadonlyArray<DeepReadonly13033<T>> {}

type DeepReadonlyObject13033<T> = {
  readonly [P in keyof T]: DeepReadonly13033<T[P]>;
};

type UnionToIntersection13033<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13033<T> = UnionToIntersection13033<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13033<T extends unknown[], V> = [...T, V];

type TuplifyUnion13033<T, L = LastOf13033<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13033<TuplifyUnion13033<Exclude<T, L>>, L>;

type DeepPartial13033<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13033<T[P]> }
  : T;

type Paths13033<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13033<K, Paths13033<T[K], Prev13033[D]>> : never }[keyof T]
  : never;

type Prev13033 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13033<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13033 {
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

type ConfigPaths13033 = Paths13033<NestedConfig13033>;

interface HeavyProps13033 {
  config: DeepPartial13033<NestedConfig13033>;
  path?: ConfigPaths13033;
}

const HeavyComponent13033 = memo(function HeavyComponent13033({ config }: HeavyProps13033) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13033) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13033 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13033: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13033.displayName = 'HeavyComponent13033';
export default HeavyComponent13033;
