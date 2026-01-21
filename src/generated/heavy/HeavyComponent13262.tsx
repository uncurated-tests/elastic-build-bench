'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13262<T> = T extends (infer U)[]
  ? DeepReadonlyArray13262<U>
  : T extends object
  ? DeepReadonlyObject13262<T>
  : T;

interface DeepReadonlyArray13262<T> extends ReadonlyArray<DeepReadonly13262<T>> {}

type DeepReadonlyObject13262<T> = {
  readonly [P in keyof T]: DeepReadonly13262<T[P]>;
};

type UnionToIntersection13262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13262<T> = UnionToIntersection13262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13262<T extends unknown[], V> = [...T, V];

type TuplifyUnion13262<T, L = LastOf13262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13262<TuplifyUnion13262<Exclude<T, L>>, L>;

type DeepPartial13262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13262<T[P]> }
  : T;

type Paths13262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13262<K, Paths13262<T[K], Prev13262[D]>> : never }[keyof T]
  : never;

type Prev13262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13262 {
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

type ConfigPaths13262 = Paths13262<NestedConfig13262>;

interface HeavyProps13262 {
  config: DeepPartial13262<NestedConfig13262>;
  path?: ConfigPaths13262;
}

const HeavyComponent13262 = memo(function HeavyComponent13262({ config }: HeavyProps13262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13262.displayName = 'HeavyComponent13262';
export default HeavyComponent13262;
