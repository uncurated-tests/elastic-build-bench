'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13389<T> = T extends (infer U)[]
  ? DeepReadonlyArray13389<U>
  : T extends object
  ? DeepReadonlyObject13389<T>
  : T;

interface DeepReadonlyArray13389<T> extends ReadonlyArray<DeepReadonly13389<T>> {}

type DeepReadonlyObject13389<T> = {
  readonly [P in keyof T]: DeepReadonly13389<T[P]>;
};

type UnionToIntersection13389<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13389<T> = UnionToIntersection13389<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13389<T extends unknown[], V> = [...T, V];

type TuplifyUnion13389<T, L = LastOf13389<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13389<TuplifyUnion13389<Exclude<T, L>>, L>;

type DeepPartial13389<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13389<T[P]> }
  : T;

type Paths13389<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13389<K, Paths13389<T[K], Prev13389[D]>> : never }[keyof T]
  : never;

type Prev13389 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13389<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13389 {
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

type ConfigPaths13389 = Paths13389<NestedConfig13389>;

interface HeavyProps13389 {
  config: DeepPartial13389<NestedConfig13389>;
  path?: ConfigPaths13389;
}

const HeavyComponent13389 = memo(function HeavyComponent13389({ config }: HeavyProps13389) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13389) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13389 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13389: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13389.displayName = 'HeavyComponent13389';
export default HeavyComponent13389;
