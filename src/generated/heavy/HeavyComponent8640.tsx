'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8640<T> = T extends (infer U)[]
  ? DeepReadonlyArray8640<U>
  : T extends object
  ? DeepReadonlyObject8640<T>
  : T;

interface DeepReadonlyArray8640<T> extends ReadonlyArray<DeepReadonly8640<T>> {}

type DeepReadonlyObject8640<T> = {
  readonly [P in keyof T]: DeepReadonly8640<T[P]>;
};

type UnionToIntersection8640<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8640<T> = UnionToIntersection8640<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8640<T extends unknown[], V> = [...T, V];

type TuplifyUnion8640<T, L = LastOf8640<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8640<TuplifyUnion8640<Exclude<T, L>>, L>;

type DeepPartial8640<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8640<T[P]> }
  : T;

type Paths8640<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8640<K, Paths8640<T[K], Prev8640[D]>> : never }[keyof T]
  : never;

type Prev8640 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8640<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8640 {
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

type ConfigPaths8640 = Paths8640<NestedConfig8640>;

interface HeavyProps8640 {
  config: DeepPartial8640<NestedConfig8640>;
  path?: ConfigPaths8640;
}

const HeavyComponent8640 = memo(function HeavyComponent8640({ config }: HeavyProps8640) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8640) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8640 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8640: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8640.displayName = 'HeavyComponent8640';
export default HeavyComponent8640;
