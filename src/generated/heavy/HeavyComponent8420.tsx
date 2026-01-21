'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8420<T> = T extends (infer U)[]
  ? DeepReadonlyArray8420<U>
  : T extends object
  ? DeepReadonlyObject8420<T>
  : T;

interface DeepReadonlyArray8420<T> extends ReadonlyArray<DeepReadonly8420<T>> {}

type DeepReadonlyObject8420<T> = {
  readonly [P in keyof T]: DeepReadonly8420<T[P]>;
};

type UnionToIntersection8420<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8420<T> = UnionToIntersection8420<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8420<T extends unknown[], V> = [...T, V];

type TuplifyUnion8420<T, L = LastOf8420<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8420<TuplifyUnion8420<Exclude<T, L>>, L>;

type DeepPartial8420<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8420<T[P]> }
  : T;

type Paths8420<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8420<K, Paths8420<T[K], Prev8420[D]>> : never }[keyof T]
  : never;

type Prev8420 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8420<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8420 {
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

type ConfigPaths8420 = Paths8420<NestedConfig8420>;

interface HeavyProps8420 {
  config: DeepPartial8420<NestedConfig8420>;
  path?: ConfigPaths8420;
}

const HeavyComponent8420 = memo(function HeavyComponent8420({ config }: HeavyProps8420) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8420) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8420 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8420: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8420.displayName = 'HeavyComponent8420';
export default HeavyComponent8420;
