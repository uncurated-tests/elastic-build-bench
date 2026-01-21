'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8038<T> = T extends (infer U)[]
  ? DeepReadonlyArray8038<U>
  : T extends object
  ? DeepReadonlyObject8038<T>
  : T;

interface DeepReadonlyArray8038<T> extends ReadonlyArray<DeepReadonly8038<T>> {}

type DeepReadonlyObject8038<T> = {
  readonly [P in keyof T]: DeepReadonly8038<T[P]>;
};

type UnionToIntersection8038<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8038<T> = UnionToIntersection8038<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8038<T extends unknown[], V> = [...T, V];

type TuplifyUnion8038<T, L = LastOf8038<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8038<TuplifyUnion8038<Exclude<T, L>>, L>;

type DeepPartial8038<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8038<T[P]> }
  : T;

type Paths8038<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8038<K, Paths8038<T[K], Prev8038[D]>> : never }[keyof T]
  : never;

type Prev8038 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8038<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8038 {
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

type ConfigPaths8038 = Paths8038<NestedConfig8038>;

interface HeavyProps8038 {
  config: DeepPartial8038<NestedConfig8038>;
  path?: ConfigPaths8038;
}

const HeavyComponent8038 = memo(function HeavyComponent8038({ config }: HeavyProps8038) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8038) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8038 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8038: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8038.displayName = 'HeavyComponent8038';
export default HeavyComponent8038;
