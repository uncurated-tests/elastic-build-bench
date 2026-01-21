'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13856<T> = T extends (infer U)[]
  ? DeepReadonlyArray13856<U>
  : T extends object
  ? DeepReadonlyObject13856<T>
  : T;

interface DeepReadonlyArray13856<T> extends ReadonlyArray<DeepReadonly13856<T>> {}

type DeepReadonlyObject13856<T> = {
  readonly [P in keyof T]: DeepReadonly13856<T[P]>;
};

type UnionToIntersection13856<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13856<T> = UnionToIntersection13856<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13856<T extends unknown[], V> = [...T, V];

type TuplifyUnion13856<T, L = LastOf13856<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13856<TuplifyUnion13856<Exclude<T, L>>, L>;

type DeepPartial13856<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13856<T[P]> }
  : T;

type Paths13856<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13856<K, Paths13856<T[K], Prev13856[D]>> : never }[keyof T]
  : never;

type Prev13856 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13856<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13856 {
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

type ConfigPaths13856 = Paths13856<NestedConfig13856>;

interface HeavyProps13856 {
  config: DeepPartial13856<NestedConfig13856>;
  path?: ConfigPaths13856;
}

const HeavyComponent13856 = memo(function HeavyComponent13856({ config }: HeavyProps13856) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13856) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13856 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13856: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13856.displayName = 'HeavyComponent13856';
export default HeavyComponent13856;
