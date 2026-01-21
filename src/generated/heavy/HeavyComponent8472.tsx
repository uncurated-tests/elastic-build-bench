'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8472<T> = T extends (infer U)[]
  ? DeepReadonlyArray8472<U>
  : T extends object
  ? DeepReadonlyObject8472<T>
  : T;

interface DeepReadonlyArray8472<T> extends ReadonlyArray<DeepReadonly8472<T>> {}

type DeepReadonlyObject8472<T> = {
  readonly [P in keyof T]: DeepReadonly8472<T[P]>;
};

type UnionToIntersection8472<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8472<T> = UnionToIntersection8472<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8472<T extends unknown[], V> = [...T, V];

type TuplifyUnion8472<T, L = LastOf8472<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8472<TuplifyUnion8472<Exclude<T, L>>, L>;

type DeepPartial8472<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8472<T[P]> }
  : T;

type Paths8472<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8472<K, Paths8472<T[K], Prev8472[D]>> : never }[keyof T]
  : never;

type Prev8472 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8472<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8472 {
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

type ConfigPaths8472 = Paths8472<NestedConfig8472>;

interface HeavyProps8472 {
  config: DeepPartial8472<NestedConfig8472>;
  path?: ConfigPaths8472;
}

const HeavyComponent8472 = memo(function HeavyComponent8472({ config }: HeavyProps8472) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8472) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8472 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8472: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8472.displayName = 'HeavyComponent8472';
export default HeavyComponent8472;
