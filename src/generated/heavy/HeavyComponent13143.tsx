'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13143<T> = T extends (infer U)[]
  ? DeepReadonlyArray13143<U>
  : T extends object
  ? DeepReadonlyObject13143<T>
  : T;

interface DeepReadonlyArray13143<T> extends ReadonlyArray<DeepReadonly13143<T>> {}

type DeepReadonlyObject13143<T> = {
  readonly [P in keyof T]: DeepReadonly13143<T[P]>;
};

type UnionToIntersection13143<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13143<T> = UnionToIntersection13143<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13143<T extends unknown[], V> = [...T, V];

type TuplifyUnion13143<T, L = LastOf13143<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13143<TuplifyUnion13143<Exclude<T, L>>, L>;

type DeepPartial13143<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13143<T[P]> }
  : T;

type Paths13143<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13143<K, Paths13143<T[K], Prev13143[D]>> : never }[keyof T]
  : never;

type Prev13143 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13143<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13143 {
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

type ConfigPaths13143 = Paths13143<NestedConfig13143>;

interface HeavyProps13143 {
  config: DeepPartial13143<NestedConfig13143>;
  path?: ConfigPaths13143;
}

const HeavyComponent13143 = memo(function HeavyComponent13143({ config }: HeavyProps13143) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13143) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13143 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13143: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13143.displayName = 'HeavyComponent13143';
export default HeavyComponent13143;
