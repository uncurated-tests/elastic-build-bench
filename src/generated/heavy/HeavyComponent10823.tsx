'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10823<T> = T extends (infer U)[]
  ? DeepReadonlyArray10823<U>
  : T extends object
  ? DeepReadonlyObject10823<T>
  : T;

interface DeepReadonlyArray10823<T> extends ReadonlyArray<DeepReadonly10823<T>> {}

type DeepReadonlyObject10823<T> = {
  readonly [P in keyof T]: DeepReadonly10823<T[P]>;
};

type UnionToIntersection10823<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10823<T> = UnionToIntersection10823<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10823<T extends unknown[], V> = [...T, V];

type TuplifyUnion10823<T, L = LastOf10823<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10823<TuplifyUnion10823<Exclude<T, L>>, L>;

type DeepPartial10823<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10823<T[P]> }
  : T;

type Paths10823<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10823<K, Paths10823<T[K], Prev10823[D]>> : never }[keyof T]
  : never;

type Prev10823 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10823<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10823 {
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

type ConfigPaths10823 = Paths10823<NestedConfig10823>;

interface HeavyProps10823 {
  config: DeepPartial10823<NestedConfig10823>;
  path?: ConfigPaths10823;
}

const HeavyComponent10823 = memo(function HeavyComponent10823({ config }: HeavyProps10823) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10823) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10823 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10823: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10823.displayName = 'HeavyComponent10823';
export default HeavyComponent10823;
