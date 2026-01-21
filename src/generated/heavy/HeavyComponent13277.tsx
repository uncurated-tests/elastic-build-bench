'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13277<T> = T extends (infer U)[]
  ? DeepReadonlyArray13277<U>
  : T extends object
  ? DeepReadonlyObject13277<T>
  : T;

interface DeepReadonlyArray13277<T> extends ReadonlyArray<DeepReadonly13277<T>> {}

type DeepReadonlyObject13277<T> = {
  readonly [P in keyof T]: DeepReadonly13277<T[P]>;
};

type UnionToIntersection13277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13277<T> = UnionToIntersection13277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13277<T extends unknown[], V> = [...T, V];

type TuplifyUnion13277<T, L = LastOf13277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13277<TuplifyUnion13277<Exclude<T, L>>, L>;

type DeepPartial13277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13277<T[P]> }
  : T;

type Paths13277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13277<K, Paths13277<T[K], Prev13277[D]>> : never }[keyof T]
  : never;

type Prev13277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13277 {
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

type ConfigPaths13277 = Paths13277<NestedConfig13277>;

interface HeavyProps13277 {
  config: DeepPartial13277<NestedConfig13277>;
  path?: ConfigPaths13277;
}

const HeavyComponent13277 = memo(function HeavyComponent13277({ config }: HeavyProps13277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13277.displayName = 'HeavyComponent13277';
export default HeavyComponent13277;
