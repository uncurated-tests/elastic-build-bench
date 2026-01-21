'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10288<T> = T extends (infer U)[]
  ? DeepReadonlyArray10288<U>
  : T extends object
  ? DeepReadonlyObject10288<T>
  : T;

interface DeepReadonlyArray10288<T> extends ReadonlyArray<DeepReadonly10288<T>> {}

type DeepReadonlyObject10288<T> = {
  readonly [P in keyof T]: DeepReadonly10288<T[P]>;
};

type UnionToIntersection10288<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10288<T> = UnionToIntersection10288<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10288<T extends unknown[], V> = [...T, V];

type TuplifyUnion10288<T, L = LastOf10288<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10288<TuplifyUnion10288<Exclude<T, L>>, L>;

type DeepPartial10288<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10288<T[P]> }
  : T;

type Paths10288<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10288<K, Paths10288<T[K], Prev10288[D]>> : never }[keyof T]
  : never;

type Prev10288 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10288<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10288 {
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

type ConfigPaths10288 = Paths10288<NestedConfig10288>;

interface HeavyProps10288 {
  config: DeepPartial10288<NestedConfig10288>;
  path?: ConfigPaths10288;
}

const HeavyComponent10288 = memo(function HeavyComponent10288({ config }: HeavyProps10288) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10288) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10288 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10288: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10288.displayName = 'HeavyComponent10288';
export default HeavyComponent10288;
