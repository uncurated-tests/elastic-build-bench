'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8826<T> = T extends (infer U)[]
  ? DeepReadonlyArray8826<U>
  : T extends object
  ? DeepReadonlyObject8826<T>
  : T;

interface DeepReadonlyArray8826<T> extends ReadonlyArray<DeepReadonly8826<T>> {}

type DeepReadonlyObject8826<T> = {
  readonly [P in keyof T]: DeepReadonly8826<T[P]>;
};

type UnionToIntersection8826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8826<T> = UnionToIntersection8826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8826<T extends unknown[], V> = [...T, V];

type TuplifyUnion8826<T, L = LastOf8826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8826<TuplifyUnion8826<Exclude<T, L>>, L>;

type DeepPartial8826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8826<T[P]> }
  : T;

type Paths8826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8826<K, Paths8826<T[K], Prev8826[D]>> : never }[keyof T]
  : never;

type Prev8826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8826 {
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

type ConfigPaths8826 = Paths8826<NestedConfig8826>;

interface HeavyProps8826 {
  config: DeepPartial8826<NestedConfig8826>;
  path?: ConfigPaths8826;
}

const HeavyComponent8826 = memo(function HeavyComponent8826({ config }: HeavyProps8826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8826.displayName = 'HeavyComponent8826';
export default HeavyComponent8826;
