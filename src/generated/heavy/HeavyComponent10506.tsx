'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10506<T> = T extends (infer U)[]
  ? DeepReadonlyArray10506<U>
  : T extends object
  ? DeepReadonlyObject10506<T>
  : T;

interface DeepReadonlyArray10506<T> extends ReadonlyArray<DeepReadonly10506<T>> {}

type DeepReadonlyObject10506<T> = {
  readonly [P in keyof T]: DeepReadonly10506<T[P]>;
};

type UnionToIntersection10506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10506<T> = UnionToIntersection10506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10506<T extends unknown[], V> = [...T, V];

type TuplifyUnion10506<T, L = LastOf10506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10506<TuplifyUnion10506<Exclude<T, L>>, L>;

type DeepPartial10506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10506<T[P]> }
  : T;

type Paths10506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10506<K, Paths10506<T[K], Prev10506[D]>> : never }[keyof T]
  : never;

type Prev10506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10506 {
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

type ConfigPaths10506 = Paths10506<NestedConfig10506>;

interface HeavyProps10506 {
  config: DeepPartial10506<NestedConfig10506>;
  path?: ConfigPaths10506;
}

const HeavyComponent10506 = memo(function HeavyComponent10506({ config }: HeavyProps10506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10506.displayName = 'HeavyComponent10506';
export default HeavyComponent10506;
