'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8740<T> = T extends (infer U)[]
  ? DeepReadonlyArray8740<U>
  : T extends object
  ? DeepReadonlyObject8740<T>
  : T;

interface DeepReadonlyArray8740<T> extends ReadonlyArray<DeepReadonly8740<T>> {}

type DeepReadonlyObject8740<T> = {
  readonly [P in keyof T]: DeepReadonly8740<T[P]>;
};

type UnionToIntersection8740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8740<T> = UnionToIntersection8740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8740<T extends unknown[], V> = [...T, V];

type TuplifyUnion8740<T, L = LastOf8740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8740<TuplifyUnion8740<Exclude<T, L>>, L>;

type DeepPartial8740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8740<T[P]> }
  : T;

type Paths8740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8740<K, Paths8740<T[K], Prev8740[D]>> : never }[keyof T]
  : never;

type Prev8740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8740 {
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

type ConfigPaths8740 = Paths8740<NestedConfig8740>;

interface HeavyProps8740 {
  config: DeepPartial8740<NestedConfig8740>;
  path?: ConfigPaths8740;
}

const HeavyComponent8740 = memo(function HeavyComponent8740({ config }: HeavyProps8740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8740.displayName = 'HeavyComponent8740';
export default HeavyComponent8740;
