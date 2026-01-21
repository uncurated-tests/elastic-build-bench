'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8022<T> = T extends (infer U)[]
  ? DeepReadonlyArray8022<U>
  : T extends object
  ? DeepReadonlyObject8022<T>
  : T;

interface DeepReadonlyArray8022<T> extends ReadonlyArray<DeepReadonly8022<T>> {}

type DeepReadonlyObject8022<T> = {
  readonly [P in keyof T]: DeepReadonly8022<T[P]>;
};

type UnionToIntersection8022<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8022<T> = UnionToIntersection8022<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8022<T extends unknown[], V> = [...T, V];

type TuplifyUnion8022<T, L = LastOf8022<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8022<TuplifyUnion8022<Exclude<T, L>>, L>;

type DeepPartial8022<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8022<T[P]> }
  : T;

type Paths8022<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8022<K, Paths8022<T[K], Prev8022[D]>> : never }[keyof T]
  : never;

type Prev8022 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8022<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8022 {
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

type ConfigPaths8022 = Paths8022<NestedConfig8022>;

interface HeavyProps8022 {
  config: DeepPartial8022<NestedConfig8022>;
  path?: ConfigPaths8022;
}

const HeavyComponent8022 = memo(function HeavyComponent8022({ config }: HeavyProps8022) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8022) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8022 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8022: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8022.displayName = 'HeavyComponent8022';
export default HeavyComponent8022;
