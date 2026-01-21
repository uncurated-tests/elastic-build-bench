'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8940<T> = T extends (infer U)[]
  ? DeepReadonlyArray8940<U>
  : T extends object
  ? DeepReadonlyObject8940<T>
  : T;

interface DeepReadonlyArray8940<T> extends ReadonlyArray<DeepReadonly8940<T>> {}

type DeepReadonlyObject8940<T> = {
  readonly [P in keyof T]: DeepReadonly8940<T[P]>;
};

type UnionToIntersection8940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8940<T> = UnionToIntersection8940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8940<T extends unknown[], V> = [...T, V];

type TuplifyUnion8940<T, L = LastOf8940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8940<TuplifyUnion8940<Exclude<T, L>>, L>;

type DeepPartial8940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8940<T[P]> }
  : T;

type Paths8940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8940<K, Paths8940<T[K], Prev8940[D]>> : never }[keyof T]
  : never;

type Prev8940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8940 {
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

type ConfigPaths8940 = Paths8940<NestedConfig8940>;

interface HeavyProps8940 {
  config: DeepPartial8940<NestedConfig8940>;
  path?: ConfigPaths8940;
}

const HeavyComponent8940 = memo(function HeavyComponent8940({ config }: HeavyProps8940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8940.displayName = 'HeavyComponent8940';
export default HeavyComponent8940;
