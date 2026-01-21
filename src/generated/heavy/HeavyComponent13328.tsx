'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13328<T> = T extends (infer U)[]
  ? DeepReadonlyArray13328<U>
  : T extends object
  ? DeepReadonlyObject13328<T>
  : T;

interface DeepReadonlyArray13328<T> extends ReadonlyArray<DeepReadonly13328<T>> {}

type DeepReadonlyObject13328<T> = {
  readonly [P in keyof T]: DeepReadonly13328<T[P]>;
};

type UnionToIntersection13328<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13328<T> = UnionToIntersection13328<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13328<T extends unknown[], V> = [...T, V];

type TuplifyUnion13328<T, L = LastOf13328<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13328<TuplifyUnion13328<Exclude<T, L>>, L>;

type DeepPartial13328<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13328<T[P]> }
  : T;

type Paths13328<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13328<K, Paths13328<T[K], Prev13328[D]>> : never }[keyof T]
  : never;

type Prev13328 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13328<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13328 {
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

type ConfigPaths13328 = Paths13328<NestedConfig13328>;

interface HeavyProps13328 {
  config: DeepPartial13328<NestedConfig13328>;
  path?: ConfigPaths13328;
}

const HeavyComponent13328 = memo(function HeavyComponent13328({ config }: HeavyProps13328) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13328) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13328 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13328: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13328.displayName = 'HeavyComponent13328';
export default HeavyComponent13328;
