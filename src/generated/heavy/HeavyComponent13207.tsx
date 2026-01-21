'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13207<T> = T extends (infer U)[]
  ? DeepReadonlyArray13207<U>
  : T extends object
  ? DeepReadonlyObject13207<T>
  : T;

interface DeepReadonlyArray13207<T> extends ReadonlyArray<DeepReadonly13207<T>> {}

type DeepReadonlyObject13207<T> = {
  readonly [P in keyof T]: DeepReadonly13207<T[P]>;
};

type UnionToIntersection13207<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13207<T> = UnionToIntersection13207<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13207<T extends unknown[], V> = [...T, V];

type TuplifyUnion13207<T, L = LastOf13207<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13207<TuplifyUnion13207<Exclude<T, L>>, L>;

type DeepPartial13207<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13207<T[P]> }
  : T;

type Paths13207<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13207<K, Paths13207<T[K], Prev13207[D]>> : never }[keyof T]
  : never;

type Prev13207 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13207<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13207 {
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

type ConfigPaths13207 = Paths13207<NestedConfig13207>;

interface HeavyProps13207 {
  config: DeepPartial13207<NestedConfig13207>;
  path?: ConfigPaths13207;
}

const HeavyComponent13207 = memo(function HeavyComponent13207({ config }: HeavyProps13207) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13207) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13207 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13207: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13207.displayName = 'HeavyComponent13207';
export default HeavyComponent13207;
