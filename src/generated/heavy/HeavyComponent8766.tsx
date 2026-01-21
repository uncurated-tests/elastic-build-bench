'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8766<T> = T extends (infer U)[]
  ? DeepReadonlyArray8766<U>
  : T extends object
  ? DeepReadonlyObject8766<T>
  : T;

interface DeepReadonlyArray8766<T> extends ReadonlyArray<DeepReadonly8766<T>> {}

type DeepReadonlyObject8766<T> = {
  readonly [P in keyof T]: DeepReadonly8766<T[P]>;
};

type UnionToIntersection8766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8766<T> = UnionToIntersection8766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8766<T extends unknown[], V> = [...T, V];

type TuplifyUnion8766<T, L = LastOf8766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8766<TuplifyUnion8766<Exclude<T, L>>, L>;

type DeepPartial8766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8766<T[P]> }
  : T;

type Paths8766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8766<K, Paths8766<T[K], Prev8766[D]>> : never }[keyof T]
  : never;

type Prev8766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8766 {
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

type ConfigPaths8766 = Paths8766<NestedConfig8766>;

interface HeavyProps8766 {
  config: DeepPartial8766<NestedConfig8766>;
  path?: ConfigPaths8766;
}

const HeavyComponent8766 = memo(function HeavyComponent8766({ config }: HeavyProps8766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8766.displayName = 'HeavyComponent8766';
export default HeavyComponent8766;
