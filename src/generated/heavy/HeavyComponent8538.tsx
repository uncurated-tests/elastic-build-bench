'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8538<T> = T extends (infer U)[]
  ? DeepReadonlyArray8538<U>
  : T extends object
  ? DeepReadonlyObject8538<T>
  : T;

interface DeepReadonlyArray8538<T> extends ReadonlyArray<DeepReadonly8538<T>> {}

type DeepReadonlyObject8538<T> = {
  readonly [P in keyof T]: DeepReadonly8538<T[P]>;
};

type UnionToIntersection8538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8538<T> = UnionToIntersection8538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8538<T extends unknown[], V> = [...T, V];

type TuplifyUnion8538<T, L = LastOf8538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8538<TuplifyUnion8538<Exclude<T, L>>, L>;

type DeepPartial8538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8538<T[P]> }
  : T;

type Paths8538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8538<K, Paths8538<T[K], Prev8538[D]>> : never }[keyof T]
  : never;

type Prev8538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8538 {
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

type ConfigPaths8538 = Paths8538<NestedConfig8538>;

interface HeavyProps8538 {
  config: DeepPartial8538<NestedConfig8538>;
  path?: ConfigPaths8538;
}

const HeavyComponent8538 = memo(function HeavyComponent8538({ config }: HeavyProps8538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8538.displayName = 'HeavyComponent8538';
export default HeavyComponent8538;
