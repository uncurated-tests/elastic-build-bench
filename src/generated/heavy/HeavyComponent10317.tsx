'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10317<T> = T extends (infer U)[]
  ? DeepReadonlyArray10317<U>
  : T extends object
  ? DeepReadonlyObject10317<T>
  : T;

interface DeepReadonlyArray10317<T> extends ReadonlyArray<DeepReadonly10317<T>> {}

type DeepReadonlyObject10317<T> = {
  readonly [P in keyof T]: DeepReadonly10317<T[P]>;
};

type UnionToIntersection10317<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10317<T> = UnionToIntersection10317<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10317<T extends unknown[], V> = [...T, V];

type TuplifyUnion10317<T, L = LastOf10317<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10317<TuplifyUnion10317<Exclude<T, L>>, L>;

type DeepPartial10317<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10317<T[P]> }
  : T;

type Paths10317<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10317<K, Paths10317<T[K], Prev10317[D]>> : never }[keyof T]
  : never;

type Prev10317 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10317<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10317 {
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

type ConfigPaths10317 = Paths10317<NestedConfig10317>;

interface HeavyProps10317 {
  config: DeepPartial10317<NestedConfig10317>;
  path?: ConfigPaths10317;
}

const HeavyComponent10317 = memo(function HeavyComponent10317({ config }: HeavyProps10317) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10317) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10317 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10317: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10317.displayName = 'HeavyComponent10317';
export default HeavyComponent10317;
