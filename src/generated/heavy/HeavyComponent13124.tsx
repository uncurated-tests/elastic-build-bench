'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13124<T> = T extends (infer U)[]
  ? DeepReadonlyArray13124<U>
  : T extends object
  ? DeepReadonlyObject13124<T>
  : T;

interface DeepReadonlyArray13124<T> extends ReadonlyArray<DeepReadonly13124<T>> {}

type DeepReadonlyObject13124<T> = {
  readonly [P in keyof T]: DeepReadonly13124<T[P]>;
};

type UnionToIntersection13124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13124<T> = UnionToIntersection13124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13124<T extends unknown[], V> = [...T, V];

type TuplifyUnion13124<T, L = LastOf13124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13124<TuplifyUnion13124<Exclude<T, L>>, L>;

type DeepPartial13124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13124<T[P]> }
  : T;

type Paths13124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13124<K, Paths13124<T[K], Prev13124[D]>> : never }[keyof T]
  : never;

type Prev13124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13124 {
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

type ConfigPaths13124 = Paths13124<NestedConfig13124>;

interface HeavyProps13124 {
  config: DeepPartial13124<NestedConfig13124>;
  path?: ConfigPaths13124;
}

const HeavyComponent13124 = memo(function HeavyComponent13124({ config }: HeavyProps13124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13124.displayName = 'HeavyComponent13124';
export default HeavyComponent13124;
