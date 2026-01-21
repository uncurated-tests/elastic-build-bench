'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13342<T> = T extends (infer U)[]
  ? DeepReadonlyArray13342<U>
  : T extends object
  ? DeepReadonlyObject13342<T>
  : T;

interface DeepReadonlyArray13342<T> extends ReadonlyArray<DeepReadonly13342<T>> {}

type DeepReadonlyObject13342<T> = {
  readonly [P in keyof T]: DeepReadonly13342<T[P]>;
};

type UnionToIntersection13342<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13342<T> = UnionToIntersection13342<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13342<T extends unknown[], V> = [...T, V];

type TuplifyUnion13342<T, L = LastOf13342<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13342<TuplifyUnion13342<Exclude<T, L>>, L>;

type DeepPartial13342<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13342<T[P]> }
  : T;

type Paths13342<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13342<K, Paths13342<T[K], Prev13342[D]>> : never }[keyof T]
  : never;

type Prev13342 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13342<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13342 {
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

type ConfigPaths13342 = Paths13342<NestedConfig13342>;

interface HeavyProps13342 {
  config: DeepPartial13342<NestedConfig13342>;
  path?: ConfigPaths13342;
}

const HeavyComponent13342 = memo(function HeavyComponent13342({ config }: HeavyProps13342) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13342) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13342 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13342: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13342.displayName = 'HeavyComponent13342';
export default HeavyComponent13342;
