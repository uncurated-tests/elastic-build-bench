'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly65<T> = T extends (infer U)[]
  ? DeepReadonlyArray65<U>
  : T extends object
  ? DeepReadonlyObject65<T>
  : T;

interface DeepReadonlyArray65<T> extends ReadonlyArray<DeepReadonly65<T>> {}

type DeepReadonlyObject65<T> = {
  readonly [P in keyof T]: DeepReadonly65<T[P]>;
};

type UnionToIntersection65<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf65<T> = UnionToIntersection65<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push65<T extends unknown[], V> = [...T, V];

type TuplifyUnion65<T, L = LastOf65<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push65<TuplifyUnion65<Exclude<T, L>>, L>;

type DeepPartial65<T> = T extends object
  ? { [P in keyof T]?: DeepPartial65<T[P]> }
  : T;

type Paths65<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join65<K, Paths65<T[K], Prev65[D]>> : never }[keyof T]
  : never;

type Prev65 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join65<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig65 {
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

type ConfigPaths65 = Paths65<NestedConfig65>;

interface HeavyProps65 {
  config: DeepPartial65<NestedConfig65>;
  path?: ConfigPaths65;
}

const HeavyComponent65 = memo(function HeavyComponent65({ config }: HeavyProps65) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 65) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-65 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H65: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent65.displayName = 'HeavyComponent65';
export default HeavyComponent65;
