'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8141<T> = T extends (infer U)[]
  ? DeepReadonlyArray8141<U>
  : T extends object
  ? DeepReadonlyObject8141<T>
  : T;

interface DeepReadonlyArray8141<T> extends ReadonlyArray<DeepReadonly8141<T>> {}

type DeepReadonlyObject8141<T> = {
  readonly [P in keyof T]: DeepReadonly8141<T[P]>;
};

type UnionToIntersection8141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8141<T> = UnionToIntersection8141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8141<T extends unknown[], V> = [...T, V];

type TuplifyUnion8141<T, L = LastOf8141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8141<TuplifyUnion8141<Exclude<T, L>>, L>;

type DeepPartial8141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8141<T[P]> }
  : T;

type Paths8141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8141<K, Paths8141<T[K], Prev8141[D]>> : never }[keyof T]
  : never;

type Prev8141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8141 {
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

type ConfigPaths8141 = Paths8141<NestedConfig8141>;

interface HeavyProps8141 {
  config: DeepPartial8141<NestedConfig8141>;
  path?: ConfigPaths8141;
}

const HeavyComponent8141 = memo(function HeavyComponent8141({ config }: HeavyProps8141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8141.displayName = 'HeavyComponent8141';
export default HeavyComponent8141;
