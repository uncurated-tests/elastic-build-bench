'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8336<T> = T extends (infer U)[]
  ? DeepReadonlyArray8336<U>
  : T extends object
  ? DeepReadonlyObject8336<T>
  : T;

interface DeepReadonlyArray8336<T> extends ReadonlyArray<DeepReadonly8336<T>> {}

type DeepReadonlyObject8336<T> = {
  readonly [P in keyof T]: DeepReadonly8336<T[P]>;
};

type UnionToIntersection8336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8336<T> = UnionToIntersection8336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8336<T extends unknown[], V> = [...T, V];

type TuplifyUnion8336<T, L = LastOf8336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8336<TuplifyUnion8336<Exclude<T, L>>, L>;

type DeepPartial8336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8336<T[P]> }
  : T;

type Paths8336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8336<K, Paths8336<T[K], Prev8336[D]>> : never }[keyof T]
  : never;

type Prev8336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8336 {
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

type ConfigPaths8336 = Paths8336<NestedConfig8336>;

interface HeavyProps8336 {
  config: DeepPartial8336<NestedConfig8336>;
  path?: ConfigPaths8336;
}

const HeavyComponent8336 = memo(function HeavyComponent8336({ config }: HeavyProps8336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8336.displayName = 'HeavyComponent8336';
export default HeavyComponent8336;
