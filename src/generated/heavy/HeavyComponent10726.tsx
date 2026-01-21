'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10726<T> = T extends (infer U)[]
  ? DeepReadonlyArray10726<U>
  : T extends object
  ? DeepReadonlyObject10726<T>
  : T;

interface DeepReadonlyArray10726<T> extends ReadonlyArray<DeepReadonly10726<T>> {}

type DeepReadonlyObject10726<T> = {
  readonly [P in keyof T]: DeepReadonly10726<T[P]>;
};

type UnionToIntersection10726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10726<T> = UnionToIntersection10726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10726<T extends unknown[], V> = [...T, V];

type TuplifyUnion10726<T, L = LastOf10726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10726<TuplifyUnion10726<Exclude<T, L>>, L>;

type DeepPartial10726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10726<T[P]> }
  : T;

type Paths10726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10726<K, Paths10726<T[K], Prev10726[D]>> : never }[keyof T]
  : never;

type Prev10726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10726 {
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

type ConfigPaths10726 = Paths10726<NestedConfig10726>;

interface HeavyProps10726 {
  config: DeepPartial10726<NestedConfig10726>;
  path?: ConfigPaths10726;
}

const HeavyComponent10726 = memo(function HeavyComponent10726({ config }: HeavyProps10726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10726.displayName = 'HeavyComponent10726';
export default HeavyComponent10726;
