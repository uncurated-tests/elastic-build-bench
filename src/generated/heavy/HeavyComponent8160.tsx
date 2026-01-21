'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8160<T> = T extends (infer U)[]
  ? DeepReadonlyArray8160<U>
  : T extends object
  ? DeepReadonlyObject8160<T>
  : T;

interface DeepReadonlyArray8160<T> extends ReadonlyArray<DeepReadonly8160<T>> {}

type DeepReadonlyObject8160<T> = {
  readonly [P in keyof T]: DeepReadonly8160<T[P]>;
};

type UnionToIntersection8160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8160<T> = UnionToIntersection8160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8160<T extends unknown[], V> = [...T, V];

type TuplifyUnion8160<T, L = LastOf8160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8160<TuplifyUnion8160<Exclude<T, L>>, L>;

type DeepPartial8160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8160<T[P]> }
  : T;

type Paths8160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8160<K, Paths8160<T[K], Prev8160[D]>> : never }[keyof T]
  : never;

type Prev8160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8160 {
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

type ConfigPaths8160 = Paths8160<NestedConfig8160>;

interface HeavyProps8160 {
  config: DeepPartial8160<NestedConfig8160>;
  path?: ConfigPaths8160;
}

const HeavyComponent8160 = memo(function HeavyComponent8160({ config }: HeavyProps8160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8160.displayName = 'HeavyComponent8160';
export default HeavyComponent8160;
