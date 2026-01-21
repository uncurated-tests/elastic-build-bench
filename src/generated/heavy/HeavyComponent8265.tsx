'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8265<T> = T extends (infer U)[]
  ? DeepReadonlyArray8265<U>
  : T extends object
  ? DeepReadonlyObject8265<T>
  : T;

interface DeepReadonlyArray8265<T> extends ReadonlyArray<DeepReadonly8265<T>> {}

type DeepReadonlyObject8265<T> = {
  readonly [P in keyof T]: DeepReadonly8265<T[P]>;
};

type UnionToIntersection8265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8265<T> = UnionToIntersection8265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8265<T extends unknown[], V> = [...T, V];

type TuplifyUnion8265<T, L = LastOf8265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8265<TuplifyUnion8265<Exclude<T, L>>, L>;

type DeepPartial8265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8265<T[P]> }
  : T;

type Paths8265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8265<K, Paths8265<T[K], Prev8265[D]>> : never }[keyof T]
  : never;

type Prev8265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8265 {
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

type ConfigPaths8265 = Paths8265<NestedConfig8265>;

interface HeavyProps8265 {
  config: DeepPartial8265<NestedConfig8265>;
  path?: ConfigPaths8265;
}

const HeavyComponent8265 = memo(function HeavyComponent8265({ config }: HeavyProps8265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8265.displayName = 'HeavyComponent8265';
export default HeavyComponent8265;
