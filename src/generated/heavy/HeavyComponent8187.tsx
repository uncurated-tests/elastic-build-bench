'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8187<T> = T extends (infer U)[]
  ? DeepReadonlyArray8187<U>
  : T extends object
  ? DeepReadonlyObject8187<T>
  : T;

interface DeepReadonlyArray8187<T> extends ReadonlyArray<DeepReadonly8187<T>> {}

type DeepReadonlyObject8187<T> = {
  readonly [P in keyof T]: DeepReadonly8187<T[P]>;
};

type UnionToIntersection8187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8187<T> = UnionToIntersection8187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8187<T extends unknown[], V> = [...T, V];

type TuplifyUnion8187<T, L = LastOf8187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8187<TuplifyUnion8187<Exclude<T, L>>, L>;

type DeepPartial8187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8187<T[P]> }
  : T;

type Paths8187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8187<K, Paths8187<T[K], Prev8187[D]>> : never }[keyof T]
  : never;

type Prev8187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8187 {
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

type ConfigPaths8187 = Paths8187<NestedConfig8187>;

interface HeavyProps8187 {
  config: DeepPartial8187<NestedConfig8187>;
  path?: ConfigPaths8187;
}

const HeavyComponent8187 = memo(function HeavyComponent8187({ config }: HeavyProps8187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8187.displayName = 'HeavyComponent8187';
export default HeavyComponent8187;
