'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10656<T> = T extends (infer U)[]
  ? DeepReadonlyArray10656<U>
  : T extends object
  ? DeepReadonlyObject10656<T>
  : T;

interface DeepReadonlyArray10656<T> extends ReadonlyArray<DeepReadonly10656<T>> {}

type DeepReadonlyObject10656<T> = {
  readonly [P in keyof T]: DeepReadonly10656<T[P]>;
};

type UnionToIntersection10656<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10656<T> = UnionToIntersection10656<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10656<T extends unknown[], V> = [...T, V];

type TuplifyUnion10656<T, L = LastOf10656<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10656<TuplifyUnion10656<Exclude<T, L>>, L>;

type DeepPartial10656<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10656<T[P]> }
  : T;

type Paths10656<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10656<K, Paths10656<T[K], Prev10656[D]>> : never }[keyof T]
  : never;

type Prev10656 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10656<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10656 {
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

type ConfigPaths10656 = Paths10656<NestedConfig10656>;

interface HeavyProps10656 {
  config: DeepPartial10656<NestedConfig10656>;
  path?: ConfigPaths10656;
}

const HeavyComponent10656 = memo(function HeavyComponent10656({ config }: HeavyProps10656) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10656) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10656 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10656: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10656.displayName = 'HeavyComponent10656';
export default HeavyComponent10656;
