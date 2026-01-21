'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8086<T> = T extends (infer U)[]
  ? DeepReadonlyArray8086<U>
  : T extends object
  ? DeepReadonlyObject8086<T>
  : T;

interface DeepReadonlyArray8086<T> extends ReadonlyArray<DeepReadonly8086<T>> {}

type DeepReadonlyObject8086<T> = {
  readonly [P in keyof T]: DeepReadonly8086<T[P]>;
};

type UnionToIntersection8086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8086<T> = UnionToIntersection8086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8086<T extends unknown[], V> = [...T, V];

type TuplifyUnion8086<T, L = LastOf8086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8086<TuplifyUnion8086<Exclude<T, L>>, L>;

type DeepPartial8086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8086<T[P]> }
  : T;

type Paths8086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8086<K, Paths8086<T[K], Prev8086[D]>> : never }[keyof T]
  : never;

type Prev8086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8086 {
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

type ConfigPaths8086 = Paths8086<NestedConfig8086>;

interface HeavyProps8086 {
  config: DeepPartial8086<NestedConfig8086>;
  path?: ConfigPaths8086;
}

const HeavyComponent8086 = memo(function HeavyComponent8086({ config }: HeavyProps8086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8086.displayName = 'HeavyComponent8086';
export default HeavyComponent8086;
