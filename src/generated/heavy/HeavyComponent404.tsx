'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly404<T> = T extends (infer U)[]
  ? DeepReadonlyArray404<U>
  : T extends object
  ? DeepReadonlyObject404<T>
  : T;

interface DeepReadonlyArray404<T> extends ReadonlyArray<DeepReadonly404<T>> {}

type DeepReadonlyObject404<T> = {
  readonly [P in keyof T]: DeepReadonly404<T[P]>;
};

type UnionToIntersection404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf404<T> = UnionToIntersection404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push404<T extends unknown[], V> = [...T, V];

type TuplifyUnion404<T, L = LastOf404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push404<TuplifyUnion404<Exclude<T, L>>, L>;

type DeepPartial404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial404<T[P]> }
  : T;

type Paths404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join404<K, Paths404<T[K], Prev404[D]>> : never }[keyof T]
  : never;

type Prev404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig404 {
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

type ConfigPaths404 = Paths404<NestedConfig404>;

interface HeavyProps404 {
  config: DeepPartial404<NestedConfig404>;
  path?: ConfigPaths404;
}

const HeavyComponent404 = memo(function HeavyComponent404({ config }: HeavyProps404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent404.displayName = 'HeavyComponent404';
export default HeavyComponent404;
