'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8225<T> = T extends (infer U)[]
  ? DeepReadonlyArray8225<U>
  : T extends object
  ? DeepReadonlyObject8225<T>
  : T;

interface DeepReadonlyArray8225<T> extends ReadonlyArray<DeepReadonly8225<T>> {}

type DeepReadonlyObject8225<T> = {
  readonly [P in keyof T]: DeepReadonly8225<T[P]>;
};

type UnionToIntersection8225<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8225<T> = UnionToIntersection8225<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8225<T extends unknown[], V> = [...T, V];

type TuplifyUnion8225<T, L = LastOf8225<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8225<TuplifyUnion8225<Exclude<T, L>>, L>;

type DeepPartial8225<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8225<T[P]> }
  : T;

type Paths8225<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8225<K, Paths8225<T[K], Prev8225[D]>> : never }[keyof T]
  : never;

type Prev8225 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8225<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8225 {
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

type ConfigPaths8225 = Paths8225<NestedConfig8225>;

interface HeavyProps8225 {
  config: DeepPartial8225<NestedConfig8225>;
  path?: ConfigPaths8225;
}

const HeavyComponent8225 = memo(function HeavyComponent8225({ config }: HeavyProps8225) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8225) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8225 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8225: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8225.displayName = 'HeavyComponent8225';
export default HeavyComponent8225;
