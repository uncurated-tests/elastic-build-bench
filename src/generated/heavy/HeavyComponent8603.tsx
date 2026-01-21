'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8603<T> = T extends (infer U)[]
  ? DeepReadonlyArray8603<U>
  : T extends object
  ? DeepReadonlyObject8603<T>
  : T;

interface DeepReadonlyArray8603<T> extends ReadonlyArray<DeepReadonly8603<T>> {}

type DeepReadonlyObject8603<T> = {
  readonly [P in keyof T]: DeepReadonly8603<T[P]>;
};

type UnionToIntersection8603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8603<T> = UnionToIntersection8603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8603<T extends unknown[], V> = [...T, V];

type TuplifyUnion8603<T, L = LastOf8603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8603<TuplifyUnion8603<Exclude<T, L>>, L>;

type DeepPartial8603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8603<T[P]> }
  : T;

type Paths8603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8603<K, Paths8603<T[K], Prev8603[D]>> : never }[keyof T]
  : never;

type Prev8603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8603 {
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

type ConfigPaths8603 = Paths8603<NestedConfig8603>;

interface HeavyProps8603 {
  config: DeepPartial8603<NestedConfig8603>;
  path?: ConfigPaths8603;
}

const HeavyComponent8603 = memo(function HeavyComponent8603({ config }: HeavyProps8603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8603.displayName = 'HeavyComponent8603';
export default HeavyComponent8603;
