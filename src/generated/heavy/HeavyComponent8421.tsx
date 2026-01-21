'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8421<T> = T extends (infer U)[]
  ? DeepReadonlyArray8421<U>
  : T extends object
  ? DeepReadonlyObject8421<T>
  : T;

interface DeepReadonlyArray8421<T> extends ReadonlyArray<DeepReadonly8421<T>> {}

type DeepReadonlyObject8421<T> = {
  readonly [P in keyof T]: DeepReadonly8421<T[P]>;
};

type UnionToIntersection8421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8421<T> = UnionToIntersection8421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8421<T extends unknown[], V> = [...T, V];

type TuplifyUnion8421<T, L = LastOf8421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8421<TuplifyUnion8421<Exclude<T, L>>, L>;

type DeepPartial8421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8421<T[P]> }
  : T;

type Paths8421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8421<K, Paths8421<T[K], Prev8421[D]>> : never }[keyof T]
  : never;

type Prev8421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8421 {
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

type ConfigPaths8421 = Paths8421<NestedConfig8421>;

interface HeavyProps8421 {
  config: DeepPartial8421<NestedConfig8421>;
  path?: ConfigPaths8421;
}

const HeavyComponent8421 = memo(function HeavyComponent8421({ config }: HeavyProps8421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8421.displayName = 'HeavyComponent8421';
export default HeavyComponent8421;
