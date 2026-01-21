'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly317<T> = T extends (infer U)[]
  ? DeepReadonlyArray317<U>
  : T extends object
  ? DeepReadonlyObject317<T>
  : T;

interface DeepReadonlyArray317<T> extends ReadonlyArray<DeepReadonly317<T>> {}

type DeepReadonlyObject317<T> = {
  readonly [P in keyof T]: DeepReadonly317<T[P]>;
};

type UnionToIntersection317<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf317<T> = UnionToIntersection317<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push317<T extends unknown[], V> = [...T, V];

type TuplifyUnion317<T, L = LastOf317<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push317<TuplifyUnion317<Exclude<T, L>>, L>;

type DeepPartial317<T> = T extends object
  ? { [P in keyof T]?: DeepPartial317<T[P]> }
  : T;

type Paths317<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join317<K, Paths317<T[K], Prev317[D]>> : never }[keyof T]
  : never;

type Prev317 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join317<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig317 {
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

type ConfigPaths317 = Paths317<NestedConfig317>;

interface HeavyProps317 {
  config: DeepPartial317<NestedConfig317>;
  path?: ConfigPaths317;
}

const HeavyComponent317 = memo(function HeavyComponent317({ config }: HeavyProps317) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 317) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-317 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H317: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent317.displayName = 'HeavyComponent317';
export default HeavyComponent317;
