'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8346<T> = T extends (infer U)[]
  ? DeepReadonlyArray8346<U>
  : T extends object
  ? DeepReadonlyObject8346<T>
  : T;

interface DeepReadonlyArray8346<T> extends ReadonlyArray<DeepReadonly8346<T>> {}

type DeepReadonlyObject8346<T> = {
  readonly [P in keyof T]: DeepReadonly8346<T[P]>;
};

type UnionToIntersection8346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8346<T> = UnionToIntersection8346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8346<T extends unknown[], V> = [...T, V];

type TuplifyUnion8346<T, L = LastOf8346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8346<TuplifyUnion8346<Exclude<T, L>>, L>;

type DeepPartial8346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8346<T[P]> }
  : T;

type Paths8346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8346<K, Paths8346<T[K], Prev8346[D]>> : never }[keyof T]
  : never;

type Prev8346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8346 {
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

type ConfigPaths8346 = Paths8346<NestedConfig8346>;

interface HeavyProps8346 {
  config: DeepPartial8346<NestedConfig8346>;
  path?: ConfigPaths8346;
}

const HeavyComponent8346 = memo(function HeavyComponent8346({ config }: HeavyProps8346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8346.displayName = 'HeavyComponent8346';
export default HeavyComponent8346;
