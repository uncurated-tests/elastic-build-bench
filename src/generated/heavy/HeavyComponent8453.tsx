'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8453<T> = T extends (infer U)[]
  ? DeepReadonlyArray8453<U>
  : T extends object
  ? DeepReadonlyObject8453<T>
  : T;

interface DeepReadonlyArray8453<T> extends ReadonlyArray<DeepReadonly8453<T>> {}

type DeepReadonlyObject8453<T> = {
  readonly [P in keyof T]: DeepReadonly8453<T[P]>;
};

type UnionToIntersection8453<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8453<T> = UnionToIntersection8453<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8453<T extends unknown[], V> = [...T, V];

type TuplifyUnion8453<T, L = LastOf8453<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8453<TuplifyUnion8453<Exclude<T, L>>, L>;

type DeepPartial8453<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8453<T[P]> }
  : T;

type Paths8453<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8453<K, Paths8453<T[K], Prev8453[D]>> : never }[keyof T]
  : never;

type Prev8453 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8453<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8453 {
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

type ConfigPaths8453 = Paths8453<NestedConfig8453>;

interface HeavyProps8453 {
  config: DeepPartial8453<NestedConfig8453>;
  path?: ConfigPaths8453;
}

const HeavyComponent8453 = memo(function HeavyComponent8453({ config }: HeavyProps8453) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8453) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8453 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8453: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8453.displayName = 'HeavyComponent8453';
export default HeavyComponent8453;
