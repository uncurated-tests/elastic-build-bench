'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8947<T> = T extends (infer U)[]
  ? DeepReadonlyArray8947<U>
  : T extends object
  ? DeepReadonlyObject8947<T>
  : T;

interface DeepReadonlyArray8947<T> extends ReadonlyArray<DeepReadonly8947<T>> {}

type DeepReadonlyObject8947<T> = {
  readonly [P in keyof T]: DeepReadonly8947<T[P]>;
};

type UnionToIntersection8947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8947<T> = UnionToIntersection8947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8947<T extends unknown[], V> = [...T, V];

type TuplifyUnion8947<T, L = LastOf8947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8947<TuplifyUnion8947<Exclude<T, L>>, L>;

type DeepPartial8947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8947<T[P]> }
  : T;

type Paths8947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8947<K, Paths8947<T[K], Prev8947[D]>> : never }[keyof T]
  : never;

type Prev8947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8947 {
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

type ConfigPaths8947 = Paths8947<NestedConfig8947>;

interface HeavyProps8947 {
  config: DeepPartial8947<NestedConfig8947>;
  path?: ConfigPaths8947;
}

const HeavyComponent8947 = memo(function HeavyComponent8947({ config }: HeavyProps8947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8947.displayName = 'HeavyComponent8947';
export default HeavyComponent8947;
