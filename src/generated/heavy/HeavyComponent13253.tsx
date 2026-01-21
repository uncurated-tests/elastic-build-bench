'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13253<T> = T extends (infer U)[]
  ? DeepReadonlyArray13253<U>
  : T extends object
  ? DeepReadonlyObject13253<T>
  : T;

interface DeepReadonlyArray13253<T> extends ReadonlyArray<DeepReadonly13253<T>> {}

type DeepReadonlyObject13253<T> = {
  readonly [P in keyof T]: DeepReadonly13253<T[P]>;
};

type UnionToIntersection13253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13253<T> = UnionToIntersection13253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13253<T extends unknown[], V> = [...T, V];

type TuplifyUnion13253<T, L = LastOf13253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13253<TuplifyUnion13253<Exclude<T, L>>, L>;

type DeepPartial13253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13253<T[P]> }
  : T;

type Paths13253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13253<K, Paths13253<T[K], Prev13253[D]>> : never }[keyof T]
  : never;

type Prev13253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13253 {
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

type ConfigPaths13253 = Paths13253<NestedConfig13253>;

interface HeavyProps13253 {
  config: DeepPartial13253<NestedConfig13253>;
  path?: ConfigPaths13253;
}

const HeavyComponent13253 = memo(function HeavyComponent13253({ config }: HeavyProps13253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13253.displayName = 'HeavyComponent13253';
export default HeavyComponent13253;
