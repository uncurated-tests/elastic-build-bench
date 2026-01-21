'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13834<T> = T extends (infer U)[]
  ? DeepReadonlyArray13834<U>
  : T extends object
  ? DeepReadonlyObject13834<T>
  : T;

interface DeepReadonlyArray13834<T> extends ReadonlyArray<DeepReadonly13834<T>> {}

type DeepReadonlyObject13834<T> = {
  readonly [P in keyof T]: DeepReadonly13834<T[P]>;
};

type UnionToIntersection13834<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13834<T> = UnionToIntersection13834<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13834<T extends unknown[], V> = [...T, V];

type TuplifyUnion13834<T, L = LastOf13834<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13834<TuplifyUnion13834<Exclude<T, L>>, L>;

type DeepPartial13834<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13834<T[P]> }
  : T;

type Paths13834<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13834<K, Paths13834<T[K], Prev13834[D]>> : never }[keyof T]
  : never;

type Prev13834 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13834<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13834 {
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

type ConfigPaths13834 = Paths13834<NestedConfig13834>;

interface HeavyProps13834 {
  config: DeepPartial13834<NestedConfig13834>;
  path?: ConfigPaths13834;
}

const HeavyComponent13834 = memo(function HeavyComponent13834({ config }: HeavyProps13834) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13834) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13834 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13834: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13834.displayName = 'HeavyComponent13834';
export default HeavyComponent13834;
