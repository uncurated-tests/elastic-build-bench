'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8118<T> = T extends (infer U)[]
  ? DeepReadonlyArray8118<U>
  : T extends object
  ? DeepReadonlyObject8118<T>
  : T;

interface DeepReadonlyArray8118<T> extends ReadonlyArray<DeepReadonly8118<T>> {}

type DeepReadonlyObject8118<T> = {
  readonly [P in keyof T]: DeepReadonly8118<T[P]>;
};

type UnionToIntersection8118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8118<T> = UnionToIntersection8118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8118<T extends unknown[], V> = [...T, V];

type TuplifyUnion8118<T, L = LastOf8118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8118<TuplifyUnion8118<Exclude<T, L>>, L>;

type DeepPartial8118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8118<T[P]> }
  : T;

type Paths8118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8118<K, Paths8118<T[K], Prev8118[D]>> : never }[keyof T]
  : never;

type Prev8118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8118 {
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

type ConfigPaths8118 = Paths8118<NestedConfig8118>;

interface HeavyProps8118 {
  config: DeepPartial8118<NestedConfig8118>;
  path?: ConfigPaths8118;
}

const HeavyComponent8118 = memo(function HeavyComponent8118({ config }: HeavyProps8118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8118.displayName = 'HeavyComponent8118';
export default HeavyComponent8118;
