'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13556<T> = T extends (infer U)[]
  ? DeepReadonlyArray13556<U>
  : T extends object
  ? DeepReadonlyObject13556<T>
  : T;

interface DeepReadonlyArray13556<T> extends ReadonlyArray<DeepReadonly13556<T>> {}

type DeepReadonlyObject13556<T> = {
  readonly [P in keyof T]: DeepReadonly13556<T[P]>;
};

type UnionToIntersection13556<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13556<T> = UnionToIntersection13556<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13556<T extends unknown[], V> = [...T, V];

type TuplifyUnion13556<T, L = LastOf13556<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13556<TuplifyUnion13556<Exclude<T, L>>, L>;

type DeepPartial13556<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13556<T[P]> }
  : T;

type Paths13556<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13556<K, Paths13556<T[K], Prev13556[D]>> : never }[keyof T]
  : never;

type Prev13556 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13556<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13556 {
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

type ConfigPaths13556 = Paths13556<NestedConfig13556>;

interface HeavyProps13556 {
  config: DeepPartial13556<NestedConfig13556>;
  path?: ConfigPaths13556;
}

const HeavyComponent13556 = memo(function HeavyComponent13556({ config }: HeavyProps13556) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13556) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13556 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13556: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13556.displayName = 'HeavyComponent13556';
export default HeavyComponent13556;
