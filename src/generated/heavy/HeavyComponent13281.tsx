'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13281<T> = T extends (infer U)[]
  ? DeepReadonlyArray13281<U>
  : T extends object
  ? DeepReadonlyObject13281<T>
  : T;

interface DeepReadonlyArray13281<T> extends ReadonlyArray<DeepReadonly13281<T>> {}

type DeepReadonlyObject13281<T> = {
  readonly [P in keyof T]: DeepReadonly13281<T[P]>;
};

type UnionToIntersection13281<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13281<T> = UnionToIntersection13281<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13281<T extends unknown[], V> = [...T, V];

type TuplifyUnion13281<T, L = LastOf13281<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13281<TuplifyUnion13281<Exclude<T, L>>, L>;

type DeepPartial13281<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13281<T[P]> }
  : T;

type Paths13281<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13281<K, Paths13281<T[K], Prev13281[D]>> : never }[keyof T]
  : never;

type Prev13281 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13281<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13281 {
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

type ConfigPaths13281 = Paths13281<NestedConfig13281>;

interface HeavyProps13281 {
  config: DeepPartial13281<NestedConfig13281>;
  path?: ConfigPaths13281;
}

const HeavyComponent13281 = memo(function HeavyComponent13281({ config }: HeavyProps13281) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13281) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13281 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13281: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13281.displayName = 'HeavyComponent13281';
export default HeavyComponent13281;
