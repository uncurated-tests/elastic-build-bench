'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8750<T> = T extends (infer U)[]
  ? DeepReadonlyArray8750<U>
  : T extends object
  ? DeepReadonlyObject8750<T>
  : T;

interface DeepReadonlyArray8750<T> extends ReadonlyArray<DeepReadonly8750<T>> {}

type DeepReadonlyObject8750<T> = {
  readonly [P in keyof T]: DeepReadonly8750<T[P]>;
};

type UnionToIntersection8750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8750<T> = UnionToIntersection8750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8750<T extends unknown[], V> = [...T, V];

type TuplifyUnion8750<T, L = LastOf8750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8750<TuplifyUnion8750<Exclude<T, L>>, L>;

type DeepPartial8750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8750<T[P]> }
  : T;

type Paths8750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8750<K, Paths8750<T[K], Prev8750[D]>> : never }[keyof T]
  : never;

type Prev8750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8750 {
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

type ConfigPaths8750 = Paths8750<NestedConfig8750>;

interface HeavyProps8750 {
  config: DeepPartial8750<NestedConfig8750>;
  path?: ConfigPaths8750;
}

const HeavyComponent8750 = memo(function HeavyComponent8750({ config }: HeavyProps8750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8750.displayName = 'HeavyComponent8750';
export default HeavyComponent8750;
