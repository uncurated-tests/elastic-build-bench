'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13087<T> = T extends (infer U)[]
  ? DeepReadonlyArray13087<U>
  : T extends object
  ? DeepReadonlyObject13087<T>
  : T;

interface DeepReadonlyArray13087<T> extends ReadonlyArray<DeepReadonly13087<T>> {}

type DeepReadonlyObject13087<T> = {
  readonly [P in keyof T]: DeepReadonly13087<T[P]>;
};

type UnionToIntersection13087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13087<T> = UnionToIntersection13087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13087<T extends unknown[], V> = [...T, V];

type TuplifyUnion13087<T, L = LastOf13087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13087<TuplifyUnion13087<Exclude<T, L>>, L>;

type DeepPartial13087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13087<T[P]> }
  : T;

type Paths13087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13087<K, Paths13087<T[K], Prev13087[D]>> : never }[keyof T]
  : never;

type Prev13087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13087 {
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

type ConfigPaths13087 = Paths13087<NestedConfig13087>;

interface HeavyProps13087 {
  config: DeepPartial13087<NestedConfig13087>;
  path?: ConfigPaths13087;
}

const HeavyComponent13087 = memo(function HeavyComponent13087({ config }: HeavyProps13087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13087.displayName = 'HeavyComponent13087';
export default HeavyComponent13087;
