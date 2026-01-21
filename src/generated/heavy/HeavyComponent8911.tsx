'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8911<T> = T extends (infer U)[]
  ? DeepReadonlyArray8911<U>
  : T extends object
  ? DeepReadonlyObject8911<T>
  : T;

interface DeepReadonlyArray8911<T> extends ReadonlyArray<DeepReadonly8911<T>> {}

type DeepReadonlyObject8911<T> = {
  readonly [P in keyof T]: DeepReadonly8911<T[P]>;
};

type UnionToIntersection8911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8911<T> = UnionToIntersection8911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8911<T extends unknown[], V> = [...T, V];

type TuplifyUnion8911<T, L = LastOf8911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8911<TuplifyUnion8911<Exclude<T, L>>, L>;

type DeepPartial8911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8911<T[P]> }
  : T;

type Paths8911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8911<K, Paths8911<T[K], Prev8911[D]>> : never }[keyof T]
  : never;

type Prev8911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8911 {
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

type ConfigPaths8911 = Paths8911<NestedConfig8911>;

interface HeavyProps8911 {
  config: DeepPartial8911<NestedConfig8911>;
  path?: ConfigPaths8911;
}

const HeavyComponent8911 = memo(function HeavyComponent8911({ config }: HeavyProps8911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8911.displayName = 'HeavyComponent8911';
export default HeavyComponent8911;
