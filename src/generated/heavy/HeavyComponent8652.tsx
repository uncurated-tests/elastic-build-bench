'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8652<T> = T extends (infer U)[]
  ? DeepReadonlyArray8652<U>
  : T extends object
  ? DeepReadonlyObject8652<T>
  : T;

interface DeepReadonlyArray8652<T> extends ReadonlyArray<DeepReadonly8652<T>> {}

type DeepReadonlyObject8652<T> = {
  readonly [P in keyof T]: DeepReadonly8652<T[P]>;
};

type UnionToIntersection8652<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8652<T> = UnionToIntersection8652<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8652<T extends unknown[], V> = [...T, V];

type TuplifyUnion8652<T, L = LastOf8652<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8652<TuplifyUnion8652<Exclude<T, L>>, L>;

type DeepPartial8652<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8652<T[P]> }
  : T;

type Paths8652<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8652<K, Paths8652<T[K], Prev8652[D]>> : never }[keyof T]
  : never;

type Prev8652 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8652<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8652 {
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

type ConfigPaths8652 = Paths8652<NestedConfig8652>;

interface HeavyProps8652 {
  config: DeepPartial8652<NestedConfig8652>;
  path?: ConfigPaths8652;
}

const HeavyComponent8652 = memo(function HeavyComponent8652({ config }: HeavyProps8652) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8652) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8652 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8652: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8652.displayName = 'HeavyComponent8652';
export default HeavyComponent8652;
