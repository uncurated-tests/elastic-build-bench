'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8425<T> = T extends (infer U)[]
  ? DeepReadonlyArray8425<U>
  : T extends object
  ? DeepReadonlyObject8425<T>
  : T;

interface DeepReadonlyArray8425<T> extends ReadonlyArray<DeepReadonly8425<T>> {}

type DeepReadonlyObject8425<T> = {
  readonly [P in keyof T]: DeepReadonly8425<T[P]>;
};

type UnionToIntersection8425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8425<T> = UnionToIntersection8425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8425<T extends unknown[], V> = [...T, V];

type TuplifyUnion8425<T, L = LastOf8425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8425<TuplifyUnion8425<Exclude<T, L>>, L>;

type DeepPartial8425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8425<T[P]> }
  : T;

type Paths8425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8425<K, Paths8425<T[K], Prev8425[D]>> : never }[keyof T]
  : never;

type Prev8425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8425 {
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

type ConfigPaths8425 = Paths8425<NestedConfig8425>;

interface HeavyProps8425 {
  config: DeepPartial8425<NestedConfig8425>;
  path?: ConfigPaths8425;
}

const HeavyComponent8425 = memo(function HeavyComponent8425({ config }: HeavyProps8425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8425.displayName = 'HeavyComponent8425';
export default HeavyComponent8425;
