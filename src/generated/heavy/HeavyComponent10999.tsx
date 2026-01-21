'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10999<T> = T extends (infer U)[]
  ? DeepReadonlyArray10999<U>
  : T extends object
  ? DeepReadonlyObject10999<T>
  : T;

interface DeepReadonlyArray10999<T> extends ReadonlyArray<DeepReadonly10999<T>> {}

type DeepReadonlyObject10999<T> = {
  readonly [P in keyof T]: DeepReadonly10999<T[P]>;
};

type UnionToIntersection10999<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10999<T> = UnionToIntersection10999<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10999<T extends unknown[], V> = [...T, V];

type TuplifyUnion10999<T, L = LastOf10999<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10999<TuplifyUnion10999<Exclude<T, L>>, L>;

type DeepPartial10999<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10999<T[P]> }
  : T;

type Paths10999<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10999<K, Paths10999<T[K], Prev10999[D]>> : never }[keyof T]
  : never;

type Prev10999 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10999<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10999 {
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

type ConfigPaths10999 = Paths10999<NestedConfig10999>;

interface HeavyProps10999 {
  config: DeepPartial10999<NestedConfig10999>;
  path?: ConfigPaths10999;
}

const HeavyComponent10999 = memo(function HeavyComponent10999({ config }: HeavyProps10999) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10999) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10999 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10999: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10999.displayName = 'HeavyComponent10999';
export default HeavyComponent10999;
