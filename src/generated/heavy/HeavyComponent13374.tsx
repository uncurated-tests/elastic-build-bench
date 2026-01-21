'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13374<T> = T extends (infer U)[]
  ? DeepReadonlyArray13374<U>
  : T extends object
  ? DeepReadonlyObject13374<T>
  : T;

interface DeepReadonlyArray13374<T> extends ReadonlyArray<DeepReadonly13374<T>> {}

type DeepReadonlyObject13374<T> = {
  readonly [P in keyof T]: DeepReadonly13374<T[P]>;
};

type UnionToIntersection13374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13374<T> = UnionToIntersection13374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13374<T extends unknown[], V> = [...T, V];

type TuplifyUnion13374<T, L = LastOf13374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13374<TuplifyUnion13374<Exclude<T, L>>, L>;

type DeepPartial13374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13374<T[P]> }
  : T;

type Paths13374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13374<K, Paths13374<T[K], Prev13374[D]>> : never }[keyof T]
  : never;

type Prev13374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13374 {
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

type ConfigPaths13374 = Paths13374<NestedConfig13374>;

interface HeavyProps13374 {
  config: DeepPartial13374<NestedConfig13374>;
  path?: ConfigPaths13374;
}

const HeavyComponent13374 = memo(function HeavyComponent13374({ config }: HeavyProps13374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13374.displayName = 'HeavyComponent13374';
export default HeavyComponent13374;
