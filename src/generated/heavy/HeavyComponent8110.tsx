'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8110<T> = T extends (infer U)[]
  ? DeepReadonlyArray8110<U>
  : T extends object
  ? DeepReadonlyObject8110<T>
  : T;

interface DeepReadonlyArray8110<T> extends ReadonlyArray<DeepReadonly8110<T>> {}

type DeepReadonlyObject8110<T> = {
  readonly [P in keyof T]: DeepReadonly8110<T[P]>;
};

type UnionToIntersection8110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8110<T> = UnionToIntersection8110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8110<T extends unknown[], V> = [...T, V];

type TuplifyUnion8110<T, L = LastOf8110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8110<TuplifyUnion8110<Exclude<T, L>>, L>;

type DeepPartial8110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8110<T[P]> }
  : T;

type Paths8110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8110<K, Paths8110<T[K], Prev8110[D]>> : never }[keyof T]
  : never;

type Prev8110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8110 {
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

type ConfigPaths8110 = Paths8110<NestedConfig8110>;

interface HeavyProps8110 {
  config: DeepPartial8110<NestedConfig8110>;
  path?: ConfigPaths8110;
}

const HeavyComponent8110 = memo(function HeavyComponent8110({ config }: HeavyProps8110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8110.displayName = 'HeavyComponent8110';
export default HeavyComponent8110;
