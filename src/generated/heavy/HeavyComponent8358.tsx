'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8358<T> = T extends (infer U)[]
  ? DeepReadonlyArray8358<U>
  : T extends object
  ? DeepReadonlyObject8358<T>
  : T;

interface DeepReadonlyArray8358<T> extends ReadonlyArray<DeepReadonly8358<T>> {}

type DeepReadonlyObject8358<T> = {
  readonly [P in keyof T]: DeepReadonly8358<T[P]>;
};

type UnionToIntersection8358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8358<T> = UnionToIntersection8358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8358<T extends unknown[], V> = [...T, V];

type TuplifyUnion8358<T, L = LastOf8358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8358<TuplifyUnion8358<Exclude<T, L>>, L>;

type DeepPartial8358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8358<T[P]> }
  : T;

type Paths8358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8358<K, Paths8358<T[K], Prev8358[D]>> : never }[keyof T]
  : never;

type Prev8358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8358 {
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

type ConfigPaths8358 = Paths8358<NestedConfig8358>;

interface HeavyProps8358 {
  config: DeepPartial8358<NestedConfig8358>;
  path?: ConfigPaths8358;
}

const HeavyComponent8358 = memo(function HeavyComponent8358({ config }: HeavyProps8358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8358.displayName = 'HeavyComponent8358';
export default HeavyComponent8358;
