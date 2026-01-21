'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13656<T> = T extends (infer U)[]
  ? DeepReadonlyArray13656<U>
  : T extends object
  ? DeepReadonlyObject13656<T>
  : T;

interface DeepReadonlyArray13656<T> extends ReadonlyArray<DeepReadonly13656<T>> {}

type DeepReadonlyObject13656<T> = {
  readonly [P in keyof T]: DeepReadonly13656<T[P]>;
};

type UnionToIntersection13656<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13656<T> = UnionToIntersection13656<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13656<T extends unknown[], V> = [...T, V];

type TuplifyUnion13656<T, L = LastOf13656<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13656<TuplifyUnion13656<Exclude<T, L>>, L>;

type DeepPartial13656<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13656<T[P]> }
  : T;

type Paths13656<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13656<K, Paths13656<T[K], Prev13656[D]>> : never }[keyof T]
  : never;

type Prev13656 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13656<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13656 {
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

type ConfigPaths13656 = Paths13656<NestedConfig13656>;

interface HeavyProps13656 {
  config: DeepPartial13656<NestedConfig13656>;
  path?: ConfigPaths13656;
}

const HeavyComponent13656 = memo(function HeavyComponent13656({ config }: HeavyProps13656) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13656) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13656 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13656: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13656.displayName = 'HeavyComponent13656';
export default HeavyComponent13656;
