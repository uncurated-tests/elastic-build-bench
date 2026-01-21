'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8193<T> = T extends (infer U)[]
  ? DeepReadonlyArray8193<U>
  : T extends object
  ? DeepReadonlyObject8193<T>
  : T;

interface DeepReadonlyArray8193<T> extends ReadonlyArray<DeepReadonly8193<T>> {}

type DeepReadonlyObject8193<T> = {
  readonly [P in keyof T]: DeepReadonly8193<T[P]>;
};

type UnionToIntersection8193<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8193<T> = UnionToIntersection8193<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8193<T extends unknown[], V> = [...T, V];

type TuplifyUnion8193<T, L = LastOf8193<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8193<TuplifyUnion8193<Exclude<T, L>>, L>;

type DeepPartial8193<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8193<T[P]> }
  : T;

type Paths8193<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8193<K, Paths8193<T[K], Prev8193[D]>> : never }[keyof T]
  : never;

type Prev8193 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8193<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8193 {
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

type ConfigPaths8193 = Paths8193<NestedConfig8193>;

interface HeavyProps8193 {
  config: DeepPartial8193<NestedConfig8193>;
  path?: ConfigPaths8193;
}

const HeavyComponent8193 = memo(function HeavyComponent8193({ config }: HeavyProps8193) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8193) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8193 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8193: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8193.displayName = 'HeavyComponent8193';
export default HeavyComponent8193;
