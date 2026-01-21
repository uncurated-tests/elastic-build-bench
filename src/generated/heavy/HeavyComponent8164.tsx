'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8164<T> = T extends (infer U)[]
  ? DeepReadonlyArray8164<U>
  : T extends object
  ? DeepReadonlyObject8164<T>
  : T;

interface DeepReadonlyArray8164<T> extends ReadonlyArray<DeepReadonly8164<T>> {}

type DeepReadonlyObject8164<T> = {
  readonly [P in keyof T]: DeepReadonly8164<T[P]>;
};

type UnionToIntersection8164<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8164<T> = UnionToIntersection8164<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8164<T extends unknown[], V> = [...T, V];

type TuplifyUnion8164<T, L = LastOf8164<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8164<TuplifyUnion8164<Exclude<T, L>>, L>;

type DeepPartial8164<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8164<T[P]> }
  : T;

type Paths8164<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8164<K, Paths8164<T[K], Prev8164[D]>> : never }[keyof T]
  : never;

type Prev8164 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8164<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8164 {
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

type ConfigPaths8164 = Paths8164<NestedConfig8164>;

interface HeavyProps8164 {
  config: DeepPartial8164<NestedConfig8164>;
  path?: ConfigPaths8164;
}

const HeavyComponent8164 = memo(function HeavyComponent8164({ config }: HeavyProps8164) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8164) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8164 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8164: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8164.displayName = 'HeavyComponent8164';
export default HeavyComponent8164;
