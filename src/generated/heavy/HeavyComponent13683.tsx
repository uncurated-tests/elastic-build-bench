'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13683<T> = T extends (infer U)[]
  ? DeepReadonlyArray13683<U>
  : T extends object
  ? DeepReadonlyObject13683<T>
  : T;

interface DeepReadonlyArray13683<T> extends ReadonlyArray<DeepReadonly13683<T>> {}

type DeepReadonlyObject13683<T> = {
  readonly [P in keyof T]: DeepReadonly13683<T[P]>;
};

type UnionToIntersection13683<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13683<T> = UnionToIntersection13683<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13683<T extends unknown[], V> = [...T, V];

type TuplifyUnion13683<T, L = LastOf13683<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13683<TuplifyUnion13683<Exclude<T, L>>, L>;

type DeepPartial13683<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13683<T[P]> }
  : T;

type Paths13683<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13683<K, Paths13683<T[K], Prev13683[D]>> : never }[keyof T]
  : never;

type Prev13683 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13683<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13683 {
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

type ConfigPaths13683 = Paths13683<NestedConfig13683>;

interface HeavyProps13683 {
  config: DeepPartial13683<NestedConfig13683>;
  path?: ConfigPaths13683;
}

const HeavyComponent13683 = memo(function HeavyComponent13683({ config }: HeavyProps13683) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13683) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13683 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13683: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13683.displayName = 'HeavyComponent13683';
export default HeavyComponent13683;
