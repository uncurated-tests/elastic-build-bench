'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8465<T> = T extends (infer U)[]
  ? DeepReadonlyArray8465<U>
  : T extends object
  ? DeepReadonlyObject8465<T>
  : T;

interface DeepReadonlyArray8465<T> extends ReadonlyArray<DeepReadonly8465<T>> {}

type DeepReadonlyObject8465<T> = {
  readonly [P in keyof T]: DeepReadonly8465<T[P]>;
};

type UnionToIntersection8465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8465<T> = UnionToIntersection8465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8465<T extends unknown[], V> = [...T, V];

type TuplifyUnion8465<T, L = LastOf8465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8465<TuplifyUnion8465<Exclude<T, L>>, L>;

type DeepPartial8465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8465<T[P]> }
  : T;

type Paths8465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8465<K, Paths8465<T[K], Prev8465[D]>> : never }[keyof T]
  : never;

type Prev8465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8465 {
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

type ConfigPaths8465 = Paths8465<NestedConfig8465>;

interface HeavyProps8465 {
  config: DeepPartial8465<NestedConfig8465>;
  path?: ConfigPaths8465;
}

const HeavyComponent8465 = memo(function HeavyComponent8465({ config }: HeavyProps8465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8465.displayName = 'HeavyComponent8465';
export default HeavyComponent8465;
