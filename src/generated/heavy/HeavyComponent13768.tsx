'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13768<T> = T extends (infer U)[]
  ? DeepReadonlyArray13768<U>
  : T extends object
  ? DeepReadonlyObject13768<T>
  : T;

interface DeepReadonlyArray13768<T> extends ReadonlyArray<DeepReadonly13768<T>> {}

type DeepReadonlyObject13768<T> = {
  readonly [P in keyof T]: DeepReadonly13768<T[P]>;
};

type UnionToIntersection13768<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13768<T> = UnionToIntersection13768<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13768<T extends unknown[], V> = [...T, V];

type TuplifyUnion13768<T, L = LastOf13768<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13768<TuplifyUnion13768<Exclude<T, L>>, L>;

type DeepPartial13768<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13768<T[P]> }
  : T;

type Paths13768<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13768<K, Paths13768<T[K], Prev13768[D]>> : never }[keyof T]
  : never;

type Prev13768 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13768<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13768 {
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

type ConfigPaths13768 = Paths13768<NestedConfig13768>;

interface HeavyProps13768 {
  config: DeepPartial13768<NestedConfig13768>;
  path?: ConfigPaths13768;
}

const HeavyComponent13768 = memo(function HeavyComponent13768({ config }: HeavyProps13768) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13768) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13768 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13768: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13768.displayName = 'HeavyComponent13768';
export default HeavyComponent13768;
