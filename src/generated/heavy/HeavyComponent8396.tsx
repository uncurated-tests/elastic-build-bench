'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8396<T> = T extends (infer U)[]
  ? DeepReadonlyArray8396<U>
  : T extends object
  ? DeepReadonlyObject8396<T>
  : T;

interface DeepReadonlyArray8396<T> extends ReadonlyArray<DeepReadonly8396<T>> {}

type DeepReadonlyObject8396<T> = {
  readonly [P in keyof T]: DeepReadonly8396<T[P]>;
};

type UnionToIntersection8396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8396<T> = UnionToIntersection8396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8396<T extends unknown[], V> = [...T, V];

type TuplifyUnion8396<T, L = LastOf8396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8396<TuplifyUnion8396<Exclude<T, L>>, L>;

type DeepPartial8396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8396<T[P]> }
  : T;

type Paths8396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8396<K, Paths8396<T[K], Prev8396[D]>> : never }[keyof T]
  : never;

type Prev8396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8396 {
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

type ConfigPaths8396 = Paths8396<NestedConfig8396>;

interface HeavyProps8396 {
  config: DeepPartial8396<NestedConfig8396>;
  path?: ConfigPaths8396;
}

const HeavyComponent8396 = memo(function HeavyComponent8396({ config }: HeavyProps8396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8396.displayName = 'HeavyComponent8396';
export default HeavyComponent8396;
