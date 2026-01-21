'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8467<T> = T extends (infer U)[]
  ? DeepReadonlyArray8467<U>
  : T extends object
  ? DeepReadonlyObject8467<T>
  : T;

interface DeepReadonlyArray8467<T> extends ReadonlyArray<DeepReadonly8467<T>> {}

type DeepReadonlyObject8467<T> = {
  readonly [P in keyof T]: DeepReadonly8467<T[P]>;
};

type UnionToIntersection8467<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8467<T> = UnionToIntersection8467<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8467<T extends unknown[], V> = [...T, V];

type TuplifyUnion8467<T, L = LastOf8467<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8467<TuplifyUnion8467<Exclude<T, L>>, L>;

type DeepPartial8467<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8467<T[P]> }
  : T;

type Paths8467<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8467<K, Paths8467<T[K], Prev8467[D]>> : never }[keyof T]
  : never;

type Prev8467 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8467<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8467 {
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

type ConfigPaths8467 = Paths8467<NestedConfig8467>;

interface HeavyProps8467 {
  config: DeepPartial8467<NestedConfig8467>;
  path?: ConfigPaths8467;
}

const HeavyComponent8467 = memo(function HeavyComponent8467({ config }: HeavyProps8467) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8467) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8467 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8467: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8467.displayName = 'HeavyComponent8467';
export default HeavyComponent8467;
