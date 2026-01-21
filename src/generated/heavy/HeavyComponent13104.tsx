'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13104<T> = T extends (infer U)[]
  ? DeepReadonlyArray13104<U>
  : T extends object
  ? DeepReadonlyObject13104<T>
  : T;

interface DeepReadonlyArray13104<T> extends ReadonlyArray<DeepReadonly13104<T>> {}

type DeepReadonlyObject13104<T> = {
  readonly [P in keyof T]: DeepReadonly13104<T[P]>;
};

type UnionToIntersection13104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13104<T> = UnionToIntersection13104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13104<T extends unknown[], V> = [...T, V];

type TuplifyUnion13104<T, L = LastOf13104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13104<TuplifyUnion13104<Exclude<T, L>>, L>;

type DeepPartial13104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13104<T[P]> }
  : T;

type Paths13104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13104<K, Paths13104<T[K], Prev13104[D]>> : never }[keyof T]
  : never;

type Prev13104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13104 {
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

type ConfigPaths13104 = Paths13104<NestedConfig13104>;

interface HeavyProps13104 {
  config: DeepPartial13104<NestedConfig13104>;
  path?: ConfigPaths13104;
}

const HeavyComponent13104 = memo(function HeavyComponent13104({ config }: HeavyProps13104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13104.displayName = 'HeavyComponent13104';
export default HeavyComponent13104;
