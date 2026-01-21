'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13013<T> = T extends (infer U)[]
  ? DeepReadonlyArray13013<U>
  : T extends object
  ? DeepReadonlyObject13013<T>
  : T;

interface DeepReadonlyArray13013<T> extends ReadonlyArray<DeepReadonly13013<T>> {}

type DeepReadonlyObject13013<T> = {
  readonly [P in keyof T]: DeepReadonly13013<T[P]>;
};

type UnionToIntersection13013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13013<T> = UnionToIntersection13013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13013<T extends unknown[], V> = [...T, V];

type TuplifyUnion13013<T, L = LastOf13013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13013<TuplifyUnion13013<Exclude<T, L>>, L>;

type DeepPartial13013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13013<T[P]> }
  : T;

type Paths13013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13013<K, Paths13013<T[K], Prev13013[D]>> : never }[keyof T]
  : never;

type Prev13013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13013 {
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

type ConfigPaths13013 = Paths13013<NestedConfig13013>;

interface HeavyProps13013 {
  config: DeepPartial13013<NestedConfig13013>;
  path?: ConfigPaths13013;
}

const HeavyComponent13013 = memo(function HeavyComponent13013({ config }: HeavyProps13013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13013.displayName = 'HeavyComponent13013';
export default HeavyComponent13013;
