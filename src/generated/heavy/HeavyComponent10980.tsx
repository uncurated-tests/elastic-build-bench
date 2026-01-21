'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10980<T> = T extends (infer U)[]
  ? DeepReadonlyArray10980<U>
  : T extends object
  ? DeepReadonlyObject10980<T>
  : T;

interface DeepReadonlyArray10980<T> extends ReadonlyArray<DeepReadonly10980<T>> {}

type DeepReadonlyObject10980<T> = {
  readonly [P in keyof T]: DeepReadonly10980<T[P]>;
};

type UnionToIntersection10980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10980<T> = UnionToIntersection10980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10980<T extends unknown[], V> = [...T, V];

type TuplifyUnion10980<T, L = LastOf10980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10980<TuplifyUnion10980<Exclude<T, L>>, L>;

type DeepPartial10980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10980<T[P]> }
  : T;

type Paths10980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10980<K, Paths10980<T[K], Prev10980[D]>> : never }[keyof T]
  : never;

type Prev10980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10980 {
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

type ConfigPaths10980 = Paths10980<NestedConfig10980>;

interface HeavyProps10980 {
  config: DeepPartial10980<NestedConfig10980>;
  path?: ConfigPaths10980;
}

const HeavyComponent10980 = memo(function HeavyComponent10980({ config }: HeavyProps10980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10980.displayName = 'HeavyComponent10980';
export default HeavyComponent10980;
