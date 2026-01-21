'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8113<T> = T extends (infer U)[]
  ? DeepReadonlyArray8113<U>
  : T extends object
  ? DeepReadonlyObject8113<T>
  : T;

interface DeepReadonlyArray8113<T> extends ReadonlyArray<DeepReadonly8113<T>> {}

type DeepReadonlyObject8113<T> = {
  readonly [P in keyof T]: DeepReadonly8113<T[P]>;
};

type UnionToIntersection8113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8113<T> = UnionToIntersection8113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8113<T extends unknown[], V> = [...T, V];

type TuplifyUnion8113<T, L = LastOf8113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8113<TuplifyUnion8113<Exclude<T, L>>, L>;

type DeepPartial8113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8113<T[P]> }
  : T;

type Paths8113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8113<K, Paths8113<T[K], Prev8113[D]>> : never }[keyof T]
  : never;

type Prev8113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8113 {
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

type ConfigPaths8113 = Paths8113<NestedConfig8113>;

interface HeavyProps8113 {
  config: DeepPartial8113<NestedConfig8113>;
  path?: ConfigPaths8113;
}

const HeavyComponent8113 = memo(function HeavyComponent8113({ config }: HeavyProps8113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8113.displayName = 'HeavyComponent8113';
export default HeavyComponent8113;
