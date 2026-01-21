'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly409<T> = T extends (infer U)[]
  ? DeepReadonlyArray409<U>
  : T extends object
  ? DeepReadonlyObject409<T>
  : T;

interface DeepReadonlyArray409<T> extends ReadonlyArray<DeepReadonly409<T>> {}

type DeepReadonlyObject409<T> = {
  readonly [P in keyof T]: DeepReadonly409<T[P]>;
};

type UnionToIntersection409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf409<T> = UnionToIntersection409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push409<T extends unknown[], V> = [...T, V];

type TuplifyUnion409<T, L = LastOf409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push409<TuplifyUnion409<Exclude<T, L>>, L>;

type DeepPartial409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial409<T[P]> }
  : T;

type Paths409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join409<K, Paths409<T[K], Prev409[D]>> : never }[keyof T]
  : never;

type Prev409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig409 {
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

type ConfigPaths409 = Paths409<NestedConfig409>;

interface HeavyProps409 {
  config: DeepPartial409<NestedConfig409>;
  path?: ConfigPaths409;
}

const HeavyComponent409 = memo(function HeavyComponent409({ config }: HeavyProps409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent409.displayName = 'HeavyComponent409';
export default HeavyComponent409;
