'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8761<T> = T extends (infer U)[]
  ? DeepReadonlyArray8761<U>
  : T extends object
  ? DeepReadonlyObject8761<T>
  : T;

interface DeepReadonlyArray8761<T> extends ReadonlyArray<DeepReadonly8761<T>> {}

type DeepReadonlyObject8761<T> = {
  readonly [P in keyof T]: DeepReadonly8761<T[P]>;
};

type UnionToIntersection8761<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8761<T> = UnionToIntersection8761<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8761<T extends unknown[], V> = [...T, V];

type TuplifyUnion8761<T, L = LastOf8761<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8761<TuplifyUnion8761<Exclude<T, L>>, L>;

type DeepPartial8761<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8761<T[P]> }
  : T;

type Paths8761<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8761<K, Paths8761<T[K], Prev8761[D]>> : never }[keyof T]
  : never;

type Prev8761 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8761<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8761 {
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

type ConfigPaths8761 = Paths8761<NestedConfig8761>;

interface HeavyProps8761 {
  config: DeepPartial8761<NestedConfig8761>;
  path?: ConfigPaths8761;
}

const HeavyComponent8761 = memo(function HeavyComponent8761({ config }: HeavyProps8761) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8761) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8761 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8761: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8761.displayName = 'HeavyComponent8761';
export default HeavyComponent8761;
