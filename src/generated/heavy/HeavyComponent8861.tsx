'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8861<T> = T extends (infer U)[]
  ? DeepReadonlyArray8861<U>
  : T extends object
  ? DeepReadonlyObject8861<T>
  : T;

interface DeepReadonlyArray8861<T> extends ReadonlyArray<DeepReadonly8861<T>> {}

type DeepReadonlyObject8861<T> = {
  readonly [P in keyof T]: DeepReadonly8861<T[P]>;
};

type UnionToIntersection8861<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8861<T> = UnionToIntersection8861<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8861<T extends unknown[], V> = [...T, V];

type TuplifyUnion8861<T, L = LastOf8861<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8861<TuplifyUnion8861<Exclude<T, L>>, L>;

type DeepPartial8861<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8861<T[P]> }
  : T;

type Paths8861<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8861<K, Paths8861<T[K], Prev8861[D]>> : never }[keyof T]
  : never;

type Prev8861 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8861<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8861 {
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

type ConfigPaths8861 = Paths8861<NestedConfig8861>;

interface HeavyProps8861 {
  config: DeepPartial8861<NestedConfig8861>;
  path?: ConfigPaths8861;
}

const HeavyComponent8861 = memo(function HeavyComponent8861({ config }: HeavyProps8861) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8861) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8861 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8861: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8861.displayName = 'HeavyComponent8861';
export default HeavyComponent8861;
