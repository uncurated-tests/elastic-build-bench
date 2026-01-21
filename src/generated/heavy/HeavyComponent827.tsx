'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly827<T> = T extends (infer U)[]
  ? DeepReadonlyArray827<U>
  : T extends object
  ? DeepReadonlyObject827<T>
  : T;

interface DeepReadonlyArray827<T> extends ReadonlyArray<DeepReadonly827<T>> {}

type DeepReadonlyObject827<T> = {
  readonly [P in keyof T]: DeepReadonly827<T[P]>;
};

type UnionToIntersection827<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf827<T> = UnionToIntersection827<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push827<T extends unknown[], V> = [...T, V];

type TuplifyUnion827<T, L = LastOf827<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push827<TuplifyUnion827<Exclude<T, L>>, L>;

type DeepPartial827<T> = T extends object
  ? { [P in keyof T]?: DeepPartial827<T[P]> }
  : T;

type Paths827<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join827<K, Paths827<T[K], Prev827[D]>> : never }[keyof T]
  : never;

type Prev827 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join827<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig827 {
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

type ConfigPaths827 = Paths827<NestedConfig827>;

interface HeavyProps827 {
  config: DeepPartial827<NestedConfig827>;
  path?: ConfigPaths827;
}

const HeavyComponent827 = memo(function HeavyComponent827({ config }: HeavyProps827) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 827) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-827 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H827: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent827.displayName = 'HeavyComponent827';
export default HeavyComponent827;
