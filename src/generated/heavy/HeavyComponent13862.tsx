'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13862<T> = T extends (infer U)[]
  ? DeepReadonlyArray13862<U>
  : T extends object
  ? DeepReadonlyObject13862<T>
  : T;

interface DeepReadonlyArray13862<T> extends ReadonlyArray<DeepReadonly13862<T>> {}

type DeepReadonlyObject13862<T> = {
  readonly [P in keyof T]: DeepReadonly13862<T[P]>;
};

type UnionToIntersection13862<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13862<T> = UnionToIntersection13862<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13862<T extends unknown[], V> = [...T, V];

type TuplifyUnion13862<T, L = LastOf13862<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13862<TuplifyUnion13862<Exclude<T, L>>, L>;

type DeepPartial13862<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13862<T[P]> }
  : T;

type Paths13862<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13862<K, Paths13862<T[K], Prev13862[D]>> : never }[keyof T]
  : never;

type Prev13862 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13862<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13862 {
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

type ConfigPaths13862 = Paths13862<NestedConfig13862>;

interface HeavyProps13862 {
  config: DeepPartial13862<NestedConfig13862>;
  path?: ConfigPaths13862;
}

const HeavyComponent13862 = memo(function HeavyComponent13862({ config }: HeavyProps13862) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13862) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13862 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13862: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13862.displayName = 'HeavyComponent13862';
export default HeavyComponent13862;
