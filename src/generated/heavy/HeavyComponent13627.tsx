'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13627<T> = T extends (infer U)[]
  ? DeepReadonlyArray13627<U>
  : T extends object
  ? DeepReadonlyObject13627<T>
  : T;

interface DeepReadonlyArray13627<T> extends ReadonlyArray<DeepReadonly13627<T>> {}

type DeepReadonlyObject13627<T> = {
  readonly [P in keyof T]: DeepReadonly13627<T[P]>;
};

type UnionToIntersection13627<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13627<T> = UnionToIntersection13627<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13627<T extends unknown[], V> = [...T, V];

type TuplifyUnion13627<T, L = LastOf13627<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13627<TuplifyUnion13627<Exclude<T, L>>, L>;

type DeepPartial13627<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13627<T[P]> }
  : T;

type Paths13627<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13627<K, Paths13627<T[K], Prev13627[D]>> : never }[keyof T]
  : never;

type Prev13627 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13627<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13627 {
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

type ConfigPaths13627 = Paths13627<NestedConfig13627>;

interface HeavyProps13627 {
  config: DeepPartial13627<NestedConfig13627>;
  path?: ConfigPaths13627;
}

const HeavyComponent13627 = memo(function HeavyComponent13627({ config }: HeavyProps13627) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13627) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13627 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13627: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13627.displayName = 'HeavyComponent13627';
export default HeavyComponent13627;
