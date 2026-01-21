'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13720<T> = T extends (infer U)[]
  ? DeepReadonlyArray13720<U>
  : T extends object
  ? DeepReadonlyObject13720<T>
  : T;

interface DeepReadonlyArray13720<T> extends ReadonlyArray<DeepReadonly13720<T>> {}

type DeepReadonlyObject13720<T> = {
  readonly [P in keyof T]: DeepReadonly13720<T[P]>;
};

type UnionToIntersection13720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13720<T> = UnionToIntersection13720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13720<T extends unknown[], V> = [...T, V];

type TuplifyUnion13720<T, L = LastOf13720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13720<TuplifyUnion13720<Exclude<T, L>>, L>;

type DeepPartial13720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13720<T[P]> }
  : T;

type Paths13720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13720<K, Paths13720<T[K], Prev13720[D]>> : never }[keyof T]
  : never;

type Prev13720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13720 {
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

type ConfigPaths13720 = Paths13720<NestedConfig13720>;

interface HeavyProps13720 {
  config: DeepPartial13720<NestedConfig13720>;
  path?: ConfigPaths13720;
}

const HeavyComponent13720 = memo(function HeavyComponent13720({ config }: HeavyProps13720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13720.displayName = 'HeavyComponent13720';
export default HeavyComponent13720;
