'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8714<T> = T extends (infer U)[]
  ? DeepReadonlyArray8714<U>
  : T extends object
  ? DeepReadonlyObject8714<T>
  : T;

interface DeepReadonlyArray8714<T> extends ReadonlyArray<DeepReadonly8714<T>> {}

type DeepReadonlyObject8714<T> = {
  readonly [P in keyof T]: DeepReadonly8714<T[P]>;
};

type UnionToIntersection8714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8714<T> = UnionToIntersection8714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8714<T extends unknown[], V> = [...T, V];

type TuplifyUnion8714<T, L = LastOf8714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8714<TuplifyUnion8714<Exclude<T, L>>, L>;

type DeepPartial8714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8714<T[P]> }
  : T;

type Paths8714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8714<K, Paths8714<T[K], Prev8714[D]>> : never }[keyof T]
  : never;

type Prev8714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8714 {
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

type ConfigPaths8714 = Paths8714<NestedConfig8714>;

interface HeavyProps8714 {
  config: DeepPartial8714<NestedConfig8714>;
  path?: ConfigPaths8714;
}

const HeavyComponent8714 = memo(function HeavyComponent8714({ config }: HeavyProps8714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8714.displayName = 'HeavyComponent8714';
export default HeavyComponent8714;
