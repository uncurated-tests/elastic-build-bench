'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8753<T> = T extends (infer U)[]
  ? DeepReadonlyArray8753<U>
  : T extends object
  ? DeepReadonlyObject8753<T>
  : T;

interface DeepReadonlyArray8753<T> extends ReadonlyArray<DeepReadonly8753<T>> {}

type DeepReadonlyObject8753<T> = {
  readonly [P in keyof T]: DeepReadonly8753<T[P]>;
};

type UnionToIntersection8753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8753<T> = UnionToIntersection8753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8753<T extends unknown[], V> = [...T, V];

type TuplifyUnion8753<T, L = LastOf8753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8753<TuplifyUnion8753<Exclude<T, L>>, L>;

type DeepPartial8753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8753<T[P]> }
  : T;

type Paths8753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8753<K, Paths8753<T[K], Prev8753[D]>> : never }[keyof T]
  : never;

type Prev8753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8753 {
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

type ConfigPaths8753 = Paths8753<NestedConfig8753>;

interface HeavyProps8753 {
  config: DeepPartial8753<NestedConfig8753>;
  path?: ConfigPaths8753;
}

const HeavyComponent8753 = memo(function HeavyComponent8753({ config }: HeavyProps8753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8753.displayName = 'HeavyComponent8753';
export default HeavyComponent8753;
