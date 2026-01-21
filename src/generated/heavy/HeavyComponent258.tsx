'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly258<T> = T extends (infer U)[]
  ? DeepReadonlyArray258<U>
  : T extends object
  ? DeepReadonlyObject258<T>
  : T;

interface DeepReadonlyArray258<T> extends ReadonlyArray<DeepReadonly258<T>> {}

type DeepReadonlyObject258<T> = {
  readonly [P in keyof T]: DeepReadonly258<T[P]>;
};

type UnionToIntersection258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf258<T> = UnionToIntersection258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push258<T extends unknown[], V> = [...T, V];

type TuplifyUnion258<T, L = LastOf258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push258<TuplifyUnion258<Exclude<T, L>>, L>;

type DeepPartial258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial258<T[P]> }
  : T;

type Paths258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join258<K, Paths258<T[K], Prev258[D]>> : never }[keyof T]
  : never;

type Prev258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig258 {
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

type ConfigPaths258 = Paths258<NestedConfig258>;

interface HeavyProps258 {
  config: DeepPartial258<NestedConfig258>;
  path?: ConfigPaths258;
}

const HeavyComponent258 = memo(function HeavyComponent258({ config }: HeavyProps258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent258.displayName = 'HeavyComponent258';
export default HeavyComponent258;
