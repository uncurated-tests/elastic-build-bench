'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10765<T> = T extends (infer U)[]
  ? DeepReadonlyArray10765<U>
  : T extends object
  ? DeepReadonlyObject10765<T>
  : T;

interface DeepReadonlyArray10765<T> extends ReadonlyArray<DeepReadonly10765<T>> {}

type DeepReadonlyObject10765<T> = {
  readonly [P in keyof T]: DeepReadonly10765<T[P]>;
};

type UnionToIntersection10765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10765<T> = UnionToIntersection10765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10765<T extends unknown[], V> = [...T, V];

type TuplifyUnion10765<T, L = LastOf10765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10765<TuplifyUnion10765<Exclude<T, L>>, L>;

type DeepPartial10765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10765<T[P]> }
  : T;

type Paths10765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10765<K, Paths10765<T[K], Prev10765[D]>> : never }[keyof T]
  : never;

type Prev10765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10765 {
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

type ConfigPaths10765 = Paths10765<NestedConfig10765>;

interface HeavyProps10765 {
  config: DeepPartial10765<NestedConfig10765>;
  path?: ConfigPaths10765;
}

const HeavyComponent10765 = memo(function HeavyComponent10765({ config }: HeavyProps10765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10765.displayName = 'HeavyComponent10765';
export default HeavyComponent10765;
