'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13907<T> = T extends (infer U)[]
  ? DeepReadonlyArray13907<U>
  : T extends object
  ? DeepReadonlyObject13907<T>
  : T;

interface DeepReadonlyArray13907<T> extends ReadonlyArray<DeepReadonly13907<T>> {}

type DeepReadonlyObject13907<T> = {
  readonly [P in keyof T]: DeepReadonly13907<T[P]>;
};

type UnionToIntersection13907<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13907<T> = UnionToIntersection13907<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13907<T extends unknown[], V> = [...T, V];

type TuplifyUnion13907<T, L = LastOf13907<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13907<TuplifyUnion13907<Exclude<T, L>>, L>;

type DeepPartial13907<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13907<T[P]> }
  : T;

type Paths13907<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13907<K, Paths13907<T[K], Prev13907[D]>> : never }[keyof T]
  : never;

type Prev13907 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13907<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13907 {
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

type ConfigPaths13907 = Paths13907<NestedConfig13907>;

interface HeavyProps13907 {
  config: DeepPartial13907<NestedConfig13907>;
  path?: ConfigPaths13907;
}

const HeavyComponent13907 = memo(function HeavyComponent13907({ config }: HeavyProps13907) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13907) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13907 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13907: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13907.displayName = 'HeavyComponent13907';
export default HeavyComponent13907;
