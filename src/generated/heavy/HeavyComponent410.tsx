'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly410<T> = T extends (infer U)[]
  ? DeepReadonlyArray410<U>
  : T extends object
  ? DeepReadonlyObject410<T>
  : T;

interface DeepReadonlyArray410<T> extends ReadonlyArray<DeepReadonly410<T>> {}

type DeepReadonlyObject410<T> = {
  readonly [P in keyof T]: DeepReadonly410<T[P]>;
};

type UnionToIntersection410<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf410<T> = UnionToIntersection410<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push410<T extends unknown[], V> = [...T, V];

type TuplifyUnion410<T, L = LastOf410<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push410<TuplifyUnion410<Exclude<T, L>>, L>;

type DeepPartial410<T> = T extends object
  ? { [P in keyof T]?: DeepPartial410<T[P]> }
  : T;

type Paths410<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join410<K, Paths410<T[K], Prev410[D]>> : never }[keyof T]
  : never;

type Prev410 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join410<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig410 {
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

type ConfigPaths410 = Paths410<NestedConfig410>;

interface HeavyProps410 {
  config: DeepPartial410<NestedConfig410>;
  path?: ConfigPaths410;
}

const HeavyComponent410 = memo(function HeavyComponent410({ config }: HeavyProps410) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 410) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-410 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H410: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent410.displayName = 'HeavyComponent410';
export default HeavyComponent410;
