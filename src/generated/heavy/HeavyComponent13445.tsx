'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13445<T> = T extends (infer U)[]
  ? DeepReadonlyArray13445<U>
  : T extends object
  ? DeepReadonlyObject13445<T>
  : T;

interface DeepReadonlyArray13445<T> extends ReadonlyArray<DeepReadonly13445<T>> {}

type DeepReadonlyObject13445<T> = {
  readonly [P in keyof T]: DeepReadonly13445<T[P]>;
};

type UnionToIntersection13445<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13445<T> = UnionToIntersection13445<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13445<T extends unknown[], V> = [...T, V];

type TuplifyUnion13445<T, L = LastOf13445<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13445<TuplifyUnion13445<Exclude<T, L>>, L>;

type DeepPartial13445<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13445<T[P]> }
  : T;

type Paths13445<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13445<K, Paths13445<T[K], Prev13445[D]>> : never }[keyof T]
  : never;

type Prev13445 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13445<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13445 {
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

type ConfigPaths13445 = Paths13445<NestedConfig13445>;

interface HeavyProps13445 {
  config: DeepPartial13445<NestedConfig13445>;
  path?: ConfigPaths13445;
}

const HeavyComponent13445 = memo(function HeavyComponent13445({ config }: HeavyProps13445) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13445) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13445 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13445: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13445.displayName = 'HeavyComponent13445';
export default HeavyComponent13445;
