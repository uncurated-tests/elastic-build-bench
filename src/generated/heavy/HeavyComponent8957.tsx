'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8957<T> = T extends (infer U)[]
  ? DeepReadonlyArray8957<U>
  : T extends object
  ? DeepReadonlyObject8957<T>
  : T;

interface DeepReadonlyArray8957<T> extends ReadonlyArray<DeepReadonly8957<T>> {}

type DeepReadonlyObject8957<T> = {
  readonly [P in keyof T]: DeepReadonly8957<T[P]>;
};

type UnionToIntersection8957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8957<T> = UnionToIntersection8957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8957<T extends unknown[], V> = [...T, V];

type TuplifyUnion8957<T, L = LastOf8957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8957<TuplifyUnion8957<Exclude<T, L>>, L>;

type DeepPartial8957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8957<T[P]> }
  : T;

type Paths8957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8957<K, Paths8957<T[K], Prev8957[D]>> : never }[keyof T]
  : never;

type Prev8957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8957 {
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

type ConfigPaths8957 = Paths8957<NestedConfig8957>;

interface HeavyProps8957 {
  config: DeepPartial8957<NestedConfig8957>;
  path?: ConfigPaths8957;
}

const HeavyComponent8957 = memo(function HeavyComponent8957({ config }: HeavyProps8957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8957.displayName = 'HeavyComponent8957';
export default HeavyComponent8957;
