'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8858<T> = T extends (infer U)[]
  ? DeepReadonlyArray8858<U>
  : T extends object
  ? DeepReadonlyObject8858<T>
  : T;

interface DeepReadonlyArray8858<T> extends ReadonlyArray<DeepReadonly8858<T>> {}

type DeepReadonlyObject8858<T> = {
  readonly [P in keyof T]: DeepReadonly8858<T[P]>;
};

type UnionToIntersection8858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8858<T> = UnionToIntersection8858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8858<T extends unknown[], V> = [...T, V];

type TuplifyUnion8858<T, L = LastOf8858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8858<TuplifyUnion8858<Exclude<T, L>>, L>;

type DeepPartial8858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8858<T[P]> }
  : T;

type Paths8858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8858<K, Paths8858<T[K], Prev8858[D]>> : never }[keyof T]
  : never;

type Prev8858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8858 {
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

type ConfigPaths8858 = Paths8858<NestedConfig8858>;

interface HeavyProps8858 {
  config: DeepPartial8858<NestedConfig8858>;
  path?: ConfigPaths8858;
}

const HeavyComponent8858 = memo(function HeavyComponent8858({ config }: HeavyProps8858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8858.displayName = 'HeavyComponent8858';
export default HeavyComponent8858;
