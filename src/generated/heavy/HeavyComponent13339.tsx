'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13339<T> = T extends (infer U)[]
  ? DeepReadonlyArray13339<U>
  : T extends object
  ? DeepReadonlyObject13339<T>
  : T;

interface DeepReadonlyArray13339<T> extends ReadonlyArray<DeepReadonly13339<T>> {}

type DeepReadonlyObject13339<T> = {
  readonly [P in keyof T]: DeepReadonly13339<T[P]>;
};

type UnionToIntersection13339<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13339<T> = UnionToIntersection13339<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13339<T extends unknown[], V> = [...T, V];

type TuplifyUnion13339<T, L = LastOf13339<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13339<TuplifyUnion13339<Exclude<T, L>>, L>;

type DeepPartial13339<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13339<T[P]> }
  : T;

type Paths13339<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13339<K, Paths13339<T[K], Prev13339[D]>> : never }[keyof T]
  : never;

type Prev13339 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13339<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13339 {
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

type ConfigPaths13339 = Paths13339<NestedConfig13339>;

interface HeavyProps13339 {
  config: DeepPartial13339<NestedConfig13339>;
  path?: ConfigPaths13339;
}

const HeavyComponent13339 = memo(function HeavyComponent13339({ config }: HeavyProps13339) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13339) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13339 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13339: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13339.displayName = 'HeavyComponent13339';
export default HeavyComponent13339;
