'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10294<T> = T extends (infer U)[]
  ? DeepReadonlyArray10294<U>
  : T extends object
  ? DeepReadonlyObject10294<T>
  : T;

interface DeepReadonlyArray10294<T> extends ReadonlyArray<DeepReadonly10294<T>> {}

type DeepReadonlyObject10294<T> = {
  readonly [P in keyof T]: DeepReadonly10294<T[P]>;
};

type UnionToIntersection10294<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10294<T> = UnionToIntersection10294<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10294<T extends unknown[], V> = [...T, V];

type TuplifyUnion10294<T, L = LastOf10294<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10294<TuplifyUnion10294<Exclude<T, L>>, L>;

type DeepPartial10294<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10294<T[P]> }
  : T;

type Paths10294<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10294<K, Paths10294<T[K], Prev10294[D]>> : never }[keyof T]
  : never;

type Prev10294 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10294<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10294 {
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

type ConfigPaths10294 = Paths10294<NestedConfig10294>;

interface HeavyProps10294 {
  config: DeepPartial10294<NestedConfig10294>;
  path?: ConfigPaths10294;
}

const HeavyComponent10294 = memo(function HeavyComponent10294({ config }: HeavyProps10294) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10294) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10294 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10294: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10294.displayName = 'HeavyComponent10294';
export default HeavyComponent10294;
