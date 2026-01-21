'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8333<T> = T extends (infer U)[]
  ? DeepReadonlyArray8333<U>
  : T extends object
  ? DeepReadonlyObject8333<T>
  : T;

interface DeepReadonlyArray8333<T> extends ReadonlyArray<DeepReadonly8333<T>> {}

type DeepReadonlyObject8333<T> = {
  readonly [P in keyof T]: DeepReadonly8333<T[P]>;
};

type UnionToIntersection8333<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8333<T> = UnionToIntersection8333<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8333<T extends unknown[], V> = [...T, V];

type TuplifyUnion8333<T, L = LastOf8333<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8333<TuplifyUnion8333<Exclude<T, L>>, L>;

type DeepPartial8333<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8333<T[P]> }
  : T;

type Paths8333<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8333<K, Paths8333<T[K], Prev8333[D]>> : never }[keyof T]
  : never;

type Prev8333 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8333<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8333 {
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

type ConfigPaths8333 = Paths8333<NestedConfig8333>;

interface HeavyProps8333 {
  config: DeepPartial8333<NestedConfig8333>;
  path?: ConfigPaths8333;
}

const HeavyComponent8333 = memo(function HeavyComponent8333({ config }: HeavyProps8333) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8333) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8333 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8333: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8333.displayName = 'HeavyComponent8333';
export default HeavyComponent8333;
