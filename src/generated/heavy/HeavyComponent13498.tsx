'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13498<T> = T extends (infer U)[]
  ? DeepReadonlyArray13498<U>
  : T extends object
  ? DeepReadonlyObject13498<T>
  : T;

interface DeepReadonlyArray13498<T> extends ReadonlyArray<DeepReadonly13498<T>> {}

type DeepReadonlyObject13498<T> = {
  readonly [P in keyof T]: DeepReadonly13498<T[P]>;
};

type UnionToIntersection13498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13498<T> = UnionToIntersection13498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13498<T extends unknown[], V> = [...T, V];

type TuplifyUnion13498<T, L = LastOf13498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13498<TuplifyUnion13498<Exclude<T, L>>, L>;

type DeepPartial13498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13498<T[P]> }
  : T;

type Paths13498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13498<K, Paths13498<T[K], Prev13498[D]>> : never }[keyof T]
  : never;

type Prev13498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13498 {
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

type ConfigPaths13498 = Paths13498<NestedConfig13498>;

interface HeavyProps13498 {
  config: DeepPartial13498<NestedConfig13498>;
  path?: ConfigPaths13498;
}

const HeavyComponent13498 = memo(function HeavyComponent13498({ config }: HeavyProps13498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13498.displayName = 'HeavyComponent13498';
export default HeavyComponent13498;
