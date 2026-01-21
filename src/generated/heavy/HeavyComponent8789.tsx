'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8789<T> = T extends (infer U)[]
  ? DeepReadonlyArray8789<U>
  : T extends object
  ? DeepReadonlyObject8789<T>
  : T;

interface DeepReadonlyArray8789<T> extends ReadonlyArray<DeepReadonly8789<T>> {}

type DeepReadonlyObject8789<T> = {
  readonly [P in keyof T]: DeepReadonly8789<T[P]>;
};

type UnionToIntersection8789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8789<T> = UnionToIntersection8789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8789<T extends unknown[], V> = [...T, V];

type TuplifyUnion8789<T, L = LastOf8789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8789<TuplifyUnion8789<Exclude<T, L>>, L>;

type DeepPartial8789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8789<T[P]> }
  : T;

type Paths8789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8789<K, Paths8789<T[K], Prev8789[D]>> : never }[keyof T]
  : never;

type Prev8789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8789 {
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

type ConfigPaths8789 = Paths8789<NestedConfig8789>;

interface HeavyProps8789 {
  config: DeepPartial8789<NestedConfig8789>;
  path?: ConfigPaths8789;
}

const HeavyComponent8789 = memo(function HeavyComponent8789({ config }: HeavyProps8789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8789.displayName = 'HeavyComponent8789';
export default HeavyComponent8789;
