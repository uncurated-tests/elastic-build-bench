'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13976<T> = T extends (infer U)[]
  ? DeepReadonlyArray13976<U>
  : T extends object
  ? DeepReadonlyObject13976<T>
  : T;

interface DeepReadonlyArray13976<T> extends ReadonlyArray<DeepReadonly13976<T>> {}

type DeepReadonlyObject13976<T> = {
  readonly [P in keyof T]: DeepReadonly13976<T[P]>;
};

type UnionToIntersection13976<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13976<T> = UnionToIntersection13976<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13976<T extends unknown[], V> = [...T, V];

type TuplifyUnion13976<T, L = LastOf13976<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13976<TuplifyUnion13976<Exclude<T, L>>, L>;

type DeepPartial13976<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13976<T[P]> }
  : T;

type Paths13976<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13976<K, Paths13976<T[K], Prev13976[D]>> : never }[keyof T]
  : never;

type Prev13976 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13976<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13976 {
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

type ConfigPaths13976 = Paths13976<NestedConfig13976>;

interface HeavyProps13976 {
  config: DeepPartial13976<NestedConfig13976>;
  path?: ConfigPaths13976;
}

const HeavyComponent13976 = memo(function HeavyComponent13976({ config }: HeavyProps13976) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13976) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13976 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13976: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13976.displayName = 'HeavyComponent13976';
export default HeavyComponent13976;
