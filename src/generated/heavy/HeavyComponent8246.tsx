'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8246<T> = T extends (infer U)[]
  ? DeepReadonlyArray8246<U>
  : T extends object
  ? DeepReadonlyObject8246<T>
  : T;

interface DeepReadonlyArray8246<T> extends ReadonlyArray<DeepReadonly8246<T>> {}

type DeepReadonlyObject8246<T> = {
  readonly [P in keyof T]: DeepReadonly8246<T[P]>;
};

type UnionToIntersection8246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8246<T> = UnionToIntersection8246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8246<T extends unknown[], V> = [...T, V];

type TuplifyUnion8246<T, L = LastOf8246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8246<TuplifyUnion8246<Exclude<T, L>>, L>;

type DeepPartial8246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8246<T[P]> }
  : T;

type Paths8246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8246<K, Paths8246<T[K], Prev8246[D]>> : never }[keyof T]
  : never;

type Prev8246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8246 {
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

type ConfigPaths8246 = Paths8246<NestedConfig8246>;

interface HeavyProps8246 {
  config: DeepPartial8246<NestedConfig8246>;
  path?: ConfigPaths8246;
}

const HeavyComponent8246 = memo(function HeavyComponent8246({ config }: HeavyProps8246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8246.displayName = 'HeavyComponent8246';
export default HeavyComponent8246;
