'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8760<T> = T extends (infer U)[]
  ? DeepReadonlyArray8760<U>
  : T extends object
  ? DeepReadonlyObject8760<T>
  : T;

interface DeepReadonlyArray8760<T> extends ReadonlyArray<DeepReadonly8760<T>> {}

type DeepReadonlyObject8760<T> = {
  readonly [P in keyof T]: DeepReadonly8760<T[P]>;
};

type UnionToIntersection8760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8760<T> = UnionToIntersection8760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8760<T extends unknown[], V> = [...T, V];

type TuplifyUnion8760<T, L = LastOf8760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8760<TuplifyUnion8760<Exclude<T, L>>, L>;

type DeepPartial8760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8760<T[P]> }
  : T;

type Paths8760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8760<K, Paths8760<T[K], Prev8760[D]>> : never }[keyof T]
  : never;

type Prev8760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8760 {
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

type ConfigPaths8760 = Paths8760<NestedConfig8760>;

interface HeavyProps8760 {
  config: DeepPartial8760<NestedConfig8760>;
  path?: ConfigPaths8760;
}

const HeavyComponent8760 = memo(function HeavyComponent8760({ config }: HeavyProps8760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8760.displayName = 'HeavyComponent8760';
export default HeavyComponent8760;
