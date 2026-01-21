'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13408<T> = T extends (infer U)[]
  ? DeepReadonlyArray13408<U>
  : T extends object
  ? DeepReadonlyObject13408<T>
  : T;

interface DeepReadonlyArray13408<T> extends ReadonlyArray<DeepReadonly13408<T>> {}

type DeepReadonlyObject13408<T> = {
  readonly [P in keyof T]: DeepReadonly13408<T[P]>;
};

type UnionToIntersection13408<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13408<T> = UnionToIntersection13408<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13408<T extends unknown[], V> = [...T, V];

type TuplifyUnion13408<T, L = LastOf13408<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13408<TuplifyUnion13408<Exclude<T, L>>, L>;

type DeepPartial13408<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13408<T[P]> }
  : T;

type Paths13408<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13408<K, Paths13408<T[K], Prev13408[D]>> : never }[keyof T]
  : never;

type Prev13408 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13408<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13408 {
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

type ConfigPaths13408 = Paths13408<NestedConfig13408>;

interface HeavyProps13408 {
  config: DeepPartial13408<NestedConfig13408>;
  path?: ConfigPaths13408;
}

const HeavyComponent13408 = memo(function HeavyComponent13408({ config }: HeavyProps13408) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13408) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13408 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13408: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13408.displayName = 'HeavyComponent13408';
export default HeavyComponent13408;
