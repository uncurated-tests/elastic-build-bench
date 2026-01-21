'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8356<T> = T extends (infer U)[]
  ? DeepReadonlyArray8356<U>
  : T extends object
  ? DeepReadonlyObject8356<T>
  : T;

interface DeepReadonlyArray8356<T> extends ReadonlyArray<DeepReadonly8356<T>> {}

type DeepReadonlyObject8356<T> = {
  readonly [P in keyof T]: DeepReadonly8356<T[P]>;
};

type UnionToIntersection8356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8356<T> = UnionToIntersection8356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8356<T extends unknown[], V> = [...T, V];

type TuplifyUnion8356<T, L = LastOf8356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8356<TuplifyUnion8356<Exclude<T, L>>, L>;

type DeepPartial8356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8356<T[P]> }
  : T;

type Paths8356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8356<K, Paths8356<T[K], Prev8356[D]>> : never }[keyof T]
  : never;

type Prev8356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8356 {
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

type ConfigPaths8356 = Paths8356<NestedConfig8356>;

interface HeavyProps8356 {
  config: DeepPartial8356<NestedConfig8356>;
  path?: ConfigPaths8356;
}

const HeavyComponent8356 = memo(function HeavyComponent8356({ config }: HeavyProps8356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8356.displayName = 'HeavyComponent8356';
export default HeavyComponent8356;
