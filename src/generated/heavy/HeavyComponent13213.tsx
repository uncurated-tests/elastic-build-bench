'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13213<T> = T extends (infer U)[]
  ? DeepReadonlyArray13213<U>
  : T extends object
  ? DeepReadonlyObject13213<T>
  : T;

interface DeepReadonlyArray13213<T> extends ReadonlyArray<DeepReadonly13213<T>> {}

type DeepReadonlyObject13213<T> = {
  readonly [P in keyof T]: DeepReadonly13213<T[P]>;
};

type UnionToIntersection13213<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13213<T> = UnionToIntersection13213<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13213<T extends unknown[], V> = [...T, V];

type TuplifyUnion13213<T, L = LastOf13213<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13213<TuplifyUnion13213<Exclude<T, L>>, L>;

type DeepPartial13213<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13213<T[P]> }
  : T;

type Paths13213<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13213<K, Paths13213<T[K], Prev13213[D]>> : never }[keyof T]
  : never;

type Prev13213 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13213<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13213 {
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

type ConfigPaths13213 = Paths13213<NestedConfig13213>;

interface HeavyProps13213 {
  config: DeepPartial13213<NestedConfig13213>;
  path?: ConfigPaths13213;
}

const HeavyComponent13213 = memo(function HeavyComponent13213({ config }: HeavyProps13213) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13213) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13213 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13213: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13213.displayName = 'HeavyComponent13213';
export default HeavyComponent13213;
