'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13604<T> = T extends (infer U)[]
  ? DeepReadonlyArray13604<U>
  : T extends object
  ? DeepReadonlyObject13604<T>
  : T;

interface DeepReadonlyArray13604<T> extends ReadonlyArray<DeepReadonly13604<T>> {}

type DeepReadonlyObject13604<T> = {
  readonly [P in keyof T]: DeepReadonly13604<T[P]>;
};

type UnionToIntersection13604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13604<T> = UnionToIntersection13604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13604<T extends unknown[], V> = [...T, V];

type TuplifyUnion13604<T, L = LastOf13604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13604<TuplifyUnion13604<Exclude<T, L>>, L>;

type DeepPartial13604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13604<T[P]> }
  : T;

type Paths13604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13604<K, Paths13604<T[K], Prev13604[D]>> : never }[keyof T]
  : never;

type Prev13604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13604 {
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

type ConfigPaths13604 = Paths13604<NestedConfig13604>;

interface HeavyProps13604 {
  config: DeepPartial13604<NestedConfig13604>;
  path?: ConfigPaths13604;
}

const HeavyComponent13604 = memo(function HeavyComponent13604({ config }: HeavyProps13604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13604.displayName = 'HeavyComponent13604';
export default HeavyComponent13604;
