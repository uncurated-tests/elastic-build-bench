'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13046<T> = T extends (infer U)[]
  ? DeepReadonlyArray13046<U>
  : T extends object
  ? DeepReadonlyObject13046<T>
  : T;

interface DeepReadonlyArray13046<T> extends ReadonlyArray<DeepReadonly13046<T>> {}

type DeepReadonlyObject13046<T> = {
  readonly [P in keyof T]: DeepReadonly13046<T[P]>;
};

type UnionToIntersection13046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13046<T> = UnionToIntersection13046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13046<T extends unknown[], V> = [...T, V];

type TuplifyUnion13046<T, L = LastOf13046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13046<TuplifyUnion13046<Exclude<T, L>>, L>;

type DeepPartial13046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13046<T[P]> }
  : T;

type Paths13046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13046<K, Paths13046<T[K], Prev13046[D]>> : never }[keyof T]
  : never;

type Prev13046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13046 {
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

type ConfigPaths13046 = Paths13046<NestedConfig13046>;

interface HeavyProps13046 {
  config: DeepPartial13046<NestedConfig13046>;
  path?: ConfigPaths13046;
}

const HeavyComponent13046 = memo(function HeavyComponent13046({ config }: HeavyProps13046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13046.displayName = 'HeavyComponent13046';
export default HeavyComponent13046;
