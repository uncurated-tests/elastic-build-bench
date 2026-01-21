'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8444<T> = T extends (infer U)[]
  ? DeepReadonlyArray8444<U>
  : T extends object
  ? DeepReadonlyObject8444<T>
  : T;

interface DeepReadonlyArray8444<T> extends ReadonlyArray<DeepReadonly8444<T>> {}

type DeepReadonlyObject8444<T> = {
  readonly [P in keyof T]: DeepReadonly8444<T[P]>;
};

type UnionToIntersection8444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8444<T> = UnionToIntersection8444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8444<T extends unknown[], V> = [...T, V];

type TuplifyUnion8444<T, L = LastOf8444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8444<TuplifyUnion8444<Exclude<T, L>>, L>;

type DeepPartial8444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8444<T[P]> }
  : T;

type Paths8444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8444<K, Paths8444<T[K], Prev8444[D]>> : never }[keyof T]
  : never;

type Prev8444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8444 {
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

type ConfigPaths8444 = Paths8444<NestedConfig8444>;

interface HeavyProps8444 {
  config: DeepPartial8444<NestedConfig8444>;
  path?: ConfigPaths8444;
}

const HeavyComponent8444 = memo(function HeavyComponent8444({ config }: HeavyProps8444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8444.displayName = 'HeavyComponent8444';
export default HeavyComponent8444;
