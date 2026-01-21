'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13966<T> = T extends (infer U)[]
  ? DeepReadonlyArray13966<U>
  : T extends object
  ? DeepReadonlyObject13966<T>
  : T;

interface DeepReadonlyArray13966<T> extends ReadonlyArray<DeepReadonly13966<T>> {}

type DeepReadonlyObject13966<T> = {
  readonly [P in keyof T]: DeepReadonly13966<T[P]>;
};

type UnionToIntersection13966<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13966<T> = UnionToIntersection13966<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13966<T extends unknown[], V> = [...T, V];

type TuplifyUnion13966<T, L = LastOf13966<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13966<TuplifyUnion13966<Exclude<T, L>>, L>;

type DeepPartial13966<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13966<T[P]> }
  : T;

type Paths13966<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13966<K, Paths13966<T[K], Prev13966[D]>> : never }[keyof T]
  : never;

type Prev13966 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13966<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13966 {
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

type ConfigPaths13966 = Paths13966<NestedConfig13966>;

interface HeavyProps13966 {
  config: DeepPartial13966<NestedConfig13966>;
  path?: ConfigPaths13966;
}

const HeavyComponent13966 = memo(function HeavyComponent13966({ config }: HeavyProps13966) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13966) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13966 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13966: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13966.displayName = 'HeavyComponent13966';
export default HeavyComponent13966;
