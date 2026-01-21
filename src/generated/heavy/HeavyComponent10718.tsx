'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10718<T> = T extends (infer U)[]
  ? DeepReadonlyArray10718<U>
  : T extends object
  ? DeepReadonlyObject10718<T>
  : T;

interface DeepReadonlyArray10718<T> extends ReadonlyArray<DeepReadonly10718<T>> {}

type DeepReadonlyObject10718<T> = {
  readonly [P in keyof T]: DeepReadonly10718<T[P]>;
};

type UnionToIntersection10718<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10718<T> = UnionToIntersection10718<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10718<T extends unknown[], V> = [...T, V];

type TuplifyUnion10718<T, L = LastOf10718<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10718<TuplifyUnion10718<Exclude<T, L>>, L>;

type DeepPartial10718<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10718<T[P]> }
  : T;

type Paths10718<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10718<K, Paths10718<T[K], Prev10718[D]>> : never }[keyof T]
  : never;

type Prev10718 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10718<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10718 {
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

type ConfigPaths10718 = Paths10718<NestedConfig10718>;

interface HeavyProps10718 {
  config: DeepPartial10718<NestedConfig10718>;
  path?: ConfigPaths10718;
}

const HeavyComponent10718 = memo(function HeavyComponent10718({ config }: HeavyProps10718) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10718) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10718 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10718: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10718.displayName = 'HeavyComponent10718';
export default HeavyComponent10718;
