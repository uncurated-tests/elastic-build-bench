'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10775<T> = T extends (infer U)[]
  ? DeepReadonlyArray10775<U>
  : T extends object
  ? DeepReadonlyObject10775<T>
  : T;

interface DeepReadonlyArray10775<T> extends ReadonlyArray<DeepReadonly10775<T>> {}

type DeepReadonlyObject10775<T> = {
  readonly [P in keyof T]: DeepReadonly10775<T[P]>;
};

type UnionToIntersection10775<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10775<T> = UnionToIntersection10775<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10775<T extends unknown[], V> = [...T, V];

type TuplifyUnion10775<T, L = LastOf10775<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10775<TuplifyUnion10775<Exclude<T, L>>, L>;

type DeepPartial10775<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10775<T[P]> }
  : T;

type Paths10775<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10775<K, Paths10775<T[K], Prev10775[D]>> : never }[keyof T]
  : never;

type Prev10775 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10775<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10775 {
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

type ConfigPaths10775 = Paths10775<NestedConfig10775>;

interface HeavyProps10775 {
  config: DeepPartial10775<NestedConfig10775>;
  path?: ConfigPaths10775;
}

const HeavyComponent10775 = memo(function HeavyComponent10775({ config }: HeavyProps10775) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10775) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10775 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10775: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10775.displayName = 'HeavyComponent10775';
export default HeavyComponent10775;
