'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8378<T> = T extends (infer U)[]
  ? DeepReadonlyArray8378<U>
  : T extends object
  ? DeepReadonlyObject8378<T>
  : T;

interface DeepReadonlyArray8378<T> extends ReadonlyArray<DeepReadonly8378<T>> {}

type DeepReadonlyObject8378<T> = {
  readonly [P in keyof T]: DeepReadonly8378<T[P]>;
};

type UnionToIntersection8378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8378<T> = UnionToIntersection8378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8378<T extends unknown[], V> = [...T, V];

type TuplifyUnion8378<T, L = LastOf8378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8378<TuplifyUnion8378<Exclude<T, L>>, L>;

type DeepPartial8378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8378<T[P]> }
  : T;

type Paths8378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8378<K, Paths8378<T[K], Prev8378[D]>> : never }[keyof T]
  : never;

type Prev8378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8378 {
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

type ConfigPaths8378 = Paths8378<NestedConfig8378>;

interface HeavyProps8378 {
  config: DeepPartial8378<NestedConfig8378>;
  path?: ConfigPaths8378;
}

const HeavyComponent8378 = memo(function HeavyComponent8378({ config }: HeavyProps8378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8378.displayName = 'HeavyComponent8378';
export default HeavyComponent8378;
