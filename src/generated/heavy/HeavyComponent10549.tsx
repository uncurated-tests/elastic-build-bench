'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10549<T> = T extends (infer U)[]
  ? DeepReadonlyArray10549<U>
  : T extends object
  ? DeepReadonlyObject10549<T>
  : T;

interface DeepReadonlyArray10549<T> extends ReadonlyArray<DeepReadonly10549<T>> {}

type DeepReadonlyObject10549<T> = {
  readonly [P in keyof T]: DeepReadonly10549<T[P]>;
};

type UnionToIntersection10549<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10549<T> = UnionToIntersection10549<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10549<T extends unknown[], V> = [...T, V];

type TuplifyUnion10549<T, L = LastOf10549<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10549<TuplifyUnion10549<Exclude<T, L>>, L>;

type DeepPartial10549<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10549<T[P]> }
  : T;

type Paths10549<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10549<K, Paths10549<T[K], Prev10549[D]>> : never }[keyof T]
  : never;

type Prev10549 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10549<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10549 {
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

type ConfigPaths10549 = Paths10549<NestedConfig10549>;

interface HeavyProps10549 {
  config: DeepPartial10549<NestedConfig10549>;
  path?: ConfigPaths10549;
}

const HeavyComponent10549 = memo(function HeavyComponent10549({ config }: HeavyProps10549) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10549) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10549 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10549: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10549.displayName = 'HeavyComponent10549';
export default HeavyComponent10549;
