'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8150<T> = T extends (infer U)[]
  ? DeepReadonlyArray8150<U>
  : T extends object
  ? DeepReadonlyObject8150<T>
  : T;

interface DeepReadonlyArray8150<T> extends ReadonlyArray<DeepReadonly8150<T>> {}

type DeepReadonlyObject8150<T> = {
  readonly [P in keyof T]: DeepReadonly8150<T[P]>;
};

type UnionToIntersection8150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8150<T> = UnionToIntersection8150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8150<T extends unknown[], V> = [...T, V];

type TuplifyUnion8150<T, L = LastOf8150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8150<TuplifyUnion8150<Exclude<T, L>>, L>;

type DeepPartial8150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8150<T[P]> }
  : T;

type Paths8150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8150<K, Paths8150<T[K], Prev8150[D]>> : never }[keyof T]
  : never;

type Prev8150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8150 {
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

type ConfigPaths8150 = Paths8150<NestedConfig8150>;

interface HeavyProps8150 {
  config: DeepPartial8150<NestedConfig8150>;
  path?: ConfigPaths8150;
}

const HeavyComponent8150 = memo(function HeavyComponent8150({ config }: HeavyProps8150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8150.displayName = 'HeavyComponent8150';
export default HeavyComponent8150;
