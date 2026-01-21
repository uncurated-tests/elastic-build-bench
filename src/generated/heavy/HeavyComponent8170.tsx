'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8170<T> = T extends (infer U)[]
  ? DeepReadonlyArray8170<U>
  : T extends object
  ? DeepReadonlyObject8170<T>
  : T;

interface DeepReadonlyArray8170<T> extends ReadonlyArray<DeepReadonly8170<T>> {}

type DeepReadonlyObject8170<T> = {
  readonly [P in keyof T]: DeepReadonly8170<T[P]>;
};

type UnionToIntersection8170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8170<T> = UnionToIntersection8170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8170<T extends unknown[], V> = [...T, V];

type TuplifyUnion8170<T, L = LastOf8170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8170<TuplifyUnion8170<Exclude<T, L>>, L>;

type DeepPartial8170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8170<T[P]> }
  : T;

type Paths8170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8170<K, Paths8170<T[K], Prev8170[D]>> : never }[keyof T]
  : never;

type Prev8170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8170 {
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

type ConfigPaths8170 = Paths8170<NestedConfig8170>;

interface HeavyProps8170 {
  config: DeepPartial8170<NestedConfig8170>;
  path?: ConfigPaths8170;
}

const HeavyComponent8170 = memo(function HeavyComponent8170({ config }: HeavyProps8170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8170.displayName = 'HeavyComponent8170';
export default HeavyComponent8170;
