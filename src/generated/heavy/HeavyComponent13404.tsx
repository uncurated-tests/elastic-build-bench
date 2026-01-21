'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13404<T> = T extends (infer U)[]
  ? DeepReadonlyArray13404<U>
  : T extends object
  ? DeepReadonlyObject13404<T>
  : T;

interface DeepReadonlyArray13404<T> extends ReadonlyArray<DeepReadonly13404<T>> {}

type DeepReadonlyObject13404<T> = {
  readonly [P in keyof T]: DeepReadonly13404<T[P]>;
};

type UnionToIntersection13404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13404<T> = UnionToIntersection13404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13404<T extends unknown[], V> = [...T, V];

type TuplifyUnion13404<T, L = LastOf13404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13404<TuplifyUnion13404<Exclude<T, L>>, L>;

type DeepPartial13404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13404<T[P]> }
  : T;

type Paths13404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13404<K, Paths13404<T[K], Prev13404[D]>> : never }[keyof T]
  : never;

type Prev13404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13404 {
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

type ConfigPaths13404 = Paths13404<NestedConfig13404>;

interface HeavyProps13404 {
  config: DeepPartial13404<NestedConfig13404>;
  path?: ConfigPaths13404;
}

const HeavyComponent13404 = memo(function HeavyComponent13404({ config }: HeavyProps13404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13404.displayName = 'HeavyComponent13404';
export default HeavyComponent13404;
