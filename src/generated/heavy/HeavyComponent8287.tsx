'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8287<T> = T extends (infer U)[]
  ? DeepReadonlyArray8287<U>
  : T extends object
  ? DeepReadonlyObject8287<T>
  : T;

interface DeepReadonlyArray8287<T> extends ReadonlyArray<DeepReadonly8287<T>> {}

type DeepReadonlyObject8287<T> = {
  readonly [P in keyof T]: DeepReadonly8287<T[P]>;
};

type UnionToIntersection8287<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8287<T> = UnionToIntersection8287<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8287<T extends unknown[], V> = [...T, V];

type TuplifyUnion8287<T, L = LastOf8287<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8287<TuplifyUnion8287<Exclude<T, L>>, L>;

type DeepPartial8287<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8287<T[P]> }
  : T;

type Paths8287<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8287<K, Paths8287<T[K], Prev8287[D]>> : never }[keyof T]
  : never;

type Prev8287 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8287<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8287 {
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

type ConfigPaths8287 = Paths8287<NestedConfig8287>;

interface HeavyProps8287 {
  config: DeepPartial8287<NestedConfig8287>;
  path?: ConfigPaths8287;
}

const HeavyComponent8287 = memo(function HeavyComponent8287({ config }: HeavyProps8287) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8287) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8287 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8287: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8287.displayName = 'HeavyComponent8287';
export default HeavyComponent8287;
