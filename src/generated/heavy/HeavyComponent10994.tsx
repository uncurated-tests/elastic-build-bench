'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10994<T> = T extends (infer U)[]
  ? DeepReadonlyArray10994<U>
  : T extends object
  ? DeepReadonlyObject10994<T>
  : T;

interface DeepReadonlyArray10994<T> extends ReadonlyArray<DeepReadonly10994<T>> {}

type DeepReadonlyObject10994<T> = {
  readonly [P in keyof T]: DeepReadonly10994<T[P]>;
};

type UnionToIntersection10994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10994<T> = UnionToIntersection10994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10994<T extends unknown[], V> = [...T, V];

type TuplifyUnion10994<T, L = LastOf10994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10994<TuplifyUnion10994<Exclude<T, L>>, L>;

type DeepPartial10994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10994<T[P]> }
  : T;

type Paths10994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10994<K, Paths10994<T[K], Prev10994[D]>> : never }[keyof T]
  : never;

type Prev10994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10994 {
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

type ConfigPaths10994 = Paths10994<NestedConfig10994>;

interface HeavyProps10994 {
  config: DeepPartial10994<NestedConfig10994>;
  path?: ConfigPaths10994;
}

const HeavyComponent10994 = memo(function HeavyComponent10994({ config }: HeavyProps10994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10994.displayName = 'HeavyComponent10994';
export default HeavyComponent10994;
