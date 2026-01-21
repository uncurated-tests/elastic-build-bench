'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly870<T> = T extends (infer U)[]
  ? DeepReadonlyArray870<U>
  : T extends object
  ? DeepReadonlyObject870<T>
  : T;

interface DeepReadonlyArray870<T> extends ReadonlyArray<DeepReadonly870<T>> {}

type DeepReadonlyObject870<T> = {
  readonly [P in keyof T]: DeepReadonly870<T[P]>;
};

type UnionToIntersection870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf870<T> = UnionToIntersection870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push870<T extends unknown[], V> = [...T, V];

type TuplifyUnion870<T, L = LastOf870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push870<TuplifyUnion870<Exclude<T, L>>, L>;

type DeepPartial870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial870<T[P]> }
  : T;

type Paths870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join870<K, Paths870<T[K], Prev870[D]>> : never }[keyof T]
  : never;

type Prev870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig870 {
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

type ConfigPaths870 = Paths870<NestedConfig870>;

interface HeavyProps870 {
  config: DeepPartial870<NestedConfig870>;
  path?: ConfigPaths870;
}

const HeavyComponent870 = memo(function HeavyComponent870({ config }: HeavyProps870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent870.displayName = 'HeavyComponent870';
export default HeavyComponent870;
