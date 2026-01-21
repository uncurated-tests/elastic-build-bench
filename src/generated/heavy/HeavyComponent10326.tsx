'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10326<T> = T extends (infer U)[]
  ? DeepReadonlyArray10326<U>
  : T extends object
  ? DeepReadonlyObject10326<T>
  : T;

interface DeepReadonlyArray10326<T> extends ReadonlyArray<DeepReadonly10326<T>> {}

type DeepReadonlyObject10326<T> = {
  readonly [P in keyof T]: DeepReadonly10326<T[P]>;
};

type UnionToIntersection10326<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10326<T> = UnionToIntersection10326<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10326<T extends unknown[], V> = [...T, V];

type TuplifyUnion10326<T, L = LastOf10326<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10326<TuplifyUnion10326<Exclude<T, L>>, L>;

type DeepPartial10326<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10326<T[P]> }
  : T;

type Paths10326<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10326<K, Paths10326<T[K], Prev10326[D]>> : never }[keyof T]
  : never;

type Prev10326 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10326<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10326 {
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

type ConfigPaths10326 = Paths10326<NestedConfig10326>;

interface HeavyProps10326 {
  config: DeepPartial10326<NestedConfig10326>;
  path?: ConfigPaths10326;
}

const HeavyComponent10326 = memo(function HeavyComponent10326({ config }: HeavyProps10326) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10326) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10326 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10326: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10326.displayName = 'HeavyComponent10326';
export default HeavyComponent10326;
