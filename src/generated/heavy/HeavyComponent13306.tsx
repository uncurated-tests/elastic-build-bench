'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13306<T> = T extends (infer U)[]
  ? DeepReadonlyArray13306<U>
  : T extends object
  ? DeepReadonlyObject13306<T>
  : T;

interface DeepReadonlyArray13306<T> extends ReadonlyArray<DeepReadonly13306<T>> {}

type DeepReadonlyObject13306<T> = {
  readonly [P in keyof T]: DeepReadonly13306<T[P]>;
};

type UnionToIntersection13306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13306<T> = UnionToIntersection13306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13306<T extends unknown[], V> = [...T, V];

type TuplifyUnion13306<T, L = LastOf13306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13306<TuplifyUnion13306<Exclude<T, L>>, L>;

type DeepPartial13306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13306<T[P]> }
  : T;

type Paths13306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13306<K, Paths13306<T[K], Prev13306[D]>> : never }[keyof T]
  : never;

type Prev13306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13306 {
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

type ConfigPaths13306 = Paths13306<NestedConfig13306>;

interface HeavyProps13306 {
  config: DeepPartial13306<NestedConfig13306>;
  path?: ConfigPaths13306;
}

const HeavyComponent13306 = memo(function HeavyComponent13306({ config }: HeavyProps13306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13306.displayName = 'HeavyComponent13306';
export default HeavyComponent13306;
